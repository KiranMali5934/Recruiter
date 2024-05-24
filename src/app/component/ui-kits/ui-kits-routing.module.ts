import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypographyComponent } from './typography/typography.component';
import { AvatarsComponent } from './avatars/avatars.component';
import { HelperClassesComponent } from './helper-classes/helper-classes.component';
import { GridComponent } from './grid/grid.component';
import { TagPillsComponent } from './tag-pills/tag-pills.component';
import { ProgressComponent } from './progress/progress.component';
import { ModalComponent } from './modal/modal.component';
import { PopoverComponent } from './popover/popover.component';
import { AlertComponent } from './alert/alert.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { AccordionComponent } from './accordion/accordion.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListsComponent } from './lists/lists.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'typography',
        component: TypographyComponent,
        data: {
          title: "Typography",
          breadcrumb: "Typography",
        }
      },
      {
        path: 'avatars',
        component: AvatarsComponent,
        data: {
          title: "Avatars",
          breadcrumb: "Avatars",
        }
      },
      {
        path: 'helper-classes',
        component: HelperClassesComponent,
        data: {
          title: "Helper Classes",
          breadcrumb: "Helper Classes",
        }
      },
      {
        path: 'grid',
        component: GridComponent,
        data: {
          title: "Grid",
          breadcrumb: "Grid",
        }
      },
      {
        path: 'tag-n-pills',
        component: TagPillsComponent,
        data: {
          title: "Tag & Pills",
          breadcrumb: "Tag and Pills",
        }
      },
      {
        path: 'progress-bar',
        component: ProgressComponent,
        data: {
          title: "Progress",
          breadcrumb: "Progress",
        }
      },
      {
        path: 'modal',
        component: ModalComponent,
        data: {
          title: "Modal",
          breadcrumb: "Modal",
        }
      },
      {
        path: 'alert',
        component: AlertComponent,
        data: {
          title: "Alert",
          breadcrumb: "Alert",
        }
      },
      {
        path: 'popover',
        component: PopoverComponent,
        data: {
          title: "Popover",
          breadcrumb: "Popover",
        }
      },
      {
        path: 'tooltip',
        component: TooltipComponent,
        data: {
          title: "Tooltip",
          breadcrumb: "Tooltip",
        }
      },
      {
        path: 'dropdown',
        component: DropdownComponent,
        data: {
          title: "Dropdown",
          breadcrumb: "Dropdown",
        }
      },
      {
        path: 'according',
        component: AccordionComponent,
        data: {
          title: "Accordion",
          breadcrumb: "Accordion",
        }
      },
      {
        path: 'tabs',
        component: TabsComponent,
        data: {
          title: "Bootstrap Tabs",
          breadcrumb: "Bootstrap Tabs",
        }
      },
      {
        path: 'list',
        component: ListsComponent,
        data: {
          title: "Lists",
          breadcrumb: "Lists",
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiKitsRoutingModule { }
