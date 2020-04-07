import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightYelloDirective]'
})
export class HighlightYelloDirectiveDirective implements OnInit {

  @Input() defaultColor : string = 'transparent';
  @Input('appHighlightYelloDirective') highlightColor : string;

  @HostBinding('style.backgroundColor') backgroundColor : string;

  @HostListener('mouseenter') mouseover(eventData : Event){
   // this.renderer.setStyle(this.eleRef.nativeElement,'background-color','Yellow');
  //  console.log('high-light color : '+this.highlightColor);
    this.backgroundColor  = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData : Event){
   // this.renderer.setStyle(this.eleRef.nativeElement,'background-color','transparent');
    this.backgroundColor = this.defaultColor;
  }


  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() { 
   // this.renderer.setStyle(this.eleRef.nativeElement,'background-color','Yellow');
   // this.
   this.backgroundColor = this.defaultColor;
  }

}
