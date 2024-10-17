import { Routes } from '@angular/router';
import { TabellaComponent } from './pages/tabella/tabella.component';
import { IndexComponent } from './pages/index/index.component';
import { SignalComponent } from './pages/signal/signal.component';

export const routes: Routes = [
    {path:'', component: IndexComponent},
    {path:'tabella', component: TabellaComponent},
    {path:'signal', component: SignalComponent},
];
