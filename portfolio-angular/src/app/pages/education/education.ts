import { Component } from '@angular/core';
import { Footer } from '../../shared/footer/footer';
import { InfoCard } from '../../shared/info-card/info-card';

interface EducationEntry {
  title: string;
  institution: string;
  period: string;
  status: string;
}

@Component({
  imports: [Footer, InfoCard],
  selector: 'app-education',
  styleUrl: './education.css',
  templateUrl: './education.html',
})
export class Education {
  readonly education: EducationEntry[] = [
    {
      title: 'High School',
      institution: 'Sesi - Alvimar Carneiro de Resende',
      period: '2019 - 2021',
      status: 'Completed',
    },
    {
      title: 'Technical Diploma - Electronics',
      institution: 'Senai - Alvimar Carneiro de Resende',
      period: '2019 - 2021',
      status: 'Completed',
    },
    {
      title: 'Computer Science',
      institution: 'Pontifical Catholic University of Minas Gerais (PUC Minas)',
      period: '2022 - Present',
      status: 'In progress',
    },
    {
      title: 'Academic Exchange Program',
      institution: 'Epitech - Paris, France',
      period: 'September 2026',
      status: 'In progress',
    },
  ];
}
