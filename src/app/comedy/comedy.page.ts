import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { ServiceAPIService } from '../service-api.service';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-comedy',
  templateUrl: './comedy.page.html',
  styleUrls: ['./comedy.page.scss'],
})
export class ComedyPage implements OnInit {

  //stores movie data
movieData: any = [];
//Save file for the website
MyStatus:String = "";
//constructors for movie data, storage and nav controll
  constructor(private service: ServiceAPIService, private str: Storage, private navCtrl: NavController) { }

  async openBrowser() {
    await Browser.open({ url: 'https://www.omdbapi.com/?apikey=ac551d97&s=comedy' });
  }
  //Collects all the data from the api on launch
  ngOnInit() {
    this.service.GetComedyData().subscribe(
      (data) => {
      this.movieData = data.Search;
      console.log(this.movieData);
      });
  }


//saves data
  async onSave(){
    await this.str.create();
    await this.str.set("Status", this.MyStatus);
}
//loads previously saved data
async OnLoad(){
  this.MyStatus = await this.str.get("Status");
}
//methods to navigate through the different pages
openWar(){
  this.navCtrl.navigateForward('/home');
}
openHorror(){
  this.navCtrl.navigateForward('/horror');
}
openRomance(){
  this.navCtrl.navigateForward('/romance');
}

}
