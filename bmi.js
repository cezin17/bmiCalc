let height = Number(prompt('Height (in cm)'))
let mass = Number(prompt('Mass (in kg) '))
height /= 100
let bmi = (mass / (height ** 2)).toFixed(1)

if(bmi < 18.5)console.log("Underweight: " + bmi)
else if(bmi >= 18.5 && bmi <= 24.9)console.log("Normal (Congrats): " + bmi)
else if(bmi >= 25 && bmi <= 29.9)console.log("Overweight: " + bmi)
else if(bmi >= 30 && bmi <= 34.9)console.log("Obesity I: " + bmi)
else if(bmi >= 35 && bmi <= 39.9)console.log("Obesity II: " + bmi)
else if(bmi > 40)console.log("Obesity III: " + bmi)