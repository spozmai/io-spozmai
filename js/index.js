//This code belong to footer section
const today = new Date();
const thisYear = today.getFullYear();
const body = document.body;

const footer = document.createElement('footer');
const copyright = document.createElement('p');

copyright.innerHTML = ` ${thisYear} Spozmai Helali. All rights reserved.`;
footer.appendChild(copyright);
body.appendChild(footer);
 
//this code belong to skill section
const skills = ["JavaScript", "HTML", "CSS", "GitHub"];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('div');

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('div');
    skill.classList.add("sectionSkillItems");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

//tis code is for leav a message form submit
const messageForm = document.querySelector('form[name="leave_message"]');
messageForm.addEventListener('submit', function(event) {

    event.preventDefault();

    const usersName = event.target.userName.value;
    const userEmail = event.target.userEmail.value;
    const userMessage = event.target.usersMessage.value;

    console.log('Name:', usersName);
    console.log('Email:', userEmail);
    console.log('Message:', userMessage);

const messageSection = document.querySelector('#Messages'); 
const messageList = messageSection.querySelector('ul'); 

const newMessage = document.createElement('li');

newMessage.innerHTML = `
    <a href="mailto:${userEmail}">${usersName}</a>
    <span>: ${userMessage}</span>
`;
const removeButton = document.createElement('button');
removeButton.innerText = 'remove'; 
removeButton.type = 'button'; 

removeButton.addEventListener('click', function() {
    const entry = removeButton.parentNode; 
    entry.remove();
});

newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);

    messageForm.reset();
});

//this code is belong to project section and fetching list of repos from github

const apiUrl = `https://api.github.com/users/spozmai/repos`;

fetch(apiUrl)
  .then(response => response.json()) 
  .then(data => {
    const repositories = data; 
    console.log(repositories); 

    const projectSection = document.getElementById('projects'); 
    const projectList = projectSection.querySelector('ul'); 

    projectList.innerHTML = '';

    repositories.forEach(repo => {
      const project = document.createElement('li');
      const link = document.createElement('a');

      link.href = repo.html_url; 
      link.target = "_blank"; 
      link.innerText = repo.name;
      
      project.appendChild(link); 
      
      projectList.appendChild(project);
    });

  })
  .catch(error => {
    console.error('Error:', error); 
  });