import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  public arrayExperience = signal([
    {
      summary: {
        strong: '',
        p: '',
      },
      text: '',
    },
  ]);
}
