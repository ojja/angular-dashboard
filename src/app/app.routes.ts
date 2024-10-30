import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthenticatedLayoutComponent } from './authenticated-layout/authenticated-layout.component';
import { AuthGuard } from './core/guards/auth.guard';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { CompanyManagementComponent } from './shared/components/company-management/company-management.component';
import { ManageCompaniesComponent } from './shared/components/manage-companies/manage-companies.component';
import { ManageBranchesComponent } from './shared/components/manage-branches/manage-branches.component';
import { ReportsComponent } from './shared/components/reports/reports.component';
import { CoursesManagementComponent } from './shared/components/courses-management/courses-management.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthenticatedLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'company-management', component: CompanyManagementComponent },
      { path: 'manage-companies', component: ManageCompaniesComponent },
      { path: 'manage-branches', component: ManageBranchesComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'courses-management', component: CoursesManagementComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: 'login', component: LoginComponent }
];
