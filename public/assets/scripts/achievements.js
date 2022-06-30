addEventListener("load", () => {
  if(!localStorage.completedAchievements) localStorage.completedAchievements = ["hello"];
  const wrapper = document.querySelector(".achievement-wrapper");
  fetch("./assets/achievements.svg")
    .then(e => e.text())
    .then(e => {
      var file = e;

      // do stuff
  
      wrapper.innerHTML = file;
    });
});
