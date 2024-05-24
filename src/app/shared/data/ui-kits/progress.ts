export interface progress {
    mainTitle: string,
    title: string,
    item: items[];
}

export interface items {
    class: string,
    value: string,
    percentage?: string
}


export const basicProgress: progress[] = [
    {
        mainTitle: 'Basic Progress Bars',
        title: '  Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.We use the <code>.progress </code> as a wrapper to indicate the max value of the progress bar. The <code>.progress-bar </code > requires an inline style, utility class, or custom CSS to set their width.',
        item: [
            {
                value: '0',
                percentage: '25%',
                class: 'progress-bar'
            },
            {
                value: '25%',
                percentage: '25%',
                class: 'progress-bar bg-primary'
            },
            {
                value: '50%',
                percentage: '50%',
                class: 'progress-bar bg-secondary'
            },
            {
                value: '75%',
                percentage: '75%',
                class: 'progress-bar bg-success'
            },
            {
                value: '100%',
                percentage: '100%',
                class: 'progress-bar bg-info'
            },
        ]
    },
];

export const ProgressBarsStriped: progress[] = [
    {
        mainTitle: 'Progress Bars Striped',
        title: 'Add <code>.progress-bar-striped</code> to any <code>.progress-bar </code> to apply a stripe via CSS gradient over the progress bars background color Using CSS Effects.',
        item: [
            {
                value: '10%',
                class: 'progress-bar bg-primary progress-bar-striped'
            },
            {
                value: '25%',
                class: 'progress-bar progress-bar-striped bg-warning'
            },
            {
                value: '50%',
                class: 'progress-bar progress-bar-striped bg-danger'
            },
            {
                value: '75%',
                class: 'progress-bar progress-bar-striped bg-success'
            },

        ]
    }
];
export const ProgressBarsAnimated: progress[] = [
    {
        mainTitle: 'Progress Bars Animated',
        title: 'The striped gradient can also be animated. Add <code>.progress-bar-animated</code> to<code>.progress-bar</code> to animate the stripes right to left via CSS3 animations.',
        item: [
            {
                value: '10%',
                class: 'progress-bar-animated bg-primary progress-bar-striped'
            },
            {
                value: '25%',
                class: 'progress-bar-animated progress-bar-striped bg-warning'
            },
            {
                value: '50%',
                class: 'progress-bar-animated progress-bar-striped bg-danger'
            },
            {
                value: '75%',
                class: 'progress-bar-animated progress-bar-striped bg-success'
            },
        ],

    }
];

export const Multiplebars = [
    {
        mainTitle: 'Multiple bars',
        title: 'Include multiple progress bars in a progress component if you need.',
        item: [
            {
                value: '30%',
                class: 'progress-bar bg-primary'
            },
            {
                value: '20%',
                class: 'progress-bar bg-secondary'
            },

            {
                value: '15%',
                class: 'progress-bar bg-success'
            },
        ],

        item2: [
            {
                value: '10%',
                class: 'progress-bar  bg-primary'
            },
            {
                value: '10%',
                class: 'progress-bar bg-secondary'
            },
            {
                value: '10%',
                class: 'progress-bar bg-success'
            },
            {
                value: '10%',
                class: 'progress-bar bg-info'
            },
            {
                value: '10%',
                class: 'progress-bar bg-warning'
            },
            {
                value: '10%',
                class: 'progress-bar bg-danger'
            },
            {
                value: '10%',
                class: 'progress-bar bg-primary'
            },
            {
                value: '10%',
                class: 'progress-bar bg-light'
            },
        ]

    }
];

export const CustomProgressbars = [
    {
        value: '0%',
        class: 'progress-bar-animated progress-bar-striped text-center ',
        text: '0% Getting Started '
    },
    {
        value: '30%',
        class: 'progress-bar-animated progress-bar-striped bg-primary text-center ',
        text: '30% Getting Uploading...'
    },
    {
        value: '60%',
        class: ' progress-bar-animated progress-bar-striped bg-secondary',
        text: '60% Getting Uploading...'
    },
    {
        value: '70%',
        class: ' progress-bar-animated progress-bar-striped bg-success',
        text: '70% Getting Uploading....'
    },
    {
        value: '100%',
        class: ' progress-bar-animated progress-bar-striped bg-dark',
        text: '100% Completed'
    },
];

export const SmallProgressbars = [
    {
        value: '30%',
        text: '30 MB Data'
    },
    {
        value: '50%',
        text: '50 MB Data'
    },
    {
        value: '75%',
        text: '75 MB Data'
    },
    {
        value: '100%',
        text: '100 MB Data'
    },
]

export const LargeProgressbars = [
    {
        class: 'bg-primary',
        value: '25%',
        text: '25%'
    },
    {
        class: 'bg-secondary',
        value: '50%',
        text: '50%'
    },
    {
        class: 'bg-success',
        value: '75%',
        text: '75%'
    },
    {
        class: 'bg-info',
        value: '100%',
        tetx: '100%'
    },
]

export const customheightprogress = [
    {
        value1: '1px',
        value2: '25%',
        class: 'bg-primary',
    },
    {
        value1: '5px',
        value2: '50%',
        class: 'bg-warning',
    },
    {
        value1: '11px',
        value2: '75%',
        class: 'bg-danger',
    },
    {
        value1: '19px',
        value2: '100%',
        class: 'bg-info',
    },
]

