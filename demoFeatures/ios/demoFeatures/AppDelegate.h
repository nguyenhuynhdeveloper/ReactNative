#import <React/RCTBridgeDelegate.h>
#import <UIKit/UIKit.h>
// 16/6/2022_pushNoti config pushnotification 
#import <UserNotifications/UNUserNotificationCenter.h>

@interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate, UNUserNotificationCenterDelegate>
// Chi them UNUserNotificationCenterDelegate vao cuoi thoi , k phai them ca cau 
// @interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate> 

@property (nonatomic, strong) UIWindow *window;

@end
