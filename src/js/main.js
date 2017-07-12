/* jshint esversion:6, browser:true */

import Model      from './model';
import { $on }    from './util';
import View       from './view';
import Controller from './controller';
import Router     from './routes';

class App {
    
    constructor() {
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

// define routes
app.router.add_route('/',          'home',      setView);
app.router.add_route('/about',     'about',     setView);
app.router.add_route('/contact',   'contact',   setView);
app.router.add_route('/portfolio', 'portfolio', setView);

console.log('routes from Main: ', app.router.routes);

// register event listeners
$on(window, 'load',       app.router.route);
$on(window, 'hashchange', app.router.route);
