//
//  Accelerometer.m
//  ReactUltra
//
//  Created by Yannis Caussade on 19/01/2020.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import "AccelerometerSensor.h"

@implementation AccelerometerSensor

RCT_EXPORT_MODULE();

static const NSString *ACCELEROMETER_CHANGE_EVENT = @"AccelerometerChanged";

- (id) init {
    if (self){
        self->motionManager = [[CMMotionManager alloc] init];
        self->motionManager.accelerometerUpdateInterval = 1;
        if ([self->motionManager isAccelerometerAvailable])
        {
            [self->motionManager startAccelerometerUpdates];
            [self->motionManager startAccelerometerUpdatesToQueue:[NSOperationQueue mainQueue] withHandler:^(CMAccelerometerData *accelerometerData, NSError *error) {
                dispatch_async(dispatch_get_main_queue(), ^{
                    @selector(accelerometerChanged:);
                });
            }];
        }
    }
    return self;
}

RCT_REMAP_METHOD(isSupported,
                 isSupportedResolver:(RCTPromiseResolveBlock)resolve
                 isSupportedRejecter:(RCTPromiseRejectBlock)reject) {
    if ([self->motionManager isAccelerometerAvailable])
        resolve(@YES);
    else
        resolve(@NO);
}

- (void)dealloc
{
    [self->motionManager stopAccelerometerUpdates];
}

- (NSArray<NSString *> *)supportedEvents {
    return @[ACCELEROMETER_CHANGE_EVENT];
}

- (NSDictionary *)constantsToExport
{
    return @{@"ACCELEROMETER_CHANGE_EVENT": ACCELEROMETER_CHANGE_EVENT};
}

+(BOOL)requiresMainQueueSetup
{
    return YES;
}

-(dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

-(void)accelerometerChanged:(NSNotification*)notification {
    NSMutableDictionary* payload = [NSMutableDictionary dictionaryWithCapacity:3];
    double x = self->motionManager.accelerometerData.acceleration.x;
    double y = self->motionManager.accelerometerData.acceleration.y;
    double z = self->motionManager.accelerometerData.acceleration.z;
    
    [payload setObject:[NSNumber numberWithBool:x] forKey:@"x"];
    [payload setObject:[NSNumber numberWithFloat:y] forKey:@"y"];
    [payload setObject:[NSNumber numberWithFloat:z] forKey:@"z"];
    
    [self sendEventWithName:ACCELEROMETER_CHANGE_EVENT body:payload];
}

@end
