export default (items, ids) => { 
    let filteredItems = items.filter(i => ids.includes(i?.id))
    return filteredItems
 }