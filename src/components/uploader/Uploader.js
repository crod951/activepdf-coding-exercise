import React, { Component } from 'react';
import { FilePond, registerPlugin  } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateType);

class Uploader extends Component {
  render() {
    return (
      <div>
        <FilePond
          acceptedFileTypes={['image/*']}
          labelIdle={`Drag & Drop your picture or <span class="filepond--label-action">Browse</span>`}
        />
      </div>
    )
  }
}

export default Uploader;