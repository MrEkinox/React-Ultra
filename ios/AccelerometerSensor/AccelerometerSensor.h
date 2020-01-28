//
//  AccelerometerSensor.h
//  ReactUltra
//
//  Created by Yannis Caussade on 19/01/2020.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>
#import <CoreMotion/CoreMotion.h>

@interface AccelerometerSensor : RCTEventEmitter <RCTBridgeModule> {
    CMMotionManager *motionManager;
}
@end
