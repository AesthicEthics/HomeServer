from logging import debug
import os 
import glob
from flask import Flask, request, redirect
from werkzeug.utils import secure_filename
import shutil

UPLOAD_FOLDER = "C:/Users/thakur/OneDrive/Desktop/Images/"

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/upload', methods = ['POST'])
def upload_file():
    
    file = request.files['file']
    f = open('debug.txt','w+')
    f.write("file Rec")
    f.close()
    file_names = []
    files = glob.glob('C:/Users/thakur/OneDrive/Desktop/Images/*')
    for i in range(len(files)):
        image = files[i]
        file_names.append(image[39:])


    if file.name not in file_names: 
        file.save(os.path.join(app.config['UPLOAD_FOLDER']), secure_filename(file.name))
    else:
        pass

if __name__ == "__main__":
    app.run(debug="True")