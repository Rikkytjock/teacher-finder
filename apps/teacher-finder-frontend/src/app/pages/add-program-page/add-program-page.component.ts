import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-add-program-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './add-program-page.component.html',
  styleUrl: './add-program-page.component.scss'
})
export class AddProgramPageComponent {}
