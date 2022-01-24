from doctest import OutputChecker
import subprocess
import os 
import glob

def convereter():
    to_conv = []

    files = glob.glob("C:/Users/thaku/AppData/Local/HomeServer/*.mov")
    for i in range(len(files)):
        video = files[i]
        print(video[40:])
        to_conv.append(video[40:])

    if len(to_conv) > 0:
        for i in range(len(to_conv)):
            inputfile = "C:/Users/thaku/AppData/Local/HomeServer/" + to_conv[i]
            outputfile = inputfile[:-4] + ".mp4"
            os.chdir("C:/Users/thaku\OneDrive/Desktop/ffmpeg-master-latest-win64-gpl/bin")
            os.system(f'ffmpeg.exe -i {inputfile} {outputfile}')
    else:
        pass

    return('Done')
