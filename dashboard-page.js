import { Observable } from '@nativescript/core';
import { Frame } from '@nativescript/core';

export function onNavigatingTo(args) {
    const page = args.object;
    const viewModel = new Observable();

    viewModel.searchQuery = '';
    
    viewModel.onSearch = (args) => {
        console.log('Searching for:', viewModel.searchQuery);
        // TODO: Implement search functionality
    };

    viewModel.onClearSearch = () => {
        viewModel.searchQuery = '';
    };

    viewModel.onAddItem = () => {
        Frame.topmost().navigate('views/items/add-item-page');
    };

    page.bindingContext = viewModel;
}