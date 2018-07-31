

export const applyCategoryFilter = (beers, selectedCategoryUrl) => {
    return beers.filter(beer => beer.category === selectedCategoryUrl);
}