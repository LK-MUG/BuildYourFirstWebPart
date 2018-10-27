var GithubAPIProvider = (function () {
    function GithubAPIProvider() {
    }
    GithubAPIProvider.prototype.ReposForUser = function (githubUser) {
        return new Promise(function (resolve, reject) {
            resolve([]);
        });
    };
    GithubAPIProvider.prototype.CommitHistory = function (guthubUser) {
        return new Promise(function (resolve, reject) {
            resolve([]);
        });
    };
    return GithubAPIProvider;
}());
export { GithubAPIProvider };
//# sourceMappingURL=GithubAPIProvider.js.map