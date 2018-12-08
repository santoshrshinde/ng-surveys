import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { BuilderViewerComponent } from './builder-viewer/builder-viewer.component';
import { ViewerComponent } from './viewer/viewer.component';
import { ModelViewerComponent } from './model-viewer/model-viewer.component';
import { QuestionBuilderContainerComponent } from './templates/question-builder-container/question-builder-container.component';
import {BuilderModule} from '../builder/builder.module';
import {PageBuilderContainerComponent} from './templates/page-builder-container/page-builder-container.component';
import {SharedCommonModule} from '../shared/shared-common.module';
import { SummaryContainerComponent } from './templates/summary-container/summary-container.component';
import { QuestionInputComponent } from './templates/question-builder-container/question-input/question-input.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    DragDropModule,
    SharedCommonModule,
    TooltipModule.forRoot(),
    BuilderModule,
    FormsModule,
  ],
  declarations: [
    BuilderViewerComponent,
    ViewerComponent,
    ModelViewerComponent,
    QuestionBuilderContainerComponent,
    PageBuilderContainerComponent,
    SummaryContainerComponent,
    QuestionInputComponent,
  ],
  exports: [
    BuilderViewerComponent,
    ViewerComponent,
    ModelViewerComponent,
    SummaryContainerComponent,
    QuestionInputComponent,
  ]
})
export class ViewModule { }
