
//Add a footer element 
const body = document.body
const footer = document.createElement('footer') ;
footer.textContent = '2024 Footer element added';
body.appendChild(footer);
console.log("Footer element added:", footer);

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
const skillsList = skillsSection.querySelector('ul');

//For Loop
for(let i =0; i<skills.length;i++){
    const skillItem  = document.createElement('li');
    skillItem.innerText = skills[i];
    skillsList.appendChild(skillItem);
}


//message handler form submit
const messageForm = document.forms["leave message"];

messageForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    //get values from the form fields
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    //console log values 
    console.log("Name:", usersName);
    console.log("Email:", usersEmail);
    console.log("Message:", usersMessage);


    //message section
    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");

    //crete a new list item(li) element 
    const newMessage = document.createElement("li");
    newMessage.innerHTML =
    `<a href="mailto:${usersEmail}">${usersName}</a> 
    <span> says: ${usersMessage}</span>`
;   

    //remove button
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.type = "button";

    //add event listener tp the removeButton 
    removeButton.addEventListener("click", function() {
    const entry = removeButton.parentNode;
    entry.parentNode.removeChild(entry);    
  
    });
    newMessage.appendChild(removeButton);

    messageList.appendChild(newMessage);

    //reset method
    messageForm.reset();


})

//edit

