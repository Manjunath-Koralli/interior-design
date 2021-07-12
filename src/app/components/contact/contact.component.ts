import { Component, OnInit } from '@angular/core';
import { faGlobeAsia, faHeadphonesAlt, faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  faGlobeAsia = faGlobeAsia;
  faHeadphonesAlt = faHeadphonesAlt;
  faEnvelopeOpenText = faEnvelopeOpenText;
  constructor() { }

  ngOnInit(): void {
  }

}
