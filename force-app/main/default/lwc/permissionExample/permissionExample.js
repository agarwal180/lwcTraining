import { LightningElement } from 'lwc';
import hasViewSetup from '@salesforce/userPermission/ViewSetup';
import hasViewReport from '@salesforce/customPermission/acme_ViewReport';

export default class PermissionExample extends LightningElement {
    get isSetupEnabled() {
        return hasViewSetup;
    }

    get isReportVisible() {
        console.log('hasViewReport',hasViewReport)
        return hasViewReport;
    }

    openSetup(e) {}
}