//
//  ProximitySensor.m
//  DoubleConversion
//
//  Created by Yannis Caussade on 28/01/2020.
//

#import "ProximitySensor.h"

@implementation ProximitySensor

-(void)startObserving {
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(proximityChanged:)
                                                 name:UIDeviceProximityStateDidChangeNotification
                                               object:nil];
}

-(void)stopObserving {
    [[NSNotificationCenter defaultCenter] removeObserver:self];
}

- (instancetype)init
{
    if((self = [super init])) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [[UIDevice currentDevice] setProximityMonitoringEnabled:YES];
        });
    }
    return self;
}

RCT_EXPORT_MODULE();

RCT_REMAP_METHOD(isSupported,
                 isSupportedWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject) {
    Boolean batteryState = [UIDevice currentDevice].isProximityMonitoringEnabled;
    if (batteryState)
        resolve(@YES);
    else
        resolve(@NO);
}

static const NSString *PROXIMITY_CHANGE_EVENT = @"proximityChanged";

- (NSArray<NSString *> *)supportedEvents {
    return @[PROXIMITY_CHANGE_EVENT];
}

- (NSDictionary *)constantsToExport
{
    return @{@"PROXIMITY_CHANGE_EVENT": PROXIMITY_CHANGE_EVENT};
}

+(BOOL)requiresMainQueueSetup
{
    return YES;
}

-(dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

-(void)proximityChanged:(NSNotification*)notification {
    BOOL proximityState = [[UIDevice currentDevice] proximityState];
    NSMutableDictionary* payload = [NSMutableDictionary dictionaryWithCapacity:1];
    
    [payload setObject:[NSNumber numberWithBool:proximityState] forKey:@"isNear"];
    
    [self sendEventWithName:PROXIMITY_CHANGE_EVENT body:payload];
}

@end
