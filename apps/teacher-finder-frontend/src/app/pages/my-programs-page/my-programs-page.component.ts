import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-my-programs-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './my-programs-page.component.html',
  styleUrl: './my-programs-page.component.scss'
})
export class MyProgramsPageComponent {}
