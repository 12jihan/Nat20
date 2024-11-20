import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, Routes } from '@angular/router';
import { routes } from '../../app.routes';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
    selector: 'nat-navbar',
    standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    private navbar_type: string = 'navbar_main';
    public routes: Routes = routes;
    public navbar_routes: any[] = [];

    private _as: AuthService = inject(AuthService);

    ngOnInit(): void {
        this.handle_navbar_routes();
    }


    public sign_out() {
        this._as.sign_out()
            .subscribe({
                next: (_request) => {
                    // next code goes here
                    console.log("request:", _request);
                },
                error: (error) => {
                    // error code goes here
                    console.log("error:", error);
                },
                complete: () => {
                    // completed code goes here
                    console.log("completed code goes here");
                }
            })
    }

    // This will handle what navigation item is displayed.
    // It's completely based on the routes in app.routes.
    // Just remmber to put the label in data property as 'navbar_main'.
    private handle_navbar_routes() {
        this.navbar_routes = this.routes.filter((route: any) => {
            let route_test: boolean = false;
            let label_test: boolean = false;
            route_test = route.path && route.data;
            if (route_test)
                label_test = route.data.label === this.navbar_type;

            if (route_test && label_test) {
                return route.path
            }
        });

        this.navbar_routes = this.navbar_routes.map((route) => {
            let path: string;
            let route_test: boolean = false;
            let label_test: boolean = false;

            route_test = route.path && route.data;
            if (route_test)
                label_test = route.data.label === this.navbar_type;

            if (route_test && label_test) {
                let split = route.path.split('');
                split[0] = split[0].toUpperCase();
                path = split.join('');

                return {
                    name: path != undefined ? path : '',
                    route: "/" + route.path
                };
            }

            return;
        });
    }

}
