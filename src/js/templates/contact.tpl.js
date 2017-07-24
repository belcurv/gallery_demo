/* jshint esversion:6 */

import { html } from '../util';


/* generate gallery link
*/
const contactTpl = () => html`
    <h2>Contact</h2>
    
    <h3>Fill out our contact form below to get in touch with us!</h3>
    <form>
        <div class="Grid Grid--gutters Grid--1of2">
            <div class="Grid-cell">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" value="" placeholder="John Doe" required="required" autofocus="autofocus" />

                <label for="email">Email Address:</label>
                <input type="email" id="email" name="email" value="" placeholder="johndoe@example.com" required="required" />

                <label for="telephone">Telephone: </label>
                <input type="tel" id="telephone" name="telephone" value="" />

                <label for="enquiry">Enquiry: </label>
                <select id="enquiry" name="enquiry">
                    <option value="general">General</option>
                    <option value="sales">Hire Me</option>
                </select>
            </div>

            <div class="Grid-cell">
                <label for="message">Message:</label>
                <textarea id="message" name="message" placeholder="Your message must be greater than 20 charcters" required="required" data-minlength="20"></textarea>
            </div>
        </div>
         
        <button id="submit-button">Submit</button>
    </form>
`;

export { contactTpl };
