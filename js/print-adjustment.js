function addDynamicPaddingOnPageBreak() {
   const sections = document.querySelectorAll('.section, .list-group-item');

   sections.forEach(section => {
       // Skip the first child of the .list-group
       if (section.classList.contains('list-group-item') && section === section.parentNode.firstElementChild) {
           return;
       }

       // Temporarily clone the section and append it to the body to simulate its page break behavior
       const clone = section.cloneNode(true);
       document.body.appendChild(clone);

       // Calculate if the section will fit on the current page
       const pageHeight = window.innerHeight; // Height of the page
       const sectionHeight = clone.offsetHeight; // Height of the section
       const position = clone.getBoundingClientRect(); // Get its position

       // Check if the section will go off the page
       if (position.bottom > pageHeight) {
           section.classList.add('py-025'); // Add the padding if the section is too long
       }

       // Remove the clone after the check
       clone.remove();
   });
}

// Call the function when the page is loaded or on print
window.onload = addDynamicPaddingOnPageBreak;
window.onbeforeprint = addDynamicPaddingOnPageBreak;
