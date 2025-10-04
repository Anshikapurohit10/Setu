
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Api from '../auth/api';
import TActivityDetailModal from './TActivityDetailModel';
import { ArrowLeft, Search, Filter } from 'lucide-react';
import './VerifyActivity.css';

const VerifyActivities = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const navigate = useNavigate();

  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredActivities, setFilteredActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const res = await Api.get('/admin/activities/pending');
        setActivities(res.data.list);
        setFilteredActivities(res.data.list);
      } catch (error) {
        console.error("Failed to fetch pending activities", error);
      } finally {
        setLoading(false);
      }
    };
    fetchActivities();
  }, []);

  // Effect to perform search
  useEffect(() => {
    const results = activities.filter(activity =>
      activity.student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredActivities(results);
  }, [searchTerm, activities]);

  const handleApprove = async (activityId) => {
    try {
      await Api.put(`/admin/activities/${activityId}/approve`);
      alert('Activity Approved!');
      setActivities(activities.filter(a => a._id !== activityId));
      setSelectedActivity(null);
    } catch (error) {
      console.error(error);
      alert('Failed to approve.');
    }
  };

  const handleReject = async (activityId) => {
    try {
      await Api.put(`/admin/activities/${activityId}/reject`);
      alert('Activity Rejected.');
      setActivities(activities.filter(a => a._id !== activityId));
      setSelectedActivity(null);
    } catch (error) {
      console.error(error);
      alert('Failed to reject.');
    }
  };

  if (loading) return <div className="loading-container">Loading Activities...</div>;

  return (
    <div className="verify-container">
      <div className="verify-header">
        <button onClick={() => navigate(-1)} className="back-button"><ArrowLeft /></button>
        <h1>Verify Activity</h1>
      </div>

      <div className="action-bar">
        <div className="search-student">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            placeholder="Search Student"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="filter-btn"><Filter size={16} /> Filter</button>
      </div>

      <div className="table-container">
        <table className="activity-table">
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>S.No</th>
              <th>Student name</th>
              <th>Score</th>
              <th>Title</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredActivities.length > 0 ? (
              filteredActivities.map((activity, index) => (
                <tr key={activity._id}>
                  <td><input type="checkbox" /></td>
                  <td>{index + 1}</td>
                  <td>{activity.student?.name || 'N/A'}</td>
                  <td>{activity.student?.profile?.department || 'N/A'}</td>
                  <td>{activity.title}</td>
                  <td>
                    <button onClick={() => setSelectedActivity(activity)} className="detail-btn">
                      Detail
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="no-data-cell">No activities are pending verification.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {selectedActivity && (
        <TActivityDetailModal
          activity={selectedActivity}
          onClose={() => setSelectedActivity(null)}
          onApprove={handleApprove}
          onReject={handleReject}
        />
      )}
    </div>
  );
};

export default VerifyActivities;
