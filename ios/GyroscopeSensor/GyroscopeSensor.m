//
//  Gyroscope.m
//  ReactUltra
//
//  Created by Yannis Caussade on 19/01/2020.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import "GyroscopeSensor.h"

@implementation GyroscopeSensor
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

static const NSString *GYROSCOPE_CHANGE_EVENT = @"GyroscopeChanged";

- (id) init {
    self = [super init];
    
    if (self){
        self->motionManager = [[CMMotionManager alloc] init];
        self->motionManager.gyroUpdateInterval = 0.1;
        if ([self->motionManager isGyroAvailable])
        {
            [self->motionManager startGyroUpdates];
            [self->motionManager startGyroUpdatesToQueue:[NSOperationQueue mainQueue] withHandler:^(CMGyroData *gyroData, NSError *error) {
                dispatch_async(dispatch_get_main_queue(), ^{
                    [self gyroscopeChanged:gyroData]
                });
            }];
        }
    }
    return self;
}

-(void)gyroscopeChanged:(CMGyroData*)gyroData {
    NSMutableDictionary* payload = [NSMutableDictionary dictionaryWithCapacity:3];
    double x = gyroData.rotationRate.x;
    double y = gyroData.rotationRate.y;
    double z = gyroData.rotationRate.z;
    
    [payload setObject:[NSNumber numberWithFloat:x] forKey:@"x"];
    [payload setObject:[NSNumber numberWithFloat:y] forKey:@"y"];
    [payload setObject:[NSNumber numberWithFloat:z] forKey:@"z"];
    
    if (hasListeners)
        [self sendEventWithName:ACCELEROMETER_CHANGE_EVENT body:payload];
}

RCT_REMAP_METHOD(isSupported,
                 isSupportedResolver:(RCTPromiseResolveBlock)resolve
                 isSupportedRejecter:(RCTPromiseRejectBlock)reject) {
    if ([self.motionManager isGyroAvailable])
        resolve(@YES);
    else
        resolve(@NO);
}

- (void)dealloc
{
    [self.motionManager stopGyroUpdates];
}

- (NSArray<NSString *> *)supportedEvents {
    return @[GYROSCOPE_CHANGE_EVENT];
}

- (NSDictionary *)constantsToExport
{
    return @{@"GYROSCOPE_CHANGE_EVENT": GYROSCOPE_CHANGE_EVENT};
}

+(BOOL)requiresMainQueueSetup
{
    return YES;
}

-(dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

@end
