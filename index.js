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
