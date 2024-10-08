document.addEventListener("DOMContentLoaded", function() {
   const mainContent = document.querySelector('.main-content');
   const summaryText = document.getElementById('summary-text');

   // Image data with more details
   const images = [
       {
           src: "media/GadgetKing-Rebrand.jpg",
           alt: "Gadget King Image",
           title: "Gadget King",
           description: "Gadget King is a notable retail store in Singapore that specializes in consumer electronics, gadgets, and accessories. Founded with the aim of providing customers with the latest and most innovative tech products, Gadget King has become a popular destination for tech enthusiasts and everyday consumers alike.",
           role: "Branding | Web Content Management | Social Media Coordinator"
       },
       {
           src: "media/PhoonHuat.jpg",
           alt: "Phoon Huat Image",
           title: "Phoon Huat",
           description: "Phoon Huat is a well-established supplier of baking and culinary ingredients in Singapore, renowned for its extensive range of products catering to both professional bakers and home cooks. Founded in 1947, the company has grown to become a leading name in the baking and foodservice industry in the region.",
           role: "Collateral Design | Web Content Management | Marketing Event Coordinator | Retail Marketing"
       },
       {
           src: "media/BeautyEmporium.jpg",
           alt: "BeautyEmporium Image",
           title: "Spa Espirit Group",
           description: "Spa Esprit Group is a prominent lifestyle and wellness company based in Singapore, founded by Cynthia Chua in 1996. The group is known for its innovative approach to beauty and wellness, providing a diverse range of services and products aimed at enhancing overall well-being and self-care.",
           role: "e-Commerce Management | Inventory Management | SEO & SEM"
       },
       {
           src: "media/Courts_Singapore.jpg",
           alt: "Courts Image",
           title: "COURTS Singapore",
           description: "COURTS Singapore is a prominent retailer specializing in electronics, appliances, and furniture. Established in 1974, COURTS has grown to become one of the largest home furnishings and electronics retailers in Singapore, offering a wide range of products from various international brands.",
           role: "Web Content Management | e-Commerce Product Management | Data Analysis"
       },
       {
           src: "media/ValleyGrocer.jpg",
           alt: "ValleyGrocer Image",
           title: "ValleyGrocer",
           description: "Valley Grocer is a charming grocery store located in the suburbs of Singapore. It stands out for its unique blend of offerings that cater to both everyday needs and specialty items.",
           role: "Branding | Collateral Design"
       }
   ];

   // Dynamically create image elements and append to main-content
   images.forEach(image => {
       const imageWrapper = document.createElement('div');
       imageWrapper.classList.add('image-wrapper');

       const imgElement = document.createElement('img');
       imgElement.src = image.src;
       imgElement.alt = image.alt;
       imgElement.setAttribute('data-title', image.title);
       imgElement.setAttribute('data-description', image.description);
       imgElement.setAttribute('data-role', image.role);

       imageWrapper.appendChild(imgElement);
       mainContent.appendChild(imageWrapper);
   });

   // Set up IntersectionObserver to dynamically change summary based on the visible image
   const observer = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
           if (entry.isIntersecting) {
               // Fetching data from attributes
               const title = entry.target.getAttribute("data-title");
               const description = entry.target.getAttribute("data-description");
               const role = entry.target.getAttribute("data-role");

               // Updating the summary text with specific tags
               summaryText.innerHTML = `
                   <h2>${title}</h2>
                   <p class='sum-desc'>${description}</p>
                   <p class='sum-role'>${role}</p>
               `;
           }
       });
   }, {
       root: null,  // Use the viewport
       threshold: 0.5 // 50% of the image must be visible to trigger
   });

   // Select all images and observe them
   const imagesToObserve = document.querySelectorAll('.image-wrapper img');
   imagesToObserve.forEach(image => {
       observer.observe(image);
   });
});