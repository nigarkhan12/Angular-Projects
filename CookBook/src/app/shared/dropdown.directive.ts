import {
    Directive,
    ElementRef,
    HostBinding,
    HostListener,
    Renderer2
} from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective{
    @HostBinding('class.open') isOpen = false;

    // Closing the dropdown by clicking the caret
    // @HostListener('click') toggleOpen() {
    //     this.isOpen = !this.isOpen;
    // }

    // Closing the Dropdown From Anywhere
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }

    constructor(private elRef:ElementRef){} 
}