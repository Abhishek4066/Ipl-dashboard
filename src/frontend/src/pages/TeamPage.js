import React, { useEffect, useState } from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';

export const TeamPage = () => {
  const [team, setTeam] = useState({ teamName: '', matches: [] });

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch('http://localhost:8080/team/Chennai%20Super%20Kings');
        const data = await response.json();
        setTeam(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMatches();
  }, []);

  return (
    <div className="TeamPage">
      <h1>{team.teamName}</h1>
      <MatchDetailCard match={team.matches[0]} />
      {team.matches.slice(1).map(match => (<MatchSmallCard key={match.id} match={match} />))}


      {/* {team.matches.map((match, index) => ( ALTERNATE CODE OF THE ABOVE
        <MatchSmallCard key={index} match={match} />
      ))} */}

    </div>
  );
}
