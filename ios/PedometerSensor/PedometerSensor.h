//
//  PedometerSensor.h
//  DoubleConversion
//
//  Created by Yannis Caussade on 30/01/2020.
//

#import <React/RCTEventEmitter.h>
#import <React/RCTBridgeModule.h>
#import <CoreMotion/CoreMotion.h>

@interface PedometerSensor : RCTEventEmitter <RCTBridgeModule> {
  CMPedometer *pedometer;
}
@end

