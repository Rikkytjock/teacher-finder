import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FooterComponent } from './components/footer/footer.component'
import { HeaderComponent } from './components/header/header.component'
import { RegisterComponent } from './components/register/register.component'

@Component({
  standalone: true,
  imports: [RouterModule, RegisterComponent, HeaderComponent, FooterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'teacher-finder-frontend'
}
