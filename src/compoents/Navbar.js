import React from 'react';
import {Link, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Addproduct from './Addproduct';
import './style.css'


class Navbar extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <nav className="nav">
                    <Link className="Link" to="/signup">Signup  |  </Link>&nbsp;&nbsp;
                   <Link className="Link" to="/login">Login  |   </Link>&nbsp;&nbsp;
                   <Link className="Link" to="/add">  Add Product |</Link>&nbsp;
                </nav>
                <div>
                    <Switch>
                        <Route path='/login' component={Login}> </Route>
                        <Route path='/signup' component={Signup}> </Route>
                        <Route path='/add' exactcomponent={Addproduct}> </Route>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Navbar;