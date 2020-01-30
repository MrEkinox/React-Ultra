//
//  PedometerSensor.m
//  DoubleConversion
//
//  Created by Yannis Caussade on 30/01/2020.
//

#import "PedometerSensor.h"

@implementation PedometerSensor
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

static const NSString *PEDOMETER_CHANGE_EVENT = @"PedometerChanged";

- (id) init {
    self = [super init];
    
    if (self){
        self->pedometer = [[CMPedometer alloc] init];
        if ([CMPedometer isStepCountingAvailable])
        {
            [self->pedometer startPedometerUpdatesFromDate:[NSDate date] withHandler:^(CMPedometerData *pedometerData, NSError *error) {
                dispatch_async(dispatch_get_main_queue(), ^{
                    [self pedometerChanged:pedometerData];
                });
            }];
        }
    }
    return self;
}

RCT_REMAP_METHOD(isSupported,
                 isSupportedResolver:(RCTPromiseResolveBlock)resolve
                 isSupportedRejecter:(RCTPromiseRejectBlock)reject) {
    if ([CMPedometer isStepCountingAvailable])
        resolve(@YES);
    else
        resolve(@NO);
}

- (void)dealloc
{
    [self->pedometer stopPedometerUpdates];
}

- (NSArray<NSString *> *)supportedEvents {
    return @[PEDOMETER_CHANGE_EVENT];
}

- (NSDictionary *)constantsToExport
{
    return @{@"PEDOMETER_CHANGE_EVENT": PEDOMETER_CHANGE_EVENT};
}

+(BOOL)requiresMainQueueSetup
{
    return YES;
}

-(dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

-(void)pedometerChanged:(CMPedometerData*)pedometerData {
    NSNumber *stepsCount = pedometerData.numberOfSteps;
    
    if (hasListeners)
        [self sendEventWithName:PEDOMETER_CHANGE_EVENT body:stepsCount];
}

@end
