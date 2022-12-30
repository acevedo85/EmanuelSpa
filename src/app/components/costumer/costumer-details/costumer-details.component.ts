import { Component, OnInit } from '@angular/core';
import { Costumer } from 'src/app/costumer';
import {
   ActivatedRoute,
   Router
  }
  from '@angular/router';
import { CostumerService } from 'src/app/services/costumer.service';

@Component({
  selector: 'app-costumer-details',
  templateUrl: './costumer-details.component.html',
  styleUrls: ['./costumer-details.component.css']
})
export class CostumerDetailsComponent implements OnInit {

  id: number | any;
  costumer: Costumer | undefined;

  constructor(private route: ActivatedRoute, private router: Router,
    private costumerService: CostumerService) { }

  ngOnInit(): void {
    console.log("created");
    this.costumer = new Costumer();

    this.id = this.route.snapshot.params['id'];

    this.costumerService.get(this.id)
    .subscribe(data => {
      console.log(data)
      this.costumer = data;
    }, error => console.log(error));
  }

  list() {
    this.router.navigate(['costumers']);
  }

  edit() {
    this.router.navigate(['costumers/edit', this.id])
  }

}
