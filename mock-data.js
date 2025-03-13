import { Item } from '../models/item';
import { User } from '../models/user';

export const mockItems = [
    new Item(
        'Mountain Bike',
        'Trek mountain bike in good condition',
        4500,
        'Sports',
        'Good',
        'https://example.com/bike.jpg'
    ),
    new Item(
        'PlayStation 4',
        'PS4 500GB with one controller',
        3800,
        'Electronics',
        'Used',
        'https://example.com/ps4.jpg'
    )
];

export const mockUsers = [
    new User('JohnD', 'Cape Town'),
    new User('SarahM', 'Johannesburg')
];