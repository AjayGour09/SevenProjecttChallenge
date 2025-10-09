document.getElementById("calcBtn").addEventListener("click", calculateAge);

function calculateAge() {
  const dob = document.getElementById("dob").value;
  const result = document.getElementById("result");

  if (!dob) {
    result.textContent = "⚠️ Please select your date of birth!";
    result.style.color = "red";
    return;
  }

  const dobDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - dobDate.getFullYear();
  const monthDiff = today.getMonth() - dobDate.getMonth();
  const dayDiff = today.getDate() - dobDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  result.style.color = "#333";
  result.textContent = `🎉 You are ${age} years old!`;
}
