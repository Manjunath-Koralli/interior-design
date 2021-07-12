import { Component, OnInit } from '@angular/core';
import { faGlobeAsia, faHeadphonesAlt, faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  faGlobeAsia = faGlobeAsia;
  faHeadphonesAlt = faHeadphonesAlt;
  faEnvelopeOpenText = faEnvelopeOpenText;
  constructor() { }

  ngOnInit(): void {
  }

}
