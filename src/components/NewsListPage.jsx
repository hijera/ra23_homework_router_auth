import React from 'react';
import PropTypes from 'prop-types';
import Bar from "./Bar";
import NewsList from "./NewsList";

NewsListPage.propTypes = {};

function NewsListPage(props) {

    return (
        <>
            <Bar {...props} />
            <NewsList {...props} />
        </>
    );
}

export default NewsListPage;