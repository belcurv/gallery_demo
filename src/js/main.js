/* jshint esversion:6, browser:true */

import { $on }    from './util';
import Router     from './router';
import { routes } from './routes';

class App {
    
    constructor() {
        this.el = document.getElementById('target');
        this.router = new Router();
    }
    
}

const app = new App();

// register routes using imported `routes` object
app.router.add_routes(routes);

// event handler; calls router's 'route' method
const doRoute = () => {
    app.router.route(app.el);
};

// register event listeners
$on(window, 'load',       doRoute);
$on(window, 'hashchange', doRoute);
