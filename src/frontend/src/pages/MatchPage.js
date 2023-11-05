import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link from react-router-dom
import { MatchDetailCard } from '../components/MatchDetailCard';
import { YearSelector } from '../components/YearSelector';
import './MatchPage.scss';

export const MatchPage = () => {
  const [matches, setMatches] = useState([]);
  const { teamName, year } = useParams();

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}/matches?year=${year}`
      );
      const data = await response.json();
      setMatches(data);
    };

    fetchMatches();
  }, [teamName, year]);

  // Sort matches by year in ascending order
  const sortedMatches = [...matches].sort((a, b) => a.date.localeCompare(b.date));

  return (
    <div className="MatchPage">
      <div className="home-button">
        <Link to="/">Home</Link>
      </div>
      <h1 className="page-heading">{teamName} matches in {year}</h1>
      <div className="year-selector">
        <YearSelector teamName={teamName} />
      </div>
      <div className="matches">
        <div className="match-grid">
          {sortedMatches.map((match) => (
            <MatchDetailCard key={match.id} teamName={teamName} match={match} />
          ))}
        </div>
      </div>
    </div>
  );
};
