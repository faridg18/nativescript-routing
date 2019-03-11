import { Component, OnInit } from "@angular/core";

@Component({
    selector: "one",
    moduleId: module.id,
    templateUrl: "./one.component.html"
})
export class OneComponent implements OnInit {
    ngOnInit() {
        console.log("one component");
    }
}
