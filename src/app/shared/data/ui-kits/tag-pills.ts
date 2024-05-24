export interface button {
    mainTitle: string,
    title: string,
    item: items[];
}

export interface items {
    class: string,
    text?: string,
    icon?: string
    icon_enble: boolean
}


export const buttons: button[] =
    [
        {
            mainTitle: 'Badges Contextual Variation',
            title: ' Use the<code>.badge </code>utility class to make more badges.</p>',
            item: [
                {
                    class: 'badge-primary',
                    text: 'Primary',
                    icon_enble: false
                },
                {
                    class: 'badge-secondary',
                    text: 'secondary',
                    icon_enble: false
                },
                {
                    class: 'badge badge-success',
                    text: 'succes',
                    icon_enble: false
                },
                {
                    class: 'badge-info',
                    text: 'info',
                    icon_enble: false
                },
                {
                    class: 'badge-warning text-dark',
                    text: 'warning',
                    icon_enble: false
                },
                {
                    class: 'badge-danger',
                    text: 'danger',
                    icon_enble: false
                },
                {
                    class: 'badge-light text-dark',
                    text: 'light',
                    icon_enble: false
                },
                {
                    class: 'badge badge-dark tag-pills-sm-mb',
                    text: 'Dark',
                    icon_enble: false
                },

            ]
        },
    ]

export const pills: button[] = [
    {
        mainTitle: 'Pills Contextual Variations',
        title: ' Use the <code>.rounded-pill</code> utility class to make badges more rounded with a larger <code>border-radius</code>.</p> ',
        item: [
            {
                class: 'badge rounded-pill badge-primary',
                text: 'Primary',
                icon_enble: false
            },
            {
                class: 'badge rounded-pill badge-secondary',
                text: 'Secondary',
                icon_enble: false
            },
            {
                class: 'badge rounded-pill badge-success',
                text: 'Success',
                icon_enble: false
            },
            {
                class: 'badge rounded-pill badge-info',
                text: 'Info',
                icon_enble: false
            },
            {
                class: 'badge rounded-pill badge-warning',
                text: 'warning',
                icon_enble: false
            },
            {
                class: 'badge rounded-pill badge-danger',
                text: 'Danger',
                icon_enble: false
            },
            {
                class: 'rounded-pill badge-light text-dark',
                text: 'Light',
                icon_enble: false
            },
            {
                class: 'badge rounded-pill badge-dark tag-pills-sm-mb',
                text: 'Dark',
                icon_enble: false
            },
        ]
    },
]

export const NumberBadge: button[] = [
    {
        mainTitle: 'Number of Badge',
        title: '   Use the <code>.badge</code> utility class to make number of more badges.',
        item: [
            {
                class: 'badge badge-primary',
                text: '1',
                icon_enble: false
            },
            {
                class: 'badge badge-secondary',
                text: '2',
                icon_enble: false
            },
            {
                class: 'badge badge-success',
                text: '3',
                icon_enble: false
            },
            {
                class: 'badge badge-info',
                text: '4',
                icon_enble: false
            },
            {
                class: 'badge badge-warning',
                text: '5',
                icon_enble: false
            },
            {
                class: 'badge badge-danger',
                text: '6',
                icon_enble: false
            },
            {
                class: ' badge badge-light text-dark',
                text: '7',
                icon_enble: false
            },
            {
                class: 'badge badge-dark',
                text: '8',
                icon_enble: false
            },
        ]
    },


]
export const NumberPillstag: button[] = [
    {
        mainTitle: 'Number of Pills Tags',
        title: ' Use the <code>.rounded-circle</code> utility class to make badges more rounded with a larger <code>border-radius</code>.',
        item: [
            {
                class: 'badge rounded-circle badge-p-space badge-primary',
                text: '1',
                icon_enble: false
            },
            {
                class: 'badge rounded-circle badge-p-space badge-secondary',
                text: '2',
                icon_enble: false
            },
            {
                class: 'badge rounded-circle badge-p-space badge-success',
                text: '3',
                icon_enble: false
            },
            {
                class: 'badge rounded-circle badge-p-space badge-info',
                text: '4',
                icon_enble: false
            },
            {
                class: 'badge rounded-circle badge-p-space badge-warning',
                text: '5',
                icon_enble: false
            },
            {
                class: 'badge rounded-circle badge-p-space badge-danger',
                text: '6',
                icon_enble: false
            },
            {
                class: ' badge rounded-circle badge-p-space badge-light text-dark',
                text: '7',
                icon_enble: false
            },
            {
                class: 'badge rounded-circle badge-p-space badge-dark',
                text: '8',
                icon_enble: false
            },
        ]
    },
];
export const iconbadge: button[] = [
    {
        mainTitle: 'Badge Tags With Icons',
        title: '    Use the <code>.badge </code>utility class to make more icons.',
        item: [
            {
                class: 'badge b-ln-height badge-primary',
                icon: 'dollar-sign',
                icon_enble: true
            },
            {
                class: 'badge b-ln-height badge-secondary',
                icon: 'headphones',
                icon_enble: true
            },
            {
                class: 'badge b-ln-height badge-success',
                icon: 'link',
                icon_enble: true
            },
            {
                class: 'badge b-ln-height badge-info',
                icon: 'github',
                icon_enble: true
            },
            {
                class: 'badge b-ln-height badge-warning',
                icon: 'award',
                icon_enble: true
            },
            {
                class: 'badge b-ln-height badge-danger',
                icon: 'activity',
                icon_enble: true
            },
            {
                class: ' badge b-ln-height badge-light text-dark',
                icon: 'heart',
                icon_enble: true
            },
            {
                class: 'badge b-ln-height badge-dark',
                icon: 'mail',
                icon_enble: true
            },
        ]
    },
]

export const iconpills: button[] = [
    {
        mainTitle: 'Rounded Pills With Icons',
        title: 'Use the <code>.rounded-pill</code> utility class to make icons badges more rounded with a larger <code>border-radius</code>.',
        item: [
            {
                class: 'badge rounded-circle p-2 badge-primary',
                icon: 'dollar-sign',
                icon_enble: true
            },
            {
                class: 'badge rounded-circle p-2 badge-secondary',
                icon: 'headphones',
                icon_enble: true
            },
            {
                class: 'badge rounded-circle p-2 badge-success',
                icon: 'link',
                icon_enble: true
            },
            {
                class: 'badge rounded-circle p-2 badge-info',
                icon: 'github',
                icon_enble: true
            },
            {
                class: 'badge rounded-circle p-2 badge-warning',
                icon: 'award',
                icon_enble: true
            },
            {
                class: 'badge rounded-circle p-2 badge-danger',
                icon: 'activity',
                icon_enble: true
            },
            {
                class: ' badge rounded-circle p-2 badge-light text-dark',
                icon: 'heart',
                icon_enble: true
            },
            {
                class: 'badge rounded-circle p-2 badge-dark',
                icon: 'mail',
                icon_enble: true
            },
        ]
    },
]
export const BadgePartButtons = [
    {
        color: 'primary',
        text: 'Messages',
        icon: 'mail',
    },
    {
        color: 'secondary',
        text: 'notifications',
        icon: 'bell',
    },
    {
        color: 'success',
        text: 'Update available',
        icon: 'settings',
    },
    {
        color: 'info',
        text: 'Playing Now',
        icon: 'music',
    },
    {
        color: 'warning text-dark',
        text: '1.2 GB Use',
        icon: 'alert-triangle',
    },

]

