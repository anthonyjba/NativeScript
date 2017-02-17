import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Config } from "../config";
import { Grocery } from "./grocery"; 

@Injectable()
export class GroceryListService {
    constructor(private http: Http) {}

    load() {
        let header = new Headers();
        //header.append("Authorization", "Bearer " + Config.token);
        header.append("Content-Type", "application/json");
        Config.apiUrl = "http://10.57.224.240/WSServicios/Construcciones.svc/BuscarConstrucciones?delegacion=45&municipio=900&pCatastral1=0018001&pCatastral2=VK1102S&cargo=1";
        // + "Groceries"  --> grocery.Id, grocery.Name

        return this.http.get(Config.apiUrl, {
            headers: header
        })
        .map(res => res.json())
        .map(data => {
            let groceryList = [];
            data.forEach((grocery) => {
                //console.dump(grocery);
                groceryList.push(new Grocery(grocery.ORDEN, grocery.DEN_ACTIVIDAD_DESTINO))
            })
            return groceryList;
        })
        .catch(this.handleErrors);
    }

    add(name: string) {
        let headers = new Headers();
        headers.append("Authorization", "Bearer " + Config.token);
        headers.append("Content-Type", "application/json");

        return this.http.post(
            Config.apiUrl + "Groceries",
            JSON.stringify({ Name: name }),
            { headers: headers }
        )
        .map(res => res.json())
        .map(data => {
            return new Grocery(data.Result.Id, name)
        })
        .catch(this.handleErrors);
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}