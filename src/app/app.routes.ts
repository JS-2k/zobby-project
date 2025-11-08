import { Routes } from '@angular/router';
import { Home } from './Components/home/home';
import { Explore } from './Components/explore/explore';
import { Profile } from './Components/profile/profile';
import { Mentors } from './Providers/mentors/mentors';

export const routes: Routes = [
    {path : 'home', title:'Zobby | Home', component : Home},
    {path : 'explore', title:'Zobby | Explore', component : Explore},
    {path : 'profile', title:'Zobby | Profile', component : Profile},
    {path : 'mentors' , title:'Zobby | Mentors' , component : Mentors}
];
