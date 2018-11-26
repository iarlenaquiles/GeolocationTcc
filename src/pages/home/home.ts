import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ServiceProvider } from '../../providers/service/service';
import { Http } from '@angular/http';
import { LocationTrackerProvider } from '../../providers/location-tracker/location-tracker';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lat: any;
  lng: any;
  constructor(public navCtrl: NavController,
    public geo: Geolocation,
    private service: ServiceProvider,
    public locationTracker: LocationTrackerProvider) {

  }

  // ionViewDidLoad() {
  //   this.geo.getCurrentPosition()
  //     .then((pos) => {
  //       this.lat = pos.coords.latitude;
  //       this.lng = pos.coords.longitude;
  //       this.service.savePosition(pos).subscribe(data => console.log("Inserted"), erro => console.log(erro));
  //     })
  //     .catch((erro) => console.log(erro));
  // }

  public start() {
    this.locationTracker.startTracking();
  }

  public stop() {
    this.locationTracker.stopTracking();
  }

}
