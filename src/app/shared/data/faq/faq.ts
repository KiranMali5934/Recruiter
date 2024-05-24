export interface faqTopPart {
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
   }[];
}[]

export const FaqTopPartData: faqTopPart[] = [
   {
      title: 'Articles',
      colClass: '',
      desc: "My knowledge is limited to what I was trained on, which has a cutoff date of September 2021. Therefore, I can't provide you with the latest articles from the internet. However, I can still offer general information and answer any questions you might have based.",
      icon: 'file-text'
   },
   {
      title: 'Knowledgebase',
      colClass: 'col-sm-6',
      desc: "It's important to note that while I strive to provide accurate and up-to-date information, I may not have knowledge of events or developments that occurred after September 2023.",
      icon: 'book-open'
   },
   {
      title: 'Support',
      colClass: 'col-sm-6',
      desc: " my best to provide you with the information you seek. Please keep in mind that my knowledge is based on data up until September 2021, so I may not have information on recent events or developments.",
      icon: 'aperture'
   }
]

export const navigationData1 = [
   {
      icon: 'edit',
      title: 'Tutorials',

   },
   {
      icon: 'globe',
      title: 'Help center',

   },
   {
      icon: 'book-open',
      title: 'Knowledgebase',
   },
   {
      icon: 'file-text',
      title: 'Articles',
      count: '42'
   },
   {
      icon: 'youtube',
      title: 'Video Tutorials',
      count: '648',
      line:true
   },
   {
      icon: 'message-circle',
      title: 'Ask our community',

   },
   {
      icon: 'mail',
      title: 'Contact us',

   },
]



export const featuredTutorialData: featuredTutorial[] = [
   {
      id: 1,
      rating: 5,
      img: 'assets/images/faq/1.jpg',
      post: 'Web Design',
      desc: "A Web Designing course belongs to the field of Computer It enables students to learn various techniques.",
      date: 'Dec 15, 2022',
   },
   {
      id: 2,
      rating: 4,
      img: 'assets/images/faq/2.jpg',
      post: 'Web Development',
      desc: "A Web Development course belongs to the field of Computer It enables students to learn various techniques.",
      date: 'Dec 15, 2022',
   },
   {
      id: 3,
      rating: 5,
      img: 'assets/images/faq/3.jpg',
      post: 'UI Design',
      desc: "User interface design (UI) is the design for machines and software, such as mobile devices, computers.",
      date: 'Dec 15, 2022',
   },
   {
      id: 4,
      rating: 4.5,
      img: 'assets/images/faq/4.jpg',
      post: 'UX Design',
      desc: "User Experience design (UX) is the design for machines and software, such as mobile devices, computers.",
      date: 'Dec 15, 2022',
   }
]

export const articlesAndVideosData: articlesAndVideos[] = [
   {
      row: 1,
      data: [
         {
            id: 1,
            icon: 'codepen',
            title: 'Using Video',
         },
         {
            id: 2,
            title: 'Vel illum qu',
            icon: 'codepen',

         },
         {
            id: 3,
            title: 'Cum sociis natoqu',
            icon: 'codepen',
         },
      ]
   },
   {
      row: 2,
      data: [
         {
            id: 4,
            title: 'Donec pede justo',
            icon: 'file-text',
         },
         {
            id: 5,
            title: 'Nam quam nunc',
            icon: 'file-text',

         },
         {
            id: 6,
            title: 'Using Video',
            icon: 'file-text',
         },
      ]
   },
   {
      row: 3,
      data: [
         {
            id: 7,
            title: 'Vel illum qu',
            icon: 'youtube',
         },
         {
            id: 8,
            title: 'Cum sociis natoqu',
            icon: 'youtube',
         },
         {
            id: 9,
            title: 'Donec pede justo',
            icon: 'youtube',
         },
      ]
   }
]

export const questionData = [
   {
      data: [
         {
            panel: 'allData',
            title: 'Integrating WordPress with Your Website?',
            desc: 'How you approach this process will depend on which web host you use. For example, a lot of hosting providers use cPanel, which includes an option to set up subdomains with just a few clicks.',
         },
         {
            panel: 'Second',
            title: 'WordPress Site Maintenance ?',
            desc: 'We’ve just published a detailed on how to backup your WordPress website, however, if you’re in a hurry, here’s a quick solution.',
         },
         {
            panel: 'Third',
            title: 'Meta Tags in WordPress ?',
            desc: 'Manually adding meta tags in WordPress is relatively simple. For this demo, we’ll use the example from the WordPress Codex. Imagine you’re Harriet Smith, a veterinarian who blogs about their animal stories on WordPress.',
         },
         {
            panel: 'Fourth',
            title: 'WordPress in Your Language ?',
            desc: 'As of version 4.0, you can have WordPress automatically install the language of your choice during the installation process.',
         },
      ]
   },
   {
      heading: 'Intellectual Property',
      data: [
         {
            panel: 'Fifth',
            title: 'WordPress Site Maintenance ?',
            desc: 'We’ve just published a detailed on how to backup your WordPress website, however, if you’re in a hurry, here’s a quick solution.',
         },
         {
            panel: 'Six',
            title: ' WordPress in Your Language ?',
            desc: 'As of version 4.0, you can have WordPress automatically install the language of your choice during the installation process.',
         },
         {
            panel: 'Seven',
            title: 'Integrating WordPress with Your Website ?',
            desc: 'How you approach this process will depend on which web host you use. For example, a lot of hosting providers use cPanel, which includes an option to set up subdomains with just a few clicks.',
         },
      ]
   },
   {
      heading: 'Selling And Buying',
      data: [
         {
            panel: 'Nine',
            title: 'WordPress Site Maintenance ?',
            desc: 'We’ve just published a detailed on how to backup your WordPress website, however, if you’re in a hurry, here’s a quick solution.',
         },
         {
            panel: 'Ten',
            title: 'Meta Tags in WordPress ?',
            desc: 'Manually adding meta tags in WordPress is relatively simple. For this demo, we’ll use the example from the WordPress Codex. Imagine you’re Harriet Smith, a veterinarian who blogs about their animal stories on WordPress.',
         },
         {
            panel: 'Eleven',
            title: 'Validating a Website ?',
            desc: 'Validating a website is the process of ensuring that the pages on the website conform to the norms or standards defined by various organizations.',
         },
         {
            panel: 'Twelve',
            title: 'Know Your Sources ?',
            desc: 'A book or set of books giving information on many subjects or on many aspects of one subject. Some are intended as an entry point into research for a general audience, some provide detailed information.',
         },
      ]
   },
   {
      heading: 'User Accounts',
      data: [
         {
            panel: 'Thirteen',
            title: 'Integrating WordPress with Your Website ?',
            desc: 'How you approach this process will depend on which web host you use. For example, a lot of hosting providers use cPanel, which includes an option to set up subdomains with just a few clicks.',
         },
         {
            panel: 'Fourteen',
            title: 'WordPress Site Maintenance ?',
            desc: 'We’ve just published a detailed on how to backup your WordPress website, however, if you’re in a hurry, here’s a quick solution.',
         },
         {
            panel: 'Fifteen',
            title: 'WordPress in Your Language ?',
            desc: 'As of version 4.0, you can have WordPress automatically install the language of your choice during the installation process.',
         },
         {
            panel: 'Sixteen',
            title: 'Validating a Website ?',
            desc: 'Validating a website is the process of ensuring that the pages on the website conform to the norms or standards defined by various organizations.',
         },
         {
            panel: 'Saventeen',
            title: 'Meta Tags in WordPress ?',
            desc: 'Manually adding meta tags in WordPress is relatively simple. For this demo, we’ll use the example from the WordPress Codex. Imagine you’re Harriet Smith, a veterinarian who blogs about their animal stories on WordPress.',
         },

      ]
   }
]