import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { OneComponent } from "./one.component";
// import { ItemDetailComponent } from "./item/item-detail.component";f

const routes: Routes = [
    // { path: "", redirectTo: "/one", pathMatch: "full" },
    { path: "", component: OneComponent },
    // { path: "item/:id", component: ItemDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class OneRoutingModule { }
