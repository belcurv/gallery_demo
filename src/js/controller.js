/* jshint esversion:6, devel: true */

export default class Controller {
    
    constructor(model, view) {
        this.model = model;
        this.view  = view;
    }
    
    render(data) {
        this.view.render(data);
    }
    
    setView(hash) {
        
//        console.log('setView fired. Hash: ', hash);
        
        this.model.getGalleries()
            .then( data => this.render(data) );
        
    }
    
}