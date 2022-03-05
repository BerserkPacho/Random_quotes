const pensador = require('pensador-api');
const readline = require("readline");

async function  search(query){
    const result = await pensador({term:query, max:3}) 
    
    
    return result; 
    
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let result;


rl.question("O que tu queres buscar?", async function (answer) {
    result = await search(answer)
    
    Math.random(0,result["phrases"].length); 
    console.log(result["phrases"][2]["text"]) 
    
  rl.close();
  });
