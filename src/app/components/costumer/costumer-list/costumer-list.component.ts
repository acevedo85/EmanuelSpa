import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { Costumer } from 'src/app/costumer';
import { CostumerService } from 'src/app/services/costumer.service';

@Component({
  selector: 'app-costumer-list',
  templateUrl: './costumer-list.component.html',
  styleUrls: ['./costumer-list.component.css']
})
export class CostumerListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'lastName', 'middleName', 'email'];

  costumers: Observable<Costumer[]> | any;

  constructor(private costumerService: CostumerService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.costumers = this.costumerService.getAll();
  }

  deleteCostumer(id: number) {
    this.costumerService.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  deleteAllCostumers(): void {
    this.costumerService.deleteAll()
    .subscribe(
      response => {
        console.log(response);
        this.reloadData();
      },
      error => {
        console.log(error);
      });
  }

  costumerDetails(id: number) {
    console.log(id)
    this.router.navigate(['costumers', id]);
  }

}
