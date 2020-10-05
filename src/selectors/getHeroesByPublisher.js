import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
    const validPublishers = ["DC Comics","Marvel Comics"];

    if(!validPublishers.includes(publisher)) {
        throw new Error("Publisher must be either 'DC Comics' or 'Marvel Comics'")
    }

    return heroes.filter(hero => hero.publisher === publisher)
};
