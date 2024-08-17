import { Address } from "./Address";
import { DateOfBirth } from "./DateOfBirth";
import { Nominee } from "./Nominee";

export class Customer   {
    addresses : Address[] = [];
    nominee : Nominee = new Nominee();
	customerId : number = 0;;
	firstName : string = '';
	lastName : string = '';
	middleName : string = '';
	mobileNumber : string = '';
	emailId : string = '';
	pan : string = '';
	idProofType : string = '';
	idProofNumber : string = '';
    gender : string = '';
	customerTitle : string = '';
	marritalStatus : string = '';
	occupation : string = '';
	religion : string = '';
	annualIncome : string = '';
	placeOfBirth : string = '';
	countryOfBirth : string = '';
    dateOfBirth : DateOfBirth = new DateOfBirth();
}