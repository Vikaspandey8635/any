import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
  title = 'if-else-condition';

  user=['vikas','uttam','pintu','ram','shivankar'];
  
  
  oncreateblock(){
    this.isvalid=true;
  }
  isvalid:boolean= false;

 
}
