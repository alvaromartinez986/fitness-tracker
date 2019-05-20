import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { TrainingService } from "./training.service";

@Component({
  selector: "app-training",
  templateUrl: "./training.component.html",
  styleUrls: ["./training.component.css"]
})
export class TrainingComponent implements OnInit, OnDestroy {
  exerciseSubscription: Subscription;

  ongoingTraining = false;

  constructor(private trainingService: TrainingService) {}

  ngOnInit() {
    this.exerciseSubscription = this.trainingService.exerciseChanged.subscribe(
      exercise => {
        this.ongoingTraining = exercise != null;
      }
    );
  }
  ngOnDestroy() {
    if (this.exerciseSubscription) {
      this.exerciseSubscription.unsubscribe();
    }
  }
}
