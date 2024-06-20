export const filterItems = (products, searchFor, typeFilter) => {
    return products.filter(item => {
        return item.name.toLowerCase().includes(searchFor.toLowerCase()) && item.type.includes(typeFilter);
    })
}