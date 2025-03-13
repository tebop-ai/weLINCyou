import { Observable } from '@nativescript/core';

export class AuthUser extends Observable {
    constructor(email, username, location) {
        super();
        this.email = email;
        this.username = username;
        this.location = location;
        this.verified = false;
        this.premium = false;
        this.swapTokens = 0;
        this.createdAt = new Date();
    }
}