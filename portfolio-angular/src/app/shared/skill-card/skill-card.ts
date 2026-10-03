import { Component, input } from '@angular/core';

export interface SkillTag {
  label: string;
  featured?: boolean;
}

@Component({
  imports: [],
  selector: 'app-skill-card',
  styleUrl: './skill-card.css',
  templateUrl: './skill-card.html',
})
export class SkillCard {
  readonly icon = input.required<string>();
  readonly title = input.required<string>();
  readonly tags = input<SkillTag[]>([]);
  readonly description = input.required<string>();
}
