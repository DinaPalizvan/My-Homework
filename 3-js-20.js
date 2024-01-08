// ? why event bubbling is bad and how can we prevent it?

// ! Answers ======================================
/** lets say we have a section that has a div in it that has a p tag in it. and i want to show the user an alert when she clicks on the p tag.
 * also my div and section elements both have an eventlistener for 'click'.
 * and i dont want those events to happen when she clicks on the p tag.
 * so in this case i should use the stopPropagation method of the event object. 
 * what is does is that it prevents the div and section to execute their eventlisteners.
 * there is another method called stopImmediatePropagation. 
 * imagine i have two eventlisteners for the same element for clicking on it. and i just want one of them to execute. in this case i should use this method to not only prevent bubbling but also prevent other events to happen, on the same tag.
 * 
 */
