import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import AuthForm from "./AuthForm";
import LogoutForm from "./LogoutForm";
import AuthContext from "../contexts/AuthContext";

Auth.propTypes = {};

function Auth(props) {
    const {handleLogin, handleLogout, token, profile} = useContext(AuthContext);
    const {history} = props;
    return (
        <>
            {!token && <AuthForm history={history}/>}
            {token && <LogoutForm history={history}/>}
        </>
    );
}

export default Auth;