export const renderStarRatings = (rating) => {
    let starRating = [];

    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            //If the rating is a float number (ex: 4.5) and the loop reaches the (ex: 4th) index, add a half star
            if ((rating % 1 != 0) && (i === Math.floor(rating))) {
                starRating.push(<span key={i} className='bi bi-star-half'></span>);
            } else {
                //Else just add a regular star
                starRating.push(<span key={i} className='bi bi-star-fill'></span>);
            }
        }

        //Empty star
        if (i >= rating) {
            starRating.push(<span key={i} className='bi bi-star'></span>);
        }
    }

    return starRating;
}