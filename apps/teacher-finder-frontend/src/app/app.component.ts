import { Component } from '@angular/core'
import { RouterModule, RouterOutlet } from '@angular/router'
import { FooterComponent } from './components/footer/footer.component'
import { HeaderComponent } from './components/header/header.component'
import { ToolbarComponent } from './components/toolbar/toolbar.component'

@Component({
  standalone: true,
  imports: [RouterModule, RouterOutlet, HeaderComponent, ToolbarComponent, FooterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'teacher-finder-frontend'
}
