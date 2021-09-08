//
//  CardScan.m
//  ReactNative_Template
//
//  Created by Quan Nguyen on 07/09/2021.
//

#import "React/RCTLog.h"
#import <UIKit/UIKit.h>
#import "TestNative.h" // Here put the name of your module
@implementation TestNative   // Here put the name of your module

// This RCT (React) "macro" exposes the current module to JavaScript
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getDeviceName:(RCTResponseSenderBlock)callback){
 @try{
   NSString *deviceName = [[UIDevice currentDevice] name];
   callback(@[[NSNull null], deviceName]);
 }
 @catch(NSException *exception){
   callback(@[exception.reason, [NSNull null]]);
 }
}


@end
