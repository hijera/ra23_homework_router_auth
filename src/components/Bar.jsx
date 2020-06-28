import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import AuthForm from "./AuthForm";
import '../css/bootstrap.css';
import AuthContext from "../contexts/AuthContext";
import LogoutForm from "./LogoutForm";
import Auth from "./Auth";
import {useHistory} from 'react-router-dom';

Bar.propTypes = {};

function Bar(props) {
    const history = useHistory();
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <div className="navbar-header navbar-brand">Leto Social</div>
                <div className="navbar-collapse ">
                </div>
                <Auth history={history}/>
            </div>
        </nav>
    );
}

export default Bar;