import { Routes } from '@angular/router';

export const dashData: Routes = [
    {
        path: 'dashboard',
        data: {
            title: "Default",
            breadcrumb: "Dashboard",

        },
        loadChildren: () => import('../../component/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'widgets',
        data: {
            title: "Widgets",
            breadcrumb: "Widgets",

        },
        loadChildren: () => import('../../component/widgets/widgets.module').then(m => m.WidgetsModule)
    },
    {
        path: 'page-layout',
        data: {
            title: "Page Layout",
            breadcrumb: "Page Layout",

        },
        loadChildren: () => import('../../component/page-layout/page-layout.module').then(m => m.PageLayoutModule)
    },
    {
        path: 'project',
        data: {
            title: "Project",
            breadcrumb: "Project",

        },
        loadChildren: () => import('../../component/project/project.module').then(m => m.ProjectModule)
    },
    {
        path: 'file-manager',
        data: {
            title: "File manager",
            breadcrumb: "File manager"
        },
        loadChildren: () => import('../../component/file-manager/file-manager.module').then(m => m.FileManagerModule),
    },
    {
        path: 'ecommerce',
        data: {
            breadcrumb: "Ecommerce"
        },
        loadChildren: () => import('../../component/ecommerce/ecommerce.module').then(m => m.EcommerceModule),
    },
    {
        path: 'invoice',
        data: {
            title: "Invoice",
            breadcrumb: "Invoice"
        },
        loadChildren: () => import('../../component/ecommerce/invoice/invoice.module').then(m => m.InvoiceModule),
    },
    {
        path: 'letter-box',
        data: {
            title2: "Letter Box",
            breadcrumb: "Email"
        },
        loadChildren: () => import('../../component/letter-box/letter-box.module').then(m => m.LetterBoxModule),
    },
    {
        path: 'Chat',
        data: {
            breadcrumb: "chat"
        },
        loadChildren: () => import('../../component/chat/chat.module').then(m => m.ChatModule),
    },
    {
        path: 'user',
        data: {
            breadcrumb: "User"
        },
        loadChildren: () => import('../../component/user/user.module').then(m => m.UserModule),
    },
    {
        path: 'bookmarks',
        data: {
            title: "Bookmarks",
            breadcrumb: "Apps"
        },
        loadChildren: () => import('../../component/bookmarks/bookmarks.module').then(m => m.BookmarksModule),
    },
    {
        path: 'contacts',
        data: {
            breadcrumb: 'Apps'
        },
        loadChildren: () => import('../../component/contacts/contacts.module').then(m => m.ContactsModule),
    },
    {
        path: 'task',
        data: {
            breadcrumb: 'Apps'
        },
        loadChildren: () => import('../../component/tasks/tasks.module').then(m => m.TasksModule),
    },
    {
        path: 'calender',
        data: {
            breadcrumb: 'Apps'
        },
        loadChildren: () => import('../../component/calender/calender.module').then(m => m.CalenderModule),
    },
    {
        path: 'social-app',
        data: {
            breadcrumb: 'Apps'
        },
        loadChildren: () => import('../../component/social-app/social-app.module').then(m => m.SocialAppModule),
    },
    {
        path: 'todo',
        data: {
            breadcrumb: 'Apps'
        },
        loadChildren: () => import('../../component/todo/todo.module').then(m => m.TodoModule),
    },
    {
        path: 'search-pages',
        data: {
            breadcrumb: 'Search Pages'
        },
        loadChildren: () => import('../../component/search-result/search-result.module').then(m => m.SearchResultModule),
    },
    {
        path: 'form/form-controls',
        data: {
            breadcrumb: 'Form-Controls'
        },
        loadChildren: () => import('../../component/forms/form-controls/form-controls.module').then(m => m.FormControlsModule),
    },
    {
        path: 'form-widgets',
        data: {
            breadcrumb: 'Form Widgets'
        },
        loadChildren: () => import('../../component/forms/form-widgets/form-widgets.module').then(m => m.FormWidgetsModule),
    },
    {
        path: 'table/bootstrap-tables',
        data: {
            breadcrumb: 'Table'
        },
        loadChildren: () => import('../../component/table/bootstrap-tables/bootstrap-tables.module').then(m => m.BootstrapTablesModule),
    },
    {
        path: 'table/datatable',
        data: {
            title: "Data Table",
            breadcrumb: "Data Table",
        },
        loadChildren: () => import('../../component/table/data-table/data-table.module').then(m => m.DataTableModule),
    },
    {
        path: 'ui-kits',
        data: {
            title: "Ui-kits",
            breadcrumb: "Ui-kits",
        },
        loadChildren: () => import('../../component/ui-kits/ui-kits.module').then(m => m.UiKitsModule)
    },
    {
        path: 'bonus-ui',
        data: {
            title: "Bonus Ui",
            breadcrumb: "Bonus Ui",
        },
        loadChildren: () => import('../../component/bonus-ui/bonus-ui.module').then(m => m.BonusUiModule)
    },
    {
        path: 'icons',
        data: {
            title: "Icons",
            breadcrumb: "Icons",
        },
        loadChildren: () => import('../../component/icons/icons.module').then(m => m.IconsModule)
    },
    {
        path: 'buttons',
        data: {
            title: "Buttons",
            breadcrumb: "Buttons",
        },
        loadChildren: () => import('../../component/buttons/buttons.module').then(m => m.ButtonsModule)
    },
    {
        path: 'chart',
        data: {
            title: "Charts",
            breadcrumb: "Charts",
        },
        loadChildren: () => import('../../component/chart/chart.module').then(m => m.ChartModule)
    },
    {
        path: 'sample-page',
        data: {
            title: "Sample Page",
            breadcrumb: 'Pages'
        },
        loadChildren: () => import('../../component/sample-page/sample-page.module').then(m => m.SamplePageModule),
    },
    {
        path: 'gallary',
        data: {
            breadcrumb: 'Gallery'
        },
        loadChildren: () => import('../../component/gallery/gallery.module').then(m => m.GalleryModule),
    },
    {
        path: 'blog',
        data: {
            breadcrumb: 'Blog'
        },
        loadChildren: () => import('../../component/blog/blog.module').then(m => m.BlogModule),
    },
    {
        path: 'faq',
        data: {
            breadcrumb: 'FAQ'
        },
        loadChildren: () => import('../../component/faq/faq.module').then(m => m.FaqModule),
    },  
    {
        path: 'job',
        data: {
            breadcrumb: 'Job Management'
        },
        loadChildren: () => import('../../component/job-search/job-search.module').then(m => m.JobSearchModule),
    }, 
    {
        path: 'learning',
        data: {
            breadcrumb: 'Learning'
        },
        loadChildren: () => import('../../component/learning/learning.module').then(m => m.LearningModule),
    }, 
    {
        path: 'maps',
        data: {
            breadcrumb: 'Maps'
        },
        loadChildren: () => import('../../component/maps/maps.module').then(m => m.MapsModule),
    },
    {
        path: 'editors',
        data: {
            breadcrumb: 'Editors'
        },
        loadChildren: () => import('../../component/editor/editor.module').then(m => m.EditorModule),
    },
    {
        path: 'knowledgebase',
        data: {
            breadcrumb: 'knowledgebase'
        },
        loadChildren: () => import('../../component/knowledgebase/knowledgebase.module').then(m => m.KnowledgebaseModule),
    },
    {
        path: 'support-ticket',
        data: {
            breadcrumb: 'Apps'
        },
        loadChildren: () => import('../../component/support-ticket/support-ticket.module').then(m => m.SupportTicketModule),
    },
    {
        path: 'recruiter',
        data: {
            breadcrumb: 'Recruiter'
        },
        loadChildren: () => import('../../component/recruiter-management/recruiter-management.module').then(m => m.RecruiterManagementModule),
    },
]
