export interface email {
    id: number;
    title: string;
    status: boolean;
    index?:number;
    badge?: number;
    color?: string;
    icon: string;
    data: {
        id: number;
        active: boolean;
        image?: string;
        name: string;
        title: string;
        subTitle: string;
        time: string;
        class?: string;
        status?: string;
        status2?: string;
        color?: string;
        imgName?: string;
        isStar?:boolean;

    }[];
}

export interface DataInterface {
    id: number;
    active: boolean;
    image?: string;
    name: string;
    title: string;
    subTitle: string;
    time: string;
    class?: string;
    status?: string;
    status2?: string;
    color?: string;
    imgName?: string;
    isStar?:boolean;
}

export const emailFilter: email[] = [
    {
        id: 1,
        title: "Inbox",
        status: true,
        badge: 12,
        icon: 'inbox',
        data: [
            {
                id: 1,
                active: false,
                image: "assets/images/user/6.jpg",
                name: "Marvin McKinney",
                title: "New comments on MSR2023 draft presentation",
                subTitle: "New Here's a list of all the topic challenges...",
                time: "2:30 PM",
                status: "new",
                color: "primary",
            },
            {
                id: 2,
                active: false,
                image: "assets/images/user/3.png",
                name: "Brooklyn Simmons",
                title: "Confirm your booking id",
                subTitle:"A collection of textile samples lay spread out on the table - Samsa was a travelling salesman..",
                time: "7:50 AM",
                status: "deadline",
                color: "primary",
            },
            {
                id: 3,
                active: false,
                name: "Esther Howard",
                title: "Confirm your booking id",
                subTitle: "craft beer labore wes anderson cred nesciunt sapiente ea proident...",
                time: "1:00 PM",
                status: "work",
                color: "success",
                class: "primary",
                imgName: "EH",
            },
            {
                id: 4,
                active: false,
                name: "Cameron Williamson",
                title: "Very fiction Link",
                subTitle:"Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
                time: "5 Day ago",
                status: "work",
                color: "success",
                class: "success",
                imgName: "CW",
            },
            {
                id: 5,
                active: false,
                image: "assets/images/user/6.jpg",
                name: "Ronald Richards",
                title: "Confirm your booking id",
                subTitle: "Confirm your booking id - A collection of textile samples lay spread out on the table - Samsa was a travelling salesman..",
                time: "7 April",
                status: "Update.Zip",
                color: "light",
            },
            {
                id: 6,
                active: false,
                image: "assets/images/user/10.jpg",
                name: "Darlene Robertson",
                title: "Promotion Mail",
                subTitle: "Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda ...",
                time: "04 April",
                status: "Import File..",
                color: "light",
            },
            {
                id: 7,
                active: false,
                image: "assets/images/user/12.png",
                name: "Jacob Jones",
                title: "Welcome to our new office",
                subTitle: "A collection of textile samples lay spread out on the table - Samsa was a travelling salesman..",
                time: "01 April",
            },
            {
                id: 8,
                active: false,
                image: "assets/images/user/3.png",
                name: "Ralph Edwards",
                title: "Your Order #224820098 has been Confirmed",
                subTitle: "A collection of textile samples lay spread out on the table...",
                time: "1:00 PM",
            },
            {
                id: 9,
                active: false,
                image: "assets/images/user/6.jpg",
                name: "Ronald Richards",
                title: "Confirm your booking id",
                subTitle: "Confirm your booking id - A collection of textile samples lay spread out on the table - Samsa was a travelling salesman..",
                time: "1:00 PM",
                status: "Update.Zip",
                color: "light",
            },
            {
                id: 10,
                class: "success",
                active: false,
                imgName: "WT",
                name: "William Turner",
                title: "Very fiction Link",
                subTitle: "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
                time: "5 Day ago",
            },
            {
                id: 11,
                active: false,
                image: "assets/images/user/12.png",
                name: "Jacob Jones",
                title: "Welcome to our new office",
                subTitle:
                    "A collection of textile samples lay spread out on the table - Samsa was a travelling salesman..",
                time: "01 April",
            },
            {
                id: 12,
                active: false,
                image: "assets/images/user/12.png",
                name: "Jacob Jones",
                title: "Welcome to our new office",
                subTitle:"A collection of textile samples lay spread out on the table - Samsa was a travelling salesman..",
                time: "01 April",
            },
        ],
    },
    {
        id: 2,
        title: "Sent",
        status: false,
        icon: 'sent',
        data: [
            {
                id: 1,
                active: false,
                image: "assets/images/user/14.png",
                name: "Brooklyn Simmons",
                title: "Confirm your booking id",
                subTitle:"A collection of textile samples lay spread out on the table - Samsa was a travelling salesman..",
                time: "7:50 AM",
                status: "new",
                color: "primary",
            },
            {
                id: 2,
                active: false,
                image: "assets/images/user/6.jpg",
                name: "Marvin McKinney",
                title: "New comments on MSR2023 draft presentation",
                subTitle: "New Here's a list of all the topic challenges...",
                time: "2:30 PM",
                status: "new",
                color: "primary",
            },
            {
                id: 3,
                active: false,
                class: "success",
                imgName: "EH",
                name: "Esther Howard",
                title: "Confirm your booking id",
                subTitle:"craft beer labore wes anderson cred nesciunt sapiente ea proident...",
                time: "1:00 PM",
                status: "new",
                status2: "Task",
                color: "primary",
            },
            {
                id: 4,
                active: false,
                class: "success",
                imgName: "JW",
                name: "Jack Williamson",
                title: "Very fiction Link",
                subTitle:"Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
                time: "5 Day ago",
            },
        ],
    },
    {
        id: 3,
        title: "Starred",
        status: false,
        icon: 'star',
        data: [
            {
                id: 1,
                active: false,
                image: "assets/images/user/6.jpg",
                name: "Marvin McKinney",
                title: "New comments on MSR2023 draft presentation ",
                subTitle: "New Here's a list of all the topic challenges...",
                time: "2:30 PM",
                status: "new",
                color: "primary",
            },
            {
                id: 2,
                active: true,
                image: "assets/images/user/3.png",
                name: "Brooklyn Simmons",
                title: "Confirm your booking id",
                subTitle: "A collection of textile samples lay spread out on the table - Samsa was a travelling salesman..",
                time: "7:50 AM",
                status: "new",
                color: "primary",
            },
        ],
    },
    {
        id: 4,
        title: "Draft",
        status: false,
        icon: 'draft',
        data: [
            {
                id: 1,
                active: false,
                image: "assets/images/user/3.png",
                name: "Ralph Edwards",
                title: "Your Order #224820098 has been Confirmed",
                subTitle:"A collection of textile samples lay spread out on the table...",
                time: "1:00 PM",
            },
            {
                id: 2,
                active: false,
                image: "assets/images/user/6.jpg",
                name: "Ronald Richards",
                title: "Confirm your booking id",
                subTitle:"Confirm your booking id - A collection of textile samples lay spread out on the table - Samsa was a travelling salesman..",
                time: "7 April",
                status: "Update.Zip",
                color: "light",
            },
            {
                id: 3,
                class: "success",
                active: false,
                imgName: "CW",
                name: "Cameron Williamson",
                status: "work",
                title: "Very fiction Link",
                subTitle:"Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
                time: "5 Day ago",
                color: "success",
            },
            {
                id: 4,
                active: false,
                image: "assets/images/user/12.png",
                name: "Jacob Jones",
                title: "Welcome to our new office",
                subTitle: "A collection of textile samples lay spread out on the table - Samsa was a travelling salesman..",
                time: "01 April",
            },
            {
                id: 5,
                active: false,
                image: "assets/images/user/3.png",
                name: "Ralph Edwards",
                title: "Your Order #224820098 has been Confirmed",
                subTitle:"A collection of textile samples lay spread out on the table...",
                time: "1:00 PM",
            },
        ],
    },
    {
        id: 5,
        title: "Trash",
        status: false,
        icon: 'trash',
        data: [
            {
                id: 1,
                active: false,
                imgName: "EH",
                class: "primary",
                name: "Esther Howard",
                title: "Confirm your booking id",
                subTitle: "craft beer labore wes anderson cred nesciunt sapiente ea proident...",
                time: "1:00 PM",
                status: "offer",
                color: "secondary",
            },
            {
                id: 2,
                active: false,
                class: "success",
                imgName: "CH",
                status: "work",
                name: "Cameron Hill",
                title: "Very fiction Link",
                subTitle: "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
                time: "5 Day ago",
                color: "success",
            },
            {
                id: 3,
                active: false,
                imgName: "EH",
                name: "Esther Howard",
                title: "Confirm your booking id",
                subTitle:"craft beer labore wes anderson cred nesciunt sapiente ea proident...",
                time: "1:00 PM",
                status: "new",
                status2: "Task",
                class: "success",
                color: "primary",
            },
            {
                id: 4,
                class: "success",
                active: false,
                imgName: "CW",
                status: "work",
                name: "Cameron Williamson",
                title: "Very fiction Link",
                subTitle: "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
                time: "5 Day ago",
                color: "success",
            },
        ],
    },
    {
        id: 6,
        title: "Work",
        status: false,
        color: "primary",
        icon: 'pintag',
        data: [
            {
                id: 1,
                active: false,
                imgName: "EH",
                class: "success",
                name: "Esther Howard",
                title: "Confirm your booking id",
                subTitle:
                    "craft beer labore wes anderson cred nesciunt sapiente ea proident...",
                time: "1:00 PM",
                status2: "Task",
                status: "new",
                color: "primary",
            },
            {
                id: 2,
                active: false,
                image: "assets/images/user/3.png",
                name: "Brooklyn Simmons",
                class: "success",
                title: "Confirm your booking id",
                subTitle:
                    "A collection of textile samples lay spread out on the table - Samsa was a travelling salesman..",
                time: "7:50 AM",
                status: "deadline",
                color: "primary",
            },
            {
                id: 3,
                active: false,
                imgName: "EH",
                color: "primary",
                name: "Esther Voward",
                title: "Confirm your booking id",
                subTitle:
                    "craft beer labore wes anderson cred nesciunt sapiente ea proident...",
                time: "1:00 PM",
                status2: "work",
                status: "new",
                class: "success",
            },
        ],
    },
    {
        id: 7,
        title: "Private",
        status: false,
        color: "warning",
        icon: 'pintag',
        data: [
            {
                id: 1,
                active: false,
                class: "primary",
                imgName: "AD",
                title: "Confirm your booking id",
                subTitle:
                    "craft beer labore wes anderson cred nesciunt sapiente ea proident...",
                time: "1:00 PM",
                status: "new",
                name: "Asther Dolly",
                status2: "Task",
                color: "success",
            },
        ],
    },
    {
        id: 8,
        title: "Support",
        status: false,
        color: "success",
        icon: 'pintag',
        data: [
            {
                id: 1,
                active: false,
                imgName: "EH",
                name: "Esther Howard",
                title: "Confirm your booking id",
                subTitle:
                    "craft beer labore wes anderson cred nesciunt sapiente ea proident...",
                time: "1:00 PM",
                status: "new",
                status2: "Task",
                class: "primary",
                color: "success",
            },
            {
                id: 2,
                class: "success",
                active: false,
                imgName: "CW",
                status: "work",
                name: "Cameron Williamson",
                title: "Very fiction Link",
                subTitle:
                    "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
                time: "5 Day ago",
                color: "success",
            },
        ],
    },
];