import React from 'react';
import { useState } from 'react';
import './ActivityDetailModel.css';

const ActivityDetailModel = ({ activity, onClose  }) => {
  // State to track the current image in the slideshow
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!activity) return null;

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % activity.proof.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + activity.proof.length) % activity.proof.length);
  };

  const getStatusClass = (status) => {
    if (status === 'approved') return 'status-approved';
    if (status === 'rejected') return 'status-rejected';
    return 'status-pending';
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{activity.title}</h2>
          <span className={`status-badge ${getStatusClass(activity.status)}`}>
            {activity.status}
          </span>
        </div>

        <div className="modal-body">
          <p><strong>Category:</strong> {activity.category}</p>
          <p><strong>Date of Event:</strong> {new Date(activity.dateOfEvent).toLocaleDateString()}</p>
          <p><strong>Description:</strong> {activity.description}</p>
        </div>

        {/* --- Slideshow for Proof Images --- */}
        {activity.proof && activity.proof.length > 0 && (
          <div className="slideshow-container">
            <strong>Proof Images ({currentImageIndex + 1} / {activity.proof.length})</strong>
            <div className="image-wrapper">
              {activity.proof.length > 1 && (
                <button onClick={handlePrevImage} className="nav-btn prev-btn">❮</button>
              )}
              <img src={activity.proof[currentImageIndex]} alt={`Proof ${currentImageIndex + 1}`} />
              {activity.proof.length > 1 && (
                <button onClick={handleNextImage} className="nav-btn next-btn">❯</button>
              )}
            </div>
          </div>
        )}

        <div className="modal-footer">
          <button onClick={onClose} className="close-btn">Close</button>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetailModel;