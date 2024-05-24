export interface Tasklist {
    title: string;
    title_id: number;
    status: boolean;
    data: Data[] 
}

export interface Data {
    id: number,
    title: string,
    subtitle: string,
    text: string
}

export interface Tag {
    title: string,
    title_id: number;
    status: boolean;
    data: Data[]
}


export const TaskData: Tasklist[] = [
    {
        title: 'Created By Me',
        title_id: 1,
        status: true,
        data: [
            {
                id: 1,
                title: 'Client meeting',
                subtitle: 'General',
                text: 'Gather all necessary potential questions your client might ask.'
            },
            {
                id: 2,
                title: 'Plan webinar',
                subtitle: 'General',
                text: 'Begin with introductions and a brief friendly and comfortable atmosphere.'
            },
            {
                id: 3,
                title: 'Email newsletter',
                subtitle: 'General',
                text: "Listen actively to your client's thoughts, feedback, and concerns and their needs."
            },
            {
                id: 4,
                title: 'Publish podcast',
                subtitle: 'General',
                text: 'After the meeting, send a follow-up email points discussed and any action items.'
            },
            {
                id: 5,
                title: 'Lunch website',
                subtitle: 'General',
                text: 'Assign someone to details and action items.'
            },
            {
                id: 6,
                title: 'Client meeting',
                subtitle: 'General',
                text: 'Explain concepts , straightforward language. confuse your client.'
            },
            {
                id: 7,
                title: 'Plan webinar',
                subtitle: 'General',
                text: "Start the for your client's time and demonstrate professionalism."
            },
            {
                id: 8,
                title: 'Email newsletter',
                subtitle: 'General',
                text: "Clearly define What do you want to achieve during this interaction."
            },
        ]
    },
    {
        title: "Today's Tasks",
        title_id: 2,
        status: false,
        data: []
    },
    {
        title: 'Delayed Tasks',
        title_id: 3,
        status: false,
        data: []
    },
    {
        title: 'Upcoming Tasks',
        title_id: 4,
        status: false,
        data: [],
    },
    {
        title: 'This Week Tasks',
        title_id: 5,
        status: false,
        data: [],
    },
    {
        title: 'This Month Tasks',
        title_id: 6,
        status: false,
        data: [],
    },
    {
        title: 'Assigned To Me',
        title_id: 7,
        status: false,
        data: [
            {
                id: 1,
                title: 'Task name',
                subtitle: 'General',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'
            },
            {
                id: 2,
                title: 'Task name',
                subtitle: 'General',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'
            },
            {
                id: 3,
                title: 'Task name',
                subtitle: 'General',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'
            },
            {
                id: 4,
                title: 'Task name',
                subtitle: 'General',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'
            },
            {
                id: 5,
                title: 'Task name',
                subtitle: 'General',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'
            },
        ],
    },
    {
        title: 'My Tasks',
        title_id: 8,
        status: false,
        data: [
            {
                id: 1,
                title: 'Task name',
                subtitle: 'General',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'
            },
            {
                id: 2,
                title: 'Task name',
                subtitle: 'General',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'
            },
            {
                id: 3,
                title: 'Task name',
                subtitle: 'General',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'
            },
            {
                id: 4,
                title: 'Task name',
                subtitle: 'General',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'
            },
            {
                id: 5,
                title: 'Task name',
                subtitle: 'General',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'
            },
        ],
    },
]

export const TagData: Tag[] = [
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
    }
]