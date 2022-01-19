import React from 'react';
import{
    BrowserRouter as Router, 
    Link
  } from 'react-router-dom'


const Browse = () => {
    return(
        <>
        <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
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


      <body>
          <p>Let's Get ITTTTTT</p>
      </body>


      </>

    )   
}
export default Browse;
