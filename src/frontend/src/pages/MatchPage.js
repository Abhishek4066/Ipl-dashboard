// MatchPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { YearSelector } from '../components/YearSelector';
import './MatchPage.scss';

export const MatchPage = () => {
    const [matches, setMatches] = useState([]);
    const { teamName, year } = useParams();

    useEffect(() => {
        const fetchMatches = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}/matches?year=${year}`);
            const data = await response.json();
            setMatches(data);
        };

        fetchMatches();
    }, [teamName, year]);

    return (
        <div className="MatchPage">
            <h1 className="page-heading">{teamName} matches in {year}</h1>
            <div className="year-selector">
                <YearSelector teamName={teamName} />
            </div>
            <div className="matches">
                
                <div className="match-grid">
                    {matches.map(match => <MatchDetailCard key={match.id} teamName={teamName} match={match} />)}
                </div>
            </div>
        </div>
    );
};
