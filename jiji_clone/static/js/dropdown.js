// Get the "Vehicles" item and its dropdown
const vehiclesItem = document.getElementById('vehicles');
const vehiclesDropdown = document.getElementById('vehiclesDropdown');

// Show dropdown on hover
vehiclesItem.addEventListener('mouseenter', () => {
    vehiclesDropdown.classList.remove('hidden'); // Remove the "hidden" class
});

// Hide dropdown when mouse leaves
vehiclesItem.addEventListener('mouseleave', () => {
    vehiclesDropdown.classList.add('hidden'); // Add the "hidden" class
});

// Optional: Hide dropdown when leaving the dropdown itself
vehiclesDropdown.addEventListener('mouseleave', () => {
    vehiclesDropdown.classList.add('hidden');
});

vehiclesDropdown.addEventListener('mouseenter', () => {
    vehiclesDropdown.classList.remove('hidden');
});
