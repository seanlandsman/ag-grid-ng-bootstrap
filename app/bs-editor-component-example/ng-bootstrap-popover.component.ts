import {Component} from "@angular/core";

@Component({
    selector: 'popover-cell',
    template: `
        <button type="button" class="btn btn-outline-secondary"
                ngbPopover="{{params.value}}" 
                container="body"
                triggers="mouseenter:mouseleave">Hover to see value</button>        
    `,
    styles: [
        `
            .btn {
                height: 100%;
                padding: 0;
                width: 100%
            }
        `
    ]

})
export class NgBootstrapPopoverComponent {
    private params: any;

    agInit(params: any): void {
        this.params = params;
    }
}