function age() {
  const d = new Date();
  var currentDate = d.getDate();
  var currentMonth = d.getMonth() + 1;
  var currentYear = d.getFullYear();
  const lastDate = new Date(currentYear, currentMonth, 0).getDate();

  const inputDate = parseInt(document.getElementById("inputDate").value);
  const inputMonth = parseInt(document.getElementById("inputMonth").value);
  const inputYear = parseInt(document.getElementById("inputYear").value);

  const label = document.querySelectorAll("label");
  const input = document.querySelectorAll("input");
  const log = document.getElementsByClassName("log");

  const resultDate = document.getElementById("resultDate");
  const resultMonth = document.getElementById("resultMonth");
  const resultYear = document.getElementById("resultYear");

  if (input[0] === "") {
    log[0].innerText = "This field is required";
  } else {
    let calcDate = currentDate - inputDate;
    if (inputDate > lastDate) {
      label[0].style.color = "var(--lightRed)";
      input[0].style.borderColor = "var(--lightRed)";
      log[0].innerText = "Must be a valid date";
    } else if (calcDate < 0) {
      calcDate = calcDate + lastDate;
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

    let calcMonth = currentMonth - inputMonth;
    if (inputMonth > 12) {
      label[1].style.color = "var(--lightRed)";
      input[1].style.borderColor = "var(--lightGrey)";
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

    let calcYear = currentYear - inputYear;
    if (calcYear < 0) {
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
