import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AuctionIndexPage from './components/AuctionIndexPage';
import AuctionShowPage from './components/AuctionShowPage';
import NavBar from './components/NavBar';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import { User, Session } from "./requests";
import Spinner from "./components/Spinner";
import AuthRoute from "./components/AuthRoute";
import AuctionNewPage from "./components/AuctionNewPage";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      loading: true
    };
  }

  getUser = () => {
    User.current()
      .then(data => {
        if (typeof data.id !== "number") {
          this.setState({ loading: false });
        } else {
          this.setState({ loading: false, currentUser: data });
        }
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  };

  signOut = () => {
    Session.destroy().then(() => {
      this.setState({
        currentUser: null
      });
    });
  };

  componentDidMount() {
    this.getUser();
  }

  render() {
    const { loading, currentUser } = this.state;
    if (loading) {
      return <Spinner />;
    }
    return (
      <Router>
        <div className="ui container">
          <NavBar currentUser={currentUser} onSignOut={this.signOut} />

          <Switch>
            <Route path="/" exact component={AuctionIndexPage} />
            <Route path="/auctions" exact component={AuctionIndexPage} />
            <AuthRoute
              isAuthenticated={currentUser}
              path="/auctions/new"
              component={AuctionNewPage}
            />
            <Route path="/auctions/:id" exact component={AuctionShowPage} />


            <Route
              path="/sign_in"

              render={routeProps => (
                <SignInPage onSignIn={this.getUser} {...routeProps} />
              )}
            />

            <Route
              exact
              path="/sign_up"
              render={routeProps => (
                <SignUpPage {...routeProps} onSignUp={this.getUser} />
              )}
            />


          </Switch>
        </div>
      </Router>
    );
  }

}

export default App;
