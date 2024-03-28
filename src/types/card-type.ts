import { User } from './review-type';

export type Location = {
    latitude: number;
    longitude: number;
    zoom: number;
};

export type City = {
    name: string;
    location: Location;
}

export type CardType = {
    id: string;
    title: string;
    description: string;
    type: string;
    price: number;
    city: City;
    location: Location;
    isPremium: boolean;
    isFavorite: boolean;
    rating: number;
    previewImage: string;
    images: string[];
    goods: string[];
    reviewsCount: number;
    maxBedrooms: number;
    maxAdults: number;
    host: User;
}
