import React from 'react';

const ChangeHistory = ({ changes }) => {
  return (
    <div>
      <h3>Change History</h3>
      <ul>
        {changes.map((change, index) => (
          <li key={index}>{change}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChangeHistory;
