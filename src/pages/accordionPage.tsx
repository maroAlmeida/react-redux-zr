{/*
    import Accordion from '../components/Accordion';
import { useAccordion } from '../hooks/useAccordion';

export default function AccordionPage() {
    const {
        tournaments,
        selectedMatch,
        activeTournamentId,
        loading,
        error,
        handleMatchSelect,
        handleTournamentSelect,
    } = useAccordion();

    if (loading) return <div className="text-center mt-10">Loading...</div>;
    if (error) return <div className="text-center mt-10 text-red-500">Error: {error}</div>;

    return (
        {
            tournaments.map(tournament => (
                <Accordion
                    key={tournament.id}
                    tournament={tournament}
                    onMatchSelect={handleMatchSelect}
                    onTournamentSelect={handleTournamentSelect}
                    selectedMatchId={selectedMatch ? String(selectedMatch.id) : null}
                    isActive={activeTournamentId === tournament.id}
                />
            ))
        }
    )
}

*/}