# import psutil
# import time
# from win10toast import ToastNotifier
# import os

# def check_battery():
#     battery = psutil.sensors_battery()
#     return battery.percent

# def notify_user(message):
#     toaster = ToastNotifier()
#     toaster.show_toast("Battery Notification", message, duration=10)

# def main():
#     while True:
#         battery_percent = check_battery()
#         if battery_percent <= 20:
#             notify_user("Battery is at 20%. Please plug in the charger.")
#             time.sleep(60)  # Wait for 60 seconds to avoid multiple notifications
#         elif battery_percent >= 90:
#             notify_user("Battery is at 90%. Consider unplugging the charger.")
#             time.sleep(60)  # Wait for 60 seconds to avoid multiple notifications
#         time.sleep(30)  # Check battery every 30 seconds

# if __name__ == "__main__":
#     if os.path.exists('stop_notifier.flag'):
#         os.remove('stop_notifier.flag')  # Start the service
#         main()


import psutil
import time
from win10toast import ToastNotifier
import os

def check_battery():
    battery = psutil.sensors_battery()
    return battery.percent

def notify_user(message):
    toaster = ToastNotifier()
    toaster.show_toast("Battery Notification", message, duration=10)

def main():
    while True:
        # Check if the stop flag file exists
        if os.path.exists('stop_notifier.flag'):
            print("Notifier stopped")
            break  # Exit the loop if the stop flag is present
        
        battery_percent = check_battery()
        
        if battery_percent <= 20:
            notify_user("Battery is at 20%. Please plug in the charger.")
            time.sleep(30)  # Wait for 60 seconds to avoid multiple notifications
        elif battery_percent >= 90:
            notify_user("Battery is at 90%. Consider unplugging the charger.")
            # time.sleep(60)  # Wait for 60 seconds to avoid multiple notifications
        
        # time.sleep(30)  # Check battery every 30 seconds
        print(battery_percent)

if __name__ == "__main__":
    # The service should always start
    main()