import React from 'react';
import './App.css';
import Bar from "./components/Bar";
import NewsList from "./components/NewsList";
import './css/bootstrap.css';
import AuthProvider from "./components/AuthProvider";
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import NewsDetail from "./components/NewsDetail";
import Page404 from "./components/Page404";
import NewsDetailPage from "./components/NewsDetailPage";
import NewsListPage from "./components/NewsListPage";
function App() {
  return (
        <Router>
            <div className="App container">
        <AuthProvider>
            <Switch>
                <Route path="/news/:id" component={NewsDetailPage} />
                <Route path="/news" component={NewsListPage} />
                <Route path="/" exact render={props=><Bar {...props} />} />
                <Route path="*" component={Page404} />
            </Switch>
        </AuthProvider>
            </div>
        </Router>
  );
}

export default App;
