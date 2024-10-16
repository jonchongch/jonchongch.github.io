// Define your navigation items
const navItems = [
    // { name: "Home", href: "index.html", newTab: false }
    // You can add more items here if needed
    { name: "Curriculum Vitae", href: "page/cv-jon.html", newTab: true },
];

// Function to create and append navigation links
function createNavMenu() {
    const navMenu = document.getElementById('nav-menu');

    navItems.forEach(item => {
        const li = document.createElement('li');
        li.className = 'nav-item';

        const a = document.createElement('a');
        a.className = 'nav-link';
        a.href = item.href;
        a.textContent = item.name;

        // Check if the item should open in a new tab
        if (item.newTab) {
            a.target = "_blank";
        }

        li.appendChild(a);
        navMenu.appendChild(li);
    });
}

// Call the function to create the navigation menu
createNavMenu();

