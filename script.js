function age() {
  const inputDate = document.getElementById("inputDate").value;
  const inputMonth = document.getElementById("inputMonth").value;
  const inputYear = document.getElementById("inputYear").value;

  const d = new Date();
  const currentDate = d.getDate();
  var currentMonth = d.getMonth() + 1;
  var currentYear = d.getFullYear();
  const lastDate = new Date(inputYear, inputMonth, 0).getDate();

  const label = document.querySelectorAll("label");
  const input = document.querySelectorAll("input");
  const log = document.getElementsByClassName("log");

  const resultDate = document.getElementById("resultDate");
  const resultMonth = document.getElementById("resultMonth");
  const resultYear = document.getElementById("resultYear");

  let a = 1,
    b = 2,
    c = 0.1;
  switch (inputDate) {
    case "":
      label[0].style.color = "var(--lightRed)";
      input[0].style.borderColor = "var(--lightRed)";
      log[0].innerText = "This field is required";
      resultDate.innerText = "--";
      break;
    default:
      a = 0;
      label[0].style.color = "var(--smokeyGrey)";
      input[0].style.borderColor = "var(--lightGrey)";
      log[0].innerText = "";
  }
  switch (inputMonth) {
    case null || "":
      label[1].style.color = "var(--lightRed)";
      input[1].style.borderColor = "var(--lightRed)";
      log[1].innerText = "This field is required";
      resultMonth.innerText = "--";
      break;
    default:
      b = 0;
      label[1].style.color = "var(--smokeyGrey)";
      input[1].style.borderColor = "var(--lightGrey)";
      log[1].innerText = "";
  }
  switch (inputYear) {
    case null || "":
      label[2].style.color = "var(--lightRed)";
      input[2].style.borderColor = "var(--lightRed)";
      log[2].innerText = "This field is required";
      resultYear.innerText = "--";
      break;
    default:
      c = 0;
      label[2].style.color = "var(--smokeyGrey)";
      input[2].style.borderColor = "var(--lightGrey)";
      log[2].innerText = "";
  }
  console.log(lastDate);
  let check = a === b && a === c && b === c;
  if (!check) {
  } else {
    let calcDate = currentDate - parseInt(inputDate);
    if (inputDate < 0 || inputDate > lastDate) {
      label[0].style.color = "var(--lightRed)";
      input[0].style.borderColor = "var(--lightRed)";
      log[0].innerText = "Must be a valid date";
    } else if (calcDate < 0) {
      calcDate += lastDate;
      currentMonth--;
      resultDate.innerText = calcDate;
      label[0].style.color = "var(--smokeyGrey)";
      input[0].style.borderColor = "var(--lightGrey)";
      log[0].innerText = "";
    } else {
      resultDate.innerText = calcDate;
      label[0].style.color = "var(--smokeyGrey)";
      input[0].style.borderColor = "var(--lightGrey)";
      log[0].innerText = "";
    }

    let calcMonth = currentMonth - parseInt(inputMonth);
    if (inputMonth < 0 || inputMonth > 12) {
      label[1].style.color = "var(--lightRed)";
      input[1].style.borderColor = "var(--lightRed)";
      log[1].innerText = "Must be a valid month";
    } else if (calcMonth < 0) {
      calcMonth += 12;
      currentYear--;
      resultMonth.innerText = calcMonth;
      label[1].style.color = "var(--smokeyGrey)";
      input[1].style.borderColor = "var(--lightGrey)";
      log[1].innerText = "";
    } else {
      resultMonth.innerText = calcMonth;
      label[1].style.color = "var(--smokeyGrey)";
      input[1].style.borderColor = "var(--lightGrey)";
      log[1].innerText = "";
    }

    let calcYear = currentYear - parseInt(inputYear);
    if (inputYear < 0 || calcYear < 0) {
      label[2].style.color = "var(--lightRed)";
      input[2].style.borderColor = "var(--lightRed)";
      log[2].innerText = "Must be in the past";
    } else {
      resultYear.innerText = calcYear;
      label[2].style.color = "var(--smokeyGrey)";
      input[2].style.borderColor = "var(--lightGrey)";
      log[2].innerText = "";
    }
  }
}
