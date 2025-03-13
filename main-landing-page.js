import { Observable } from '@nativescript/core';
import { Frame } from '@nativescript/core';

export function onNavigatingTo(args) {
    const page = args.object;
    const viewModel = new Observable();

    viewModel.onBuySellTap = () => {
        // Coming soon functionality - can show a toast or alert
        alert('Coming Soon! Our marketplace feature is under development.');
    };

    viewModel.onSwapTap = () => {
        Frame.topmost().navigate('views/landing/landing-page');
    };

    page.bindingContext = viewModel;
}