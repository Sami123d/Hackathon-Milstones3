// Get form elements
const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const phoneInput = document.getElementById('phone') as HTMLInputElement;
const educationInput = document.getElementById('education') as HTMLInputElement;
const workInput = document.getElementById('work') as HTMLInputElement;
const projectsInput = document.getElementById('projects') as HTMLInputElement;
const skillsInput = document.getElementById('skills') as HTMLInputElement;
const resumeOutput = document.getElementById('resume-sec' ) as HTMLInputElement;
const profileInput = document.getElementById('profile-picture') as HTMLInputElement;
// Get output elements (resume section)
const outputName = document.getElementById('output-name') as HTMLHeadingElement;
const outputEmail = document.getElementById('output-email') as HTMLAnchorElement;
const outputPhone = document.getElementById('output-phone') as HTMLSpanElement;
const outputEducation = document.getElementById('output-education') as HTMLLIElement;
const outputWork = document.getElementById('output-work') as HTMLLIElement;
const outputProjects = document.getElementById('output-projects') as HTMLUListElement;
const outputSkills = document.getElementById('output-skills') as HTMLUListElement;
const outputProfilePicture = document.getElementById('output-profile-picture') as HTMLImageElement;
// Add form submission event
resumeForm.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent page from refreshing

    // Update resume with form input
    outputName.textContent = nameInput.value;
    outputEmail.textContent = emailInput.value;
    outputPhone.textContent = phoneInput.value;
    outputEducation.textContent = educationInput.value;
    outputWork.textContent = workInput.value;

    // Update projects (comma-separated list)
    const projectList = projectsInput.value.split(',').map(project => {
        const [title, url] = project.split('-').map(str => str.trim());
        return `<li><strong>${title}</strong> - <a href="${url}" target="_blank">Live Demo</a></li>`;
    }).join('');
    outputProjects.innerHTML = projectList;

    // Update skills (comma-separated list)
    const skillList = skillsInput.value.split(',').map(skill => `<li>${skill.trim()}</li>`).join('');
    outputSkills.innerHTML = skillList;
    
    const file = profileInput.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        outputProfilePicture.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
    console.log(profileInput+"profiel, ", outputProfilePicture+"output");
    // Show the resume section
    resumeOutput.style.display = 'block';

    // Optionally, hide the form after submission
    resumeForm.style.display = 'none';
});
