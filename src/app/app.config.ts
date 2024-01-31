import { provideRouter, RouterModule, Routes } from "@angular/router";
import { ApplicationConfig, NgModule } from "@angular/core";
import { MainPageComponent } from "./page/main-page/main-page.component";
import { ErrorPageComponent } from "./page/error-page/error-page.component";
import { StoragePageComponent } from "./page/storage-page/storage-page.component";

const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'storage', component: StoragePageComponent },
    { path: '**', component: ErrorPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }