export interface alert {
    mainTitle: string,
    item: items[];
    item2: items2[];

}
export interface items {
    title: string,
    class: string,
    text: string,
    color?: string
}
export interface items2 {
    title: string,
    color?: string,
    class: string,
    text: string

}
export interface Alert {
    class: string;
    text: string;
    icon: string;
}
export interface Icons {
    class1: string;
    class2: string;
    text: string;
    icon: string;
    color: string;
    info: string;
    text2: string;
    buttontext: string
}

export const darkThemAlert: alert[] = [
    {
        mainTitle: 'Link Color In Dark Theme',
        item: [
            {
                title: 'Primary Alert',
                class: 'primary dark',
                text: 'primary alert',
                color: 'text-white'
            },
            {
                title: 'Secondary alert',
                class: 'secondary dark',
                text: 'secondary alert',
                color: 'text-white'

            },
            {
                title: 'Success Alert',
                class: 'success dark',
                text: 'success alert',
                color: 'text-white'

            },
            {
                title: 'Info Alert',
                class: 'info dark',
                text: 'info alert',
                color: 'text-white'
            },
        ],

        item2: [
            {
                title: 'Warning Alert',
                class: 'warning dark',
                text: 'Warning alert',
                color: 'text-white'
            },
            {
                title: 'Danger Alert',
                class: 'danger dark',
                text: 'danger alert',
                color: 'text-white'
            },
            {
                title: 'Light Alert',
                class: 'light dark',
                text: 'light alert',
                color: 'text-dark'
            },

            {
                title: 'Dark Alertt',
                class: 'dark dark',
                text: 'dark alert',
                color: 'text-white'
            },

        ]
    },
];
export const lightThemeAlert: alert[] = [
    {
        mainTitle: 'Link Color In Light Them',

        item: [
            {
                title: 'Primary Light Alert',
                class: 'light-primary',
                text: 'Primary alert',
                color: 'txt-primary'
            },
            {
                title: 'Secondary Light Alert',
                class: 'light-secondary',
                text: 'Secondary alert',
                color: 'txt-secondary'
            },
            {
                title: 'Success Light Alert',
                class: 'light-success',
                text: 'Success alert',
                color: 'txt-success'
            },

            {
                title: 'Info Light Alert',
                class: 'light-info',
                text: 'info Alert',
                color: 'txt-info'
            },
        ],
        item2: [
            {
                title: 'Warning Light Alert',
                class: 'light-warning',
                text: 'Warning alert',
                color: 'txt-warning'
            },
            {
                title: 'Danger Light Alert',
                class: 'light-danger',
                text: 'danger alert',
                color: 'txt-danger'
            },
            {
                title: 'Light Light Alert',
                class: 'light-light',
                text: 'light alert',
                color: 'txt-dark'
            },
            {
                title: 'Dark Light Alert',
                class: 'light-dark',
                text: 'dark alert',
                color: 'txt-dark'
            },

        ]
    },
];
export const OutlineDarkAlert: Alert[] = [

    {
        class: 'txt-primary border-primary alert-dismissible fade show',
        icon: 'clock',
        text: 'One of <strong>YouTubes</strong> most crucial ranking factors is Watch Time.'
    },
    {
        class: 'txt-success border-success outline-2x alert-dismissible fade show alert-icons',
        icon: 'thumbs-up',
        text: '<b> Well done! </b>You successfully read this important message.'
    }
];

export const IconandTextAlert: Icons[] = [
    {
        class1: 'border-warning alert-dismissible fade show p-0',
        class2: 'arrow bg-warning',
        text: 'Your time Over after',
        color: 'bg-warning text-black px-3 py-1',
        icon: 'icon-timer',
        info: '5',
        text2: ' minute',
        buttontext: 'check'
    },
    {
        class1: 'border-danger alert-dismissible fade show p-0 mb-0',
        class2: 'arrow bg-danger',
        text: 'Oh snap! Change a few things up',
        color: 'bg-danger text-white px-3 py-1',
        icon: 'icon-heart',
        info: ' Notification check',
        text2: '',
        buttontext: 'Alert'

    },
];

export const AdditionalContent = [
    {
        heading: 'Please! Check your notifications',
        title: 'The duty of notification is imposed upon the head of the family, and also upon the medical practitioner who may be in attendance on the patient.',
        message: 'The emergency notification system is free and is available in all 50 states.',
        class: 'alert alert-light-primary',
        color: ' txt-primary'
    },
    {
        heading: 'Something went wrong! Please, chrome update.',
        title: 'The duty of notification is imposed upon the head of the family, and also upon the medical practitioner who may be in attendance on the patient.',
        message: 'Whenever you need to, be sure to use margin utilities to keep things nice and tidy.',
        class: 'alert alert-light-secondary',
        color: 'txt-secondary'
    },
    {
        heading: 'Please! Hidden cameras were not installed.',
        title: 'Due to increasingly accessible technology, hidden cameras have grown in popularity among regular people in recent years.',
        message: 'Consider moving clocks and plush animals from your area if you think they may be concealing cameras because they are both portable items.',
        class: 'alert alert-light-success',
        color: ' txt-success'
    },
];