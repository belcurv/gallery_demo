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
    }
    
    /* route registering function
     *
     * @param   [object]    allRoutes
     * @param   [string]      .path         [URL to route to]
     * @param   [function]    .template     [template function]
     * @param   [function]    .controller   [controller function]
    */
    add_routes(all_routes) {
        
        for (let route in all_routes) {
            
            let r = all_routes[route];
            
            this.routes[r.path] = {
                template   : r.template,
                controller : r.controller
            };
        }
    }
    
    
    /* router
     *
     * @param   [string]   el   [target DOM element for route content]
    */
    route(el) {
        const hash_frag = location.hash.slice(1) || '/';
        
        const delimiter     = '/',
              route_pieces  = hash_frag.split(delimiter),
              formatted_pcs = route_pieces.map( p => '/' + p),
              piece_count   = route_pieces.length,
              sub_route     = route_pieces[3] || '',
              base_route    = piece_count > 3 ? formatted_pcs[1] + formatted_pcs[2] : formatted_pcs[1];

        // capture specific route object from 'routes'
        let route = this.routes[base_route];
        
        // redirect to home on invalid route
        if (!route) { route = this.routes['/']; }
        
        console.log('======= Router Diagnostics =======');
        console.log('hash_frag    : ', hash_frag);
        console.log('route_pieces : ', route_pieces);
        console.log('base_route   : ', base_route);
        
        // if there's an element & controller, execute the route
        if (el && route.controller) {
            route.controller(el, route.template, sub_route);
        }
    }
    
}
