import{
    BrowserRouter as Router, 
    Switch, 
    Route, 
    Link,
    useHistory,
    BrowserRouter
  } from 'react-router-dom'
import Browse from './browse';
import React from 'react';
import Home from './Home';

const App2 = () =>{
    return(
        <div>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Home/>
                    </Route>

                    <Route path='/browse'>
                        <Browse/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App2;