import { Component, OnInit } from '@angular/core';
import { faGlobeAsia, faHeadphonesAlt, faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  faGlobeAsia = faGlobeAsia;
  faHeadphonesAlt = faHeadphonesAlt;
  faEnvelopeOpenText = faEnvelopeOpenText;
  constructor() { }

  ngOnInit(): void {
  }

}
