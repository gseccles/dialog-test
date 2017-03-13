import {DialogService} from 'aurelia-dialog';
import {inject} from 'aurelia-framework';
import {Modal} from './my-modal';

@inject(DialogService)

export class App {

   constructor(dialogService) {
      this.dialogService = dialogService;
   }

   openModal() {
      this.dialogService.open({viewModel: Modal, model: 'Select A Number' })
      .then(response => {
         console.log(response);
			
         if (!response.wasCancelled) {
            console.log('OK');
         } else {
            console.log('cancelled');
         }
         console.log(response.output);
      })
      .catch(err => {
      	console.log(err);
      });
   }
};