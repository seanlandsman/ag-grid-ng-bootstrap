import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
// ag-grid
import {AgGridModule} from "ag-grid-angular/main";
// application
import {AppComponent} from "./app.component";
// current
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgBootstrapPopoverComponent} from "./bs-editor-component-example/ng-bootstrap-popover.component";
import {BootstrapEditorComponent} from "./bs-editor-component-example/bootstrap-editor.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AgGridModule.withComponents(
            [
                NgBootstrapPopoverComponent
            ]),
        NgbModule.forRoot()
    ],
    declarations: [
        AppComponent,
        BootstrapEditorComponent,
        NgBootstrapPopoverComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
