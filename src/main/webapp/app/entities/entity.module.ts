import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TasksTaskModule } from './task/task.module';
import { TasksTeamModule } from './team/team.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        TasksTaskModule,
        TasksTeamModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TasksEntityModule {}
