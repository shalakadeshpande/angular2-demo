import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editableFlag = false;
  title = 'Lets get started!';

  makeTitleEditable() {
    this.editableFlag = !this.editableFlag;
  }
}
