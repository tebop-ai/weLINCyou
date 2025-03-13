import { Observable } from '@nativescript/core';
import { Frame } from '@nativescript/core';
import { animateCards } from '../../shared/animations/card-animations';

export function onNavigatingTo(args) {
    const page = args.object;
    const viewModel = new Observable();

    viewModel.onSignUp = () => {
        Frame.topmost().navigate('views/auth/signup-page');
    };

    viewModel.onLogin = () => {
        Frame.topmost().navigate('views/auth/login-page');
    };

    page.bindingContext = viewModel;
}

export function onLoaded(args) {
    const page = args.object;
    const featureCards = page.getElementsByClassName('feature-card');
    animateCards(featureCards);
}