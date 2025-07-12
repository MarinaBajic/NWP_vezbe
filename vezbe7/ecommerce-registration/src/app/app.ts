import { Component, NgModule, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Registration } from './registration/registration';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Registration],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecommerce-registration');
}
