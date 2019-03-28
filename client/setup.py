    
import sys
from cx_Freeze import setup, Executable
# import os

import os.path
# PYTHON_INSTALL_DIR = os.path.dirname(os.path.dirname(os.__file__))
# os.environ['TCL_LIBRARY'] = os.path.join(PYTHON_INSTALL_DIR, 'tcl', 'tcl8.6')
# os.environ['TK_LIBRARY'] = os.path.join(PYTHON_INSTALL_DIR, 'tcl', 'tk8.6')

base = None
if sys.platform == "win32":
    base = "Win32GUI"

setup(name="Friendly",
      version="1",
      description="WinPFlog",
      options = {"build_exe": {"packages":["idna", "requests"]}},
      executables=[Executable("main.py",targetName="WinPFlog.exe", base=base)])

# setup(name="Friendly",
#       version="1",
#       description="pythonisfun",
#       options = {"build_exe": {"packages":["idna", "requests"]}},
#       executables=[Executable("fun.py",targetName="pythonfun.exe", base=base)])

#"Win32GUI"
#base = "Win32GUI"
#tcl86t