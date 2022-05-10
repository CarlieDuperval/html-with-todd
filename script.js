console.log('It is working!')

// function doStuff () {
//     console.log('Doing stuff!');
// }


function doStuff(){
    //go get that cta button
    const cta = document.querySelector('.cta-button') // We create a variable and ak it to go to Document  find any element  that have a class CTA-button
    // set the display property in style to "NONE"  hide it
    cta.style.display = 'none'                // We style or class named cta, change the style to none/ display none means remove
    // create a new paragraph element
    
    let message = document.createElement('p')  // Go to our dom an create a paragraph, call the paragrph message <> <>
    // add this text inside our new PARAGRAph
    message.innerHTML = 'Your order has been placed'; // inside the praragraph put <p>'Your order has been placed </p>
    // find the section tag and add to the end our new paragraph// this will affect the dom not the HTML doc
    document.querySelector('section').appendChild(message) // go to this section , after the button, add this to the end 
}
