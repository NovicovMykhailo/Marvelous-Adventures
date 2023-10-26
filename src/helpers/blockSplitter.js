export default function blockSplitter(string){
    const sentences = string.match(/[^.?!]+[A-Z.A-Za-z]+[.!?]+[\])'"`’”]*|.+/g)

    const result = sentences.map((sent, idx )=> (<li key={idx}>{sent}</li>))
 
    return result
}


