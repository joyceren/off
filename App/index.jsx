import React, { Component } from 'react'
import {Switch, Route} from 'react-router'
import {BrowserRouter as Router} from 'react-router-dom'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import Article from './components/ArticlePage'
import Account from'./components/Account'
import Auth from './components/Auth'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import store from './store'

// import firebaseui auth here
// pass the user down as props to Navbar, Homepage and Account

export default () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/account" component={Auth} />
          <Route exact path="/article/:articleId" component={Article} />
          <Route path="=*" component={() => (<div>Page not found</div>)} />
          <Footer />
        </div>
      </Router>
    </Provider>
  )
}