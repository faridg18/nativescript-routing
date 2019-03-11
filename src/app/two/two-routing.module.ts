import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { TwoComponent } from "./two.component";
// import { ItemDetailComponent } from "./item/item-detail.component";f

const routes: Routes = [
    { path: "", redirectTo: "/two", pathMatch: "full" },
    { path: "two", component: TwoComponent },
    // { path: "item/:id", component: ItemDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    // exports: [NativeScriptRouterModule]
})
export class TwoRoutingModule { }
