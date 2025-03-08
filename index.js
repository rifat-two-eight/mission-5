// dynamic date
const currentDate = new Date();
const monthName = currentDate.toLocaleString("default", { month: "long" });
const dayOfMonth = currentDate.getDate();
const year = currentDate.getFullYear();
const formattedDate = `${monthName} ${dayOfMonth} ${year}`;

document.getElementById("month").innerText = currentDate.toLocaleString(
  "default",
  { weekday: "long" }
);
document.getElementById("year").innerText = formattedDate;

// color change
document.getElementById("color-change").addEventListener("click", function () {
  document.body.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
});

//page rendering
document.getElementById("discover").addEventListener("click", function () {
  window.location.href = "qna.html";
});
