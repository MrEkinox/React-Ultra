//
//  QuickActions.m
//  DoubleConversion
//
//  Created by Yannis Caussade on 31/01/2020.
//

#import "QuickActions.h"

@implementation QuickActions

- (dispatch_queue_t)methodQueue {
    return dispatch_get_main_queue();
}

+ (BOOL)requiresMainQueueSetup {
    return YES;
}

- (NSArray*)dynamicShortcutItemsForPassedArray:(NSArray*)passedArray {
    NSDictionary *icons = @{
        @"Compose": @(UIApplicationShortcutIconTypeCompose),
        @"Play": @(UIApplicationShortcutIconTypePlay),
        @"Pause": @(UIApplicationShortcutIconTypePause),
        @"Add": @(UIApplicationShortcutIconTypeAdd),
        @"Location": @(UIApplicationShortcutIconTypeLocation),
        @"Search": @(UIApplicationShortcutIconTypeSearch),
        @"Share": @(UIApplicationShortcutIconTypeShare),
        @"Prohibit": @(UIApplicationShortcutIconTypeProhibit),
        @"Contact": @(UIApplicationShortcutIconTypeContact),
        @"Home": @(UIApplicationShortcutIconTypeHome),
        @"MarkLocation": @(UIApplicationShortcutIconTypeMarkLocation),
        @"Favorite": @(UIApplicationShortcutIconTypeFavorite),
        @"Love": @(UIApplicationShortcutIconTypeLove),
        @"Cloud": @(UIApplicationShortcutIconTypeCloud),
        @"Invitation": @(UIApplicationShortcutIconTypeInvitation),
        @"Confirmation": @(UIApplicationShortcutIconTypeConfirmation),
        @"Mail": @(UIApplicationShortcutIconTypeMail),
        @"Message": @(UIApplicationShortcutIconTypeMessage),
        @"Date": @(UIApplicationShortcutIconTypeDate),
        @"Time": @(UIApplicationShortcutIconTypeTime),
        @"CapturePhoto": @(UIApplicationShortcutIconTypeCapturePhoto),
        @"CaptureVideo": @(UIApplicationShortcutIconTypeCaptureVideo),
        @"Task": @(UIApplicationShortcutIconTypeTask),
        @"TaskCompleted": @(UIApplicationShortcutIconTypeTaskCompleted),
        @"Alarm": @(UIApplicationShortcutIconTypeAlarm),
        @"Bookmark": @(UIApplicationShortcutIconTypeBookmark),
        @"Shuffle": @(UIApplicationShortcutIconTypeShuffle),
        @"Audio": @(UIApplicationShortcutIconTypeAudio),
        @"Update": @(UIApplicationShortcutIconTypeUpdate)
    };

    NSMutableArray *shortcutItems = [NSMutableArray new];

    [passedArray enumerateObjectsUsingBlock:^(NSDictionary *item, NSUInteger idx, BOOL *stop) {
        NSString *iconName = item[@"icon"];
        UIApplicationShortcutIcon *shortcutIcon;
        NSNumber *iconType = icons[iconName];

        if (iconType) {
            shortcutIcon = [UIApplicationShortcutIcon iconWithType:[iconType intValue]];
        } else if (iconName) {
            shortcutIcon = [UIApplicationShortcutIcon iconWithTemplateImageName:iconName];
        }

        [shortcutItems addObject:[[UIApplicationShortcutItem alloc] initWithType:item[@"type"]
                                                                  localizedTitle:item[@"title"] ?: item[@"type"]
                                                               localizedSubtitle:item[@"subtitle"]
                                                                            icon:shortcutIcon
                                                                        userInfo:item[@"userInfo"]]];
    }];

    return shortcutItems;
}

RCT_EXPORT_METHOD(set:(NSArray *) shortcutItems)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    NSArray *dynamicShortcuts = [self dynamicShortcutItemsForPassedArray:shortcutItems];
    [UIApplication sharedApplication].shortcutItems = dynamicShortcuts;
  });
}

RCT_EXPORT_METHOD(isSupported:(RCTResponseSenderBlock)callback)
{
    BOOL supported = [[UIApplication sharedApplication].delegate.window.rootViewController.traitCollection forceTouchCapability] == UIForceTouchCapabilityAvailable;

    callback(@[[NSNull null], [NSNumber numberWithBool:supported]]);
}

RCT_EXPORT_METHOD(clear)
{
    [UIApplication sharedApplication].shortcutItems = nil;
}

@end
