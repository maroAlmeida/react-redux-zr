export interface Tournament {
    id: number;
    name: string;
    matches: Match[];
}

export interface Market {
    id: number;
    name: string;
    odds: number;
}

export interface Match {
    id: number;
    name: string;
    home: { name: string };
    away: { name: string };
}

export interface BetData {
    bet: number;
    marketId: number;
    matchId: number;
    outcome: { name: string; id: number; odds: number };
}
