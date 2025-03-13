import { Observable } from '@nativescript/core';
import { mockItems } from '../../shared/data/mock-data';

export function createItemListViewModel() {
    const viewModel = new Observable();
    viewModel.items = mockItems;

    viewModel.onItemTap = (args) => {
        const tappedItem = viewModel.items[args.index];
        console.log(`Tapped on ${tappedItem.name}`);
        // Navigate to item details page (to be implemented)
    };

    return viewModel;
}