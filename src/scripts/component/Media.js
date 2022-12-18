import { Image } from '../models/Image.js';
import { Video } from '../models/Video.js';
import { ImageCard } from '../templates/ImageCard.js';
import { VideoCard } from '../templates/VideoCard.js';

import { filterMedia } from '../utils/FilterMedia.js';
import { addClickEventForLightBoxMedia } from './Lightbox.js';

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
export function updateMedia(Media, filter, mediaSection) {
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
    addClickEventForLightBoxMedia(modalLightBoxMedia, Media);
    manageLikes();
}

// Manage likes (click on like media)
function manageLikes() {
    const allLikes = document.querySelectorAll('.photographer__portfolio--likecontainer');

    // For all likes, add event listner on click: to add or reduce total likes
    allLikes.forEach((like) => {
        like.addEventListener('click', () => {
            manageNumberLikes(like);
        });
        like.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                manageNumberLikes(like);
            }
        });
    });
}

// Manage number likes by media (add or reduce number)
function manageNumberLikes(like) {
    const numberLikes = like.querySelector('.photographer__portfolio--likenumber');
    const totalLikes = document.getElementById('total-likes');
    // Add or remove the class "liked" to know if the media has been liked or not
    like.parentElement.classList.toggle('liked');

    // Get current like and total likes
    let currentLike = parseInt(numberLikes.textContent);
    let totalPhotographerLikes = parseInt(totalLikes.textContent);

    // manage to add or reduce current like
    if (like.parentElement.classList.contains('liked')) {
        currentLike++;
        totalPhotographerLikes++;
    } else {
        currentLike--;
        totalPhotographerLikes--;
    }
    // Switch with new number of likes
    numberLikes.textContent = currentLike;
    totalLikes.textContent = totalPhotographerLikes;
}
