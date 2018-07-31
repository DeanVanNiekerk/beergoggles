

export const applyCategoryFilter = (beers, selectedCategoryUrl) => {
    if(selectedCategoryUrl === '')
        return beers;
    return beers.filter(beer => beer.category === selectedCategoryUrl);
}