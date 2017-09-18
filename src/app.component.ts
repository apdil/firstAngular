import { Component } from '@angular/core';


@Component({
    selector: 'mon-app', template: '{{message}}'
})
export class AppComponent {
    private message:string = 'un truk';
}