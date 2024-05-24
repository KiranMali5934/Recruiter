
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, CanActivateFn } from '@angular/router';
import { Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js';

const credentialsKey = 'credentials';
const cryptoKey = "CC_MVP_kamlesh_080398";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard {
  public url: any;
  constructor(public router: Router) { }

  ngOnInit() {
    this.url = this.router.url;
  }

  canActivate(
 
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // Guard for user is login or not
    debugger
    let encryptedUserData = localStorage.getItem(credentialsKey);
    if (!encryptedUserData) {
      this.router.navigate(['/auth/login']);
      return false;
    }

    // Decrypt or decode the encryptedUserData
    let decryptedUserData;
    try {
      decryptedUserData = (encryptedUserData); // Replace decryptFunction with your decryption logic
    } catch (error) {
      console.error("Error decrypting user data:", error);
      this.router.navigate(['/auth/login']);
      return false;
    }

    let user;
    try {
      user = JSON.parse(decryptedUserData);
    } catch (error) {
      console.error("Error parsing decrypted user data as JSON:", error);
      this.router.navigate(['/auth/login']);
      return false;
    }

    if (!user || !Object.keys(user).length) {
      this.router.navigate(['/auth/login']);
      return false;
    }

    return true;
  }

}
// function decryptFunction(encryptedUserData: string): any {
//   const bytes = CryptoJS.AES.decrypt(encryptedUserData, cryptoKey);

//   try {
//     return bytes.toString(CryptoJS.enc.Utf8);
//   } catch (error) {
//     console.error('Failed to decrypt credentials:', error);
//     return null;
//   }
// }

