// labelExample.js
import { LightningElement } from 'lwc';

// Import the URL for the static resource named 'salesforceLogo'
import SALESFORCE_LOGO from '@salesforce/resourceUrl/trailhead_logo';

// Import custom labels
import greeting from '@salesforce/label/c.greeting';
import salesforceLogoDescription from '@salesforce/label/c.salesforceLogoDescription';

export default class LabelExample extends LightningElement {
    // Expose the static resource URL to use in the template.
    logoUrl = SALESFORCE_LOGO;

    // Expose the labels to use in the template.
    label = {
        greeting,
        salesforceLogoDescription,
    };

    connectedCallback(){
        console.log('Label', salesforceLogoDescription);
    }
}