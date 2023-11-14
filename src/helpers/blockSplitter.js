import removeTagsFromString from "./removeTagsFromString"
export default function blockSplitter(string){
    const fiteredStr = removeTagsFromString(string)
    const sentences = fiteredStr.match(/[^.?!]+[A-Z.A-Za-z]+[.!?]+[\])'"`’”]*|.+/g)

    const result = sentences.map((sent, idx )=> (<li key={idx}>{sent}</li>))
 
    return result
}


