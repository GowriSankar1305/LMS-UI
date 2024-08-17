import { MemberAddress } from "./MemberAddress";

export class Member {
    memberId : number = 0;
	firstName : string = '';
	lastName : string = '';
	mobileNo : string = '';
	emailId : string = '';
	userName : string = '';
	password : string = '';
    isActive: boolean = false;
    address:  MemberAddress = new MemberAddress();
}