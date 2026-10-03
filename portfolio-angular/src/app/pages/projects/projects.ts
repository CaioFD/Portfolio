import { Component } from '@angular/core';
import { Footer } from '../../shared/footer/footer';
import { InfoCard } from '../../shared/info-card/info-card';

interface ProjectEntry {
  title: string;
  description: string;
  url: string;
}

@Component({
  imports: [Footer, InfoCard],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects {
  readonly projects: ProjectEntry[] = [
    {
      title: 'TI1-GoPlay:',
      description:
        'A web project that helps people find others with similar interests in sports and connect with like-minded people.',
      url: 'https://github.com/ICEI-PUC-Minas-PMGCC-TI/tiaw-pmg-cc-t-20222-01-procurar-pessoas-para-esportes',
    },
    {
      title: 'TI2-MoveSmart:',
      description:
        'A web project focused on improving the public transportation user experience, with an emphasis on back-end development.',
      url: 'https://github.com/ICEI-PUC-Minas-CC-TI/plmg-cc-ti2-2024-1-g02-movesmart',
    },
    {
      title: 'LDDM-ShowCoin:',
      description:
        'A mobile app project that lets you manage your finances conveniently and automatically by scanning receipts and tracking expenses intelligently.',
      url: 'https://github.com/vinimiraa/LDDM-ShowCoin',
    },
    {
      title: 'TI4-Echoes of Eldra:',
      description:
        'A tactical roguelike game featuring adaptive AI and procedurally generated mazes.',
      url: 'https://github.com/ICEI-PUC-Minas-CC-TI/plmg-cc-ti4-2025-1-g03-echoes-of-eldra',
    },
    {
      title: 'Image design and analysis',
      description:
        'A desktop application for BIRADS-classified mammogram analysis, featuring automatic breast segmentation, ResNet-18 and EfficientNet classification, model evaluation, and Grad-CAM visualizations in a Tkinter interface.',
      url: 'https://github.com/CaioFD/PAI',
    },
  ];
}
