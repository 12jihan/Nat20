import { Injectable } from '@angular/core';
import { signUp } from 'aws-amplify/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  // public async sign_up(username: string, password: string, email: string): Promise<any> {
  public async sign_up(): Promise<any> {

    try {
      const user = await signUp({
        username: "test1",
        password: "Oliviaisawesome1!",
        options: {
          userAttributes: {
            email: "test@test.com",
            phone_number: "+15555555555" // E.164 number convention
          },
        }
      });
      console.log("user was created", user);
      return user;
    } catch (error) {
      console.error("there was a problem\n", error);
    }

  }


}
