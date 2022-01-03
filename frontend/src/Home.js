import logo from './logo.svg';
import './index';
import React, { useState } from 'react';
import axios from 'axios';
import {useRef} from 'react'
import $ from 'jquery';
import {Helmet} from "react-helmet";
import AppendHead from 'react-append-head';
import {findDomNode} from 'react-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import{
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  useHistory
} from 'react-router-dom'
import Browse from './browse';


class App extends React.Component {


  constructor(props) {
    super(props);
    this.state={
      file:null
    }

    this.onFormSubmit= this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)

  }

  componentDidMount = () =>{
    $(document).ready(function() {
      $('input[type="file"]').on("change", function() {
        let filenames = [];
        let files = this.files;
        if (files.length > 1) {
          filenames.push("Total Files (" + files.length + ")");
        } else {
          for (let i in files) {
            if (files.hasOwnProperty(i)) {
              filenames.push(files[i].name);
            }
          }
        }
        $(this)
          .next(".custom-file-label")
          .html(filenames.join(","));
      });
    });
  }


  onFormSubmit(e){
    e.preventDefault()
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response);
    })
  }

  onChange(e){
    this.setState({file:e.target.files[0]})
  }

  fileUpload(file){
    const url = "http://a1b0-97-108-34-208.ngrok.io/upload"
    const formData = new FormData();
    formData.append('file',file)
    const config = {
      headers:{
        'content-type':'multipart/form-data'
      }
    }

    alert('File Uploaded Sucessfully!');

    return axios.post(url, formData, config)

  
  }



  render() {



    return (
      <>
      <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
      </head>

      <body class='thisbody'>
        <Router Browse={Browse}>
        <div>
          <nav class="navbar navbar-dark navbar-custom">
            <a class="navbar-brand" href="#">Data Share Server</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                 <Link to='/' className="Link">Upload</Link><span class="sr-only">(current)</span>
                </li>
                <li class="nav-item"><Link to={{pathname:'/browse'}} className='Link'>Browse</Link>
                </li>
              </ul>
              <h6 class='reduce'>v1.00</h6>
              <Switch>
                <Route exact path='/'></Route>
                <Route exact path='/browse' component={Browse}></Route>
              </Switch>

            </div>
          </nav>
          <br></br>
        </div>
        </Router>
      </body>
      <body>
  
      <body>
            <div class="container mt-5">
              <h1 class="text-center">Share Portal 🔥</h1>
              <div class="col-sm-12 col-lg-4 mr-auto ml-auto border p-4">
              <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
              <form ref='check' onSubmit={this.onFormSubmit}>
                <div class="form-group">
                  <label><strong>Image Upload</strong></label>
                  <div class="custom-file">
                  <input type="file" name="file" multiple class="custom-file-input form-control" id="customFile" onChange={this.onChange}/>
                  <label class="custom-file-label" for="customFile">Choose Image</label>
                  </div>
                </div>
                <div class="form-group">
                <button type="submit" name="upload" value="upload" id="upload" class="btn btn-block btn-dark"><i class="fa fa-fw fa-upload"></i> Upload</button>
                </div>
              </form>
              </div>
              <AppendHead>
                <script src="https://cpwebassets.codepen.io/assets/common/stopExecutionOnTimeout-1b93190375e9ccc259df3a57c1abc0e64599724ae30d7ea4c6877eb615f89387.js"></script>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"></script>
              </AppendHead>
            </div>
            </body>

      </body>
      </>
    )

  }

};


export default App;

