/* jshint esversion:6, browser:true */

/* register handler to an event emitted by a target */
const $on = (target, event, handler) => {
    return target.addEventListener(event, handler);
};

export { $on };
