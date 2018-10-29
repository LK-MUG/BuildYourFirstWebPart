/// <reference types="jest" />
import { GithubAPIProvider } from "./GithubAPIProvider";
describe('GithubApiProvider', function () {
    var apiProvider = new GithubAPIProvider();
    // Test for checking if it is working
    it('Should return events for a known account', function (done) {
        expect.assertions(1);
        expect(apiProvider.UserData('joon').then(function (data) { return data.events.length; })).resolves.toBeGreaterThan(0).then(done);
    });
    it('Should return repos for a known account', function (done) {
        expect.assertions(1);
        expect(apiProvider.UserData('joon').then(function (data) { return data.repos.length; })).resolves.toBeGreaterThan(0).then(done);
    });
    it('Should return empty repos for an unknown acount', function (done) {
        expect.assertions(1);
        expect(apiProvider.UserData('2323j_232-sds').then(function (data) { return data.repos.length; })).resolves.toBeLessThanOrEqual(0).then(done);
    });
    it('Should return empty events for an unknown acount', function (done) {
        expect.assertions(1);
        expect(apiProvider.UserData('2323j_232-sds').then(function (data) { return data.events.length; })).resolves.toBeLessThanOrEqual(0).then(done);
    });
});
//# sourceMappingURL=GithubAPIProvider.test.js.map