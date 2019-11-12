import { NgModule } from "@angular/core";
import { NewTrainingComponent } from "./new-training/new-training.component";
import { CurrentTrainingComponent } from "./current-training/current-training.component";
import { PastTrainingComponent } from "./past-training/past-training.component";
import { StopTrainingComponent } from "./current-training/stop-training.component";
import { TrainingComponent } from "./training.component";
import { ShareModule } from "../shared/shared.module";
import { TrainingRoutingModule } from "./training-routing.module";
import { StoreModule } from "@ngrx/store";
import { trainingReducer } from "./training.reducer";

@NgModule({
  declarations: [
    NewTrainingComponent,
    CurrentTrainingComponent,
    PastTrainingComponent,
    StopTrainingComponent,
    TrainingComponent
  ],
  imports: [
    ShareModule,
    TrainingRoutingModule,
    StoreModule.forFeature("training", trainingReducer)
  ],
  exports: [],
  entryComponents: [StopTrainingComponent]
})
export class TrainingModule {}
