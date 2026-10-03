import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Experience } from './pages/experience/experience';
import { Projects } from './pages/projects/projects';
import { TechnicalSkills } from './pages/technical-skills/technical-skills';
import { Education } from './pages/education/education';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'experience', component: Experience },
  { path: 'projects', component: Projects },
  { path: 'technical-skills', component: TechnicalSkills },
  { path: 'education', component: Education },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' },
];
