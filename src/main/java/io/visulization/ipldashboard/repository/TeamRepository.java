package io.visulization.ipldashboard.repository;

import org.springframework.data.repository.CrudRepository;

import io.visulization.ipldashboard.model.Team;



public interface TeamRepository extends CrudRepository<Team, Long>  {

    Team findByTeamName(String teamName);
    
}
