import { createItemListViewModel } from './components/item-list/item-list';

export function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = createItemListViewModel();
}