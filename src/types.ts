export interface IAnime {
    mal_id: number;
    airing: boolean;
    duration: string;
    episodes: number;
    rating: string;
    status: string;
    source: string;
    title: string;
    title_english: string;
    title_japanese: string;
    titles: { type: "Default" | "English" | "Japanese"; title: string }[];
    images: {
        webp: { image_url: string; large_image_url: string; small_image_url: string };
    };
    aired: {
        from: string;
        prop: {
            from: { day: number; month: number; year: number };
            to: { day: number; month: number; year: number };
        };
        string: string;
        to: null;
    };
}

export interface IBulkResult {
    data: IAnime[];
    pagination: {
        current_page: number;
        has_next_page: boolean;
        last_visible_page: number;
        items: { count: number; total: number; per_page: number };
    };
}
