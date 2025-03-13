import { Observable } from '@nativescript/core';
import { Frame } from '@nativescript/core';

export function onNavigatingTo(args) {
    const page = args.object;
    const viewModel = new Observable();

    viewModel.fullName = '';
    viewModel.email = '';
    viewModel.password = '';
    viewModel.location = '';

    viewModel.onSignUp = async () => {
        console.log('Sign up attempt:', viewModel.email);
        // TODO: Implement Firebase authentication
        Frame.topmost().navigate({
            moduleName: 'views/dashboard/dashboard-page',
            clearHistory: true
        });
    };

    viewModel.onLogin = () => {
        Frame.topmost().navigate('views/auth/login-page');
    };

    viewModel.onGoogleSignUp = () => {
        console.log('Google sign up tapped');
    };

    viewModel.onFacebookSignUp = () => {
        console.log('Facebook sign up tapped');
    };

    page.bindingContext = viewModel;
}