interface Event {
    year: string;
    description: string;
}

export interface TimeLinePoint {
    id: number;
    title: string;
    period: {
        from: string;
        to: string;
    };
    events: Event[];
}