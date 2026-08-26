import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path : '';
		component:Home;
	}
	{
		path: '/login';
		component:Login;
	}
	{
		path: '/user';
		component:Profile;
	}
];
