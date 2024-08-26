import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-form-test-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './form-test-page.component.html',
  styleUrl: './form-test-page.component.scss'
})
export class FormTestPageComponent {}
