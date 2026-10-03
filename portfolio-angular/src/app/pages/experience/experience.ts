import { Component } from '@angular/core';
import { Footer } from '../../shared/footer/footer';

interface ExperienceEntry {
  title: string;
  company: string;
  type: string;
  location: string;
  responsibilities: string[];
  period: string;
}

@Component({
  imports: [Footer],
  selector: 'app-experience',
  styleUrl: './experience.css',
  templateUrl: './experience.html',
})
export class Experience {
  readonly experiences: ExperienceEntry[] = [
    {
      title: 'Software Development Intern',
      company: 'Localiza&Co',
      type: 'Internship',
      location: 'Belo Horizonte, Minas Gerais, Brazil · Hybrid',
      responsibilities: [
        'Work on software analysis and development, with a strong focus on back-end development using C# and .NET Core.',
        'Design, build, and deploy applications using Docker and Kubernetes, with a focus on scalability, reliability, and performance.',
        'Manage development workflows using Azure DevOps, including project organization, task tracking, and repositories.',
        'Apply Gitflow for version control and structured team collaboration.',
        'Contribute to event-driven architectures using Event Sourcing and RabbitMQ.',
        'Participate in agile ceremonies and workflows following the Scrum methodology.',
      ],
      period: 'Feb 2026 - Sep 2026 · 8 months',
    },
    {
      title: 'Software Development Intern',
      company: 'Group Software',
      type: 'Internship',
      location: 'Belo Horizonte, Minas Gerais, Brazil · On-site',
      responsibilities: [
        'Worked as a full-stack software development intern, with a primary focus on front-end development using Angular.',
        'Took a leading role in mobile application development using Flutter and Dart.',
        'Developed and maintained cross-platform mobile applications, focusing on performance, usability, and clean code practices.',
        'Developed responsive user interfaces, reusable components, and integrated RESTful APIs.',
        'Contributed to the Java back-end by implementing services and business logic.',
        'Fixed bugs, improved application performance, and refactored code.',
        'Used Git for version control and collaborated with cross-functional teams in an agile environment.',
      ],
      period: 'Sep 2025 - Jan 2026 · 5 months',
    },
    {
      title: 'Undergraduate Research Project',
      company: 'Sólides',
      type: 'Part-time',
      location: 'Belo Horizonte, Minas Gerais, Brazil · Remote',
      responsibilities: [
        'Developed an intelligent agent for the automatic extraction and validation of medical certificates.',
        'Applied artificial intelligence techniques using Python.',
        'Participated in all project phases: problem analysis, solution design, implementation, and validation.',
        'Built document-processing pipelines for data extraction and automation.',
        'Explored information extraction, data reliability, and process automation techniques.',
        'Strengthened skills in applied research, critical analysis, and technical communication.',
      ],
      period: 'Jan 2025 - Dec 2025 · 1 year',
    },
    {
      title: 'Telecommunications Intern',
      company: 'Century',
      type: 'Internship',
      location: 'Contagem, Minas Gerais, Brazil · Hybrid',
      responsibilities: [
        'Worked in networking and telecommunications, supporting infrastructure operations.',
        'Participated in the deployment of corporate voice systems, ensuring reliable and efficient communication.',
        'Performed proactive network monitoring to identify and resolve potential issues.',
        'Assisted with firewall configuration and maintenance, contributing to corporate network security.',
        'Supported service continuity and the protection of sensitive organizational data.',
      ],
      period: 'Apr 2024 - Apr 2025 · 1 year 1 month',
    },
  ];
}
