import { LightningElement, track } from 'lwc';
import Id from '@salesforce/user/Id';
import isguest from '@salesforce/user/isGuest';
import NAME_FIELD from '@salesforce/schema/User.Name';
 

export default class GuestUserExample extends LightningElement {
    userId = Id;
    isGuest = isguest;


}