export default function removeTagsFromString(str){
    if ((str===null) || (str==='') || (str===undefined)) 
    return false; 
else
    str = str.toString(); 
      
return str.replace( /(<([^>]+)>)/ig, '');
}



