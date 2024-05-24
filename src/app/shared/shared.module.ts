import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './component/sidebar/sidebar.component';
import { HeaderComponent } from './component/header/header.component';
import { FeathericonComponent } from './component/feathericon/feathericon.component';
import { ContentComponent } from './component/layout/content/content.component';
import { FullComponent } from './component/layout/full/full.component';
import { FooterComponent } from './component/footer/footer.component';
import { SvgIconComponent } from './component/svg-icon/svg-icon.component';
import { SearchComponent } from './component/header/search/search.component';
import { NotificationComponent } from './component/header/notification/notification.component';
import { ProfileComponent } from './component/header/profile/profile.component';
import { ThemeComponent } from './component/header/theme/theme.component';
import { AllUserComponent } from './component/header/notification/all-user/all-user.component';
import { BreadcrumbComponent } from './component/breadcrumb/breadcrumb.component';
import { NotificationCartComponent } from './component/header/notification/notification-cart/notification-cart.component';
import { MessagesComponent } from './component/header/notification/messages/messages.component';
import { BookmarkComponent } from './component/header/bookmark/bookmark.component';
import { QuickOptionComponent } from './component/customizer/quick-option/quick-option.component';
import { ColorPickerComponent } from './component/customizer/color-picker/color-picker.component';
import { CustomizerComponent } from './component/customizer/customizer.component';
import { TapToTopComponent } from './component/tap-to-top/tap-to-top.component';
import { LoaderComponent } from './component/loader/loader.component';
import { LanguageComponent } from './component/header/language/language.component';

import { ClickOutsideDirective } from './directives/outside.directive';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FeathericonComponent,
    ContentComponent,
    FullComponent,
    FooterComponent,
    SvgIconComponent,
    SearchComponent,
    NotificationComponent,
    ProfileComponent,
    ThemeComponent,
    AllUserComponent,
    BreadcrumbComponent,
    NotificationCartComponent,
    MessagesComponent,
    BookmarkComponent,
    QuickOptionComponent,
    ColorPickerComponent,
    CustomizerComponent ,
    TapToTopComponent,
    LanguageComponent,
    LoaderComponent,
    ClickOutsideDirective
  ],
  
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule,
    TranslateModule.forRoot(),
  ],
  exports:[
    ContentComponent,
    FeathericonComponent,
    SvgIconComponent,
    TapToTopComponent,
    LoaderComponent,
    ClickOutsideDirective
  ]
})
export class SharedModule { }
