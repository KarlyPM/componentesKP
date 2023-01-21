import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})

export class AlertPage {

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }


  async presentAlertMultilpeButton() {
    const alert = await this.alertController.create({
    backdropDismiss: false,
    header: 'Alert',
    subHeader: 'Important message',
    message: 'This is an alert!',
    buttons: ['Cancel', 'Opne Modal', 'Delete']
    });
    await alert.present();
  };

}
