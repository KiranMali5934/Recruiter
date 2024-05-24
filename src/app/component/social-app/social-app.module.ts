import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { LightboxModule } from 'ng-gallery/lightbox';

import { SocialAppRoutingModule } from './social-app-routing.module';
import { SocialAppComponent } from './social-app.component';
import { TimelineCenterComponent } from './timeline/timeline-center/timeline-center.component';
import { CommentOneComponent } from './timeline/timeline-center/comment-one/comment-one.component';
import { CommentTwoComponent } from './timeline/timeline-center/comment-two/comment-two.component';
import { TimelineLeftComponent } from './timeline/timeline-left/timeline-left.component';
import { ActivityFeedComponent } from './timeline/timeline-left/activity-feed/activity-feed.component';
import { MyProfileComponent } from './timeline/timeline-left/my-profile/my-profile.component';
import { FollowersComponent } from './timeline/timeline-right/followers/followers.component';
import { TimelineRightComponent } from './timeline/timeline-right/timeline-right.component';
import { FollwingComponent } from './timeline/timeline-right/follwing/follwing.component';
import { FriendsProfileComponent } from './timeline/timeline-right/friends-profile/friends-profile.component';
import { LatestPhotosComponent } from './timeline/timeline-right/latest-photos/latest-photos.component';
import { ProfileIntroComponent } from './timeline/timeline-right/profile-intro/profile-intro.component';
import { AboutComponent } from './about/about.component';
import { AboutCenterComponent } from './about/about-center/about-center.component';
import { ActivityLogComponent } from './about/about-center/activity-log/activity-log.component';
import { CommonAddFriendsComponent } from './about/about-center/common-add-friends/common-add-friends.component';
import { HobbiesEductionComponent } from './about/about-center/hobbies-eduction/hobbies-eduction.component';
import { FriendsComponent } from './friends/friends.component';
import { PhotosComponent } from './photos/photos.component';
import { SocialProfileComponent } from './social-profile/social-profile.component';
import { TimelineComponent } from './timeline/timeline.component';
import { MutualFriendsComponent } from './timeline/timeline-left/mutual-friends/mutual-friends.component';

@NgModule({
  declarations: [
    SocialAppComponent,
    TimelineCenterComponent,
    CommentOneComponent,
    CommentTwoComponent,
    TimelineLeftComponent,
    ActivityFeedComponent,
    MyProfileComponent,
    FollowersComponent,
    TimelineRightComponent,
    FollwingComponent,
    FriendsProfileComponent,
    LatestPhotosComponent,
    ProfileIntroComponent,
    AboutComponent,
    AboutCenterComponent,
    ActivityLogComponent,
    CommonAddFriendsComponent,
    HobbiesEductionComponent,
    FriendsComponent,
    PhotosComponent,
    SocialProfileComponent,
    TimelineComponent,
    MutualFriendsComponent
  ],
  imports: [
    CommonModule,
    SocialAppRoutingModule,
    NgbModule,
    LightboxModule,
    SharedModule

  ]
})
export class SocialAppModule { }
