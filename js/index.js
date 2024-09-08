
const today = new Date();
const thisYear = today.getFullYear();
const body = document.body;

const footer = document.createElement('footer');
const copyright = document.createElement('p');

copyright.innerHTML = ` ${thisYear} Spozmai Helali. All rights reserved.`;
footer.appendChild(copyright);
body.appendChild(footer);

const skills = ["JavaScript", "HTML", "CSS", "GitHub"];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

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
      project.innerText = repo.name;
      projectList.appendChild(project);
    });

  })
  .catch(error => {
    console.error('Error:', error); 
  });