
const projectsBox = document.getElementById('project-box');

console.log("Items ready to be loaded");

const jsonURL = "./projects.json";

const fetchProjects = async () => {
  const res = await fetch(jsonURL);
  const data = await res.json();

  console.log(data);
  outputHTML(data);

};

const outputHTML = data => {
  console.log(projectsBox.className)
  if (projectsBox.className === "active") {
    output = "";

    data.passionProjects.map((project) => {
      output += `
          <div class="project">
            <img class="project-img" src=${project.img} alt="${project.title}" target="_blank"/>
            <div class="title-langs">
            <h1 class="project-title">${project.title}</h1>
            <div class="project-langs">
              <strong>
              ${project.langs.map((lang) => {
        return (
          `<span class="lang-bg ${lang}">${lang}</span>`
        );
      }).join('')}
              </strong >
            </div >
            </div>
          <div class="project-desc">
            ${project.desc}
          </div>
          <div class="source-links">
          ${project.links.map((link) => {
        console.log();
        return (`<button class="source-btn btn"><a class="source-link" href="${link.link}">${link.name}</a></button>
            `);
      }).join('')}
          </div>
        </div >
      `;
    });

    projectsBox.innerHTML = output;
  }

};

fetchProjects();
