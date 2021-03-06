import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'interior-design';
  
  @ViewChild('stickyMenu')
  menuElement!: ElementRef;

  @ViewChild('navigationBar')
  navigationBar!:ElementRef;

  sticky: boolean = false;
  elementPosition: any;

  constructor() {
    
  }

  ngOnInit(): void {
    
  }

  
  ngAfterViewInit(){
    // this.elementPosition = this.menuElement.nativeElement.offsetTop;
    // console.log(this.elementPosition)
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = window.pageYOffset;
      console.log(windowScroll)
      if(windowScroll >= this.elementPosition){
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }

  
  

}
