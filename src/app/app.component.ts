import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TestButtonComponent} from '@components/test-button/test-button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'storybookrepro';
}
