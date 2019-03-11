import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";

const routes: Routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    {
        path: "items",
        component: AppComponent,
        loadChildren: "./one/one.module#OneModule"
    }
    // { path: "item/:id", component: ItemDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
