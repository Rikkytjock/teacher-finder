import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { RegisterComponent } from './components/register/register.component'

@Component({
  standalone: true,
  imports: [RouterModule, RegisterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'teacher-finder-frontend'
}
