import { Observable } from '@nativescript/core';

export class User extends Observable {
    constructor(username, location) {
        super();
        this.username = username;
        this.location = location;
        this.rating = 5.0;
        this.itemsListed = [];
        this.successfulSwaps = 0;
    }
}