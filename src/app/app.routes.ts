import { Routes } from '@angular/router';
import { MindFlowComponent } from './components/mind-flow/mind-flow.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { FormularioMindComponent } from './components/mind-flow/formulario-mind/formulario-mind.component';

export const routes: Routes = [
    {
        path: '',
        component: MindFlowComponent
    },
    {
        path: 'adicionarMind',
        component: FormularioMindComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'registro',
      component: RegistroComponent

    },
    {
      path: 'principal',
      component: PrincipalComponent
    }
];
