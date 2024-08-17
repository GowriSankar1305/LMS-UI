import { Component, OnInit } from '@angular/core';
import { Customer } from '../types/Customer';
import { Address } from '../types/Address';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Nominee } from '../types/Nominee';
import { DateOfBirth } from '../types/DateOfBirth';
import { CustomerApiService } from '../customer/services/customer-api.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  constructor(private customerService : CustomerApiService) {
    
  }

  ngOnInit(): void {
    this.populateIDProofTypes();
    this.populateMarritalStatuses();
    this.populateNomineeRelations();
    this.populateOccupations();
    this.populateReligions();
    this.populateSalutations();
  }

  customer : Customer = new Customer();
  customerPermanentAddrs : Address = new Address();
  customerPresentAddrs : Address = new Address();
  nomineeAddress : Address = new Address();
  nominee : Nominee = new Nominee();
  dob : DateOfBirth = new DateOfBirth();
  salutations : string[] = [];
  relations : string[] = [];
  idProofTypes : string[] = [];
  marritalStatuses : string[] = [];
  occupations : string[] = [];
  religions : string[] = [];

  createNewCustomerAcount() : void {
    console.log(this.customer,this.customerPermanentAddrs,
      this.customerPresentAddrs,this.dob,this.nominee,this.nomineeAddress);
  }

  populateSalutations() : void  {
    this.customerService.fetchCustomerSalutations().subscribe({
      next : response =>  {
        this.salutations = response;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  populateNomineeRelations() : void  {
    this.customerService.fetchNomineeRelations().subscribe({
      next : response =>  {
        this.relations = response;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  populateIDProofTypes() : void  {
    this.customerService.fetchIdProofTypes().subscribe({
      next : response => {
        this.idProofTypes = response;
        console.log('proofs--------> ' ,this.idProofTypes);
      },
      error: err => {
        console.log(err);
      }
    });
  }

  populateMarritalStatuses() : void  {
    this.customerService.fetchMarritalStatuses().subscribe({
      next : response => {
        this.marritalStatuses = response;
        console.log('mar stats------> ',this.marritalStatuses);
      },
      error: err => {
        console.log(err);
      }
    });
  }

  populateOccupations() : void  {
    this.customerService.fetchOccupations().subscribe({
      next : response => {
        this.occupations = response;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  populateReligions() : void  {
    this.customerService.fetchReligions().subscribe({
      next : response => {
        this.religions = response;
      },
      error: err => {
        console.log(err);
      }
    });
  }

}
