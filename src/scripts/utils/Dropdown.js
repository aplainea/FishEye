const filterSelect = document.querySelector('.photographer__filter--select');
const filterOptions = document.querySelector('.photographer__filter--menu');

// Show modal filter
export function showModalFilter() {
    // Show Option, Hidden default option
    filterSelect.style.display = 'none';
    filterOptions.style.display = 'flex';
}

// Close modal filter options
export function closeModalFilterOptions() {
    filterSelect.style.display = 'flex';
    filterOptions.style.display = 'none';
}

// Close filter options
if (filterOptions) {
    filterOptions.addEventListener('click', () => closeModalFilterOptions());
}
