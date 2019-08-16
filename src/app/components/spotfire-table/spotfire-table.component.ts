import { Component, OnInit } from '@angular/core';
declare let spotfire : any;

@Component({
  selector: 'app-spotfire-table',
  templateUrl: './spotfire-table.component.html',
  styleUrls: ['./spotfire-table.component.css']
})
export class SpotfireTableComponent implements OnInit {
  app: any;
  doc: any;
  customizationInfo: any;
  webPlayerServerRootUrl = 'https://spotfire-next.cloud.tibco.com/spotfire/wp/';
  analysisPath = '/Users/65lovzvf3qjlpqanhwhgpcngqbz2orzh/BaseballPlayerData/table';
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
      showPageNavigation : true,
      showReloadAnalysis : false,
      showStatusBar : false,
      showToolBar : false,
      showUndoRedo : false
    };
  }

  onReadyCallback = (response, newApp) => {
    this.app = newApp;
    if (response.status === 'OK') {
      this.doc = this.app.openDocument("spotfire-container", 0);
    } else {
      console.log("Status not OK. " + response.status + ": " + response.message);
    }
  }

  onCreateLoginElement = () => {
    console.log('Creating the login element.');
    return null;
  }

}
