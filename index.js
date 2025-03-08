// Dynamic date
const currentDate = new Date();
const monthName = currentDate.toLocaleString("default", { month: "long" });
const dayOfMonth = currentDate.getDate();
const year = currentDate.getFullYear();
const formattedDate = `${monthName} ${dayOfMonth} ${year}`;
const currentTime = currentDate.toLocaleTimeString();

document.getElementById("month").innerText = currentDate.toLocaleString(
  "default",
  { weekday: "long" }
);
document.getElementById("year").innerText = formattedDate;

// Color change
document.getElementById("color-change").addEventListener("click", function () {
  document.body.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
});

// Page rendering
document.getElementById("discover").addEventListener("click", function () {
  window.location.href = "qna.html";
});

let totalComplete = 0;

const completeButtons = document.querySelectorAll(".btn");

completeButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    alert("Task Added successfully");
    btn.disabled = true;

    // Update the task count
    const task = document.getElementById("task");
    const taskInt = parseInt(task.innerText);
    task.innerText = taskInt - 1;

    // Update the total task count
    const totalTask = document.getElementById("totalTask");
    const totalTaskInt = parseInt(totalTask.innerText);
    totalTask.innerText = totalTaskInt + 1;

    // Increment total completed tasks
    totalComplete++;

    const heading = btn.closest(".card").querySelector(".text-2xl");

    const activity = document.getElementById("activity");
    const createDiv = document.createElement("div");
    createDiv.classList.add("mt-5", "bg-white", "rounded-xl", "p-3");
    createDiv.innerText = `You Have Completed the Task ${heading.innerText} at ${currentTime}`;
    activity.appendChild(createDiv);

    if (totalComplete == 6) {
      alert("Congratulations! You Added all Task Successfully");
    }
  });
});

const clearHistory = document.getElementById("clear-history");

clearHistory.addEventListener("click", function () {
  const activity = document.getElementById("activity");
  activity.innerHTML = "";
  clearHistory.disabled = false;
});
