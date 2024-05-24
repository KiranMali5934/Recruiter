export interface Task {
    id? : number;
	text: string
	completed: boolean
	priority: string
	badgeClass: string
	textColor? : string;
    Date: string;
}

export const task: Task[] = [
	{
        id : 1,
        text: "Check validation involves making sure all your tags are properly closed and nested",
        priority: "In progress",
        badgeClass: "bg-light-primary",
        textColor : 'primary',
        Date: "10 Nov",
        completed: false
    },
    {
        id : 2,
        text: "Test the outgoing links from all the pages to the specific domain under test.",
        priority: "Pending",
        badgeClass: "bg-light-danger",
        textColor : 'danger',
        Date: "04 Aug",
        completed: false
    },
    {
        id : 3,
        text: "Test links are used to send emails to admin or other users from web pages.",
        priority: "Done",
        badgeClass: "bg-light-success",
        textColor : 'success',
        Date: "25 Feb",
        completed: true
    },
    {
        id : 4,
        text: "Options to create forms, if any, form deletes a view or modify the forms.",
        priority: "In Progress",
        badgeClass: "bg-light-primary",
        textColor : 'primary',
        Date: "15 Dec",
        completed: false
    },
    {
        id : 5,
        text: "Wrong inputs in the forms to the fields in the forms.",
        priority: "Panding",
        badgeClass: "bg-light-danger",
        textColor : 'danger',
        Date: "11 Nov",
        completed: false
    },
    {
        id : 6,
        text: "Check if the instructions provided are perfect to satisfy its purpose.",
        priority: "Pending",
        badgeClass: "bg-light-danger",
        textColor : 'danger',
        Date: "04 Sept",
        completed: true
    },
    {
        id : 7,
        text: "Application server and Database server interface.",
        priority: "Done",
        badgeClass: "bg-light-success",
        textColor : 'success',
        Date: "08 July",
        completed: false
    },
]