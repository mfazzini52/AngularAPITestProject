import { Component } from '@angular/core';
import { Http } from '@angular/http';


@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    public Arrays: TestData[];

    constructor(http: Http) {
        http.get('https://jsonplaceholder.typicode.com/posts').subscribe(result => {
            this.Arrays = result.json() as TestData[];
        }, error => console.error(error));
    }
}

interface TestData {
    userId: string;
    id: number;
    title: number;
    body: string;
}
