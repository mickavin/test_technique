export default (items, type, key, ascending=true) => { 
    if(type == 'number' && ascending){
        return items.sort((a, b) => b?.[key] - a?.[key])
    } if(type == 'number' && !ascending){
        return items.sort((a, b) => a?.[key] - b?.[key])
    } else if(type == 'text' && ascending){
        return items.sort((a, b) => `${a?.[key]}`.localeCompare(`${b?.[key]}`))
    } else if(type == 'text' && !ascending){
        return items.sort((a, b) => `${b?.[key]}`.localeCompare(`${a?.[key]}`))
    } 
    return items
 }