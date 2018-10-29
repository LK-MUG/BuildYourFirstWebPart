import axios from 'axios';
var GithubAPIProvider = (function () {
    function GithubAPIProvider() {
        this.config = {
            headers: { Authorization: 'Token 2bbb035e31b353ca7f0773186a44c7d534fd3238' }
        };
    }
    GithubAPIProvider.prototype.UserData = function (githubUser) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var result = { events: [], repos: null };
            _this.ReposForUser(githubUser).then(function (repos) {
                result.repos = repos;
                _this.CommitHistory(githubUser).then(function (commits) {
                    result.events = commits;
                    resolve(result);
                }).catch(function (error) { return reject(error); });
            }).catch(function (error) { return reject(error); });
        });
    };
    GithubAPIProvider.prototype.CommitHistory = function (githubUser) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            axios.get('https://api.github.com/users/' + githubUser + '/events', _this.config).then(function (response) {
                var events = response.data;
                resolve(events.map(function (evt) {
                    return {
                        eventDate: evt.created_at,
                        eventRepo: evt.repo.name,
                        eventType: evt.type
                    };
                }));
            }).catch(function (error) { return error.response && error.response.status == 404 ? resolve([]) : reject(error); });
        });
    };
    GithubAPIProvider.prototype.ReposForUser = function (githubUser) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            axios.get('https://api.github.com/users/' + githubUser + '/repos', _this.config).then(function (response) {
                var repos = response.data;
                resolve(repos.map(function (gar) {
                    return { repoName: gar.name, isForked: gar.fork, lastCommit: gar.pushed_at, language: gar.language };
                }));
            }).catch(function (error) { return error.response && error.response.status == 404 ? resolve([]) : reject(error); });
        });
    };
    return GithubAPIProvider;
}());
export { GithubAPIProvider };
//# sourceMappingURL=GithubAPIProvider.js.map