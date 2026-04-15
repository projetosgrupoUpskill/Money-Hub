import React from 'react';

export default function DateRangePicker({ startDate, endDate, onDateChange }) {
  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', color: 'white' }}>
      <label> De: 
        <input 
        type="date" 
        value={startDate} 
        onChange={(e) => onDateChange(e.target.value, endDate)} />
      </label>
      <label> Até: 
        <input 
        type="date" 
        value={endDate} 
        onChange={(e) => onDateChange(startDate, e.target.value)} />
      </label>
    </div>
  );
}