import React, { Component } from 'react';
import { FilePond, registerPlugin  } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import './uploader.css';

registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateType);

class Uploader extends Component {
  render() {
    return (
      <div className="uploader">
        <FilePond
          acceptedFileTypes={['image/*']}
          labelIdle={`Drag & Drop your picture or <span class="filepond--label-action">Browse</span>`}
          name={"file"}
          server="http://localhost:3000/upload"
          allowRevert="false"
          onprocessfile={(err, fileItem) => {
            fetch("http://localhost:3000/IMG.pdf")
            .then(res => res.blob())
            .then(blob => {
              this.props.onChange();
              window.initReaderPlus(blob);
            });
            console.log('onprocessfile', fileItem.filename, fileItem.source);      
          }}
        />
      </div>
    )
  }
}

export default Uploader;