//
//  CreditCardScan.m
//  ReactNative_Template
//
//  Created by Quan Nguyen on 08/09/2021.
//
#import <React/RCTBridgeDelegate.h>
#import "CreditCardScan.h"

@implementation CreditCardScan
+ (BOOL)requiresMainQueueSetup
{
    return YES;
}


RCT_EXPORT_MODULE(CardResultViewController)

RCT_EXPORT_METHOD(startButton:()callback);

@end


