import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CampaignService } from '../../services/campaign-service/campaign.service';

@Component({
    selector: 'nat-campaign-page',
    imports: [
        RouterLink
    ],
    templateUrl: './campaign-page.component.html',
    styleUrl: './campaign-page.component.scss'
})
export class CampaignPageComponent implements OnInit {
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

    constructor(
        private _cs: CampaignService
    ) { }

    ngOnInit(): void {
        this._cs.get_campaign("0f0d4937-6123-45a6-ac06-88fb6f1b890e")
            .subscribe({
                next: (value) => {
                    console.log("value:", value);
                },
                error: (error) => {
                    console.error("error:", error);
                },
                complete: () => {

                }
            })
    }
}
