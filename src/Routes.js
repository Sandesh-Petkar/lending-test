import React from 'react'
import {BrowserRouter ,Route,Switch} from 'react-router-dom'
import Login from './Login'


const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login}/>
                
            </Switch>
        </BrowserRouter>
    )
}

export default Routes