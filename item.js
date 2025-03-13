import { Observable } from '@nativescript/core';

export class Item extends Observable {
    constructor(name, description, estimatedValue, category, condition, imageUrl) {
        super();
        this.name = name;
        this.description = description;
        this.estimatedValue = estimatedValue; // in ZAR
        this.category = category;
        this.condition = condition;
        this.imageUrl = imageUrl;
        this.dateAdded = new Date();
    }
}