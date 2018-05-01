import React from 'react';
import MainPage from '../Main';
import Header from '../Header';
import Footer from '../Footer';

export default class App extends React.Component {
  render() {
    return ( 
      <div id="app" className="google__autocomplete--app wrapper">
        <Header />
        <MainPage />
        <Footer />
      </div>
    );
  }
};
