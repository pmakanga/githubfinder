// Init Github
const github = new Github;
// init the UI 
const ui = new UI;
// Search Input 
const searchUser = document.getElementById('searchUser');

////search input event listiner

searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;
    if(userText !== '' ) {
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found') {
                    // Show Alert
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    // Show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos)
                }
            })
    }else {
        // Clear the profile
        ui.clearProfile();
    }
});