//
//  Haptic.m
//  DoubleConversion
//
//  Created by Yannis Caussade on 31/01/2020.
//

#import "Haptic.h"

@implementation Haptic

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

RCT_EXPORT_MODULE();

RCT_REMAP_METHOD(isSupported,
                 isSupportedWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject) {
    if ([[UIDevice currentDevice] systemVersion].floatValue >= 10.0)
        resolve(@YES);
    else
        resolve(@NO);
}

RCT_EXPORT_METHOD(trigger:(NSString *)type)
{
    if ([type isEqual: @"impactLight"]) {
        [self generateImpactFeedback:UIImpactFeedbackStyleLight];
    } else if ([type isEqual:@"impactMedium"]) {
        [self generateImpactFeedback:UIImpactFeedbackStyleMedium];
    } else if ([type isEqual:@"impactHeavy"]) {
        [self generateImpactFeedback:UIImpactFeedbackStyleHeavy];
    } else if ([type isEqual:@"notificationSuccess"]) {
        [self generateNotificationFeedback:UINotificationFeedbackTypeSuccess];
    } else if ([type isEqual:@"notificationWarning"]) {
        [self generateNotificationFeedback:UINotificationFeedbackTypeWarning];
    } else if ([type isEqual:@"notificationError"]) {
        [self generateNotificationFeedback:UINotificationFeedbackTypeError];
    } else {
        [self generateSelectionFeedback];
    }
}

-(void)generateSelectionFeedback{
    UISelectionFeedbackGenerator *generator = [[UISelectionFeedbackGenerator alloc] init];
    [generator prepare];
    [generator selectionChanged];
    generator = nil;
}

-(void)generateImpactFeedback:(UIImpactFeedbackStyle)style{
    UIImpactFeedbackGenerator *generator = [[UIImpactFeedbackGenerator alloc] initWithStyle:style];
    [generator prepare];
    [generator impactOccurred];
    generator = nil;
}

-(void)generateNotificationFeedback:(UINotificationFeedbackType)notificationType{
    UINotificationFeedbackGenerator *generator = [[UINotificationFeedbackGenerator alloc] init];
    [generator prepare];
    [generator notificationOccurred:notificationType];
    generator = nil;
}

@end
