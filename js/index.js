
//Add a footer element 
const body = document.body
const footer = document.createElement('footer') ;
footer.textContent = '2024 Footer element added';
body.appendChild(footer);
console.log('Footer element added:', footer);

// insert Copyright Text in Footer
const today = new Date();
const thisYear = today.getFullYear();
const existingFooter = document.querySelector('footer');
const copyright = document.createElement('p');
const myName = 'Seung Kim';
copyright.innerHTML = `${myName} ${thisYear}`;
existingFooter.appendChild(copyright);

//Create List of Skills

const skills =["Javascript", "HTML", "CSS", "Adobe Photoshop", "gitHub"];

const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('u1');

//For Loop
for(let i =0; i<skills.length;i++){
    const skillItem  = document.createElement('li');
    skillItem.innerText = skills[i];
    skillsList.appendChild(skillItem);
}
//console.log('Skills Section:', skillsSection);
//console.log('Skills List:', skillsList);
// edit edit
