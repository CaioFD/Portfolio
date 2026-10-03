import { Component, input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  imports: [NgTemplateOutlet],
  selector: 'app-info-card',
  styleUrl: './info-card.css',
  templateUrl: './info-card.html',
})
export class InfoCard {
  readonly icon = input.required<string>();
  readonly title = input.required<string>();
  readonly lines = input<string[]>([]);
  readonly href = input<string | null>(null);
}
