/* jshint esversion:6 */

import { homeController }      from './controllers/home.ctrl.js';
import { aboutController }     from './controllers/about.ctrl.js';
import { contactController }   from './controllers/contact.ctrl.js';
import { portfolioController } from './controllers/portfolio.ctrl.js';

const routes = {
    
    home : {
        path: '/',
        templateId: 'home',
        controller: homeController
    },
    
    about : {
        path: '/',
        templateId: 'about',
        controller: aboutController
    },
    
    contact : {
        path: '/',
        templateId: 'contact',
        controller: contactController
    },
    
    portfolio : {
        path: '/',
        templateId: 'portfolio',
        controller: portfolioController
    }
    
};

export { routes };
