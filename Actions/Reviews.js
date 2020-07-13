
 const Review = () => {
    return {
        type: 'Review',
        payload: {
           reviewerId,
           message,
           rating
        }
    }
}

export default Review;
