import { generateThumbnails } from "./thumbnails.js";
import { showBigPicture } from './big-picture.js';

const container = document.querySelector('.pictures');

const renderGallery = (pictures) => {
    container.addEventListener('click', (evt) => {
        const thumbnail = evt.target.closest([data-thumbnail-id]);
        if (!thumbnail) {
            return;
        }

        evt.preventDefault();
        const picture = picture.find(
            (item) => item.id === +thumbnail.dataset.thumbnailId
        );
        showBigPicture(picture);
    });

    generateThumbnails(pictures, container);
};

export {renderGallery };
