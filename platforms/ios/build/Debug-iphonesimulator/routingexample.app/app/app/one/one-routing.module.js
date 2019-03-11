"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var one_component_1 = require("./one.component");
// import { ItemDetailComponent } from "./item/item-detail.component";f
var routes = [
    // { path: "", redirectTo: "/one", pathMatch: "full" },
    { path: "", component: one_component_1.OneComponent },
];
var OneRoutingModule = /** @class */ (function () {
    function OneRoutingModule() {
    }
    OneRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], OneRoutingModule);
    return OneRoutingModule;
}());
exports.OneRoutingModule = OneRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib25lLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUd2RSxpREFBK0M7QUFDL0MsdUVBQXVFO0FBRXZFLElBQU0sTUFBTSxHQUFXO0lBQ25CLHVEQUF1RDtJQUN2RCxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLDRCQUFZLEVBQUU7Q0FFeEMsQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBPbmVDb21wb25lbnQgfSBmcm9tIFwiLi9vbmUuY29tcG9uZW50XCI7XG4vLyBpbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnRcIjtmXG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIC8vIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvb25lXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogT25lQ29tcG9uZW50IH0sXG4gICAgLy8geyBwYXRoOiBcIml0ZW0vOmlkXCIsIGNvbXBvbmVudDogSXRlbURldGFpbENvbXBvbmVudCB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgT25lUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==