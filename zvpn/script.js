document.getElementById("year").textContent = new Date().getFullYear();

function showDownloadNotice(event) {
  event.preventDefault();
  alert("Add your Google Play Store URL to the Download/Get ZVPN buttons in index.html.");
}
