export interface info {
    headerClass?: string,
    bodyClass?: string,
    footerClass?: string,
    headingClass?: string,
    heading: string
    title: string,
    desc: string
}

export const commonInfoColorCardData: info[] = [
    {
        headerClass: 'bg-primary',
        headingClass: 'text-white',
        heading: 'Info Color Header',
        title: 'Web Designer',
        desc: "By following instructions and adding your own unique twist and style, you may apply your imagination as a web designer. The majority of the tasks you'll be assigned will have a specific due date and work description, but the reason you were employed was because they need a specialist to inject some much-needed creativity.",
    },
    {
        bodyClass: 'bg-primary',
        heading: 'Info Color Body',
        title: 'UX Designer',
        desc: 'It is the responsibility of the UX designer to make a product or service useful, pleasurable, and accessible. The word "user experience" is used by various industries, although it is most frequently related to digital design for websites and mobile applications.There is no need for coding in user experience design.',
    },
    {

        footerClass: 'bg-primary',
        heading: 'Info Color Footer',
        title: 'Web Developer',
        desc: 'A programmer who uses the client-server architecture to create World Wide Web applications is known as a web developer. The apps generally employ any general-purpose programming language on the server and HTML, CSS, and JavaScript on the client.',
    },
]