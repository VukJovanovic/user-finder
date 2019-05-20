class UI {
    constructor() {
        this.profile = document.getElementById('profile');
        this.repos = document.getElementById('repos');
    }
    clearProfile() {
        this.profile.innerHTML = '';
    }
    displayAlert(message, className) {
        // Clear alerts before
        this.clearAlert();
        // Create div
        const div = document.createElement('div');
        // Add classes
        div.className = `${className} mt-3`;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector('.searchContainer');
        // Get profile box
        const profile = document.getElementById('profile');
        // Insert div
        container.insertBefore(div, profile);

    }
    clearAlert() {
        const alert = document.querySelector('.alert');
        this.profile.innerHTML = '';
        if (alert) {
            alert.remove();
        }
    }

    // show the user profile on the ui
    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body mt-3 mb-3">
            <div class="row">
                <div class="col-md-3 mb-3">
                    <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View profile</a>
                </div>
                <div class="col-md-9">
                <span class="badge badge-primary csBadge">Public Repos: ${user.public_repos}</span>
                <span class="badge badge-primary csBadge">Public Gists: ${user.public_gists}</span>
                <span class="badge badge-primary csBadge">Followers: ${user.followers}</span>
                <span class="badge badge-primary csBadge">Following: ${user.following}</span>
                <p class="text-primary mt-2">${user.bio}</p>
                <ul class="list-group">
                    <li class="list-group-item">Company: ${this.nullDebug(user.company)}</li>
                    <li class="list-group-item">Website/Blog: ${this.nullDebug(user.blog)}</li>
                    <li class="list-group-item">Location: ${this.nullDebug(user.location)}</li>
                    <li class="list-group-item">Member since: ${this.nullDebug(user.created_at)}</li>
                </ul>
                </div>
            </div>
        </div>
        `;
    }

    // show the user latest repos on the ui
    showRepos(repos) {
        let markup = '<h2 class="mb-3">Latest repositories</h2>';

        repos.forEach(repo => {
            markup += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6"> 
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6"> 
                            <span class="badge badge-primary csBadge">Stars: ${repo.stargazers_count}</span>
                            <span class="badge badge-primary csBadge">Watchers: ${repo.watchers_count}</span>
                            <span class="badge badge-primary csBadge">Forks: ${repo.fo}</span>
                        </div>
                    </div>
                </div>
            `;
        });

        this.repos.innerHTML = markup;
    }

    // If data return null value 
    nullDebug(data) {
        if (data === null) {
            return ' '
        }
        else {
            return data;
        }
    }
}