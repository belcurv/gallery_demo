/* jshint esversion:6 */

import { homeCtrl }      from './controllers/home.ctrl.js';
import { homeTpl }       from './templates/home.tpl.js';

import { aboutCtrl }     from './controllers/about.ctrl.js';
import { aboutTpl }      from './templates/about.tpl.js';

import { contactCtrl }   from './controllers/contact.ctrl.js';
import { contactTpl }    from './templates/contact.tpl.js';

import { portfolioCtrl } from './controllers/portfolio.ctrl.js';
import { portfolioTpl }  from './templates/portfolio.tpl.js';

import { galleryCtrl }   from './controllers/gallery.ctrl.js';
import { galleryTpl }    from './templates/gallery.tpl.js';

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
        template   : portfolioTpl,
        controller : portfolioCtrl
    },
    
    gallery : {
        path       : '/portfolio/gallery',
        template   : galleryTpl,
        controller : galleryCtrl
    }
    
};

export { routes };
