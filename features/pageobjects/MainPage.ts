import {
    gameOfThrones, clickButton, linkToSubscribe, topSeries, buyingTickets, randomMovie,
} from "../../constants/locators";

export class MainPage {

    static get searchInput(): string {
        return gameOfThrones;
    }

    static get searchButton(): string {
        return clickButton;
    }

    static get subscribeLink(): string {
        return linkToSubscribe;
    }

    static get searchMovieLink(): string {
        return topSeries;
    }

    static get searchBuyingTickets(): string {
        return buyingTickets;
    }

    static get findRandomMovie(): string {
        return randomMovie;
    }
}
