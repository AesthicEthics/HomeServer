import React from 'react';
import { render } from 'react-dom';
import{BrowserRouter as Router, Link } from 'react-router-dom';
import tester from './tested';
import {Portal} from 'react-portal';

var listOfImages=[];

class Browse extends React.Component {

  importAll = (r) =>{
    return r.keys().map(r)
  }

   componentWillMount = () =>{
    listOfImages = this.importAll(require.context('./images/', false, /\.(png|jpe?g|svg|gif)$/));
  }

  render(){
    return(
        <>
        <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
        <link rel="stylesheet" href="frontend\src\browse.css"/>
      </head>
      <body class='thisbody'>
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
                <li class="nav-item"><Link to={'/browse'} className='Link'>Browse</Link>
                </li>
              </ul>
              <h6 class='reduce'>v1.00</h6>
            </div>
          </nav>
          <br></br>
        </div>

      </body>

      <body class="check">
        {
          listOfImages.map(
            (image,index) => <img key={index} src={image}/>
          )
        }
      </body>


      </>

    )   
  }
};
export default Browse;
