import React, { Component } from 'react';
import ReaderPlus from '../../components/reader-plus/ReaderPlus';
import Uploader from '../../components/uploader/Uploader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doneUploading: false,
    };
  }

  onChange = e => {
    this.setState({ doneUploading: true });
  }

  render() {
    return (
      <div>
        { this.state.doneUploading ? null : <Uploader onChange={this.onChange} /> }
        <ReaderPlus />        
      </div>
    );
  }
}

export default App;