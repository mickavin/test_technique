import MONTHS from "constants/months";

export default (date) => { 
   const splitedDate = date.split('-')
   if(splitedDate.length == 3){
     const year = splitedDate[0]
     const monthNumber = splitedDate[1]
     const date = splitedDate[2]
     const parsedMonth = parseInt(monthNumber)
     const monthLabel = MONTHS[parsedMonth-1]
     return `Sorti le ${date} ${monthLabel} ${year}`
   }
   return ''
}

export const year = (date) => { 
  const splitedDate = date.split('-')
  if(splitedDate.length == 3){
    const year = splitedDate[0]
    return year
  }
  return ''
}