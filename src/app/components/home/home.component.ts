import { Component, OnInit } from '@angular/core';
import { faGlobe, faMapMarkedAlt, faPhoneVolume, faEnvelope, faClipboardList, faCity, faIgloo} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faGlobe = faGlobe;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhoneVolume = faPhoneVolume;
  faEnvelope = faEnvelope;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faClipboardList = faClipboardList;
  faCity = faCity;
  faIgloo = faIgloo;

  constructor() { }

  ngOnInit(): void {
    
  }

}
