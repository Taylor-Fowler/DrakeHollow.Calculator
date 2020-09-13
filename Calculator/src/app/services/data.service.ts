import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IGameData } from "../interfaces/igame-data";

@Injectable({
    providedIn: "root"
})
export class DataService {

    private data: IGameData;

    constructor(private httpClient: HttpClient) {
        this.httpClient.get<IGameData>("assets/game-data.json")
            .subscribe(data => this.initialiseData(data));
    }

    private initialiseData(data: IGameData): void {
        this.data = data;
        this.data.camp.buildingCategories.forEach(building => console.log(building));
    }

}
