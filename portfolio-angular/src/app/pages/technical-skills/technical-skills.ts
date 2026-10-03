import { Component } from '@angular/core';
import { Footer } from '../../shared/footer/footer';
import { SkillCard, SkillTag } from '../../shared/skill-card/skill-card';

interface SkillGroup {
  icon: string;
  title: string;
  tags: SkillTag[];
  description: string;
}

@Component({
  imports: [Footer, SkillCard],
  selector: 'app-technical-skills',
  styleUrl: './technical-skills.css',
  templateUrl: './technical-skills.html',
})
export class TechnicalSkills {
  readonly skills: SkillGroup[] = [
    {
      icon: 'bx bx-server',
      title: 'Backend',
      tags: [
        { label: 'C# / .NET', featured: true },
        { label: 'Java' },
        { label: 'Go' },
        { label: 'C' },
      ],
      description: 'Professional backend work with C#/.NET and Java.',
    },
    {
      icon: 'bx bx-code-alt',
      title: 'Frontend',
      tags: [{ label: 'Angular', featured: true }],
      description: 'Professional experience focused on frontend development.',
    },
    {
      icon: 'bx bx-mobile-alt',
      title: 'Mobile',
      tags: [{ label: 'Flutter / Dart', featured: true }, { label: 'Android' }],
      description: 'Led cross-platform mobile app development.',
    },
    {
      icon: 'bx bx-brain',
      title: 'Artificial Intelligence',
      tags: [{ label: 'Python' }],
      description:
        'Applied in an academic project for document extraction and validation.',
    },
  ];
}
