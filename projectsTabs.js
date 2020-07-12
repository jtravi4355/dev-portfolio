const passionBtn = document.getElementById("passion-btn");
const learningBtn = document.getElementById("learning-btn");
const clientBtn = document.getElementById("client-btn");

const passionDesc = document.getElementById("passion-desc");
const learningDesc = document.getElementById("learning-desc");
const clientDesc = document.getElementById("client-desc");

const passionProjects = document.querySelectorAll("#passion-project");
const learningProjects = document.querySelectorAll("#learning-project");
const clientProjects = document.querySelectorAll("#client-project");

const oneProject = () => {
  console.log("One project function");
  if (passionProjects.length === 1) {
    passionProjects.forEach(project => {
      project.classList.add("one-project");
    });
  }
  if (learningProjects.length === 1) {
    learningProjects.forEach(project => {
      project.classList.add("one-project");
    });
  }
  if (clientProjects.length === 1) {
    clientProjects.forEach(project => {
      project.classList.add("one-project");
    });
  }
};

oneProject();

passionBtn.addEventListener("click", () => {
  // Change look of buttons
  passionBtn.classList.add("active");
  passionBtn.classList.remove("inactive");
  learningBtn.classList.add("inactive");
  learningBtn.classList.remove("active");
  clientBtn.classList.add("inactive");
  clientBtn.classList.remove("active");

  // Change which projects description is showing
  passionDesc.classList.add("active");
  passionDesc.classList.remove("inactive");
  learningDesc.classList.add("inactive");
  learningDesc.classList.remove("active");
  clientDesc.classList.add("inactive");
  clientDesc.classList.remove("active");

  passionProjects.forEach(project => {
    project.classList.add("active");
    project.classList.remove("inactive");
  });
  clientProjects.forEach(project => {
    project.classList.remove("active");
    project.classList.add("inactive");
  });
  learningProjects.forEach(project => {
    project.classList.remove("active");
    project.classList.add("inactive");
  });
});

learningBtn.addEventListener("click", () => {
  passionBtn.classList.add("inactive");
  passionBtn.classList.remove("active");
  learningBtn.classList.add("active");
  learningBtn.classList.remove("inactive");
  clientBtn.classList.add("inactive");
  clientBtn.classList.remove("active");

  // Change which projects description is showing
  passionDesc.classList.remove("active");
  passionDesc.classList.add("inactive");
  learningDesc.classList.remove("inactive");
  learningDesc.classList.add("active");
  clientDesc.classList.add("inactive");
  clientDesc.classList.remove("active");

  learningProjects.forEach(project => {
    project.classList.add("active");
    project.classList.remove("inactive");
  });
  clientProjects.forEach(project => {
    project.classList.remove("active");
    project.classList.add("inactive");
  });
  passionProjects.forEach(project => {
    project.classList.remove("active");
    project.classList.add("inactive");
  });
});

clientBtn.addEventListener("click", () => {
  passionBtn.classList.add("inactive");
  passionBtn.classList.remove("active");
  learningBtn.classList.add("inactive");
  learningBtn.classList.remove("active");
  clientBtn.classList.add("active");
  clientBtn.classList.remove("inactive");

  // Change which projects description is showing
  passionDesc.classList.remove("active");
  passionDesc.classList.add("inactive");
  learningDesc.classList.add("inactive");
  learningDesc.classList.remove("active");
  clientDesc.classList.remove("inactive");
  clientDesc.classList.add("active");

  clientProjects.forEach(project => {
    project.classList.add("active");
    project.classList.remove("inactive");
  });
  passionProjects.forEach(project => {
    project.classList.remove("active");
    project.classList.add("inactive");
  });
  learningProjects.forEach(project => {
    project.classList.remove("active");
    project.classList.add("inactive");
  });
});
