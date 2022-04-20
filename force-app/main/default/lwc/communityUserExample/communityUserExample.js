import { LightningElement,wire } from 'lwc';
import Id from '@salesforce/community/Id';
import getFeedElementPageForCommunity from '@salesforce/apex/CommunityFeedController.getFeedElementPageForCommunity';

export default class CommunityUserExample extends LightningElement {
    Id = Id;
    @wire(getFeedElementPageForCommunity, { networkId: '$Id' })
    feedElementPage({error, data}){
        console.log('error', error)
        if(data){
            console.log('data', data)
        }
    }

    connectedCallback(){
        console.log('network Id', this.Id);
    }
}