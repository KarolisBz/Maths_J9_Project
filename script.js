let charToInt = (character) => character.charCodeAt(0);

function caesarChiper(inputText, output)
{
    let shift = document.getElementById("shift").checked;
    const inputArray = inputText.split("");
    let finalOutput = "";
    output.value = 1;

    for(i = 0; i < inputArray.length; i++)
    {
        finalOutput += charToInt(inputArray[i]) + "\n";
    }

    console.log(finalOutput);
}

function vigenereChiper(inputText, output)
{
    let keyword = document.getElementById("keyword").checked;
    output.value = 2;
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