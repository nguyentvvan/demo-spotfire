import { Component, OnInit } from '@angular/core';
declare let spotfire : any;

@Component({
  selector: 'app-spotfire-graphical-table',
  templateUrl: './spotfire-graphical-table.component.html',
  styleUrls: ['./spotfire-graphical-table.component.css']
})
export class SpotfireGraphicalTableComponent implements OnInit {
  app: any;
  doc: any;
  customizationInfo: any;
  webPlayerServerRootUrl = 'https://spotfire-next.cloud.tibco.com/spotfire/wp/';
  analysisPath = '/Users/65lovzvf3qjlpqanhwhgpcngqbz2orzh/BaseballPlayerData/bar-chart-test-text-area1';
  parameters = '';
  reloadInstances = true;
  apiVersion = '7.14';

  constructor() { }

  ngOnInit() {
    // Customize based on user role
    this.customizeVisulization();
    
    spotfire.webPlayer.createApplication(
      this.webPlayerServerRootUrl,
      this.customizationInfo,
      this.analysisPath,
      this.parameters,
      this.reloadInstances,
      this.apiVersion,
      this.onReadyCallback,
      this.onCreateLoginElement
    );
  }
  
  customizeVisulization = () => {
    this.customizationInfo = {
      showAbout : true,
      showAnalysisInformationTool : true,
      showAuthor : true,
      showClose : true,
      showCustomizableHeader : true,
      showDodPanel : true,
      showExportFile : true,
      showExportVisualization : true,
      showFilterPanel : true,
      showHelp : true,
      showLogout : true,
      showPageNavigation : true,
      showReloadAnalysis : true,
      showStatusBar : true,
      showToolBar : true,
      showUndoRedo : true
    };
  }

  onReadyCallback = (response, newApp) => {
    this.app = newApp;
    this.app.onError((errorCode, errorDescription) => {
      console.log("onError");
    });
    this.app.onClosed((analysisPath, document) => {
      console.log("onClosed");
    });
    this.app.onOpened((analysisDocument) => {
      analysisDocument.setDocumentProperty("abc", "bar-chart");
    });
    this.app.onLoggedOut(() => {
      console.log("onLoggedout");
    });
    if (response.status === 'OK') {
      this.doc = this.app.openDocument("spotfire-container", 0);
      //this.doc.getPages(this.onGetPagesCallback);
      //this.doc.getDocumentProperties(this.onGetDocumentPropertiesback);

      // properties
      let spotfireDocument = this.doc;
      let docFiltering = this.doc.filtering;
      let docMarking = this.doc.marking;
      let docData = this.doc.data;

      let analysisDocuments = this.app.analysisDocuments;

      // data 's properties
      // this.doc.data.getActiveDataTable((dataTable) => {
      //   debugger
      // });

      // this.doc.data.getDataTable("BaseballPlayerData", (dataTable) => {
      //   debugger
      // });

      // this.doc.data.getDataTables((dataTables) => {
      //   debugger
      // });
      
      this.doc.getPages(this.onGetPagesCallback);

      this.doc.getReports(this.onGetReportsCallback);

      //this.doc.data.onRangeChanged("filteringSchemeName", "dataTableName", "dataColumnName", (dataColumnRangeState) => {
      // this.doc.data.onRangeChanged("Runs", "BaseballPlayerData", "Runs", (dataColumnRangeState) => {
      //   debugger
      // });

      // filtering 's properties
      // marking 's properties
    } else {
      console.log("Status not OK. " + response.status + ": " + response.message);
    }
  }

  onGetDocumentPropertiesback = (properties) => {
    console.log("onGetDocumentPropertiesback");
  }

  onGetPagesCallback = (pageStates) => {
    debugger
  }

  onGetReportsCallback = (reportNames) => {
    // debugger
  }

  onCreateLoginElement = () => {
    console.log('Creating the login element.');
    return null;
  }
}
