// Iteration 1: Names and Input

const hacker1 = "Leonie"; 

console.log(`The driver's name is ${hacker1}`); 

const hacker2 ="Vesna"; 

console.log(`The navigator's name is ${hacker2}`); 


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length)
{
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length)
{
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else 
{ 
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters.`)
} 

let bigHacker1 = ""; 

// Iteration 3: Loops

for (let i=0; i<=hacker1.length; i++)
{
 bigHacker1 += hacker1[i].toUpperCase() +" ";
  console.log(bigHacker1.trim());
} 

let reverseHacker2 =""; 
for (let i=hacker2.length-1 ; i>=0; i--)
{
  reverseHacker2+=hacker2[i]; 
  console.log(reverseHacker2); 
}

if (hacker1.slice(1) < hacker2.slice(1))
{ console.log("The driver's name goes first.");
}
else if (hacker1.slice(1) > hacker2.slice(1))
  { console.log("Yo, the navigator goes first definitely.")
  }
else 
  {"What?! You both have the same name?"} ; 