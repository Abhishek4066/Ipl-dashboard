import React, { useState } from 'react';
import './YearSelector.scss';

export const YearSelector = ({ teamName }) => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  let years = [];
  const startYear = process.env.REACT_APP_DATA_START_YEAR;
  const endYear = process.env.REACT_APP_DATA_END_YEAR;

  for (let i = startYear; i <= endYear; i++) {
    years.push(i);
  }

  const handleYearChange = () => {
    // Update the URL when the "Go" button is clicked
    window.location = `/teams/${teamName}/matches/${selectedYear}`;
  };

  return (
    <div className="YearSelector">
      <h3>Select Year:</h3>
      <select
        onChange={(e) => setSelectedYear(e.target.value)}
        value={selectedYear}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <button onClick={handleYearChange}>Go</button>
    </div>
  );
};
