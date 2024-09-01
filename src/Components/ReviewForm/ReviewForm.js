import React, { useState } from 'react';
import './ReviewForm.css';

function GiveReviews() {
  const [showForm, setShowForm] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState(null);
  const [showWarning, setShowWarning] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // New state to track submission
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0
  });

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (ratingValue) => {
    setFormData({ ...formData, rating: ratingValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.review && formData.rating > 0) {
      setSubmittedMessage(formData);
      setIsSubmitted(true); // Disable the button after submission
      setFormData({
        name: '',
        review: '',
        rating: 0
      });
      setShowWarning(false);
    } else {
      setShowWarning(true);
    }
  };

  return (
    <div className='review-form'>
      <h2>Form with Message</h2>
      {!showForm ? (
        <button onClick={handleButtonClick} disabled={isSubmitted}>
          Open Form
        </button>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Give Your Feedback</h2>
          {showWarning && <p className="warning">Please fill out all fields.</p>}
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="review">Review:</label>
            <textarea
              id="review"
              name="review"
              value={formData.review}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Rating:</label>
            <div className="star-rating">
              {[5, 4, 3, 2, 1].map((star) => (
                <React.Fragment key={star}>
                  <input
                    type="radio"
                    id={`star${star}`}
                    name="rating"
                    value={star}
                    checked={formData.rating === star}
                    onChange={() => handleRatingChange(star)}
                  />
                  <label htmlFor={`star${star}`}>&#9733;</label> {/* Star character */}
                </React.Fragment>
              ))}
            </div>
          </div>
          <button type="submit" disabled={isSubmitted}>
            Submit
          </button>
        </form>
      )}
      {submittedMessage && (
        <div className="message-section">
          <h3>Submitted Message:</h3>
          <p><strong>Name:</strong> {submittedMessage.name}</p>
          <p><strong>Review:</strong> {submittedMessage.review}</p>
          <p><strong>Rating:</strong> {submittedMessage.rating}</p>
        </div>
      )}
    </div>
  );
}

export default GiveReviews;
