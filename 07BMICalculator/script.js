const calcBtn = document.getElementById("calcBtn");
const result = document.getElementById("result");

calcBtn.addEventListener("click", () => {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;

  if (height === "" || weight === "") {
    result.innerHTML = "⚠️ Please enter both height and weight!";
    return;
  }

  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

  let category = "";
  if (bmi < 18.5) category = "Underweight 😔";
  else if (bmi < 25) category = "Normal 😊";
  else if (bmi < 30) category = "Overweight 😐";
  else category = "Obese 😟";

  result.innerHTML = `Your BMI is <strong>${bmi}</strong> <br> Category: <strong>${category}</strong>`;
});
