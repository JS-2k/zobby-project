import { Routes } from '@angular/router';
import { Home } from './Components/home/home';
import { Explore } from './Components/explore/explore';
import { Profile } from './Components/profile/profile';
import { Mentors } from './Providers/mentors/mentors';
import { Sessions } from './Components/sessions/sessions';
import { Messages } from './Components/messages/messages';
import { Networks } from './Components/networks/networks';
import { Dashboard } from './Providers/dashboard/dashboard';
import { Notifications } from './Components/notifications/notifications';
import { MyBookmarks } from './Components/Library/my-bookmarks/my-bookmarks';
import { MySheets } from './Components/Library/my-sheets/my-sheets';
import { MyCommunities } from './Components/Library/my-communities/my-communities';

export const routes: Routes = [
    {path : '', title:'Home | Zobby', component : Home},
    {path : 'home', title:'Home | Zobby', component : Home},
    {path : 'explore', title:'Explore | Zobby', component : Explore},
    {path : 'profile', title:'Profile | Zobby', component : Profile},
    {path : 'mentors' , title:'Mentors | Zobby' , component : Mentors},
    {path : 'sessions' , title:'Sessions | Zobby' , component : Sessions},
    {path : 'messages' , title: 'Messages | Zobby', component: Messages},
    {path : 'networks' , title: 'Networks | Zobby', component: Networks},
    {path : 'dashboard' , title: 'Dashboard | Zobby', component: Dashboard},
    {path : 'notifications' , title: 'Notifications | Zobby', component: Notifications},
    {path : 'bookmarks' , title: 'My Bookmarks | Zobby', component: MyBookmarks},
    {path : 'sheets' , title: 'My Sheets | Zobby', component: MySheets},
    {path : 'communities' , title: 'My Communities | Zobby', component: MyCommunities},
];
