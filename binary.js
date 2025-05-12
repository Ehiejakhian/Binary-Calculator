


let ConvertBtn = document.getElementById("btn-el")
let resultOutput = document.getElementById("result-el")

/*
selectValue.addEventListener("change", function(){
    if (selectValue == "Octal") {
        ConvertBtn.textContent = "Convert to Octal"
    } else if (selectValue == "Hexadecimal") {
        ConvertBtn.textContent = "Convert to Hexadecimal"
    }
})
*/
ConvertBtn.addEventListener("click", function(){
    convert()
})


function convert() {
    let selectValue = (document.getElementById("select-el")).value;
    let input = Number((document.getElementById("input-el")).value);


    let input2 = input - Math.floor(input)
    input = Math.floor(input)
    let quo = 0 ; let quodec = 0 ;
    let r = "" ; let rdec = "" ;
    let ans ="" ; let ansdec = "." ;
    
    if (selectValue == "Hexadecimal"){
        

        for (let i = 0; i < 5; i ++) {
            rdec = Math.floor(input2 * 16)
            quodec = (input2 * 16) - Math.floor(input2 * 16)
            input2 = quodec
            if (rdec=="10") {
                ansdec =ansdec + "A"
            } else if (rdec=="11") {
                ansdec =ansdec + "B"
            } else if (rdec=="12") {
                ansdec =ansdec + "C"
            } else if (rdec=="13") {
                ansdec =ansdec + "D"
            } else if (rdec=="14") {
                ansdec =ansdec + "E"
            }  else if (rdec=="15") {
                ansdec =ansdec + "F"
            }else {
                ansdec += rdec
            }
        }
        displayDecimal(ansdec)
        
        while (input > 0) {
            quo = Math.floor(input / 16)
            r = input % 16
            if (r=="10") {
                ans =ans + "A"
            } else if (r=="11") {
                ans =ans + "B"
            } else if (r=="12") {
                ans =ans + "C"
            } else if (r=="13") {
                ans =ans + "D"
            } else if (r=="14") {
                ans =ans + "E"
            }  else if (r=="15") {
                ans =ans + "F"
            } else {
                ans=ans + r
            }
            input = quo
        }
        reverseString(ans)
    
    } else if (selectValue == "Octal") {
        console.log("Processing " + selectValue + " ..." )

        for (let i = 0; i < 5; i ++) {
            rdec = Math.floor(input2 * 8)
            quodec = (input2 * 8) - Math.floor(input2 * 8)
            input2 = quodec
            ansdec += rdec
        }
        displayDecimal(ansdec)

        while (input > 0) {
            quo = Math.floor(input / 8)
            r = input % 8
            ans=ans + r
            input = quo
        }
        reverseString(ans)
    } else {
        console.log("Processing " + selectValue + " ..." )

        for (let i = 0; i < 5; i ++) {
            rdec = Math.floor(input2 * 2)
            quodec = (input2 * 2) - Math.floor(input2 * 2)
            input2 = quodec
            ansdec += rdec
        }
        displayDecimal(ansdec)
        

        while (input > 0) {
            quo = Math.floor(input / 2)
            r = input % 2
            ans=ans + r
            input = quo
        }
        reverseString(ans)
    }
    
}

let ansMain
let ansdecMain
function reverseString(ans) {
    let splitString = ans.split("")
    let reverseArray = splitString.reverse()
    ans = reverseArray.join("")
    ansMain = ans
    displayDecResult()
}

function displayDecimal(ansdec) {
    if (ansdec !== ".00000") {
        ansdecMain = ansdec
        displayDecResult()
    }else {
        ansdecMain=""
    }
}
function displayDecResult() {
    if (ansdecMain !== undefined) {
        resultOutput.textContent = ansMain + ansdecMain
    } else {
        resultOutput.textContent = ansMain
    }
}