import { LightningElement } from 'lwc';
import SALES_WAVE_LOGO from '@salesforce/contentAssetUrl/GetCloudyConsultingLogo';
import cloudHome_LOGO from '@salesforce/contentAssetUrl/cloudHome';

import PARTNER_LOGOS from '@salesforce/contentAssetUrl/Resourcezip';

export default class ContentAssetExample extends LightningElement {

    // Expose the asset file URL for use in the template
    salesWaveLogoUrl = SALES_WAVE_LOGO;
    cloudHomeLogoUrl = cloudHome_LOGO;

    // Expose URL of assets included inside an archive file
    einsteinLogoUrl = PARTNER_LOGOS + 'pathinarchive=resource/images/einstein.png';

}