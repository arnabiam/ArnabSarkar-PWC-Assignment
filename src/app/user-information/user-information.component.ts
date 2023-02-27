import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { userInfoDto } from '../interfaces/UserDtoInterface';
import { UserInfoServiceService } from '../services/user-info-service.service';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {

  public userInfoServiceSubscription: Subscription | undefined;

  public userInfoSerData : userInfoDto[] = [];

  constructor(
    private userinfServ : UserInfoServiceService
  ) { }

  ngOnInit(): void {

    this.userInfoFetchApiCall();

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if( this.userInfoServiceSubscription ) {
      this.userInfoServiceSubscription.unsubscribe();
    }
  }

  private userInfoFetchApiCall() {
    this.userInfoServiceSubscription = this.userinfServ.fetchCurrentUserInfo().subscribe((res) => {
      if( res ) {
        this.userInfoSerData = res;
        console.log("UserInfo : ",this.userInfoSerData);
      }
    })
  }

}
