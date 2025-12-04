function showSuccess() {
hideAll();
document.getElementById("success-box").classList.remove("hidden");
}


function showError() {
hideAll();
document.getElementById("error-box").classList.remove("hidden");
}


function showWait() {
hideAll();
document.getElementById("wait-box").classList.remove("hidden");
}


function hideAll() {
document.getElementById("success-box").classList.add("hidden");
document.getElementById("error-box").classList.add("hidden");
document.getElementById("wait-box").classList.add("hidden");
document.getElementById("details").classList.add("hidden");
}


function toggleDetails() {
const box = document.getElementById("details");
box.classList.toggle("hidden");
}