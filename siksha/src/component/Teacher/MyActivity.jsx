import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../auth/api';
import ActivityDetailModel from './ActivityDetailModel'; // Import the new modal
import './MyActivity.css';

const MyActivity = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // State to manage the currently selected activity for the modal
  const [selectedActivity, setSelectedActivity] = useState(null);

  useEffect(() => {
    const fetchMyActivities = async () => {
      try {
        const response = await api.get('/activities/mine');
        setActivities(response.data.acts);
      } catch (error) {
        console.error("Failed to fetch activities:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMyActivities();
  }, []);

  const getStatusClass = (status) => {
    switch (status) {
      case 'approved': return 'status-approved';
      case 'rejected': return 'status-rejected';
      default: return 'status-pending';
    }
  };

  if (loading) {
    return <div className="loading-container">Loading your activities...</div>;
  }

  return (
    <div className="my-activities-container">
      <div className="activities-header">
        <h1>My Submitted Activities</h1>
        <Link to="/NewActivity" className="upload-new-btn">
          Upload New Activity
        </Link>
      </div>

      {activities.length > 0 ? (
        <div className="activities-grid">
          {activities.map(activity => (
            // Add onClick to open the modal with the selected activity
            <div key={activity._id} className="activity-card" onClick={() => setSelectedActivity(activity)}>
              <div className="card-header">
                <h3>{activity.title}</h3>
                <span className={`status-badge ${getStatusClass(activity.status)}`}>
                  {activity.status}
                </span>
              </div>
              <p className="card-category">{activity.category}</p>
              <p className="card-date">
                Submitted on: {new Date(activity.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-activities-message">You haven't submitted any activities yet.</p>
      )}

      {/* Conditionally render the modal when an activity is selected */}
      {selectedActivity && (
        <ActivityDetailModel
          activity={selectedActivity}
          onClose={() => setSelectedActivity(null)}
        />
      )}
    </div>
  );
};

export default MyActivity;