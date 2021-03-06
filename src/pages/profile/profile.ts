import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { Component, OnDestroy } from '@angular/core';

import * as utils from '../utils';
import { LoginPage } from '../login/login';
import { ModalPage } from '../modal/modal';
import { ProfilesProvider } from '../../providers/profiles/profiles';
import { AuthsProvider } from '../../providers/auths/auths';
import { Profile } from '../../interfaces/profile';
import { Subscription } from 'rxjs/Subscription';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnDestroy {
  user: Profile = {
    uid: '',
    image: '',
    name: '',
    email: '',
    phone: '',
  };

  profileSub: Subscription;

  constructor(
    private modalCtrl: ModalController,
    private nav: NavController,
    private authsProvider: AuthsProvider,
    private profilesProvider: ProfilesProvider
  ) {}

  saveProfile() {
    const modal = this.modalCtrl.create(ModalPage, {
      title: 'Configurações salvas',
      description: 'Seu perfil foi atualizado'
    });
    modal.present();
  }

  logout() {
    this.authsProvider.logout()
      .then(() => {
        utils.setNavRoot(this.nav, LoginPage);
      });
  }

  ionViewDidLoad() {
    this.profileSub = this.profilesProvider.getProfile()
      .subscribe(profile => (this.user = profile));
  }

  ngOnDestroy() {
    this.profileSub.unsubscribe();
  }
}
