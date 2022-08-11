import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnChanges {
  showHeader = true;
  keyword = 'Test';

  data: any[] = [];

  constructor(private datasvc: DataService) {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  }

  ngOnInit(): void {
    this.datasvc.loadPosts().subscribe(results => this.data = results);
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      const chng = changes[propName];
      if (chng.isFirstChange()) {
        // before ngOnInit
      } else {
        // after ngOnInit
      }
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
    }
  }

  sendDelete(id: number) {
    console.log('You deleted id = ' + id);
  }
}
