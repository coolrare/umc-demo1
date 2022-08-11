import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'umc-demo1';
  sitelogo = '/assets/images/logo.png';

  constructor() { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.title = 'The Will Will Web';
    // }, 2000);
  }

  changeTitle($event: PointerEvent | MouseEvent) {
    console.log($event);
    if ($event.ctrlKey) {
      this.title = 'The Will Will Web';
    }
  }

}
