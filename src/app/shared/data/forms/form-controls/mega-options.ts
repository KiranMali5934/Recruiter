import { VariableBinding } from "@angular/compiler"

export const VariationRadiopayment = [
    {
        id: 'ptm11',
        lable: 'BOB',
        img: 'assets/images/ecommerce/card.png',
        check: false

    },
    {
        id: 'ptm22',
        lable: 'MasterCard',
        img: 'assets/images/ecommerce/mastercard.png',
        check: true
    },
    {
        id: 'ptm33',
        lable: 'Paypal',
        img: 'assets/images/ecommerce/paypal.png',
        check: false
    },
    {
        id: 'ptm44',
        lable: 'VISA',
        img: 'assets/images/ecommerce/visa.png',
        check: false
    },
]

export const VariationsWebdesign = [
    {
        lable: 'A.HTML',
        id: 'ptm101',
        check: false
    },
    {
        lable: 'B. CSS',
        id: 'ptm201',
        check: false
    },
    {
        lable: 'C. Javascript',
        id: 'ptm301',
        check: true
    },
    {
        lable: 'D. Above the all',
        id: 'ptm401',
        check: false
    },
];

export const variationsIcons = [
    {
        lable: 'The notification icon displayed new messages.',
        icon: 'notification',
        id: 'ptm100',
        check: false,
        class: 'danger'
    },
    {
        lable: 'The download icon indicated completion.',
        icon: 'stroke-calendar',
        id: 'ptm200',
        check: false,
        class: 'success'

    },
    {
        lable: 'The tag icon allowed easy categorization.',
        icon: 'tag',
        id: 'ptm300',
        check: true,
        class: 'dark'

    },
    {
        lable: 'The email icon was inaccessibly located.',
        icon: 'stroke-email',
        id: 'ptm400',
        check: false,
        class: 'primary'
    },
]

export const checkBox = [
    {
        lable: 'Reading',
        id: 'check-a',
        class: 'success',
        check: false
    },
    {
        lable: 'Watching TV',
        id: 'check-b',
        class: 'success',
        check: true
    },
    {
        lable: 'Listening to music',
        id: 'check-c',
        class: 'danger',
        check: false
    },
    {
        lable: 'Playing video games',
        id: 'check-d',
        class: 'danger',
        check: false
    },
    {
        lable: 'Painting/Drawing',
        id: 'check-e',
        class: 'success',
        check: false
    },
]
export const themeSales = [
    {
        list: 'Voxo',
        sales: '270 sales',
        check: false
    },
    {
        list: 'Riho',
        sales: '4.8K Sales',
        check: false
    },
    {
        list: 'Multikart',
        sales: '2.6k Sales',
        check: false
    },
    {
        list: 'Viho',
        sales: '2k Sales',
        check: true
    }
]
export const inlineStyle = [
    {
        lable: 'Estimated 14-20 Day Shipping ( Duties end taxes may be due upon delivery )',
        title: 'COD',
        digit: '50 INR',
        class: 'warning',
        id: 'radio19',
        check: false
    },
    {
        lable: 'Estimated 1 Day Shipping ( Duties end taxes may be due upon delivery )',
        title: 'Fast',
        digit: '100 INR',
        class: 'secondary',
        id: 'radio20',
        check: true
    },
    {
        lable: 'Estimated 3 Day Shipping ( Duties end taxes may be due upon delivery )',
        title: 'Standard',
        digit: '80 INR',
        class: 'secondary',
        id: 'radio21',
        check: true
    },
    {
        lable: 'Estimated 15 Day Shipping ( Duties end taxes may be due upon delivery )',
        title: 'Local',
        digit: 'Free',
        class: 'warning',
        id: 'radio22',
        check: true
    },
]

export const VerticalStylel = [
    {
        lable: 'Estimated 10 to 15 Day Shipping ( Duties end tax may be due delivery )',
        title: 'COD',
        digit: '50 INR',
        class: 'primary',
        id: 'radio23',
        check: false
    },
    {
        lable: 'Estimated 10 to 12 Day Shipping ( Duties end tax may be due delivery )',
        title: 'Fast',
        digit: '100 INR',
        class: 'secondary',
        id: 'radio24',
        check: true
    },
    {
        lable: 'Estimated 3 to 5 Day Shipping ( Duties end tax may be due delivery )',
        title: 'STANDARD',
        digit: '80 INR',
        class: 'success',
        id: 'radio25',
        check: true
    },
    {
        lable: 'Estimated 3 to 5 Day Shipping ( Duties end taxes may be due upon delivery )',
        title: 'Local',
        digit: 'Free',
        class: 'info',
        id: 'radio26',
        check: true
    },
]


export const HorizontalStylel = [
    {
        title: 'Delivery Option',
        item: [
            {
                border: 'primary',
                badge: 'COD',
                digits: '50 INR',
                id: 'radio30',
                value: true,
                des: 'Estimated 5 Day Shipping ( Duties end tax may be due delivery )',
            },
            {
                border: 'secondary',
                badge: 'Fast',
                digits: '100 INR',
                id: 'radio31',
                value: false,
                des: 'Estimated 1 Day Shipping ( Duties end tax may be due delivery )',
                class: 'offset-sm-3'
            },
        ]
    },
    // {
    //     title: 'Delivery Option',
    //     item: [
    //         {
    //             border: 'success',
    //             badge: 'Pixelstrap',
    //             digits: '250 INR',
    //             id: 'radio32',
    //             value: true,
    //             des: 'Estimated 5 Day Shipping ( Duties end tax may be due delivery )'
    //         },
    //         {
    //             border: 'info',
    //             badge: 'Tivo',
    //             digits: '150 INR',
    //             id: 'radio33',
    //             value: false,
    //             des: 'Estimated 1 Day Shipping ( Duties end tax may be due delivery )',
    //             class: 'offset-sm-3'
    //         },
    //     ]
    // },
]

