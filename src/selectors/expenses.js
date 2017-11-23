import moment from 'moment'

export default (expenses, {text, sortBy, startDate, endDate}) => {
    const textSearch = text.toLowerCase()
   return expenses.filter((exp) => {
    const createdAtMoment = moment(exp.createdAt)
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
    // const startDateMatch = typeof startDate !== 'number' || exp.createdAt >= startDate 
    // const endDateMatch = typeof endDate !== 'number' || exp.createdAt <= endDate 
 
       const itemDesc = exp.description && exp.description.toLowerCase(); 
       const textMatch = itemDesc.includes(textSearch) 

       return startDateMatch && endDateMatch && textMatch
   }).sort((a, b) => {
       if (sortBy === 'date') {
           return a.createdAt < b.createdAt ? 1 : 0
       } else if (sortBy === 'amount') {
           return a.amount < b.amount ? 1 : 0            
       }
   })
}