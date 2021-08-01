// initialization
var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkNumber = document.querySelector("#check-number");
var outputBox = document.querySelector("#output-box");


checkNumber.addEventListener("click", checkBirthdayIsLucky);

function checkBirthdayIsLucky() {
    console.log(dateOfBirth.value, luckyNumber.value);

    var birthDate = dateOfBirth.value;
    var addSum = calculateSum(birthDate);
    var luckyNumberValue = luckyNumber.value;

    if(addSum && birthDate) {
        if(addSum % luckyNumberValue === 0) {
            outputBox.innerHTML = "Your Birthday is lucky!🎉🎊";
        } else {
            outputBox.innerHTML ="Your Birthday is NOT lucky, so sad! 😑";
        }
    } else {
        outputBox.innerHTML = "Enter both the fields! 👏";
    }
}

function calculateSum(birthDate) {
    var addNum = 0;
    for(var i=0;i<birthDate.length;i++) {
        if(birthDate[i] == "-") {
            continue;
        } else {
            addNum = addNum + Number(birthDate[i]);
        }
    }
    return addNum;
}
