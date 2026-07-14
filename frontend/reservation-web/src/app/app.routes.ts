import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',redirectTo:'booking',pathMatch:'full'},
    {path: 'booking', loadComponent: () => import('./features/booking/pages/booking-page/booking-page').then(m => m.BookingPage)},
    {path: 'my-reservations', loadComponent: () => import('./features/booking/pages/my-reservations-page/my-reservations-page').then(m => m.MyReservationsPage)},
    // {path: 'admin', loadComponent: () => import('./features/admin/pages/admin-page/admin-page').then(m => m.AdminPage)},
];
