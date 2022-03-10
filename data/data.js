import {Business, Category, Product, Receipt, Review} from '../models/models';

export const Products = [
    new Product(
        1,
        2,
        'Gaming PC',
        50000,
        'HP Omen'
    ),
    new Product(
        1,
        2,
        'Ultra-book',
        80000,
        'HP Envy 13'
    ),
    new Product(
        1,
        1,
        'Budget PC',
        75000,
        'HP Pavilion'
    ),
    new Product(
        1,
        2,
        'Ultra-book',
        80000,
        'Dell XPS'
    ),
    new Product(
        1,
        1,
        'Ultra-book',
        150000,
        'Huawei Matebook'
    ),
    new Product(
        2,
        1,
        'Awesome cellphone',
        15000,
        'Nokia 6 plus'
    )
];

export const receipts = [
    new Receipt(
        1,
        1,
        [
            1, 2, 1
        ],
        new Date(),
        'Receipt fully paid.'
    ),
    new Receipt(
        2,
        1,
        [
            1, 2, 1, 3, 4
        ],
        new Date(),
        'Receipt fully paid.'
    )
];

export const category = [
    new Category(
        'laptop'
    ),
    new Category(
        'cell phones'
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
    ),
    new Business(
        'Best PC technologies',
        'Good laptops',
        [1],
        [
            new Review(
                '1',
                'Good customer service',
                4
            ),
            new Review(
                '2',
                'Good people to work with.',
                1
            ),
            new Review(
                '4',
                'Perfect',
                2
            )
        ]
    )
]
