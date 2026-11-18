import subprocess

cmd = 'wmic process where "name=\'chrome.exe\' and commandline like \'%headless%\'" call terminate'
subprocess.run(cmd, shell=True)
print("Terminated orphaned headless chrome instances.")
