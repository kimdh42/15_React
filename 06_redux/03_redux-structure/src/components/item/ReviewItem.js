

function ReviewItem({review}) {
    return (
        <div>
            <h3>{review.writer}</h3>
            <h3>{review.title}</h3>
            <h3>{review.content}</h3>
        </div>
    );
}

export default ReviewItem;