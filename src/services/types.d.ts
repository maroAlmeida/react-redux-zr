export interface Team {
    name: string;
}

export interface Match {
    id: number;
    name: string;
    home: Team;
    away: Team;
}

export interface Sport {
    id: number;
    name: string;
    matches: Match[];
}
