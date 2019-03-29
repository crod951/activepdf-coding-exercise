import React, { Component } from 'react';
import './App.css';
import ReaderPlus from '../../components/reader-plus/ReaderPlus';
import Uploader from '../../components/uploader/Uploader';

class App extends Component {
  render() {
    return (
      <div>
        <div className="uploader" >
          <Uploader />
        </div>
        <ReaderPlus />        
      </div>
    );
  }
}

export default App;