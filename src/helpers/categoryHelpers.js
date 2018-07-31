

export const getCategoryName = (url, categories) => {

    var filtered = categories.filter(category => category.url === url)

    if(filtered.length === 0)
        return "";

    return filtered[0].name;
}