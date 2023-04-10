// crptology code by karolis B, index.html, and css template.
let charToInt = (character) => character.charCodeAt(0);
let intToChar = (intLetter) => String.fromCharCode(intLetter);

function intIsUppercase(charInt)
{
    let upperCase = false;

    // checking if int is inbounds of being a uppercase
    if(charInt <= 90 && charInt >= 65)
    {
        upperCase = true;
    }

    return upperCase;
}

// checks if the ascii values is within the bounds of only letters, if it's past the alphabet it'll return to the start of the
// array with the remaining shifts added onto it.
function alphabetBounds(charInt, shift)
{
    let upperCase = false;
    
    // checks if int is uppercase
    upperCase = intIsUppercase(charInt-shift);

    // if it's uppercase we will change change it to lower case for the conversion (32 is the difference between upper and lowercase on the asci table)
    if(upperCase)
    {
        charInt += 32;
    }

    do
    {
        if(charInt > 122) // if letter int is passed z
        {
            charInt -= 26;
        }
        else if(charInt < 97) // if letter int is below a
        {
            charInt += 26;
        }
    } while((charInt > 122 || charInt < 97) && charInt != 32) // loops as many times as it takes to set letter int into bounds or if it's a space (int 32)

    // we will now return it to uppercase
    if(upperCase)
    {
        charInt -= 32;
    }

    return charInt;
}

function caesarChiper(inputText, output)
{
    let shift = document.getElementById("shift").value;
    const inputArray = inputText.split("");
    let finalOutput = "";

    // loop through the array
    for(i = 0; i < inputArray.length; i++)
    {
        let charInt = charToInt(inputArray[i]);

        // adding shift
        charInt += Number(shift);
        // checking bounds
        charInt = alphabetBounds(charInt, shift);
        // building the final string to output
        finalOutput += intToChar(charInt);
    }

    output.value = finalOutput;
}

function vigenereChiper(inputText, output)
{
    let keyword = document.getElementById("keyword").value;
    const inputArray = inputText.split("");
    const keywordArray = keyword.split("");
    let finalOutput = "";
    let keywordIllteration = 0;

    // loop through the array
    for(i = 0; i < inputArray.length; i++)
    {
        let charInt = charToInt(inputArray[i]);

        // doesn't add shift if it's a space value
        if(charInt != 32)
        {
            // adding shift (which is the corresponding keyword letter number value)
            let currentShift; // the shift which we will add

            if(keywordIllteration >= keywordArray.length) // checks if we are in bounds of keyword length, if not resets to start
            {
                keywordIllteration = 0;
            }

            let keyLetter = keywordArray[keywordIllteration]; // fetches keyword letter from array
            currentShift = charToInt(keyLetter) -96; // fetches number value of keyword letter
            charInt += Number(currentShift);

            // checking bounds
            charInt = alphabetBounds(charInt, currentShift);
            keywordIllteration++;
        }

        // building the final string to output
        finalOutput += intToChar(charInt);
    }

    output.value = finalOutput;
}

// executes a decipher method based on selected inputs
function decipher()
{
    let ceaserSelected = document.getElementById("caesar").checked;
    let inputText = document.getElementById("inputText").value;
    let output = document.getElementById("output");

    if(ceaserSelected) 
    {
        caesarChiper(inputText, output)
    }
    else
    {
        vigenereChiper(inputText, output)
    }
}

function shiftChanged()
{
    let shiftToRight = document.getElementById("right").checked;
    let shift = document.getElementById("shift");

    if(shiftToRight && shift.value)
    {
        shift.value = Math.abs(shift.value);
    }
    else if(shift.value)
    {
        shift.value = shift.value * -1;
    }
}
// end of karolis b script