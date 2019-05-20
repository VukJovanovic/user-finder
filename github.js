class GitHub {
    constructor() {
        this.client_id = 'bec98f0cd6bac7199a7f';
        this.client_secret = '304ddb5c15770409e0137200d302731f021c65b2';
        this.repos_count = 5;
        this.repos_sort = 'crated: asc';
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}