import React, {useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import AuthContext from "../contexts/AuthContext";
import NewsItem from "./NewsItem";
import { Link } from 'react-router-dom';
NewsList.propTypes = {};

function NewsList(props) {
    const {token, handleLogout} = useContext(AuthContext);
    const [ news,setNews ] = useState([]);
    const getNews = async () => {
        try {
            const response = await fetch(process.env.REACT_APP_HOST + process.env.REACT_APP_NEWS_LINK, {
                method: 'GET',
                headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token},
            });

            if (response.status === 401) {
                handleLogout();
            }

            if (response.ok) {
                const newsData = await response.json();
                setNews(newsData);
            }
        } catch (e) {
            throw new Error(e);
        }
    };
    useEffect(() => {
        getNews();
    }, [token]);

    return (

        <div className={"news-block"}>
            {token &&
            <div className={"card-deck newslist"}>
                {news.map(item =>
                    <Link className="card news-card" to={"/news/"+item.id}>
                        <NewsItem key={item.id} {...item} />
                    </Link>)}
            </div>
            }
        </div>
    );
}

export default NewsList;