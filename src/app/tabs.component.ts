import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'tabs',
  template: `
  <ul class="nav my-4 mx-4">
  <li class="nav-item" *ngFor="let link of navs">
    <a class="nav-link" href="#">
    <ng-container *ngIf="linkTemplate;else noTemplate">
     <ng-container *ngTemplateOutlet="linkTemplate; context:{$implicit: link}"></ng-container> 
    </ng-container>
    <ng-template #noTemplate>
      {{link}}
    </ng-template>
    </a>
  </li>
  </ul>
  `,
})
export class TabComponent {
  @Input() navs: string[];
  @Input() linkTemplate: TemplateRef<any>;
}
