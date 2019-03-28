import React, { Component } from 'react';
import './App.css';
import Uploader from '../../components/uploader/Uploader';

class App extends Component {
  render() {
    return (
      <div>
        <div className="uploader" >
          <Uploader />
        </div>
      </div>
    );
  }
}

export default App;