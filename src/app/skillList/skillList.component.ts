import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome';

@Component({
    selector: 'icons-list',
    templateUrl: './skillList.component.html',
    styleUrls: ['./skillList.component.css']
})
export class IconListComponent {

    @Input() title?: string;
    @Input() icons: IconContainer[];
}

export class IconContainer {
    public title?: string;
    public fontIcon: IconDefinition;
    public link?: string;
}
