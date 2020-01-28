//
//  MagnetometerSensor.m
//  DoubleConversion
//
//  Created by Yannis Caussade on 28/01/2020.
//

#import "MagnetometerSensor.h"

@implementation MagnetometerSensor
{
    bool hasListeners;
}

-(void)startObserving {
    hasListeners = YES;
}

-(void)stopObserving {
    hasListeners = NO;
}


RCT_EXPORT_MODULE();

static const NSString *MAGNETOMETER_CHANGE_EVENT = @"MagnetometerChanged";

- (id) init {
    self = [super init];
    
    if (self){
        self->motionManager = [[CMMotionManager alloc] init];
        self->motionManager.magnetometerUpdateInterval = 0.1;
        if ([self->motionManager isMagnetometerAvailable])
        {
            [self->motionManager startMagnetometerUpdates];
            [self->motionManager startMagnetometerUpdatesToQueue:[NSOperationQueue mainQueue] withHandler:^(CMMagnetometerData *magnetometerData, NSError *error) {
                dispatch_async(dispatch_get_main_queue(), ^{
                    [self magnetometerChanged:magnetometerData];
                });
            }];
        }
    }
    return self;
}

RCT_REMAP_METHOD(isSupported,
                 isSupportedResolver:(RCTPromiseResolveBlock)resolve
                 isSupportedRejecter:(RCTPromiseRejectBlock)reject) {
    if ([self->motionManager isMagnetometerAvailable])
        resolve(@YES);
    else
        resolve(@NO);
}

- (void)dealloc
{
    [self->motionManager stopMagnetometerUpdates];
}

- (NSArray<NSString *> *)supportedEvents {
    return @[MAGNETOMETER_CHANGE_EVENT];
}

- (NSDictionary *)constantsToExport
{
    return @{@"MAGNETOMETER_CHANGE_EVENT": MAGNETOMETER_CHANGE_EVENT};
}

+(BOOL)requiresMainQueueSetup
{
    return YES;
}

-(dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

-(void)magnetometerChanged:(CMMagnetometerData*)magnetometerData {
    NSMutableDictionary* payload = [NSMutableDictionary dictionaryWithCapacity:3];
    double x = magnetometerData.magneticField.x;
    double y = magnetometerData.magneticField.y;
    double z = magnetometerData.magneticField.z;
    
    [payload setObject:[NSNumber numberWithFloat:x] forKey:@"x"];
    [payload setObject:[NSNumber numberWithFloat:y] forKey:@"y"];
    [payload setObject:[NSNumber numberWithFloat:z] forKey:@"z"];
    
    if (hasListeners)
        [self sendEventWithName:MAGNETOMETER_CHANGE_EVENT body:payload];
}

@end
