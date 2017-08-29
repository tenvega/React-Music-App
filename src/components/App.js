import React, { Component } from 'react';
import '../styles/App.css';

// imports
import NavBar from './NavBar';
import PlayList from './PlayList';
import PlayListForm from './PlayListForm';


class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <NavBar />
        <PlayListForm/>
        <PlayList />
      </div>
    );
  }
}

export default App;
