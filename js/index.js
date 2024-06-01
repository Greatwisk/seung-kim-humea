document.addEventListener("DOMContentLoaded", function(){
      // Add the new code for hamburger menu
   const hamburger = document.querySelector('.hamburger');
   const navLinks = document.querySelector('.nav-links');

   hamburger.addEventListener('click', function() {
       navLinks.classList.toggle('active');
   });

   // added on 06/01/24 the lines 11-15 
   window.addEventListener('resize', function() {
    const displayStyle = window.getComputedStyle(navLinks).display;
    if(window.innerWidth >=768 && displayStyle ==="block") {
        navLinks.classList.remove("active")

    }

   })
    //Add a footer element 
    const body = document.body;
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
        skillItem.textContent = skills[i];
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

        //create a new list item(li) element 
        const newMessage = document.createElement("li");
        newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> 
        <span> says: ${usersMessage}</span>`;   

        //remove button
        const removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
        removeButton.type = "button";

        //add event listener tp the removeButton 
        removeButton.addEventListener("click", function() {
        const entry = removeButton.parentNode;
        entry.parentNode.remove();    
  
    });

    newMessage.appendChild(removeButton);

    messageList.appendChild(newMessage);

    //reset method
    messageForm.reset();

   })
  //Lesson-15 
//Fetch Github Repositories 
 const githubUsername ="Greatwisk";
 const repositoryList = document.getElementById("repositories");
 //const repositoryList = repositorySection.querySelector("ul");

 fetch(`https://api.github.com/users/${githubUsername}/repos`)
    .then (response => {

    console.log("response",response);
        if (!response.ok){
            throw new Error("Network reponse was not oka");
        }
        return response.json();
    })

    //iterate over each repository 
    .then(data => {
        console.log("Data",data);        
        const repositories = data;
        console.log("Repositories:", repositories);

        //check if repositories array is empty 
        if(repositories.length === 0) {
            const emptyMessage = document.createElement('p');
            emptyMessage.textContent = "No repositories found.";
            repositorySection.appendChild(emptyMessage);
        }else{
            repositories.forEach(repo => {
                const repositoryItem = document.createElement("li");
                  repositoryItem.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
                  if (repositoryList) {
                    repositoryList.appendChild(repositoryItem);
                } else {
                    console.error("error: repositoryList is null");
                
                }  

        });
        
      }
    })


   .catch(error => {
    console.error("Error fetching repositories:", error);

    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Error Fetching repositories.";
    repositorySection.appendChild(errorMessage);
   });
 
})
