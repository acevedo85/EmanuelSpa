import { Component, OnInit } from '@angular/core';
import { Costumer } from 'src/app/costumer';
import {
  Router,
  ActivatedRoute
 } from '@angular/router';
import { CostumerService } from 'src/app/services/costumer.service';

@Component({
  selector: 'app-update-costumer',
  templateUrl: './update-costumer.component.html',
  styleUrls: ['./update-costumer.component.css']
})
export class UpdateCostumerComponent implements OnInit {

  id: number | any;
  costumer: Costumer | any;

  constructor(private route: ActivatedRoute, private router: Router,
    private costumerService: CostumerService) { }

  ngOnInit(): void {
    this.costumer = new Costumer();

    this.id = this.route.snapshot.params['id'];

    this.costumerService.get(this.id)
    .subscribe(data => {
      console.log(data)
      this.costumer = data;
    }, error => console.log(error));
  }

  updateCostumer() {
    this.costumerService.update(this.id, this.costumer)
    .subscribe(data => {
      console.log(data)
      this.costumer = new Costumer();
      this.goToList();
    }, error => console.log(error));
  }

  onSubmit() {
    this.router.navigate(['/costumers']);
  }

  goToList() {
    this.router.navigate(['/costumers']);
  }

}
