//
//  PedometerSensor.m
//  DoubleConversion
//
//  Created by Yannis Caussade on 30/01/2020.
//

#import "PedometerSensor.h"
#import <React/RCTLog.h>

@implementation PedometerSensor

-(void)startObserving {
    if ([CMPedometer isStepCountingAvailable])
    {
        [self->pedometer startPedometerUpdatesFromDate:[NSDate date] withHandler:^(CMPedometerData *pedometerData, NSError *error) {
            dispatch_async(dispatch_get_main_queue(), ^{
                [self pedometerChanged:pedometerData];
            });
        }];
    }
}

-(void)stopObserving {
    [self->pedometer stopPedometerUpdates];
}


RCT_EXPORT_MODULE();

static const NSString *PEDOMETER_CHANGE_EVENT = @"PedometerChanged";

- (id) init {
    if (self = [super init]){
        self->pedometer = [[CMPedometer alloc] init];
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
    NSMutableDictionary* payload = [NSMutableDictionary dictionaryWithCapacity:7];
    double numberOfSteps = [pedometerData.numberOfSteps doubleValue];
    double averageActivePace = [pedometerData.averageActivePace doubleValue];
    double currentCadence = [pedometerData.currentCadence doubleValue];
    double currentPace = [pedometerData.currentPace doubleValue];
    double distance = [pedometerData.distance doubleValue];
    double floorsAscended = [pedometerData.floorsAscended doubleValue];
    double floorsDescended = [pedometerData.floorsDescended doubleValue];
    
    [payload setObject:[NSNumber numberWithFloat:numberOfSteps] forKey:@"numberOfSteps"];
    [payload setObject:[NSNumber numberWithFloat:averageActivePace] forKey:@"averageActivePace"];
    [payload setObject:[NSNumber numberWithFloat:currentCadence] forKey:@"currentCadence"];
    [payload setObject:[NSNumber numberWithFloat:currentPace] forKey:@"currentPace"];
    [payload setObject:[NSNumber numberWithFloat:distance] forKey:@"distance"];
    [payload setObject:[NSNumber numberWithFloat:floorsAscended] forKey:@"floorsAscended"];
    [payload setObject:[NSNumber numberWithFloat:floorsDescended] forKey:@"floorsDescended"];
    
    [self sendEventWithName:PEDOMETER_CHANGE_EVENT body:payload];
}

@end
