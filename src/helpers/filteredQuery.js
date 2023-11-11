export default function filteredQuery(obj){
     const filtered = Object.entries(obj).filter(([key, value])=> value !== null)
     const doubleFiltered = filtered.filter(([key, value])=> value !== "null")
     return Object.fromEntries(doubleFiltered)

}