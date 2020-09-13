import { Component } from "@angular/core";
import { DataService } from "./services/data.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {
    title = "Drake Hollow Calculator";


    constructor(private dataService: DataService) { }
}
