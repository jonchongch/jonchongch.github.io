// navigation.js

// Define your navigation items
const navItems = [
    { name: "Curriculum Vitae", href: "page/cv-jon.html" },
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

        li.appendChild(a);
        navMenu.appendChild(li);
    });
}

// Call the function to create the navigation menu
createNavMenu();
