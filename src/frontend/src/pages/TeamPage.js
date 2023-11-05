import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import { PieChart } from 'react-minimal-pie-chart';
import './TeamPage.scss';

export const TeamPage = () => {
  const [team, setTeam] = useState({ teamName: '', matches: [] });
 const { teamName } = useParams();
  useEffect(() => {
    const fetchMatches = async () => {
      
        const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}`);
        const data = await response.json();
        setTeam(data);
      
    };

    fetchMatches();
  }, [teamName]);



  if(!team || !team.teamName){
    return<h1>Team not found</h1>
  }
  return (
    <div className="TeamPage">
     <div className='team-name-section'> 
     <div className="home-button">
        <Link to="/">Home</Link>
      </div>
      <h1 className='team-name'>{team.teamName}</h1>
      
      </div>

     <div className='win-loss-section'>
     <div className="win-loss-text">
    Wins / Losses
  </div>
      <PieChart
               data={[
               
                { title: 'Losses', value: team.totalMatches - team.totalWins, color: '#FA8072' }, // Salmon for Losses
                { title: 'Wins', value: team.totalWins, color: '#008080' }, // Teal for Wins
            ]}
                />
                 
      </div>

     <div className="match-detail-section" >
     <h2>Latest Matches</h2>
      <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
      </div>


      {team.matches.slice(1).map(match => (<MatchSmallCard teamName={team.teamName} key={match.id} match={match} />))}

      <div className="more-link">
        <Link to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}>More </Link>
        </div>
      {/* {team.matches.map((match, index) => ( ALTERNATE CODE OF THE ABOVE
        <MatchSmallCard key={index} match={match} />
      ))} */}

    </div>
  );
}