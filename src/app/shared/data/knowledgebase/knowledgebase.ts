export interface knowledgebase {
   title: string;
   colClass: string;
   desc: string;
   icon: string;
}

export interface featuredTutorial {
   id: number;
   rating: number;
   img: string;
   post: string;
   desc: string;
   date: string;
}

export interface articlesAndVideos {
   row: number;
   data: {
      id: number;
      icon: string;
      title: string;
      desc: string;
   }[];
}[]

export const knowledgebaseData: knowledgebase[] = [
   {
      title: 'Articles',
      colClass: '',
      desc: "How little experience or technical knowledge you currently have. The web is a very big place, and if you are the typical internet user, you probably visit several websites every day.",
      icon: 'book-open',
   },
   {
      title: 'Knowledgebase',
      colClass: 'col-sm-6',
      desc: "A Website Designing course enables learners to use essential and designing and programming tools required to do the job. The curriculum is a blend of various themes.",
      icon: 'aperture'
   },
   {
      title: 'Support',
      colClass: 'col-sm-6',
      desc: "The customer support industry is renaissance. Customer support as a specialty is coming into its own, offering companies a competitive advantage that’s difficult to copy.",
      icon: 'file-text'
   }
]

export const featuredTutorialData: featuredTutorial[] = [
   {
      id: 1,
      rating: 5,
      img: 'assets/images/faq/1.jpg',
      post: 'Web Design',
      desc: "A Web Designing course belongs to the field of Computer It enables students to learn various techniques.",
      date: 'Dec 15, 2023',
   },
   {
      id: 2,
      rating: 4,
      img: 'assets/images/faq/2.jpg',
      post: 'Web Development',
      desc: "A Web Development course belongs to the field of Computer It enables students to learn various techniques.",
      date: 'Dec 15, 2023',
   },
   {
      id: 3,
      rating: 5,
      img: 'assets/images/faq/3.jpg',
      post: 'UI Design',
      desc: "User interface design (UI) is the design for machines and software, such as mobile devices, computers.",
      date: 'Dec 15, 2023',
   },
   {
      id: 4,
      rating: 4.5,
      img: 'assets/images/faq/4.jpg',
      post: 'UX Design',
      desc: "User Experience design (UX) is the design for machines and software, such as mobile devices, computers.",
      date: 'Dec 15, 2023',
   }
]

export const articlesAndVideosData: articlesAndVideos[] = [
   {
      row: 1,
      data: [
         {
            id: 1,
            icon: 'codepen',
            title: 'Article Base Video',
            desc: 'The web is a very big place, and if you are the typical internet base user.'
         },
         {
            id: 2,
            title: 'Knows your sources',
            icon: 'codepen',
            desc: 'A book giving information on many subjects or on many aspects of one subject.'
         },
         {
            id: 3,
            title: 'Sources credible/reliable',
            icon: 'codepen',
            desc: 'Simple demos of frequently asked questions about using the information resources'
         },
      ]
   },
   {
      row: 2,
      data: [
         {
            id: 4,
            title: 'Validate website',
            icon: 'file-text',
            desc: 'Website is the process of ensuring that the pages on the website conform.'
         },
         {
            id: 5,
            title: 'Tailwind Design',
            icon: 'file-text',
            desc: 'Tailwind is so low-level, it never encourages you to design the same site twice.'
         },
         {
            id: 6,
            title: 'Knows your sources',
            icon: 'file-text',
            desc: 'A book giving information on many subjects or on many aspects of one subject.'
         },
      ]
   },
   {
      row: 3,
      data: [
         {
            id: 7,
            title: 'Sources Demos',
            icon: 'youtube',
            desc: 'Simple demos of frequently asked questions about using the information resources'
         },
         {
            id: 8,
            title: 'Validate Html',
            icon: 'youtube',
            desc: 'Website is the process of ensuring that the pages on the website conform.'
         },
         {
            id: 9,
            title: 'Web Design',
            icon: 'youtube',
            desc: 'Web is so high-level, it never encourages you to design the same site twice'
         },
      ]
   }
]

export const browseArticlesData = [
   {
      colClass: 'col-xl-4 xl-50 col-md-6',
      seeMore: 40,
      title: 'Quick Questions are answered',
      titleIcon: 'archive',
      data: [
         {
            listData: 'Lorem Ipsum is simply dummy text of the printing',
            dataIcon: 'file-text',
            tag: false,
            tagTitle: '',
         },
         {
            listData: "Lorem Ipsum has been the industry's standard dummy",
            dataIcon: 'file-text',
            tag: false,
            tagTitle: '',
         },
         {
            listData: 'When an unknown printer took a galley',
            dataIcon: 'file-text',
            tag: true,
            tagTitle: 'New',
         },
         {
            listData: 'But also the leap into electronic typesetting,',
            dataIcon: 'file-text',
            tag: false,
            tagTitle: '',
         },
      ]
   },
   {
      colClass: 'col-xl-4 xl-50 col-md-6',
      seeMore: 90,
      title: 'Integrating WordPress with Your Website',
      titleIcon: 'archive',
      data: [
         {
            listData: 'It was popularised in the 1960s with the release',
            dataIcon: 'file-text',
            tag: true,
            tagTitle: 'Review',
         },
         {
            listData: 'Etraset sheets containing Lorem Ipsum passages',
            dataIcon: 'file-text',
            tag: false,
            tagTitle: '',
         },
         {
            listData: 'Desktop publishing software like Aldus PageMaker',
            dataIcon: 'file-text',
            tag: true,
            tagTitle: 'Articles',
         },
         {
            listData: 'Making this the first true generator on the Internet.',
            dataIcon: 'file-text',
            tag: false,
            tagTitle: '',
         },
      ]
   },
   {
      colClass: 'col-xl-4 xl-50 col-md-6',
      seeMore: 50,
      title: 'WordPress Site Maintenance',
      titleIcon: 'archive',
      data: [
         {
            listData: 'Lorem, ipsum dolor sit amet consectetur adipisicing',
            dataIcon: 'file-text',
            tag: false,
            tagTitle: '',
         },
         {
            listData: 'Normal distribution of letters, as opposed to using',
            dataIcon: 'file-text',
            tag: true,
            tagTitle: 'Closed',
         },
         {
            listData: "Lorem Ipsum, you need to be sure there isn't anything",
            dataIcon: 'file-text',
            tag: false,
            tagTitle: '',
         },
         {
            listData: 'Repetition, injected humour, or non words etc',
            dataIcon: 'file-text',
            tag: false,
            tagTitle: '',
         },
      ]
   },
   {
      colClass: 'col-xl-4 xl-50 col-md-6',
      seeMore: 90,
      title: 'Meta Tags in WordPress',
      titleIcon: 'archive',
      data: [
         {
            listData: 'Nemo enim ipsam voluptatem quia voluptas sit',
            dataIcon: 'file-text',
            tag: true,
            tagTitle: 'Popular',
         },
         {
            listData: 'Ipsum quia dolor sit amet, consectetur',
            dataIcon: 'file-text',
            tag: false,
            tagTitle: '',
         },
         {
            listData: 'Sed quia non numquam eius modi tempora incidunt',
            dataIcon: 'file-text',
            tag: false,
            tagTitle: '',
         },
         {
            listData: 'Lorem eum fugiat quo voluptas nulla pariatu',
            dataIcon: 'file-text',
            tag: false,
            tagTitle: '',
         },
      ]
   },
   {
      colClass: 'col-xl-4 xl-50 col-md-6',
      seeMore: 50,
      title: 'WordPress in Your Language',
      titleIcon: 'archive',
      data: [
         {
            listData: 'Desktop publishing software like Aldus PageMaker',
            dataIcon: 'file-text',
            tag: false,
            tagTitle: '',
         },
         {
            listData: 'Etraset sheets containing Lorem Ipsum passages',
            dataIcon: 'file-text',
            tag: false,
            tagTitle: '',
         },
         {
            listData: 'It was popularised in the 1960s with the release',
            dataIcon: 'file-text',
            tag: false,
            tagTitle: '',
         },
         {
            listData: 'Making this the first true generator on the Internet',
            dataIcon: 'file-text',
            tag: true,
            tagTitle: 'Closed',
         },
      ]
   },
   {
      colClass: 'col-xl-4 xl-50 col-md-6',
      seeMore: 26,
      title: 'Know Your Sources',
      titleIcon: 'archive',
      data: [
         {
            listData: 'The point of using Lorem Ipsum',
            dataIcon: 'file-text',
            tag: false,
            tagTitle: '',
         },
         {
            listData: 'It has a more-or-less normal distribution of letters',
            dataIcon: 'file-text',
            tag: false,
            tagTitle: '',
         },
         {
            listData: 'Et harum quidem rerum facilis est et expedita',
            dataIcon: 'file-text',
            tag: true,
            tagTitle: 'Article',
         },
         {
            listData: 'Nam libero tempore, cum soluta nobis est eligendi',
            dataIcon: 'file-text',
            tag: false,
            tagTitle: '',
         },
      ]
   },
   {
      colClass: 'col-xl-4 xl-50 col-md-6',
      seeMore: 10,
      title: 'Validating a Website',
      titleIcon: 'archive',
      data: [
         {
            listData: 'When our power of choice is untrammelled',
            dataIcon: 'file-text',
            tag: true,
            tagTitle: 'Review',
         },
         {
            listData: 'It will frequently occur that pleasures',
            dataIcon: 'file-text',
            tag: false,
            tagTitle: '',
         },
         {
            listData: 'who fail in their duty through weakness',
            dataIcon: 'file-text',
            tag: true,
            tagTitle: 'Closed',
         },
         {
            listData: 'At vero eos et accusamus et iusto',
            dataIcon: 'file-text',
            tag: false,
            tagTitle: '',
         },
      ]
   },
   {
      colClass: 'col-xl-4 xl-50 col-md-6',
      seeMore: 21,
      title: 'Quick Questions are answered',
      titleIcon: 'archive',
      data: [
         {
            listData: 'Quis autem vel eum iure reprehenderit',
            dataIcon: 'file-text',
            tag: false,
            tagTitle: '',
         },
         {
            listData: 'Ducimus  blanditiis praesentium voluptatum',
            dataIcon: 'file-text',
            tag: true,
            tagTitle: 'Popular',
         },
         {
            listData: 'Omnis voluptas assumenda est',
            dataIcon: 'file-text',
            tag: true,
            tagTitle: 'Review',
         },
         {
            listData: 'Produces no resultant pleasure',
            dataIcon: 'file-text',
            tag: false,
            tagTitle: '',
         },
      ]
   },
   {
      colClass: 'col-xl-4 xl-100',
      seeMore: 34,
      title: 'Integrating WordPress with Your Website',
      titleIcon: 'archive',
      data: [
         {
            listData: 'Lorem Ipsum passage, and going through',
            dataIcon: 'file-text',
            tag: false,
            tagTitle: '',
         },
         {
            listData: 'The first line of Lorem Ipsum,  Lorem ipsum',
            dataIcon: 'file-text',
            tag: false,
            tagTitle: '',
         },
         {
            listData: 'Thus comes from a line in section',
            dataIcon: 'file-text',
            tag: false,
            tagTitle: '',
         },
         {
            listData: 'First true generator on the Internet',
            dataIcon: 'file-text',
            tag: true,
            tagTitle: 'On hold',
         },
      ]
   },
]