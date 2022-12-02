const filterSelect = document.querySelector('.photographer__filter--select');
const filterOptions = document.querySelector('.photographer__filter--menu');

// Show modal filter
function showModalFilter() {
    // Show Option, Hidden default option
    filterSelect.style.display = 'none';
    filterOptions.style.display = 'flex';
}

// Close modal filter options
function closeModalFilterOptions() {
    filterSelect.style.display = 'flex';
    filterOptions.style.display = 'none';
}

// Close filter options
filterOptions.addEventListener('click', () => closeModalFilterOptions());
