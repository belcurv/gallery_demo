/* jshint esversion:6, browser:true */

import Model      from './model';
import { $on }    from './util';
import View       from './view';
import Controller from './controller';
import Router     from './router';

class App {
    
    constructor() {
        this.el = document.getElementById('router-target');
        
        const model = new Model();
        const view  = new View();
        
        this.controller = new Controller(model, view);
        this.router     = new Router();
        
    }
    
}

const app = new App();

// event handler calls controller's 'setView' method with URI hash
const setView = () => {
    app.controller.setView(document.location.hash);
};

// event handler calls router's 'route' method
const doRoute = () => {
    app.router.route(app.el);
};

// define routes
app.router.add_route('/',          'home',      setView);
app.router.add_route('/about',     'about',     setView);
app.router.add_route('/contact',   'contact',   setView);
app.router.add_route('/portfolio', 'portfolio', setView);

//console.log('routes from Main: ', app.router.routes);
//console.log('element from Main: ', app.router.element);

// register event listeners
$on(window, 'load',       doRoute);
$on(window, 'hashchange', doRoute);
