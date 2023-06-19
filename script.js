
    const d = new Date();
    var currentDay = d.getDay();
    var currentMonth = d.getMonth() + 1;
    var currentYear = d.getFullYear();

    const inputDay = document.getElementById("inputDay").value;
    const inputMonth = document.getElementById("inputMonth").value;
    const inputYear = document.getElementById("inputYear").value;
    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const resultDay = document.getElementById("resultDay");
    const resultMonth = document.getElementById("resultMonth");
    const resultYear = document.getElementById("resultYear");

    inputDay.oninput = () => {
        resultDay.innerText = inputDay;
    };

    let supYear = 0;

    inputMonth.oninput = () => {
        let result = currentMonth - inputMonth;
        let supYear1 = 0;
        if(inputMonth > 12) {
            resultMonth.innerText = "error";
        } else if (result < 0) {
            result += 12;
            supYear1 = 1;
            windows.supYear = supYear1;
            resultMonth.innerText = result;
            } else {
                supYear = 0;
                resultMonth.innerText = result;
        }
    };

    inputYear.oninput = () => { 
        let result = currenntYear - inputYear - supYear;
        result < 0 ? resultYear.innerText = "error": resultYear.innerText = result;
    };
