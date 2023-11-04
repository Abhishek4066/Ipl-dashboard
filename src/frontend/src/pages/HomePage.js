import React, { useEffect, useState } from 'react';
import './HomePage.scss';
import { TeamTile } from '../components/TeamTile';

export const HomePage = () => {
    const [teams, setTeams] = useState([]);
    const [darkMode, setDarkMode] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchAllTeams = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team`);
            const data = await response.json();
            setTeams(data);
        };

        fetchAllTeams();
    }, []);

    // Sort teams in ascending order by teamName
    teams.sort((a, b) => a.teamName.localeCompare(b.teamName));

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    return (
        <div className="HomePage">
            <div className="header-section">
                <div className="header-content">
                    <h1 className="app-name">IPL Dashboard</h1>
                    <p className="app-description">Your go-to place for IPL information.</p>
                </div>
                <button onClick={() => setDarkMode(!darkMode)} className="dark-mode-button">
                    {darkMode ? "☀️" : "🌙"}
                </button>
            </div>
            <input
                type="text"
                placeholder="Search Teams"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar" // Added a class for styling
            />
            <div className="team-grid">
                {teams
                    .filter((team) => team.teamName.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map((team) => (
                        <TeamTile
                            key={team.id}
                            teamName={team.teamName}
                            teamLogoUrl={`/logos/${team.teamName}.png`}
                        />
                    ))}
            </div>
        </div>
    );
};
