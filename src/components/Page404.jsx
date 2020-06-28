import React from 'react';
import PropTypes from 'prop-types';
import Bar from "./Bar";

Page404.propTypes = {

};

function Page404(props) {
    return (
        <div>
            <Bar/>
            <p className={"not-found"}>Not found</p>
        </div>
    );
}

export default Page404;