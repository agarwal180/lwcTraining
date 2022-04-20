import { LightningElement } from 'lwc';

import FORM_FACTOR from '@salesforce/client/formFactor';
export default class FormFactorExample extends LightningElement {
    formfactor = FORM_FACTOR
    connectedCallback(){
        console.log('Form factor',this.formfactor );
    }
}