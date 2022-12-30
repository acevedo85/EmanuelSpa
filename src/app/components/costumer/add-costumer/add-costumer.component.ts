import { Component, OnInit } from '@angular/core';
import { Costumer } from 'src/app/costumer';
import { CostumerService } from 'src/app/services/costumer.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-costumer',
  templateUrl: './add-costumer.component.html',
  styleUrls: ['./add-costumer.component.css']
})
export class AddCostumerComponent implements OnInit {

  costumer: Costumer = new Costumer();
  submitted = false;

  constructor(private costumerService: CostumerService,
    private router: Router) { }

  ngOnInit(): void {
  }

  newCostumer(): void {
    this.submitted = false;
    this.costumer = new Costumer();
  }

  save() {
    this.costumerService
    .create(this.costumer).subscribe(data => {
      console.log(data)
      this.costumer = new Costumer();
      this.goToList();
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goToList() {
    this.router.navigate(['/costumers']);
  }

}
