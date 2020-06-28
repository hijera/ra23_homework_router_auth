import React from 'react';
import PropTypes from 'prop-types';
import Bar from "./Bar";
import NewsDetail from "./NewsDetail";

NewsDetailPage.propTypes = {};

function NewsDetailPage(props) {
    return (
        <>
            <Bar {...props} />
            <NewsDetail {...props} />
        </>
    );
}

export default NewsDetailPage;