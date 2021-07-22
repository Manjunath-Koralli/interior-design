import { Component, ElementRef, OnInit } from '@angular/core';
import { faGlobe, faMapMarkedAlt, faPhoneVolume, faEnvelope, faClipboardList, faCity, faIgloo} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { transition } from '@angular/animations';

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

  constructor(private el: ElementRef) { 
      
  }

  ngOnInit(): void {

    setTimeout(() => {
      let paraBox = this.el.nativeElement.querySelector('.first-c-caption');
      // paraBox.style.transform.translateY(-50%);
      // transform: translateY(-50%);
      paraBox.style.display = 'block'
    },2000)
      
  }





}
