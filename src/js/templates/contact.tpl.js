/* jshint esversion:6 */

/* utility method for easy templating of repeating html elements
 *
 * @params  [array]  literalsArr   [array of all the literal secti
 * @params  [array]  ...cooked     [rest param: all the proccessed expressions]
 * @returns [string]               [the processed string]
*/
const html = (literalsArr, ...cooked) => {
    let result = '';
    
    cooked.forEach( (cook, indx) => {
        let lit = literalsArr[indx];
        if (Array.isArray(cook)) {
            cook = cook.join('');
        }
        result += lit;
        result += cook;
    });
    result += literalsArr[literalsArr.length - 1];
    return result;
};


/* generate gallery link
*/
const contactTpl = () => html`
    <h2>Contact</h2>
    
    <h3>Fill out our contact form below to get in touch with us!</h3>
    <form>
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
         
        <label for="message">Message:</label>
        <textarea id="message" name="message" placeholder="Your message must be greater than 20 charcters" required="required" data-minlength="20"></textarea>
         
        <input type="submit" value="Submit" id="submit-button" />
    </form>
`;

export { contactTpl };
