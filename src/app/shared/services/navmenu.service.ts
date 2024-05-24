import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

export interface Menu {
  headTitle1?: string;
  level?: number;
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  active?: boolean;
  id?: number;
  bookmark?: boolean;
  children?: Menu[];
  horizontalList?: boolean;
  items?: Menu[]
}


@Injectable({
  providedIn: 'root'
})
export class NavmenuService {

  public isDisplay: boolean;
  public language: boolean = false;
  public isShow: boolean = false;


  constructor() { }

  MENUITEMS: Menu[] = [
    // {
    //   headTitle1: "General",
    // },
    {
      id: 1,
      level: 1,
      title: "Dashboard",
      icon: "home",
      active: true,
      path:"/dashboard/recruiter",
      // children: [
      //   { path: "/dashboard/default", title: "Default", type: "link" },
      //   { path: "/dashboard/ecommerce", title: "Ecommerce", type: "link" },
      //   { path: "/dashboard/online-course", title: "Online course", type: "link" },
      // ],
    },
    // {
    //   id: 2,
    //   level: 1,
    //   title: "Widgets",
    //   icon: "widget",
    //   type: "sub",
    //   active: false,
    //   children: [
    //     { path: "/widgets/general", title: "General", type: "link" },
    //     { path: "/widgets/chart", title: "Chart", type: "link" },
    //   ],
    // },
    // {
    //   id: 3,
    //   level: 1,
    //   title: "Page Layout",
    //   icon: "layout",
    //   type: "sub",
    //   active: false,
    //   children: [
    //     { path: '/page-layout/hide-nav-scroll', title: 'Hide Nav Scroll', type: 'link' },
    //   ],
    // },
    // {
    //   headTitle1: "Applications",
    // },
    // {
    //   id: 4,
    //   level: 1,
    //   title: "Project",
    //   icon: "project",
    //   type: "sub",
    //   active: false,
    //   horizontalList: true,
    //   children: [
    //     { path: "/project/list", title: "Project List", type: "link" },
    //     { path: "/project/create", title: "Create New", type: "link" },
    //   ],
    // },
    // {
    //   id: 5,
    //   level: 1,
    //   path: "/file-manager",
    //   title: "File Manager",
    //   icon: "file",
    //   type: "link",
    // },
    // {
    //   id: 6,
    //   level: 1,
    //   title: "Ecommerce",
    //   type: "sub",
    //   icon: "ecommerce",
    //   horizontalList: true,
    //   active: false,
    //   children: [
    //     { path: "/ecommerce/add-products", title: "Add Product", type: "link" },
    //     { path: "/ecommerce/products", title: "Product", type: "link" },
    //     { path: "/ecommerce/category-page", title: "Category Page", type: "link" },
    //     { path: "/ecommerce/product-page", title: "Product page", type: "link" },
    //     { path: "/ecommerce/product-list", title: "Product list", type: "link" },
    //     { path: "/ecommerce/payment-details", title: "Payment Details", type: "link" },
    //     { path: "/ecommerce/order-history", title: "Order History", type: "link" },
    //     {
    //       title: 'invoice',
    //       type: "sub",
    //       level: 2,
    //       active: false,
    //       children: [
    //         { path: "/invoice/invoice1", title: "Invoice1", type: "link" },
    //         { path: "/invoice/invoice2", title: "Invoice2", type: "link" },
    //         { path: "/invoice/invoice3", title: "Invoice3", type: "link" },
    //         { path: "/invoice/invoice4", title: "Invoice4", type: "link" },
    //         { path: "/invoice/invoice5", title: "Invoice5", type: "link" },
    //         { path: "/invoice/invoice6", title: "Invoice6", type: "link" },
    //       ]
    //     },
    //     { path: "/ecommerce/cart", title: "Cart", type: "link" },
    //     { path: "/ecommerce/wishlist", title: "Wishlist", type: "link" },
    //     { path: "/ecommerce/checkout", title: "Checkout", type: "link" },
    //     { path: "/ecommerce/pricing", title: "Pricing", type: "link" },
    //   ],
    // },
    // {
    //   id: 7,
    //   level: 1,
    //   title: "Letter-box",
    //   path: "/letter-box",
    //   icon: "email",
    //   active: false,
    //   type: "link",
    // },
    // {
    //   id: 8,
    //   level: 1,
    //   title: "Chat",
    //   type: "sub",
    //   icon: "ecommerce",
    //   active: false,
    //   children: [
    //     { path: "/Chat/private-chat", title: "Private Chat", type: "link" },
    //     { path: "/Chat/group-chat", title: "Group Chat", type: "link" },
    //   ],
    // },
    // {
    //   id: 9,
    //   level: 1,
    //   title: "Users",
    //   icon: "user",
    //   type: "sub",
    //   active: false,
    //   children: [
    //     { path: "/user/users-profile", title: "Users Profile", type: "link" },
    //     { path: "/user/profile-edit", title: "Users Edit", type: "link" },
    //     { path: "/user/users-cards", title: "Users Cards", type: "link" },
    //   ],
    // },
    // { level: 1, id: 10, path: "/bookmarks", title: "Bookmarks", icon: "bookmark", type: "link" },
    // { level: 1, id: 11, path: "/contacts", bookmark: true, title: "Contact", icon: "contact", type: "link" },
    // { level: 1, id: 12, path: "/task", bookmark: true, title: "Tasks", icon: "task", type: "link" },
    // { level: 1, id: 13, path: "/calender", title: "Calender", icon: "calendar", type: "link" },
    // { level: 1, id: 14, path: "/social-app", title: "Social App", icon: "social", type: "link" },
    // { level: 1, id: 15, path: "/todo", bookmark:true, title: "To-Do", icon: "to-do", type: "link" },
    // { level: 1, id: 16, path: "/search-pages", title: "Search Result", icon: "search", type: "link" },
    // {
    //   headTitle1: "Forms & Table",
    // },
    // {
    //   id: 17,
    //   level: 1,
    //   title: "Forms",
    //   icon: "form",
    //   type: "sub",
    //   active: false,
    //   children: [
    //     {
    //       title: "Form Controls",
    //       type: "sub",
    //       level: 2,
    //       active: false,
    //       children: [
    //         { path: "/form/form-controls/validation", title: "Form Validation", type: "link" },
    //         { path: "/form/form-controls/inputs",  title: "Base Inputs", type: "link" },
    //         { path: "/form/form-controls/checkbox-radio", title: "Checkbox & Radio", type: "link" },
    //         { path: "/form/form-controls/input-groups",  title: "Input Groups", type: "link" },
    //         { path: "/form/form-controls/input-mask",  title: "Input Mask", type: "link" },
    //         { path: "/form/form-controls/mega-options",  title: "Mega Options", type: "link" },
    //       ],
    //     },
    //     {
    //       title: "Form Widgets",
    //       type: "sub",
    //       level: 2,
    //       active: false,
    //       children: [
    //         { path: "/form-widgets/datepicker", title: "Datepicker", type: "link" },
    //         { path: "/form-widgets/touchspin", title: "Touchspin", type: "link" },
    //         { path: "/form-widgets/select2", title: "Select2", type: "link" },
    //         { path: "/form-widgets/switch", title: "Switch", type: "link" },
    //         { path: "/form-widgets/typeahead", title: "Typeahead", type: "link" },
    //         { path: "/form-widgets/clipboard", title: "Clipboard", type: "link" },
    //       ],
    //     },
    //   ]
    // },
    // {
    //   id: 18,
    //   level: 1,
    //   title: "Tables",
    //   icon: "table",
    //   type: "sub",
    //   active: false,
    //   children: [
    //     {
    //       title: "Bootstrap Tables",
    //       type: "sub",
    //       level: 2,
    //       active: false,
    //       children: [
    //         { path: "/table/bootstrap-tables/basic-table", title: "Basic Table", type: "link" },
    //         { path: "/table/bootstrap-tables/table-components", title: "Table Components", type: "link" },
    //       ],
    //     },
    //     {
    //       title: "Data Table",
    //       active: false,
    //       type: "link",
    //       path: "/table/datatable",
    //     },
    //   ],
    // },
    // {
    //   headTitle1: "Components",
    // },
    // {
    //   id: 19,
    //   level: 1,
    //   title: "Ui-Kits",
    //   icon: "ui-kits",
    //   type: "sub",
    //   active: false,
    //   children: [
    //     { path: "/ui-kits/typography", title: "Typography", type: "link" },
    //     { path: "/ui-kits/avatars", title: "Avatars", type: "link" },
    //     { path: "/ui-kits/helper-classes", title: "Helper Classes", type: "link" },
    //     { path: "/ui-kits/grid", title: "Grid", type: "link" },
    //     { path: "/ui-kits/tag-n-pills", title: "Tag & Pills", type: "link" },
    //     { path: "/ui-kits/progress-bar", title: "Progress", type: "link" },
    //     { path: "/ui-kits/modal", title: "Modal", type: "link" },
    //     { path: "/ui-kits/alert", title: "Alert", type: "link" },
    //     { path: "/ui-kits/popover", title: "Popover", type: "link" },
    //     { path: "/ui-kits/tooltip", title: "Tooltip", type: "link" },
    //     { path: "/ui-kits/dropdown", title: "Dropdown", type: "link" },
    //     { path: "/ui-kits/according", title: "Accordion", type: "link" },
    //     { path: "/ui-kits/tabs", title: "Tabs", type: "link" },
    //     { path: "/ui-kits/list", title: "Lists", type: "link" },
    //   ],
    // },
    // {
    //   id: 20,
    //   level: 1,
    //   title: "Bonus UI",
    //   icon: "bonus-kit",
    //   type: "sub",
    //   horizontalList: true,
    //   active: false,
    //   children: [
    //     { path: "/bonus-ui/toasts", title: "Toasts", type: "link" },
    //     { path: "/bonus-ui/rating", title: "Rating", type: "link" },
    //     { path: "/bonus-ui/dropzone", title: "Dropzone", type: "link" },
    //     { path: "/bonus-ui/sweetalert2", title: "SweetAlert2", type: "link", },
    //     { path: "/bonus-ui/owl-carousel", title: "Owl Carousel", type: "link", },
    //     { path: "/bonus-ui/ribbons", title: "Ribbons", type: "link" },
    //     { path: "/bonus-ui/pagination", title: "Pagination", type: "link" },
    //     { path: "/bonus-ui/breadcrumb", title: "Breadcrumb", type: "link", },
    //     { path: "/bonus-ui/range-slider", title: "Range Slider", type: "link", },
    //     { path: "/bonus-ui/image-cropper", title: "Image Cropper", type: "link", },
    //     { path: "/bonus-ui/basic-card", title: "Basic Card", type: "link" },
    //     { path: "/bonus-ui/creative-card", title: "Creative Card", type: "link", },
    //     { path: "/bonus-ui/timeline", title: "Timeline", type: "link" },
    //   ],
    // },
    // {
    //   id: 21,
    //   level: 1,
    //   title: "Icons",
    //   icon: "icons",
    //   type: "sub",
    //   active: false,
    //   children: [
    //     { path: "/icons/flag-icons", title: "Flag icon", type: "link" },
    //     { path: "/icons/fontawesome-icons", title: "Fontawesome Icon", type: "link" },
    //     { path: "/icons/ico-icons", title: "Ico Icon", type: "link" },
    //     { path: "/icons/themify-icons", title: "Themify Icon", type: "link" },
    //     { path: "/icons/feather-icons", title: "Feather Icon", type: "link" },
    //     { path: "/icons/weather-icons", title: "Weather Icon", type: "link" },
    //   ],
    // },
    // {
    //   id: 22,
    //   level: 1,
    //   title: "Buttons",
    //   icon: "button",
    //   type: "sub",
    //   active: false,
    //   children: [
    //     { path: "/buttons/default-style", title: "Default Style", type: "link" },
    //     { path: "/buttons/flat-buttons", title: "Flat Buttons", type: "link" },
    //     { path: "/buttons/edge-buttons", title: "Edge Buttons", type: "link" },
    //     { path: "/buttons/raised-buttons", title: "Raised Buttons", type: "link" },
    //     { path: "/buttons/button-group", title: "Button Group", type: "link" },
    //   ],
    // },
    // {
    //   id: 23,
    //   level: 1,
    //   title: "Charts",
    //   icon: "charts",
    //   type: "sub",
    //   active: false,
    //   children: [
    //     { path: "/chart/apex-chart", title: "Apex Chart", type: "link" },
    //     { path: "/chart/google-chart", title: "Google Chart", type: "link" },
    //     { path: "/chart/chartjs-chart", title: "Chartjs Chart", type: "link" },
    //     { path: "/chart/chartist-chart", title: "Chartist Chart", type: "link" },
    //   ],
    // },
    // {
    //   headTitle1: "Pages",
    // },
    // { level: 1, id: 24, path: "/sample-page", title: "Sample Page", icon: "sample-page", type: "link" },
    // {
    //   id: 25,
    //   level: 1,
    //   title: "Others",
    //   icon: "others",
    //   type: "sub",
    //   active: false,
    //   children: [
    //     {
    //       title: "Error Pages",
    //       type: "sub",
    //       level: 2,
    //       active:false,
    //       children: [
    //         {
    //           path: "/error-page/error-400",
    //           title: "Error 400",
    //           type: "link",
    //         },
    //         {
    //           path: "/error-page/error-401",
    //           title: "Error 401",
    //           type: "link",
    //         },
    //         {
    //           path: "/error-page/error-403",
    //           title: "Error 403",
    //           type: "link",
    //         },
    //         {
    //           path: "/error-page/error-404",
    //           title: "Error 404",
    //           type: "link",
    //         },
    //         {
    //           path: "/error-page/error-500",
    //           title: "Error 500",
    //           type: "link",
    //         },
    //         {
    //           path: "/error-page/error-503",
    //           title: "Error 503",
    //           type: "link",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Authentication",
    //       type: "sub",
    //       level: 2,
    //       active:false,
    //       children: [
    //         {
    //           path: "/authentication/simple",
    //           title: "Login Simple",
    //           type: "link",
    //         },
    //         {
    //           path: "/authentication/image-one",
    //           title: "Login with Bg Image",
    //           type: "link",
    //         },
    //         {
    //           path: "/authentication/image-two",
    //           title: "Login with Image two",
    //           type: "link",
    //         },
    //         {
    //           path: "/authentication/validation",
    //           title: "Login with Validation",
    //           type: "link",
    //         },
    //         {
    //           path: "/authentication/tooltip",
    //           title: "Login with Tooltip",
    //           type: "link",
    //         },
    //         {
    //           path: "/authentication/sweetalert",
    //           title: "Login with Sweetalert",
    //           type: "link",
    //         },
    //         {
    //           path: "/authentication/register-simple",
    //           title: "Register Simple",
    //           type: "link",
    //         },
    //         {
    //           path: "/authentication/register-image-one",
    //           title: "Register with Bg Image",
    //           type: "link",
    //         },
    //         {
    //           path: "/authentication/register-image-two",
    //           title: "Register with image two",
    //           type: "link",
    //         },
    //         {
    //           path: "/authentication/unlock-user",
    //           title: "Unlock User",
    //           type: "link",
    //         },
    //         {
    //           path: "/authentication/forget-password",
    //           title: "Forget Password",
    //           type: "link",
    //         },
    //         {
    //           path: "/authentication/reset-password",
    //           title: "Reset Password",
    //           type: "link",
    //         },
    //         {
    //           path: "/authentication/maintenance",
    //           title: "Maintenance",
    //           type: "link",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Coming Soon",
    //       type: "sub",
    //       level: 2,
    //       active:false,
    //       children: [
    //         {
    //           path: "/coming-soon/coming-soon-simple",
    //           title: "Coming Simple",
    //           type: "link",
    //         },
    //         {
    //           path: "/coming-soon/coming-soon-video",
    //           title: "Coming With Bg Video",
    //           type: "link",
    //         },
    //         {
    //           path: "/coming-soon/coming-soon-image",
    //           title: "Coming With Bg Image",
    //           type: "link",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Email templates",
    //       type: "sub",
    //       active:false,
    //       level: 2,
    //       children: [
    //         {
    //           path: "https://admin.pixelstrap.net/riho/template/basic-template.html",
    //           title: "Basic Email",
    //           type: "extTabLink",
    //         },
    //         {
    //           path: "https://admin.pixelstrap.net/riho/template/email-header.html",
    //           title: "Basic With Header",
    //           type: "extTabLink",
    //         },
    //         {
    //           path: "https://admin.pixelstrap.net/riho/template/template-email.html",
    //           title: "Ecomerce Template",
    //           type: "extTabLink",
    //         },
    //         {
    //           path: "https://admin.pixelstrap.net/riho/template/template-email-2.html",
    //           title: "Email Template 2",
    //           type: "extTabLink",
    //         },
    //         {
    //           path: "https://admin.pixelstrap.net/riho/template/ecommerce-templates.html",
    //           title: "Ecommerce Email",
    //           type: "extTabLink",
    //         },
    //         {
    //           path: "https://admin.pixelstrap.net/riho/template/email-order-success.html",
    //           title: "Order Success",
    //           type: "extTabLink",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   headTitle1: "Miscellaneous",
    // },
    // {
    //   id: 26,
    //   level: 1,
    //   title: "Gallery",
    //   icon: "gallery",
    //   type: "sub",
    //   active: false,
    //   children: [
    //     { path: "/gallary/gallary-grid", title: "Gallery Grid", type: "link" },
    //     { path: "/gallary/gallery-grid-desc", title: "Gallery Grid Desc", type: "link" },
    //     { path: "/gallary/masonry-gallery", title: "Masonry Gallery", type: "link" },
    //     { path: "/gallary/masonry-with-desc", title: "Masonry With Desc", type: "link" },
    //     { path: "/gallary/hover-effects", title: "Hover Effects", type: "link" },
    //   ],
    // },
    // {
    //   id: 27,
    //   level: 1,
    //   title: "Blog",
    //   icon: "blog",
    //   type: "sub",
    //   horizontalList: true,
    //   active: false,
    //   children: [
    //     { path: "/blog/blog-details", title: "Blog Details", type: "link" },
    //     { path: "/blog/blog-single", title: "Blog Single", type: "link" },
    //     { path: "/blog/add-post", title: "Add Post", type: "link" },
    //   ],
    // },
    // { level: 1, id: 28, path: "/faq", title: "FAQ", icon: "faq", type: "link", active: false },
    // {
    //   id: 21,
    //   level: 1,
    //   title: "Icons",
    //   icon: "icons",
    //   type: "sub",
    //   active: false,
    //   children: [
    //     { path: "/icons/flag-icons", title: "Flag icon", type: "link" },
    //     { path: "/icons/fontawesome-icons", title: "Fontawesome Icon", type: "link" },
    //     { path: "/icons/ico-icons", title: "Ico Icon", type: "link" },
    //     { path: "/icons/themify-icons", title: "Themify Icon", type: "link" },
    //     { path: "/icons/feather-icons", title: "Feather Icon", type: "link" },
    //     { path: "/icons/weather-icons", title: "Weather Icon", type: "link" },
    //   ],
    // },
    {
      id: 29,
      level: 1,
      title: "Talent Management",
      icon: "user",
      type: "sub",
      active: false,
      children: [
        // { path: "/job/cards-view", title: "Cards View", type: "link" },
        { path: "/recruiter/add-talent", title: "Add Talent", type: "link" },
        // { path: "/job/job-details/:id", title: "Job Details", type: "link" },
        { path: "/recruiter/all-talent-list", title: "All Talents", type: "link" },
        { path: "/recruiter/talent-timesheet", title: "Talent Timesheets", type: "link" },
        { path: "/recruiter/talent-joblist", title: "Applied Jobs", type: "link" },
        { path: "/recruiter/talent-projectlist", title: "Talent Projects", type: "link" },
      ],
    },
    {
      id: 30,
      level: 1,
      title: "Interview Management",
      icon: "gallery",
      type: "sub",
      active: false,
      children: [
        { path: "/recruiter/add-interview-schedule", title: "Schedule Interview  ", type: "link" },
        { path: "/recruiter/interview-schedule-list", title: "Interview Schedule List", type: "link" },
        { path: "/recruiter/interview-Selection", title: "Interview Selection List", type: "link" },
        { path: "/recruiter/final-Selection", title: "Final Selection List", type: "link" },
        { path: "/recruiter/selectreject-talents", title: "Selected Rejected Talents List", type: "link" },
      ],
    },
    {
      id: 30,
      level: 1,
      title: "Job Management",
      icon: "gallery",
      type: "sub",
      active: false,
      children: [
        { path: "/recruiter/job-list", title: "All Jobs", type: "link" },
        
      ],
    },
    // {
    //   id: 31,
    //   level: 1,
    //   title: "Timesheet Management",
    //   icon: "others",
    //   type: "sub",
    //   active: false,
    //   children: [
    //     { path: "/timesheet/add-edit-timesheet", title: "TimeSheet", type: "link" },
    //     { path: "/timesheet/timesheet-list", title: "Timesheet List", type: "link" },
    //   ],
    // },
    {
      id: 31,
      level: 1,
      title: "Commision Module",
      icon: "others",
      type: "sub",
      active: false,
      path: '/recruiter/commision-module',
    },
    // {
    //   id: 31,
    //   level: 1,
    //   title: "Maps",
    //   icon: "maps",
    //   type: "sub",
    //   active: false,
    //   children: [
    //     { path: "/maps/map-google", title: "Google Map", type: "link" },
    //     { path: "/maps/leaflet-map", title: "Leaflet Map", type: "link" },
    //   ],
    // },
    // {
    //   id: 32,
    //   level: 1,
    //   title: "Editors",
    //   icon: "editors",
    //   type: "sub",
    //   active: false,
    //   children: [
    //     { path: "/editors/ngx-editors", title: "Ngx Editor", type: "link" },
    //     { path: "/editors/mde-editors", title: "MDE Editors", type: "link" }
    //   ],
    // },
    // { level: 1, id: 33, path: "/knowledgebase", title: "Knowledgebase", icon: "knowledgebase", type: "link" },
    // { level: 1, id: 34, path: "/support-ticket", title: "Support Ticket", icon: "support-tickets", type: "link" },
  ]

  item = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
