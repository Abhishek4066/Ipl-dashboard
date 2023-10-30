package io.visulization.ipldashboard.data;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.batch.item.ItemProcessor;

import io.visulization.ipldashboard.model.Match;

public class MatchDataProcessor implements ItemProcessor<MatchInput, Match> {

	// Create a logger for this class to log messages
	private static final Logger log = LoggerFactory.getLogger(MatchDataProcessor.class);

	@Override
	public Match process(final MatchInput matchInput) throws Exception {

		// Create a new Match object to transform and store the input data
		Match match = new Match();
		match.setId(Long.parseLong(matchInput.getId()));
		match.setCity(matchInput.getCity());

		// Parse and set the match date
		match.setDate(LocalDate.parse(matchInput.getDate()));

		match.setPlayerOfMatch(matchInput.getPlayer_of_match());
		match.setVenue(matchInput.getVenue());

		// Set Team 1 and Team 2 depending on the toss decision
		String firstInningsTeam, secondInningsTeam;

		if ("bat".equals(matchInput.getToss_decision())) {
			firstInningsTeam = matchInput.getToss_winner();
			secondInningsTeam = matchInput.getToss_winner()
					.equals(matchInput.getTeam1()) ? matchInput.getTeam2()
					: matchInput.getTeam1();
		} else {
			secondInningsTeam = matchInput.getToss_winner();
			firstInningsTeam = matchInput.getToss_winner()
					.equals(matchInput.getTeam1()) ? matchInput.getTeam2()
					: matchInput.getTeam1();
		}

		// Set the teams and other match details
		match.setTeam1(firstInningsTeam);
		match.setTeam2(secondInningsTeam);
		match.setTossWinner(matchInput.getToss_winner());
		match.setTossDecision(matchInput.getToss_decision());
		match.setMatchWinner(matchInput.getWinner());
		match.setResult(matchInput.getResult());
		match.setResultMargin(matchInput.getResult_margin());
		match.setUmpire1(matchInput.getUmpire1());
		match.setUmpire2(matchInput.getUmpire2());

		// Return the processed Match object
		return match;
	}
}
