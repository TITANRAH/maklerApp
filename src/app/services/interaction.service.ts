import { Injectable } from '@angular/core';
import { AlertController, LoadingController, PopoverController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  loading: HTMLIonLoadingElement;

  constructor(private loadingController: LoadingController,
              private alertController: AlertController,
              private toastController: ToastController,
              private popovercontroller: PopoverController) { }

  async presentLoading(message: string) {
    this.loading = await this.loadingController.create({
      cssClass: 'normal',
      message,
      backdropDismiss: true
    });
    await this.loading.present();
  }

  async dismissLoading() {
    if (this.loading) {
      await this.loading.dismiss();
    }
  }

  presentAlert(header: string, message: string): Promise<boolean> {

    return new Promise( async (resolve) => {
        const alert = await this.alertController.create({
          cssClass: 'normal',
          header,
          message,
          buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
              cssClass: 'normal',
              // id: 'cancel-button',
              handler: () => {
                console.log('Confirm Cancel');
                resolve(false);
                return;
              }
            },
            {
              text: 'Ok',
              // id: 'confirm-button',
              handler: () => {
                console.log('Confirm Ok');
                resolve(true);
                return;
              }
            }
          ]
        });
        await alert.present();

    });

  }

  async presentToast(message: string, duration: number) {
    const toast = await this.toastController.create({
      message,
      duration,
      cssClass: 'normal',
    });
    await toast.present();
  }

  async presentPopover(component: any, event: any, arg: any = {}) {
    const pop = await this.popovercontroller.create({
      component,
      event,
      mode: 'ios',
      cssClass: 'popLogin',
      componentProps: arg
    });
    await pop.present();

  }

}
