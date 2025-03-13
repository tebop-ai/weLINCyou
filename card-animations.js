import { Animation } from "@nativescript/core";

export function createCardAnimation(view, delay = 0) {
    view.opacity = 0;
    view.scaleX = 0.8;
    view.scaleY = 0.8;

    return new Animation([
        {
            target: view,
            opacity: 1,
            scale: { x: 1, y: 1 },
            duration: 500,
            delay: delay,
            curve: "easeOut"
        }
    ]);
}

export function animateCards(cards) {
    cards.forEach((card, index) => {
        const animation = createCardAnimation(card, index * 200);
        animation.play();
    });
}