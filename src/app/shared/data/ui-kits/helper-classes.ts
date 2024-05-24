
export interface titleData {
    mainTitle: string;
    item: item[]
}
export interface item {
    class: string;
    title: string;
    text?: string;
}

export const Customborder: titleData[] = [
    {
        mainTitle: 'Custom border-radius class',
        item: [
            {
                class: ' helper-box b-r-0 bg-light border',
                title: '.b-r-0'
            },
            {
                class: ' helper-box b-r-1 bg-light border',
                title: '.b-r-1'
            },
            {
                class: ' helper-box b-r-2 bg-light border',
                title: '.b-r-2'
            },
            {
                class: ' helper-box b-r-3 bg-light border',
                title: '.b-r-3'
            },
            {
                class: ' helper-box b-r-4 bg-light border',
                title: '.b-r-4'
            },
            {
                class: 'helper-box b-r-5 bg-light border',
                title: '.b-r-5'
            },
            {
                class: 'helper-box b-r-6 bg-light border',
                title: '.b-r-6'
            },
            {
                class: 'helper-box b-r-7 bg-light border',
                title: '.b-r-7'
            },
            {
                class: 'helper-box b-r-8 bg-light border',
                title: '.b-r-8'
            },
            {
                class: 'helper-box b-r-9 bg-light border',
                title: '.b-r-9'
            },
            {
                class: 'helper-box b-r-10 bg-light border',
                title: '.b-r-10'
            },]
    },
]

export const colorBorders: titleData[] = [

    {

        mainTitle: 'Border color',

        item: [
            {
                class: 'helper-box border-primary border ',
                title: '.border-primary'
            },
            {
                class: 'helper-box border-secondary border',
                title: ' .border-secondary'
            },
            {
                class: ' helper-box border-success border',
                title: '.border-success'
            },
            {
                class: ' helper-box border-danger border',
                title: '.border-dange'
            },
            {
                class: ' helper-box border-warning border',
                title: '.border-warnin'
            },
            {
                class: 'helper-box border-info border',
                title: '.border-info'
            },
            {
                class: 'helper-box border-dark border',
                title: '.border-dar'
            },
        ]
    },
]

export const borderWith: titleData[] = [
    {
        mainTitle: 'borderwith',

        item: [
            {
                class: 'helper-box border-1 border',
                title: '.border-1'
            },
            {
                class: 'helper-box border-2 border',
                title: '.border-2'
            },
            {
                class: 'helper-box border-3 border',
                title: '.border-3'
            },
            {
                class: 'helper-box border-4 border',
                title: '.border-4'
            },
            {
                class: 'helper-box border-5 border',
                title: '.border-5'
            },
            {
                class: 'helper-box border-6 border',
                title: '.border-6'
            },
            {
                class: 'helper-box border-7 border',
                title: '.border-7'
            },
            {
                class: 'helper-box border-8 border',
                title: '.border-8'
            },
            {
                class: 'helper-box border-9 border',
                title: '.border-9'
            },
            {
                class: 'helper-box border-10 border',
                title: '.border-10'
            },
        ]
    }
]

export const TextColor = [
    {
        mainTitle: 'Text colors',
        item: [
            {
                text: 'c',
                class: 'helper-box helper-text border txt-primary',
                title: '.txt-primar'
            },
            {
                text: 'c',
                class: 'helper-box helper-text border txt-secondary',
                title: '.txt-secondary'
            },
            {
                text: 'c',
                class: 'helper-box helper-text border txt-success',
                title: '.txt-success'
            },
            {
                text: 'c',
                class: 'helper-box helper-text border txt-danger',
                title: '.txt-danget'
            },
            {
                text: 'c',
                class: 'helper-box helper-text border txt-warning',
                title: '.txt-warning'
            },
            {
                text: 'c',
                class: 'helper-box helper-text border txt-info',
                title: '.txt-info'
            },
            {
                text: 'c',
                class: 'helper-box helper-text border txt-dark',
                title: '.txt-dark'
            },
            {
                text: 'c',
                class: 'helper-box helper-text border txt-light bg-dark',
                title: '.txt-light'
            },
        ]
    }
]
export const AdditiveBorderData: titleData[] = [
    {
        mainTitle: 'Additive border',

        item: [
            {
                class: 'helper-box bg-light border',
                title: '.border'
            },
            {
                class: 'helper-box bg-light border-top',
                title: '.border-top'
            },
            {
                class: 'helper-box bg-light border-bottom',
                title: '.border-bottom'
            },
            {
                class: 'helper-box bg-light border-start',
                title: '.border-start'
            },
            {
                class: 'helper-box bg-light border-end',
                title: '.border-end'
            },


        ]

    }
]
export const Subtractiveborder: titleData[] = [
    {
        mainTitle: 'Subtractive border',

        item: [

            {
                class: 'helper-box bg-light border border-0',
                title: '.border-0'
            },
            {
                class: 'helper-box bg-light border border-top-0',
                title: '.border-top'
            },
            {
                class: 'helper-box bg-light border border-end-0',
                title: '.border-end-0'
            },
            {
                class: 'helper-box bg-light border border-bottom-0',
                title: '.border-bottom-0'
            },
            {
                class: 'helper-box bg-light border border-start-0',
                title: '.border-start-0'
            },


        ]

    }
]
export const AdditiveRadius: titleData[] = [
    {
        mainTitle: 'Additive radius',

        item: [

            {
                class: 'helper-radius radius-wrapper rounded',
                title: '.rounded'
            },
            {
                class: 'helper-radius radius-wrapper bg-light rounded-top',
                title: '.rounded-top'
            },
            {
                class: 'helper-radius radius-wrapper bg-light rounded-end',
                title: '.rounded-end'
            },
            {
                class: 'helper-radius radius-wrapper bg-light rounded-bottom',
                title: '.rounded-bottom'
            },
            {
                class: 'helper-radius radius-wrapper bg-light rounded-start',
                title: '.rounded-start'
            },
            {
                class: 'helper-radius radius-wrapper bg-light rounded-pill',
                title: '.rounded-pill'
            },
            {
                class: 'helper-radius radius-wrapper bg-light rounded-circle',
                title: '.rounded-circle'
            },
            {
                class: 'helper-radius radius-wrapper bg-light rounded-0',
                title: '.rounded-0'
            },
        ]
    }
]

export const DarkBackground: titleData[] = [
    {
        mainTitle: 'Dark background',
        item: [
            {
                class: 'helper-box bg-primary',
                title: '.bg-primary'
            },
            {
                class: 'helper-box bg-secondary',
                title: '.bg-secondary'
            },
            {
                class: 'helper-box bg-success',
                title: '.bg-success'
            },
            {
                class: 'helper-box bg-danger',
                title: '.bg-danger'
            },
            {
                class: 'helper-box bg-warning',
                title: '.bg-warning'
            },
            {
                class: 'helper-box bg-info',
                title: '.bg-info'
            },
            {
                class: 'helper-box bg-dark',
                title: '.bg-dark'
            },
            {
                class: 'helper-box bg-light',
                title: '.bg-light'
            },
        ]

    }
];

export const Lightbackgrounds: titleData[] = [
    {
        mainTitle: 'Light backgrounds',
        item: [
            {
                class: 'helper-box alert-light-primary',
                title: '.alert-light-primary'
            },
            {
                class: 'helper-box alert-light-secondary',
                title: '.alert-light-secondary'
            },
            {
                class: 'helper-box alert-light-success',
                title: '.alert-lightsuccess'
            },
            {
                class: 'helper-box alert-light-danger',
                title: '.alert-light-danger'
            },
            {
                class: 'helper-box alert-light-warning',
                title: '.alert-light-warning'
            },
            {
                class: 'helper-box alert-light-info',
                title: '.alert-light-info'
            },
            {
                class: 'helper-box alert-light-dark',
                title: '.alert-light-dark'
            },
            {
                class: 'helper-box alert-light-light',
                title: '.alert-light-light'
            },
        ]
    }
];
export const ExtendedBackground: titleData[] = [
    {
        mainTitle: 'Extended background colors',
        item: [
            {
                class: 'helper-box light-card',
                title: '.light-card'
            },
            {
                class: 'helper-box light-background border',
                title: '.light-backgroundy'
            },
        ]
    }
];
export const Bordercolors = [
    {
        class: 'b-primary',
        title: '.b-primary',
    },
    {
        class: 'b-t-primary',
        title: '.b-t-primary',
    },
    {
        class: 'b-b-primary',
        title: '.b-b-primary',
    },
    {
        class: 'b-l-primary',
        title: '.b-l-primary',
    },
    {
        class: 'b-r-primary',
        title: 'b-r-primary',
    },
    {
        class: ' b-secondary',
        title: '.b-secondary',
    },
    {
        class: 'b-t-secondary',
        title: '.b-t-secondary',
    },
    {
        class: 'b-b-secondary',
        title: '.b-b-secondary',
    },
    {
        class: 'b-primary',
        title: '.b-primary',
    },
    {
        class: 'b-l-secondary',
        title: 'b-r-secondary',
    },
    {
        class: 'b-success',
        title: '.b-success',
    },
    {
        class: 'b-t-success',
        title: '.b-t-success',
    },
    {
        class: 'b-b-success',
        title: '.b-b-success',
    },
    {
        class: 'b-l-success',
        title: '.b-l-success',
    },
    {
        class: 'b-r-success',
        title: 'b-r-success',
    },
    {
        class: 'b-danger',
        title: '.b-danger',
    },
    {
        class: 'b-t-danger',
        title: '.b-t-danger',
    },
    {
        class: 'b-b-danger',
        title: '.b-b-danger',
    },
    {
        class: 'b-l-danger',
        title: '.b-l-danger',
    },
    {
        class: 'b-r-danger',
        title: 'b-r-danger',
    },
    {
        class: 'b-warning',
        title: '.b-warning',
    },
    {
        class: 'b-t-warning',
        title: '.b-t-warning',
    },
    {
        class: 'b-b-warning',
        title: '.b-b-warning',
    },
    {
        class: 'b-l-warning',
        title: '.b-l-warning',
    },
    {
        class: 'b-r-warning',
        title: 'b-r-warning',
    },
    {
        class: 'b-info',
        title: '.b-info',
    },
    {
        class: 'b-b-info',
        title: '.b-b-info',
    },
    {
        class: 'b-t-b-info',
        title: '.b-t-b-info',
    },
    {
        class: 'b-b-b-info',
        title: '.b-b-b-info',
    },
    {
        class: 'b-l-b-info',
        title: '.b-l-b-info',
    },
    {
        class: 'b-r-b-info',
        title: 'b-r-b-info',
    },
    {
        class: 'b-b-dark',
        title: '.b-b-dark',
    },
    {
        class: 'b-t-b-dark',
        title: '.b-t-b-dark',
    },
    {
        class: 'b-b-b-dark',
        title: '.b-b-b-dark',
    },
    {
        class: 'b-l-b-dark',
        title: '.b-l-b-dark',
    },
    {
        class: 'b-r-b-dark',
        title: 'b-r-b-dark',
    },
    {
        class: 'b-b-light',
        title: '.b-b-light',
    },
    {
        class: 'b-t-b-light',
        title: '.b-t-b-light',
    },
    {
        class: 'b-b-b-light',
        title: '.b-b-b-light',
    },
    {
        class: 'b-l-b-light',
        title: '.b-l-b-light',
    },
    {
        class: 'b-r-b-light',
        title: 'b-r-b-light',
    },

];

export const ImageSize = [
    {
        image: 'assets/images/blog/comment.jpg',
        class: 'img-30 img-h-30',
    },
    {
        image: 'assets/images/blog/comment.jpg',
        class: 'img-40 img-h-40',
    },
    {
        image: 'assets/images/blog/comment.jpg',
        class: 'img-50 img-h-50',
    },
    {
        image: 'assets/images/blog/comment.jpg',
        class: 'img-60 img-h-60',
    },
    {
        image: 'assets/images/blog/comment.jpg',
        class: 'img-70 img-h-70',
    },
    {
        image: 'assets/images/blog/comment.jpg',
        class: 'img-80 img-h-80',
    },
    {
        image: 'assets/images/blog/comment.jpg',
        class: 'img-90 img-h-90',
    },
    {
        image: 'assets/images/blog/comment.jpg',
        class: 'img-100 img-h-100',
    },
];
export const FontStyle = [
    {
        strong: '.f-s-italic',
        class: 'f-s-italic'
    },
    {
        strong: '.f-s-oblique',
        class: 'f-s-oblique'
    },
    {
        strong: '.f-s-initial',
        class: 'f-s-initial'
    },
    {
        strong: '.f-s-inherit',
        class: 'f-s-inherit'
    },
];
export const FontWight = [
    {
        class: 'f-w-100',
        text: 'You can set light font weight heading .f-w-100'
    },
    {
        class: 'f-w-300',
        text: 'You can set light font weight heading .f-w-300'
    },
    {
        class: 'f-w-400',
        text: 'You can set light font weight heading .f-w-400'
    },
    {
        class: 'f-w-600',
        text: 'You can set light font weight heading .f-w-600'
    },
    {
        class: 'f-w-700',
        text: 'You can set light font weight heading .f-w-700'
    },
    {
        class: 'f-w-900',
        text: 'You can set light font weight heading .f-w-900'
    },
];

export const TextColors = [
    {
        class: 'font-primary',
        text: 'text used class as .font-primary',
        text2: 'font-primary',
    },
    {
        class: 'font-secondary',
        text: 'text used class as .font-secondary',
        text2: 'font-secondary',
    },
    {
        class: 'font-success',
        text: 'text used class as .font-success',
        text2: 'font-success',
    },
    {
        class: 'font-danger',
        text: 'text used class as .font-danger',
        text2: 'font-danger',
    },
    {
        class: 'font-warning',
        text: 'text used class as .font-warning',
        text2: 'font-warning',
    },
    {
        class: 'font-primary',
        text: 'text used class as .font-primary',
        text2: 'font-primary',
    },
    {
        class: 'font-info',
        text: 'text used class as .font-info',
        text2: 'font-info',
    },
    {
        class: 'font-dark',
        text: 'text used class as .font-dark',
        text2: 'font-dark',
    },
];

export const Padding = [
    {
        paddingClass:'p-10',
    },
    {
        paddingClass:'p-15',
    },
    {
        paddingClass:'p-20',
    },
    {
        paddingClass:'p-25',
    },
    {
        paddingClass:'p-30',
    },
    {
        paddingClass:'p-35',
    },
    {
        paddingClass:'p-40',
    },
    {
        paddingClass:'p-45',
    },  {
        paddingClass:'p-50',
    },
];

export const CommonPadding = [
    {
        mainTitle: 'Padding Left',
        item: [
            {
                text: '.p-l-10'
            },
            {
                text: '.p-l-15'
            },
            {
                text: '.p-l-20'
            },
            {
                text: '.p-l-25'
            },
            {
                text: '.p-l-30'
            },
            {
                text: '.p-l-35'
            },
            {
                text: '.p-l-40'
            },
            {
                text: '.p-l-45'
            },
            {
                text: '.p-l-50'
            },
        ]
    },

    {
        mainTitle: 'Padding Right',
        item: [
            {
                text: '.p-r-10'
            },
            {
                text: '.p-r-15'
            },
            {
                text: '.p-r-20'
            },
            {
                text: '.p-r-25'
            },
            {
                text: '.p-r-30'
            },
            {
                text: '.p-r-35'
            },
            {
                text: '.p-r-40'
            },
            {
                text: '.p-r-45'
            },
            {
                text: '.p-r-50'
            },
        ]
    },
    {
        mainTitle: 'Padding Top',
        item: [
            {
                text: '.p-t-10'
            },
            {
                text: '.p-t-15'
            },
            {
                text: '.p-t-20'
            },
            {
                text: '.p-t-25'
            },
            {
                text: '.p-t-30'
            },
            {
                text: '.p-t-35'
            },
            {
                text: '.p-t-40'
            },
            {
                text: '.p-t-45'
            },
            {
                text: '.p-t-50'
            },
        ]
    },
    {
        mainTitle: 'Padding Bottom',
        item: [
            {
                text: '.p-b-10'
            },
            {
                text: '.p-b-15'
            },
            {
                text: '.p-b-20'
            },
            {
                text: '.p-b-25'
            },
            {
                text: '.p-b-30'
            },
            {
                text: '.p-b-35'
            },
            {
                text: '.p-b-40'
            },
            {
                text: '.p-b-45'
            },
            {
                text: '.p-b-50'
            },
        ]
    },
];
export const margin = [
    {
        marginClass:'m-10',
    },
    {
        marginClass:'m-15',
    },
    {
        marginClass:'m-20',
    },
    {
        marginClass:'m-25',
    },
    {
        marginClass:'m-30',
    },
    {
        marginClass:'m-35',
    },
    {
        marginClass:'m-40',
    },
    {
        marginClass:'m-45',
    }, 
    {
        marginClass:'m-50',
    },
];

export const Commonmargin = [
    {
        mainTitle: 'Margin Left',
        item: [
            {
                text: '.m-l-10'
            },
            {
                text: '.m-l-15'
            },
            {
                text: '.m-l-20'
            },
            {
                text: '.m-l-25'
            },
            {
                text: '.m-l-30'
            },
            {
                text: '.m-l-35'
            },
            {
                text: '.m-l-40'
            },
            {
                text: '.m-l-45'
            },
            {
                text: '.m-l-50'
            },
        ]
    },

    {
        mainTitle: 'Margin Right',
        item: [
            {
                text: '.m-r-10'
            },
            {
                text: '.m-r-15'
            },
            {
                text: '.m-r-20'
            },
            {
                text: '.m-r-25'
            },
            {
                text: '.m-r-30'
            },
            {
                text: '.m-r-35'
            },
            {
                text: '.m-r-40'
            },
            {
                text: '.m-r-45'
            },
            {
                text: '.m-r-50'
            },
        ]
    },
    {
        mainTitle: 'Margin Top',
        item: [
            {
                text: '.m-t-10'
            },
            {
                text: '.m-t-15'
            },
            {
                text: '.m-t-20'
            },
            {
                text: '.m-t-25'
            },
            {
                text: '.m-t-30'
            },
            {
                text: '.m-t-35'
            },
            {
                text: '.m-t-40'
            },
            {
                text: '.m-t-45'
            },
            {
                text: '.m-t-50'
            },
        ]
    },
    {
        mainTitle: 'Margin Bottom',
        item: [
            {
                text: '.m-b-10'
            },
            {
                text: '.m-b-15'
            },
            {
                text: '.m-b-20'
            },
            {
                text: '.m-b-25'
            },
            {
                text: '.m-b-30'
            },
            {
                text: '.m-b-35'
            },
            {
                text: '.m-b-40'
            },
            {
                text: '.m-b-45'
            },
            {
                text: '.m-b-50'
            },
        ]
    },

]

export const FontSize = [
    {
        class: 'f-14',
        text: 'Font-size .f-14'
    },
    {
        class: 'f-16',
        text: 'Font-size .f-16'
    },
    {
        class: 'f-18',
        text: 'Font-size .f-18'
    },
    {
        class: 'f-20',
        text: 'Font-size .f-30'
    },
    {
        class: 'f-22',
        text: 'Font-size .f-22'
    },
    {
        class: 'f-24',
        text: 'Font-size .f-24'
    },
    {
        class: 'f-26',
        text: 'Font-size .f-26'
    },
    {
        class: 'f-28',
        text: 'Font-size .f-28'
    },
    {
        class: 'f-30',
        text: 'Font-size .f-30'
    },
    {
        class: 'f-34',
        text: 'Font-size .f-34'
    },
    {
        class: 'f-36',
        text: 'Font-size .f-36'
    },
    {
        class: 'f-38',
        text: 'Font-size .f-38'
    },
    {
        class: 'f-40',
        text: 'Font-size .f-40'
    },
];