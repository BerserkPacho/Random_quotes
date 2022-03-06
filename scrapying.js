#!/usr/bin/env node 
import inquirer from 'inquirer'; 
import pensador from 'pensador-api';

import chalk from 'chalk';
import chalkAnimation from 'chalk-animation'; 

// const readline = require("readline");
// import chalk from 'chalk'/
const sleep = (ms = 1000) => new Promise((r) => setTimeout(r,ms)); 

async function welcome(){
    const rainbowTitle = chalkAnimation.rainbow('Hello' ); 

    await sleep();
    rainbowTitle.stop()
    
}  

async function askSearch(){
    const answers = await inquirer.prompt({
	name: 'query',
	type: 'input',
	message: 'O que quer procurar?', 
	
    })
    return  answers.query; 
    
}
async function search(query){
    let  result =  await pensador({term:query, max:3});
    return result;
} 

let result;
async function main(){ 

    await welcome()
    let answer  = await askSearch();
    
    
    result = await search(answer);
    let random = Math.floor(Math.random(3));
    
    console.log(result["phrases"][random]["text"]);
}
main() 
// let array =[]; 
    
