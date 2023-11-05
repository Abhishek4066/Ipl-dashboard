import React from 'react';
import { Link } from 'react-router-dom';
import './TeamTile.scss';

export const TeamTile = ({ teamName, teamId }) => {
    const teamImageURL = `/images/${teamName}.png`;

    return (
        <div className="TeamTile">
            <Link to={`/teams/${teamName}`}>
                <div className="team-image">
                    <img src={teamImageURL} alt={teamName} />
                </div>
                <div className="team-details">
                    <h1>{teamName}</h1>
                    <p>Discover the essence of {teamName} journey.</p>
                    {/* <p>Experience the magic of {teamName}</p> */}
                </div>
            </Link>
        </div>
    );
};
