import { Component, ViewChild, ElementRef } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'internet-banking';



  // Antes
  // @ViewChild('myButton') Button;

  // Agora
  @ViewChild('myButton', {static: false}) button: ElementRef;

  ngAfterViewInit() {
    console.log(this.button.nativeElement.innerHTML);
  }

}
