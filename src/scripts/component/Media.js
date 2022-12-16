// Create Media Template
function createMedia(Media, mediaSection) {
    // Create all PhotographerCard
    Media.forEach((media) => {
        if (media instanceof Image) {
            const imageTemplate = new ImageCard(media);
            mediaSection.appendChild(imageTemplate.createImageCard());
        } else if (media instanceof Video) {
            const videoTemplate = new VideoCard(media);
            mediaSection.appendChild(videoTemplate.createVideoCard());
        }
    });
}

// Update media by filter
function updateMedia(Media, filter, mediaSection, mediaApi) {
    // Change media with filter
    const filterActive = document.querySelector('.photographer__filter--active');
    filterActive.innerText = filter;
    filterMedia(Media, filter);

    console.log('===[ Media Photographer data ]===');
    console.log('Filter by', filter);
    console.log(Media);

    // Reset content media section
    mediaSection.innerHTML = '';

    createMedia(Media, mediaSection);
    const modalLightBoxMedia = document.querySelectorAll('.photographer__portfolio--container');
    addClickEventForLightBoxMedia(modalLightBoxMedia, Media, mediaApi);
}

// For every media, add event listener click to show modal
function addClickEventForLightBoxMedia(modalLightBoxMedia, Media, mediaApi) {
    // For every media, add event listener click to show modal
    modalLightBoxMedia.forEach((item) => {
        // Show modal event on click
        item.addEventListener('click', async () =>
            showModalLightBox(await mediaApi.getMediaById(item.id), Media),
        );
        // Show modal event when "Entrer" press
        item.addEventListener('keypress', async (e) => {
            if (e.key === 'Enter') {
                showModalLightBox(await mediaApi.getMediaById(item.id), Media);
            }
        });
    });
}
