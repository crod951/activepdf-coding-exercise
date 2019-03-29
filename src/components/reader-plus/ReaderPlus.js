import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import './reader-plus.css';


class ReaderPlus extends Component {

  componentDidMount() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
        // Open selected PDF
        function initReaderPlus(blob) {
          file = new File([blob], "IMG.pdf");
          if (file.name.indexOf("pdf") > 0) {
            // Load document into memory
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (e2) {
              filedata = e2.target.result;
              data = filedata.substring(37);
            }
  
            // Initialization settings
            reader.onloadend = function (e) {
              readerplus.initializeSettings({
                protocol: "http",
                hostname: 'localhost',
                port: 62625,
                language: 'en',
              });
  
              readerplus.Document.addEventListener("load", function () {
                // On document load you can add addtional options such as 
                // adding annotations, populating form fields and controlling 
                // elements of the user interface
                readerplus.mainmenu.File.General.addItem("Save and Print", "Save and Print", "save-print.png", false, "", "", function () { 
                  // readerplus.Document.print(); does a save automatically, no need to call .save()
                  readerplus.Document.print();
                });
              });
  
              // Document settings
              var isMasterDocument = 1;
              var editMode = 1;
  
              // Upload document from memory into viewer
              var result = readerplus.Document.upload(data, isMasterDocument, editMode, "", "DocumentName.pdf");
              if (result.Status === 0) {
                // Save document ID in order to reopen a document from the Reader Plus data store
                var docID = readerplus.Document.getDocumentID();
                // Open document in edit mode
                readerplus.Document.edit(docID);
              }
              else {
                // Display alert on error
                alert('Document failed to open!')
                console.error(result.Details);
              }
            }
  
            // Document can be saved to any location when it is submitted by a user
            readerplus.Document.addEventListener("submit", function (strResult) {
              var result = JSON.parse(strResult);
              if (result.Status === 0) {
                // Open the submitted document in another tab and redirect to thankyou.html
                var submittedPDFData = result.Details;
                let pdfwindow = window.open("");
                pdfwindow.document.write("<iframe width='100%' height='100%' src='data:application/pdf;base64, " + encodeURI(submittedPDFData) + "'></iframe>");
                window.location = "thankyou.html";
              }
              else {
                // Display alert on error
                alert('Document failed to submit!')
                console.error(result.Details);
              }
            });
          }
        }`;

      document.head.appendChild(script);
    }

  render() {
    return (
      <div>
        <Helmet>
          <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
          <script type="text/javascript" src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
          <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />
  
          <script type="text/javascript" src="http://localhost:62625/ReaderPlus/GetResources?resourceName=P3Rest.ReaderPlusAgent.Resources.Scripts.Production.svg.min.js"></script>
  
          <script type="text/javascript" src="http://localhost:62625/ReaderPlus/GetResources?resourceName=P3Rest.ReaderPlusAgent.Resources.Scripts.Production.readerplus.min.js"></script>
          <link rel="stylesheet" type="text/css" href="http://localhost:62625/ReaderPlus/GetResources?resourceName=P3Rest.ReaderPlusAgent.Resources.Styles.readerplus.css"></link>
        </Helmet>
        <div id="ReaderPlus" className="reader-plus" />
      </div>
    )
  }
}

export default ReaderPlus;