import { Component } from '@angular/core';
import { userCard } from '../../../shared/data/user/users-card';

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.scss']
})
export class UserCardsComponent {

  public users = userCard;

}
