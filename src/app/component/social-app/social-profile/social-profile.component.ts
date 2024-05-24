import { Component } from '@angular/core';

@Component({
  selector: 'app-social-profile',
  templateUrl: './social-profile.component.html',
  styleUrls: ['./social-profile.component.scss']
})
export class SocialProfileComponent {

  public active = 1;
  public openTab: string = "timeline";

  constructor() { }

  public tabbed(val: string) {
    this.openTab = val
  }

  ngOnInit(): void {
  }

}
