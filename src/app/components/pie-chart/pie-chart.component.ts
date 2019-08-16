import { Component, OnInit } from '@angular/core';
declare let spotfire: any;

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  app: any;
  doc: any;
  webPlayerServerRootUrl: string = 'https://spotfire-next.cloud.tibco.com/spotfire/wp/';
  customizationInfo: any;
  analysisPath: string = '/Users/65lovzvf3qjlpqanhwhgpcngqbz2orzh/BaseballPlayerData/pie-chart';
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
      showAbout : false, // menu Help > About
      showAnalysisInformationTool : false, // menu File > Analysis Information
      showAuthor : false, // drop-down on the right of the tool bar
      showClose : false,
      showCustomizableHeader : false, // above the tool bar
      showDodPanel : false, // menu View > Details-on-Demand
      showExportFile : false, // File > Download as DXP file
      showExportVisualization : false,
      showFilterPanel : false, // on the right of the tool bar & menu View > Filter
      showHelp : false, // menu Help => show more
      showLogout : false, // menu User > Logout
      showPageNavigation : false, // on the left of footer bar
      showReloadAnalysis : false,
      showStatusBar : false, // on the right of footer bar
      showToolBar : false, // tool bar on the top
      showUndoRedo : false // on the left of the tool bar
    };
  }

  onReadyCallback = (response, newApp) => {
    this.app = newApp;
    if (response.status === 'OK') {
      console.log('OK received. Opening document to page 0 in element renderAnalysis.');
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
