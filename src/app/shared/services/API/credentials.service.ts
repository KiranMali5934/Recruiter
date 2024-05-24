import { Injectable } from "@angular/core";
import { Credentials } from "../../model/authentication.model";
import * as CryptoJS from 'crypto-js';

const credentialsKey = 'credentials';
const cryptoKey = "CC_MVP_kamlesh_080398";

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  private _credentials: Credentials | null = null;

  constructor() {
    const savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);
    if (savedCredentials) {
      const decryptedCredentials = (savedCredentials);
      if (decryptedCredentials) {
        this._credentials = JSON.parse(decryptedCredentials);
      }
    }
  }

  setCredentials(credentials?: Credentials, remember?: boolean) {
    this._credentials = credentials || null;

    if (credentials) {
      const encryptedCredentials = (JSON.stringify(credentials));
      const storage = remember ? localStorage : sessionStorage;
      storage.setItem(credentialsKey, encryptedCredentials);
    } else {
      sessionStorage.removeItem(credentialsKey);
      localStorage.removeItem(credentialsKey);
    }
  }

  isAuthenticated(): boolean {
    if (this.credentials?.EmailConfirmed) {
      return !!this.credentials;
    }
    return false;
  }

  get credentials(): Credentials | null {
    return this._credentials;
  }

  // private encrypt(data: string): string {
  //   return CryptoJS.AES.encrypt(data, cryptoKey).toString();
  // }

  // private decrypt(data: string): string | null {
  //   const bytes = CryptoJS.AES.decrypt(data, cryptoKey);

  //   try {
  //     return bytes.toString(CryptoJS.enc.Utf8);
  //   } catch (error) {
  //     console.error('Failed to decrypt credentials:', error);
  //     return null;
  //   }
  // }





//  private _credentials: Credentials | null = null;

//   constructor() {
//     const savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);
//     if (savedCredentials) {
//       this._credentials = JSON.parse(savedCredentials);
//     }
//   }

//   setCredentials(credentials?: Credentials, remember?: boolean) {
//     debugger
//     this._credentials = credentials || null;

//     if (credentials) {
//       const storage = remember ? localStorage : sessionStorage;
//       storage.setItem(credentialsKey, JSON.stringify(credentials));
//     } else {
//       sessionStorage.removeItem(credentialsKey);
//       localStorage.removeItem(credentialsKey);
//     }
//   }

//   isAuthenticated(): boolean {
//     if (this.credentials?.EmailConfirmed) {
//       return !!this.credentials;
//     }
//     return false;
//   }
//   get credentials(): Credentials | null {
//     return this._credentials;
//   }



  /**
   * Checks is the user is authenticated.
   * @return True if the user is authenticated.
   */
  
  /**
   * Gets the user credentials.
   * @return The user credentials or null if the user is not authenticated.
   */
 

  /**
   * Sets the user credentials.
   * The credentials may be persisted across sessions by setting the `remember` parameter to true.
   * Otherwise, the credentials are only persisted for the current session.
   * @param credentials The user credentials.
   * @param remember True to remember credentials across sessions.
   */
  


  // // constructor() {
  // //   debugger
  // //    this.newdata = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);
  // //    if(this.newdata != null){
  // //     const bytes  = CryptoJS.AES.decrypt(this.newdata,cryptoKey);
  // //     // const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

  // //   // if (savedCredentials) {
  // //   //   this._credentials = JSON.parse(savedCredentials);
  // //   // }
  // // }}
  // // encryptData(data: any, key: string): any {
    
  // //   this.encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
    
  // //   return this.encryptedData;
  // // }

  // // decryptData(encryptedData: string, key: string): any {
  // //   const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, key);
  // //   this.decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);
  // //   return this.decryptedData;   
  // // }




  // /**
  //  * Checks is the user is authenticated.
  //  * @return True if the user is authenticated.
  //  */
  // // isAuthenticated(): boolean {
  // //   if (this.credentials?.EmailConfirmed) {
  // //     return !!this.credentials;
  // //   }
  // //   return false;
  // // }

  // /**
  //  * Gets the user credentials.
  //  * @return The user credentials or null if the user is not authenticated.
  //  */
  // // get credentials(): Credentials | null {
  // //   return this._credentials;
  // // }

  // /**
  //  * Sets the user credentials.
  //  * The credentials may be persisted across sessions by setting the `remember` parameter to true.
  //  * Otherwise, the credentials are only persisted for the current session.
  //  * @param credentials The user credentials.
  //  * @param remember True to remember credentials across sessions.
  //  */
  // // setCredentials(credentials?: Credentials, remember?: boolean) {
    
  // //   this._credentials = credentials || null;

  // //   if (credentials) {
  // //     const storage = remember ? localStorage : sessionStorage;
  // //     this.encryptData(credentials,cryptoKey)
  // //     storage.setItem(credentialsKey, JSON.stringify(this.encryptData(credentials,cryptoKey)));
  // //   } else {
  // //     sessionStorage.removeItem(credentialsKey);
  // //     localStorage.removeItem(credentialsKey);
  // //   }
  // // }
}