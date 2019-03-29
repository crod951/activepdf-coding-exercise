import React, { Component } from 'react';
import ReaderPlus from '../../components/reader-plus/ReaderPlus';
import Uploader from '../../components/uploader/Uploader';

class App extends Component {
  render() {
    return (
      <div>
        <Uploader />
        <ReaderPlus />        
      </div>
    );
  }
}

export default App;