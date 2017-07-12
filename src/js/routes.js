/* jshint esversion:6, browser:true, devel:true */

/* ============================ utility methods ============================ */

function parse_params(param_string) {
    const input_params_arr = param_string.split('&');
    const params = {};
    let j = 0;
    
    input_params_arr.forEach( input_param => {
        
        // convert input param to array of key, value
        const param = input_param.split('=');
        
        if (param.length === 2) {
            
            // if [key, value] then {key: value}
            params[param[0]] = param[1];
            
        } else if (param.length === 1) {
            
            // else, {j: key}
            params[j] = param[0];
            j += 1;
            
        } else {
            console.log('bad param - die!');
        }
        
    });
    
    return params;
}


/* =========================== class definition ============================ */

export default class Router {
    
    constructor() {
        this.routes = {};
        this.element = document.getElementById('router-target');
    }
    
    /* route registering function
     *
     * @param   [string]     path          [URL to route to]
     * @param   [string]     template_id   [template for the route]
     * @param   [function]   controller    [controller associated with route]
    */
    add_route(path, template_id, controller) {
        this.routes[path] = {
            template_id : template_id,
            controller  : controller
        };
    }
    
    
    /* router
     *
     * @param   [string]   url   [destination]
    */
    route() {
        const hash_frag = location.hash.slice(1) || '/';
        
        // deal with query params
        const route_pieces = hash_frag.split('?'),
              base_route   = route_pieces[0],
              route_split  = route_pieces.length,
              params = (route_split > 1) ? parse_params(route_pieces[1]) : null;
        
        console.log('hash fragment: ', hash_frag);
        console.log('route_pieces: ',  route_pieces);
        console.log('route_split: ',   route_split);
        console.log('params: ',        params);
        
        console.log('routes from Router.route: ', this.routes);
              
        // capture specific route object from 'routes'
        let route = this.routes[base_route];
        
        if (this.element && route.controller) {
            this.element.html(route.controller(params));
        }
    }
    
}
