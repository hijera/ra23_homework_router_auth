import React, {useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import AuthContext from "../contexts/AuthContext";

NewsDetail.propTypes = {

};

function NewsDetail(props) {
    const { match, history } = props;
    console.log(history);
    const {token, handleLogout} = useContext(AuthContext);
    const [newsItem,setNewsItem] = useState({image:'',alt:'',title:'',description:''});
    console.log(process.env.REACT_APP_HOST + process.env.REACT_APP_NEWSITEM_LINK.replace(":id",match.params.id));
    const getSingleNewsItem =async (id) => {
        try {
            if (!token)
            {
                history.push('/');
                return null;
            }
            const response = await fetch(process.env.REACT_APP_HOST + process.env.REACT_APP_NEWSITEM_LINK.replace(":id",id), {
                method: 'GET',
                headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token},
            });

            if (response.status === 401) {
                handleLogout();
            }
            if (response.status === 404)
            {
                history.push('/not-found')
            }

            if (response.ok) {
                const newsData = await response.json();
                setNewsItem(newsData);
            }
        } catch (e) {
            throw new Error(e);
        }
    };

    useEffect(() => {
        getSingleNewsItem(match.params.id);
    }, [token]);

    return (
        <div className="card news-card">
            <img src={newsItem.image} className="card-img-top" alt={newsItem.alt}/>
            <div className="card-body">
                <h5 className="card-title">{newsItem.title}</h5>
                <p className="card-text">{newsItem.description}</p>
            </div>
        </div>

    );
}

export default NewsDetail;