import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'nat-campaign-page',
    standalone: true,
    imports: [
        RouterLink
    ],
    templateUrl: './campaign-page.component.html',
    styleUrl: './campaign-page.component.scss'
})
export class CampaignPageComponent {
    public players: any[] = [
        {
            img: null,
            id: "1klkm1e1-123emklm-asddasd-adsa1p",
            username: "12jihan",
            character_name: "Malenoa",
            gender: "Female",
            level: 7,
            class: "Ranger",
            race: "Half-Elf",
            alignment: 'Chaotic Neutral'
        },
        {
            img: null,
            id: "1klkm1e1-123emklm-asddasd-adsa12",
            username: "12jihan",
            character_name: "Malenoa",
            gender: "Female",
            level: 7,
            class: "Ranger",
            race: "Half-Elf",
            alignment: 'Chaotic Neutral'
        },
        {
            img: null,
            id: "1klkm1e1-123emklm-asddasd-adsa2x",
            username: "12jihan",
            character_name: "Malenoa",
            gender: "Female",
            level: 7,
            class: "Ranger",
            race: "Half-Elf",
            alignment: 'Chaotic Neutral'
        },
        {
            img: null,
            id: "1klkm1e1-123emklm-asddasd-adsa1ax2",
            username: "12jihan",
            character_name: "Malenoa",
            gender: "Female",
            level: 7,
            class: "Ranger",
            race: "Half-Elf",
            alignment: 'Chaotic Neutral'
        },
        {
            img: null,
            id: "1klkm1e1-123emklm-asddasd-adsa1o2d",
            username: "12jihan",
            character_name: "Malenoa",
            gender: "Female",
            level: 7,
            class: "Ranger",
            race: "Half-Elf",
            alignment: 'Chaotic Neutral'
        },
        {
            img: null,
            id: "1klkm1e1-123emklm-asddasd-ad1sF2a",
            username: "12jihan",
            character_name: "Malenoa",
            gender: "Female",
            level: 7,
            class: "Ranger",
            race: "Half-Elf",
            alignment: 'Chaotic Neutral'
        },
    ];
}
