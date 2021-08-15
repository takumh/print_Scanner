var restart = document.getElementById('beginBtn');
restart.addEventListener('click', function() {
  console.log("restarting")
  localStorage.clear();
}, false);
