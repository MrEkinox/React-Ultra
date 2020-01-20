//
//  Battery.m
//  ReactUltra
//
//  Created by Yannis Caussade on 19/01/2020.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import "BatterySensor.h"
#import <React/RCTLog.h>

@implementation BatterySensor
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

RCT_REMAP_METHOD(isSupported,
                 isSupportedWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject) {
    Boolean batteryState = [UIDevice currentDevice].isBatteryMonitoringEnabled;
    if (batteryState)
        resolve(@YES);
    else
        resolve(@NO);
}

RCT_REMAP_METHOD(isCharging,isChargingResolver:(RCTPromiseResolveBlock)resolve isChargingRejecter:(RCTPromiseRejectBlock)reject) {
    UIDeviceBatteryState batteryState = [UIDevice currentDevice].batteryState;
    if (batteryState == UIDeviceBatteryStateCharging)
        resolve(@YES);
    else
        resolve(@NO);
}

RCT_REMAP_METHOD(getLevel,
                 getLevelResolver:(RCTPromiseResolveBlock)resolve
                 getLevelRejecter:(RCTPromiseRejectBlock)reject)
{
    float batteryLevel = [UIDevice currentDevice].batteryLevel * 100;
    resolve(@(batteryLevel));
}


static const NSString *BATTERY_CHANGE_EVENT = @"batteryChanged";

- (instancetype)init
{
    if((self = [super init])) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [[UIDevice currentDevice] setBatteryMonitoringEnabled:YES];
        });
        
        [[NSNotificationCenter defaultCenter] addObserver:self
                                                 selector:@selector(batteryLevelChanged:)
                                                     name:UIDeviceBatteryLevelDidChangeNotification
                                                   object:nil];
        [[NSNotificationCenter defaultCenter] addObserver:self
                                                 selector:@selector(batteryLevelChanged:)
                                                     name:UIDeviceBatteryStateDidChangeNotification
                                                   object:nil];
    }
    return self;
}

- (void)dealloc
{
    [[NSNotificationCenter defaultCenter] removeObserver:self];
}

- (NSArray<NSString *> *)supportedEvents {
    return @[BATTERY_CHANGE_EVENT];
}

- (NSDictionary *)constantsToExport
{
    return @{@"BATTERY_CHANGE_EVENT": BATTERY_CHANGE_EVENT};
}

+(BOOL)requiresMainQueueSetup
{
    return YES;
}

-(dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

-(void)batteryLevelChanged:(NSNotification*)notification {
    UIDeviceBatteryState batteryState = [UIDevice currentDevice].batteryState;
    NSMutableDictionary* payload = [NSMutableDictionary dictionaryWithCapacity:2];
    bool isCharging = batteryState == UIDeviceBatteryStateCharging;
    float batteryLevel = [UIDevice currentDevice].batteryLevel;
    
    [payload setObject:[NSNumber numberWithBool:isCharging] forKey:@"charging"];
    [payload setObject:[NSNumber numberWithFloat:batteryLevel] forKey:@"level"];
    
    if (hasListeners)
        [self sendEventWithName:BATTERY_CHANGE_EVENT body:payload];
}

@end
