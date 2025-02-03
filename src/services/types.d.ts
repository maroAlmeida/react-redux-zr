export interface Team {
    id: number;
    name: string;
}

export interface Match {
    id: number;
    home: Team;
    away: Team;
    name: string;
}

export interface Sport {
    id: number;
    name: string;
}

export interface Tournament {
    id: number;
    name: string;
    sport: Sport;
    matches: Match[];
}