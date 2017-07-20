/* jshint esversion:6, devel: true */

export default class Controller {
    
    constructor(model, view) {
        this.model = model;
        this.view  = view;
    }
    
    render() {
        this.view.render();
    }
    
    setView() {
        
        this.render();
        
    }
    
}