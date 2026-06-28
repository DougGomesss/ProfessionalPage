import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-back-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './back-button.html',
  styleUrls: ['./back-button.scss'],
})
export class BackButtonComponent {}
