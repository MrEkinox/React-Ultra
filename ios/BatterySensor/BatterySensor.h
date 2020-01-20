//
//  BatterySensor.h
//  DoubleConversion
//
//  Created by Yannis Caussade on 20/01/2020.
//

#import <React/RCTEventEmitter.h>
#if __has_include("RCTBridgeModule.h")
#import "RCTBridgeModule.h"
#else
#import <React/RCTBridgeModule.h>
#endif

@interface BatterySensor : RCTEventEmitter <RCTBridgeModule>
@end
