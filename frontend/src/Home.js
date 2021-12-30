import logo from './logo.svg';
import './Home.css';
import React, { useState } from 'react';
import axios from 'axios';
import {useRef} from 'react'

const App = () => {
  const [name, setName] = useState("");
  const [selectedfile, setselectefile] = useState(null);
  const submitForm = () => {

    const UPLOAD_URL = "http://127.0.0.1:5000/upload"

    const formData = new FormData();
    formData.append('name', name);
    formData.append('file', selectedfile);
    console.log(formData);
    const axios = require('axios').default;
    axios.post(UPLOAD_URL, formData)
    axios.then((res) => {
      alert('File Uploaded')
    }) 

    axios.catch((err) => alert('File Upload Error'))
    
  };

  const FileUploader = ({onFileSelectSuccess}) => {
    const fileInput = useRef(null)

    const handleFileInput = (e) => {
      const file = e.target.files[0];
      if (file.size > 1024)
        onFileSelectError({ error: "File size cannot exceed more than 1MB" });
      else onFileSelectSuccess(file);
    };
  

    return (
        <div className="file-uploader">
            <input name='file' class="fileupload"  type="file" onChange={handleFileInput}/>
            <label><strong>Choose Image</strong></label>
        </div>
    )
  };


  return (
    <><body bgcolor="black">
      <div>
        <header>v1.0.0 </header>
        <p class='title'>Data-Share Server</p>
        <br></br>
      </div>
    </body><body>

        <div class='formdata'>
          <form>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)} />

            

    <FileUploader
      onFileSelectSuccess = {(file) => setselectefile(file)}
      onFileSelectError = {({ error }) => alert(error)}
      />
    
            <button onClick={submitForm}>Submit</button>

          </form>

        </div>
      </body></>
  )


}



export default App;
