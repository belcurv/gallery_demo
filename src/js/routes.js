/* jshint esversion:6 */

import { homeCtrl }      from './controllers/home.ctrl.js';
import { homeTpl }       from './templates/home.tpl.js';

import { aboutCtrl }     from './controllers/about.ctrl.js';
import { aboutTpl }      from './templates/about.tpl.js';

import { contactCtrl }   from './controllers/contact.ctrl.js';
import { contactTpl }    from './templates/contact.tpl.js';

import { portfolioCtrl } from './controllers/portfolio.ctrl.js';
import { gallery_list }  from './templates/portfolio.tpl.js';

const routes = {
    
    home : {
        path       : '/',
        template   : homeTpl,
        controller : homeCtrl
    },
    
    about : {
        path       : '/about',
        template   : aboutTpl,
        controller : aboutCtrl
    },
    
    contact : {
        path       : '/contact',
        template   : contactTpl,
        controller : contactCtrl
    },
    
    portfolio : {
        path       : '/portfolio',
        template   : gallery_list,
        controller : portfolioCtrl
    }
    
};

export { routes };
