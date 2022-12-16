// Update show media by filter
function filterMedia(data, filter) {
    let result;
    switch (filter) {
        case 'Popularité':
            result = data.sort((a, b) => b._likes - a._likes);
            break;
        case 'Date':
            result = data.sort((a, b) => new Date(b._date) - new Date(a._date));
            break;
        case 'Titre':
            result = data.sort((a, b) => a._title.localeCompare(b._title));
            break;
        default:
            data.sort((a, b) => b._likes - a._likes);
    }
    return result;
}

function filterSelectEvent(filterSelect) {
    // Show select with option when event on click
    filterSelect.addEventListener('click', () => showModalFilter());
    filterSelect.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            showModalFilter();
        }
    });
}
