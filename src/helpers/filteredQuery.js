export default function filteredQuery(obj){
     const filtered = Object.entries(obj).filter(([key, value])=> value !== null)
     return Object.fromEntries(filtered)

}