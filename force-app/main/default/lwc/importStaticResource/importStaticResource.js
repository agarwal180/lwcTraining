import { LightningElement } from 'lwc';
import TRAILHEAD_LOGO from '@salesforce/resourceUrl/trailhead_logo';
import TRAILHEAD_CHARACTERS from '@salesforce/resourceUrl/Resource';

export default class ImportStaticResource extends LightningElement {
    trailheadLogoUrl = TRAILHEAD_LOGO;

    einsteinUrl = TRAILHEAD_CHARACTERS + '/resource/images/einstein.png';
}