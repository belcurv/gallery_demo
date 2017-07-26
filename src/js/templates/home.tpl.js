/* jshint esversion:6 */

import { html } from '../util';


/* generate gallery link
*/
const homeTpl = (data) => html`
    <h1>Welcome</h1>
    <h2>This is a Photographer's Portfolio demo written in vanilla JavaScript</h2>
    <p>Purpose: to demonstrate a MVC-style single page application with client-side routing that employs no frameworks or libraries.</p>
    <p>The app uses syntax and methods that debuted in es2015, including <em>classes</em>, <em>import/export</em>, <em>arrow functions</em>, <em>the rest operator</em>, and <em>tagged templates</em>.</p>
    <p>The source is available on GitHub - see link in the footer.</p>
`;

export { homeTpl };
