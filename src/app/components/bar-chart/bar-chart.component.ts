import { Component, OnInit } from '@angular/core';
declare let spotfire: any;

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  app: any;
  doc: any;
  webPlayerServerRootUrl: string = 'https://spotfire-next.cloud.tibco.com/spotfire/wp/';
  customizationInfo: any;
  analysisPath: string = '/Users/65lovzvf3qjlpqanhwhgpcngqbz2orzh/BaseballPlayerData/bar-chart';
  parameters: string = '';
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
      showAbout : false,
      showAnalysisInformationTool : false,
      showAuthor : false,
      showClose : false,
      showCustomizableHeader : false,
      showDodPanel : false,
      showExportFile : false,
      showExportVisualization : false,
      showFilterPanel : false,
      showHelp : false,
      showLogout : false,
      showPageNavigation : false,
      showReloadAnalysis : false,
      showStatusBar : false,
      showToolBar : false,
      showUndoRedo : false
    };
  }

  onReadyCallback = (response, newApp) => {
    this.app = newApp;
    if (response.status === 'OK') {
      console.log('OK received. Opening document to page 0 in element renderAnalysis.');
      this.doc = this.app.openDocument("spotfire-container", 0);
      console.log(this.doc);
      debugger
      this.doc.data.getDataTables(this.onGetDataTables);

      //this.doc.onActivePageChanged(this.onActivePageChangedCallback);
    } else {
      console.log("Status not OK. " + response.status + ": " + response.message);
    }
  }

  onCreateLoginElement = () => {
    console.log('Creating the login element.');
    return null;
  }

  onActivePageChanged = (pageState) => {
    alert(`The new page has the title: ${pageState.pageTitle}`);
  }
  
  onGetDataTables = (dataTables) => {
    debugger
  }
}
