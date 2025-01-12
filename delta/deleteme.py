import speech_recognition as sr
import pyautogui
import keyboard
import threading
import time

# Initialize recognizer
recognizer = sr.Recognizer()

# Variable to track if the program is listening
is_listening = False
stop_listening_event = threading.Event()  # Event to control the listening state

# Function to toggle the listening state on hotkey press
def toggle_listening():
    global is_listening
    if is_listening:
        print("Stopping listening...")
        is_listening = False
        stop_listening_event.set()  # Stop listening
    else:
        print("Starting to listen...")
        is_listening = True
        stop_listening_event.clear()  # Continue listening
        listen_for_speech()  # Start listening

# Function to listen to the microphone and convert speech to text
def listen_for_speech():
    global is_listening
    while not stop_listening_event.is_set():  # Keep listening until stopped
        with sr.Microphone() as source:
            try:
                print("Listening...")
                recognizer.adjust_for_ambient_noise(source)  # Adjust for ambient noise
                audio = recognizer.listen(source)  # Listen for speech
                print("Recognizing...")

                # Use Google's speech-to-text engine
                text = recognizer.recognize_google(audio)
                print(f"Recognized: {text}")

                # Type the recognized text using pyautogui and add a space after each recognition
                pyautogui.typewrite(text + " ")  # Add a space after each recognized text

            except sr.UnknownValueError:
                print("Sorry, I could not understand the audio.")
            except sr.RequestError:
                print("Sorry, there was an issue with the speech service.")
            time.sleep(1)  # Avoid too frequent requests

# Main entry point of the program
def main():
    # Set up the hotkey listener
    keyboard.add_hotkey('ctrl+shift', toggle_listening)  # Press Ctrl+Shift to toggle listening
    
    print("Press 'Ctrl + Shift' to toggle speech recognition.")
    
    # Keep the program running
    while True:
        time.sleep(0.1)  # Allow the hotkey listener to keep working

if __name__ == "__main__":
    main()
    