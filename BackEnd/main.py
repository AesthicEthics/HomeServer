from logging import debug
import os 
import glob
from flask import Flask, request, redirect
from werkzeug.utils import secure_filename
from werkzeug.debug import DebuggedApplication
import shutil

UPLOAD_FOLDER = "C:\\Users\\thaku\\AppData\\Local\\HomeServer"

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/upload', methods = ['POST'])
def uploadfile():
    
    file = request.files['file']
    f = open('debug.txt','w+')
    f.write("file Rec")
    f.close()
    file_names = []
    files = glob.glob("C:/Users/thaku/AppData/Local/HomeServer/*")
    for i in range(len(files)):
        image = files[i]
        file_names.append(image[39:])


    if file.filename not in file_names: 
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(file.filename)))
    else:
        pass

    return("Success")

    

if __name__ == "__main__":
    app.run(host="0.0.0.0",debug="True")