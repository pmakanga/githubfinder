class Github{
    constructor() {
        this.client_id = 'ad4f39fc7e4cdeae18f6';
        this.client_secret = '286f32d5c26ff71cb6c439ee8951ef68040faf7a';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        const repos = await reposResponse.json();

        return {
            profile,
            repos
            //alertnative
            // profile: profile,
            // repos: repos
        }
    }
}