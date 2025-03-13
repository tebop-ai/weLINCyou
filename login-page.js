import { Observable } from '@nativescript/core';
import { Frame } from '@nativescript/core';

export function onNavigatingTo(args) {
    const page = args.object;
    const viewModel = new Observable();

    viewModel.email = '';
    viewModel.password = '';

    viewModel.onLogin = async () => {
        console.log('Login attempt:', viewModel.email);
        // TODO: Implement authentication
        Frame.topmost().navigate({
            moduleName: 'views/dashboard/dashboard-page',
            clearHistory: true
        });
    };

    viewModel.onForgotPassword = () => {
        Frame.topmost().navigate('views/auth/forgot-password-page');
    };

    viewModel.onSignUp = () => {
        Frame.topmost().navigate('views/auth/signup-page');
    };

    viewModel.onGoogleLogin = () => {
        console.log('Google login tapped');
    };

    viewModel.onFacebookLogin = () => {
        console.log('Facebook login tapped');
    };

    page.bindingContext = viewModel;
}