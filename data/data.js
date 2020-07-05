import {Business, Category, Product, Receipt, Review} from '../models/models';

export const Products = [
    new Product(
        1,
        2,
        'Gaming PC',
        50000,
        'HP Omen',
        '1'
    )
];

export const receipts = [
    new Receipt(
        '1',
        1,
        [
            1, 2, 1
        ],
        new Date(),
        'Receipt fully paid.'
    )
];

export const category = [
    new Category(
        'laptop'
    )
];

export const businesses = [
    new Business(
        'Whim technologies',
        'Awesome laptops',
        [1],
        [
            new Review(
                '1',
                'Very nice laptop',
                4
            ),
            new Review(
                '2',
                'laptop is overheating',
                1
            ),
            new Review(
                '4',
                'Not bad  laptop',
                3
            )
        ]
    )
]
