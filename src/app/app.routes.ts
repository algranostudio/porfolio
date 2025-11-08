import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { ProjectEducation } from './projects/project-education/project-education';
import { ProjectFinance } from './projects/project-finance/project-finanza';
import { ProjectHospitality } from './projects/project-hospitality/project-hospitality';
import { ProjectEcommerce } from './projects/project-ecommerce/project-ecommerce';
import { Legal } from './legal/legal';

export const routes: Routes = [
    { path: '',redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'contact', component: Contact },
    { path: 'project-education', component: ProjectEducation },
    { path: 'project-finance', component: ProjectFinance },
    { path: 'project-hospitality', component: ProjectHospitality},
    { path: 'project-ecommerce', component: ProjectEcommerce},
    { path: 'legal', component: Legal},
    { path: '**', redirectTo: 'home' }
];
