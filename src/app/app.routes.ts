import { DirectoryComponent } from "./directory/directory.component";
import { HomeComponent } from "./home/home.component";
import { Routes, RouterModule } from "@angular/router";

// routes
const APP_ROUTES = [
	{ path: 'directory', component: DirectoryComponent },
	{ path: '', component: HomeComponent }
];

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(APP_ROUTES);