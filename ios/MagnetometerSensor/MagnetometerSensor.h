//
//  MagnetometerSensor.h
//  DoubleConversion
//
//  Created by Yannis Caussade on 28/01/2020.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>
#import <CoreMotion/CoreMotion.h>

@interface MagnetometerSensor : RCTEventEmitter <RCTBridgeModule> {
  CMMotionManager *motionManager;
}
@end
