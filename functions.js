
export const parse_content = (start,end,text) =>{
    let re =  new RegExp("(?<=\ "  + start + " )[\D\d]*?(?=\ " + end +  ")" )
    let result =  re.exec(text);  
    return result
}
function parse_content(start,end,text){
    const pattern =  new RegExp("(?<=" + start + ")([\D\d]*)(?=" + end + ")");
    const pattern = /(?<=% of )(.*)(?= at )/g
    let result =  re.exec(text); 
    return result;
} 


export{parse_content()}; 
 //found regexp  (?<=fr0)[\D\d]*?(?=/p)

