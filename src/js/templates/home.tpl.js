/* jshint esversion:6 */

import { html } from '../util';


/* generate gallery link
*/
const homeTpl = (data) => html`
    <h2>Welcome</h2>
    
    <h3>This is a Photo Gallery App written in vanilla ES6 JavaScript</h3>
    <p>If you can read this, the app router sent you to the home page.</p>
`;

export { homeTpl };
