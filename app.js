// Init github
const github = new GitHub;

// Init UI
const ui = new UI;

// Search input 
const searchUser = document.getElementById('searchUser');

// Search input event listener 
searchUser.addEventListener('keyup', e => {
    // Get input text
    const userText = e.target.value;

    if (userText.length >= 3) {
        // make http call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === "Not Found") {
                    // display alert
                    ui.displayAlert('User not found', 'alert alert-danger');
                } else {
                    // display the user
                    ui.clearAlert();
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }

            })
            .catch(err => console.log(err));
    } else {
        // clear alerts
        ui.clearAlert();
        // clear profile
        ui.clearProfile();
    }
});