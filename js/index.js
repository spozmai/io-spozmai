//Code for adding footer
const today = new Date();
const thisYear = today.getFullYear();
const body = document.body;

const footer = document.createElement('footer');
const copyright = document.createElement('p');

copyright.innerHTML = ` ${thisYear} Spozmai Helali. All rights reserved.`;
footer.appendChild(copyright);
body.appendChild(footer);

// Code for adding skills into skills section
const skills = ["JavaScript", "HTML", "CSS", "GitHub"];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

