/* jshint esversion:6, browser:true */

//import Model      from './model';
import { $on }    from './util';
//import View       from './view';
//import Controller from './controller';
import Router     from './router';
import { routes } from './routes';

class App {
    
    constructor() {
        this.el = document.getElementById('target');
        
//        const model = new Model();
//        const view  = new View();
        
//        this.controller = new Controller(model, view);
        this.router     = new Router();
        
    }
    
}

const app = new App();

// event handler calls controller's 'setView' method with URI hash
//const setView = () => {
//    app.controller.setView(document.location.hash);
//};

// define routes
app.router.add_routes(routes);

// event handler calls router's 'route' method
const doRoute = () => {
    app.router.route(app.el);
};

// register event listeners
$on(window, 'load',       doRoute);
$on(window, 'hashchange', doRoute);
