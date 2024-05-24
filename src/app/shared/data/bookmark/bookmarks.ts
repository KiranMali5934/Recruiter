export interface Allbookmark {
    title: string;
    title_id: number;
    status: boolean;
    data: {
        id: number,
        image: string,
        title: string,
        url: string,
        desc: string,
        collection: string;
        favourite: boolean;
    }[]
}

export interface bookmarkDataInterface {
    id: number,
    image: string,
    title: string,
    url: string,
    desc: string,
    collection: string;
    favourite: boolean;
}


export const allBookmarkData: Allbookmark[] = [
    {
        title: 'Created By Me',
        title_id: 1,
        status: true,
        data: [
            {
                id: 1,
                image: 'assets/images/lightgallry/01.jpg',
                title: 'Admin Template',
                url: 'http://admin.pixelstrap.com//ltr/landing-page.html',
                desc: 'is beautifully crafted, clean and modern designed admin theme with 6 different demos and light - dark versions.',
                collection: 'General',
                favourite: false,
            },
            {
                id: 2,
                image: 'assets/images/lightgallry/02.jpg',
                title: 'Universal Template',
                url: 'https://angular.pixelstrap.com/universal/landing',
                desc: 'Universal is beautifully crafted, clean and modern designed admin theme',
                collection: 'General',
                favourite: false,
            },
            {
                id: 3,
                image: 'assets/images/lightgallry/03.jpg',
                title: 'Angular Theme',
                url: 'https://angular.pixelstrap.com/dunzo/landing',
                desc: 'dunzo is beautifully crafted, clean and modern designed admin theme',
                collection: 'Fs',
                favourite: false,
            },
            {
                id: 4,
                image: 'assets/images/lightgallry/04.jpg',
                title: 'Multikart Admin',
                url: 'http://themes.pixelstrap.com/multikart/back-end/index.html',
                desc: 'Multikart Admin is modern designed admin theme',
                collection: 'General',
                favourite: false,
            },
            {
                id: 5,
                image: 'assets/images/lightgallry/05.jpg',
                title: 'Ecommerece theme',
                url: 'http://themes.pixelstrap.com/multikart',
                desc: 'Multikart HTML template is an apparently simple but highly functional tempalate designed for creating a flourisahing online business.',
                collection: 'General',
                favourite: false,
            },
            {
                id: 6,
                image: 'assets/images/lightgallry/06.jpg',
                title: 'Tovo app landing page',
                url: 'http://vue.pixelstrap.com/tovo/home-one',
                desc: 'Amazing Landing Page With Easy Customization',
                collection: 'Fs',
                favourite: false,
            }
        ]
    },
    {
        title: 'Favourites',
        title_id: 2,
        status: false,
        data: []
    },
    {
        title: 'Shared With Me',
        title_id: 3,
        status: false,
        data: []
    },
    {
        title: 'My Bookmark',
        title_id: 4,
        status: false,
        data: [
            {
                id: 1,
                image: 'assets/images/lightgallry/07.jpg',
                title: 'Admin Template',
                url: 'http://admin.pixelstrap.com//ltr/boho/landing-page.html',
                desc: 'is beautifully crafted, clean and modern designed admin theme with 6 different demos and light - dark versions.',
                collection: 'General',
                favourite: false,
            },
            {
                id: 2,
                image: 'assets/images/lightgallry/07.jpg',
                title: 'Universal Template',
                url: 'https://angular.pixelstrap.com/universal/landing',
                desc: 'Universal is beautifully crafted, clean and modern designed admin theme',
                collection: 'General',
                favourite: false,
            },
            {
                id: 3,
                image: 'assets/images/lightgallry/07.jpg',
                title: 'Angular Theme',
                url: 'https://angular.pixelstrap.com/boho/landing',
                desc: 'cuba is beautifully crafted, clean and modern designed admin theme',
                collection: 'Fs',
                favourite: false,
            },
            {
                id: 4,
                image: 'assets/images/lightgallry/07.jpg',
                title: 'Multikart Admin',
                url: 'http://themes.pixelstrap.com/multikart/back-end/index.html',
                desc: 'Multikart Admin is modern designed admin theme',
                collection: 'General',
                favourite: false,
            },
            {
                id: 5,
                image: 'assets/images/lightgallry/07.jpg',
                title: 'Ecommerece theme',
                url: 'http://themes.pixelstrap.com/multikart',
                desc: 'Multikart HTML template is an apparently simple but highly functional tempalate designed for creating a flourisahing online business.',
                collection: 'General',
                favourite: false,
            },
            {
                id: 6,
                image: 'assets/images/lightgallry/07.jpg',
                title: 'Tovo app landing page',
                url: 'http://vue.pixelstrap.com/tovo/home-one',
                desc: 'Amazing Landing Page With Easy Customization',
                collection: 'Fs',
                favourite: false,
            }
        ]
    }
]

export const tagData: Allbookmark[] = [
    {
        title: 'Notification',
        title_id: 1,
        status: false,
        data: []
    },
    {
        title: 'Newsletter',
        title_id: 2,
        status: false,
        data: []
    },
    {
        title: 'Business',
        title_id: 3,
        status: false,
        data: []
    },
    {
        title: 'Holidays',
        title_id: 4,
        status: false,
        data: []
    },
    {
        title: 'Important',
        title_id: 5,
        status: false,
        data: []
    },
    {
        title: 'Orgenization',
        title_id: 6,
        status: false,
        data: []
    },


]
