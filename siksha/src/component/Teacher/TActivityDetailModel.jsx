// import React from 'react';
// import './TActivityDetailModal.css';

// const TActivityDetailModal = ({ activity, onClose, onApprove, onReject }) => {
//   return (
//     <div className="modal-backdrop" onClick={onClose}>
//       <div className="modal-content" onClick={e => e.stopPropagation()}>
//         <h2>{activity.title}</h2>
//         <p><strong>Student:</strong> {activity.student.name}</p>
//         <p><strong>Category:</strong> {activity.category}</p>
//         <p><strong>Date:</strong> {new Date(activity.dateOfEvent).toLocaleDateString()}</p>
//         <p><strong>Description:</strong> {activity.description}</p>
        
//         <div className="proof-images">
//           <strong>Proof:</strong>
//           {activity.proof.map((url, index) => (
//             <a key={index} href={url} target="_blank" rel="noopener noreferrer">
//               <img src={url} alt={`Proof ${index + 1}`} />
//             </a>
//           ))}
//         </div>

//         <div className="modal-actions">
//           <button className="reject-btn" onClick={() => onReject(activity._id)}>Reject</button>
//           <button className="approve-btn" onClick={() => onApprove(activity._id)}>Approve</button>
//           <button className="close-btn" onClick={onClose}>Close</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TActivityDetailModal;
// import React from 'react';
// import './TActivityDetailModal.css';

// const TActivityDetailModal = ({ activity, onClose, onApprove, onReject }) => {
//   return (
//     <div className="modal-backdrop" onClick={onClose}>
//       <div className="modal-content" onClick={e => e.stopPropagation()}>
//         <h2>{activity.title}</h2>
//         <p><strong>Student:</strong> {activity.student.name}</p>
//         <p><strong>Category:</strong> {activity.category}</p>
//         <p><strong>Date:</strong> {new Date(activity.dateOfEvent).toLocaleDateString()}</p>
//         <p><strong>Description:</strong> {activity.description}</p>
        
//         <div className="proof-images">
//           <strong>Proof:</strong>
//           {activity.proof.map((url, index) => (
//             <a key={index} href={url} target="_blank" rel="noopener noreferrer">
//               <img src={url} alt={`Proof ${index + 1}`} />
//             </a>
//           ))}
//         </div>

//         <div className="modal-actions">
//           <button className="reject-btn" onClick={() => onReject(activity._id)}>Reject</button>
//           <button className="approve-btn" onClick={() => onApprove(activity._id)}>Approve</button>
//           <button className="close-btn" onClick={onClose}>Close</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TActivityDetailModal;
import React from 'react';
import './TActivityDetailModel.css';

const TActivityDetailModal = ({ activity, onClose, onApprove, onReject }) => {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>{activity.title}</h2>
        <p><strong>Student:</strong> {activity.student.name}</p>
        <p><strong>Category:</strong> {activity.category}</p>
        <p><strong>Date:</strong> {new Date(activity.dateOfEvent).toLocaleDateString()}</p>
        <p><strong>Description:</strong> {activity.description}</p>
        
        <div className="proof-images">
          <strong>Proof:</strong>
          {activity.proof.map((url, index) => (
            <a key={index} href={url} target="_blank" rel="noopener noreferrer">
              <img src={url} alt={`Proof ${index + 1}`} />
            </a>
          ))}
        </div>

        <div className="modal-actions">
          <button className="reject-btn" onClick={() => onReject(activity._id)}>Reject</button>
          <button className="approve-btn" onClick={() => onApprove(activity._id)}>Approve</button>
          <button className="close-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default TActivityDetailModal;