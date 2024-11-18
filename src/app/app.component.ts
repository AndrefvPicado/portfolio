import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FontAwesomeModule, MatTooltipModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

  faDownload = faDownload;

  linkedinUrl = 'https://www.linkedin.com/in/andre-picado/';
  githubUrl = 'https://github.com/AndrefvPicado';
  downloadResume() {
    console.log('downloadResumeCalled');
    window.open('assets/andre_picado_resume.pdf', '_blank');
  }
}
