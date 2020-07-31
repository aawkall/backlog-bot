export enum Rating {
    noRating = -1.0,
    zeroStars = 0.0,
    halfStars = 0.5,
    oneStars = 1.0,
    oneHalfStars = 1.5,
    twoStars = 2.0,
    twoHalfStars = 2.5,
    threeStars = 3.0,
    threeHalfStars = 3.5,
    fourStars = 4.0,
    fourHalfStars = 4.5,
    fiveStars = 5.0
}

export enum BookType {
    Fiction = 'fiction',
    NonFiction = 'non-fiction',
    SelfHelp = 'self-help',
    GraphicNovel = 'graphic novel'
}

export enum Shelf {
    WantToRead = "want to read",
    CurrentlyReading = "currently reading",
    Read = "read",
    OnHold = "on hold"
}

export interface Book {
    title: string;
    author: string;
    isbn: string;
    coverUrl: string;
    bookType: BookType;
    shelf: Shelf;
    currentPage: number;
    totalPages: number;
    percentageComplete: number;
    rating: Rating;
}
