/// <reference types="jest" />

import { GithubAPIProvider } from "./GithubAPIProvider";
import { GithubSummary } from "./IGithubDataProvider";

describe('GithubApiProvider', () => {
  
  let apiProvider: GithubAPIProvider = new GithubAPIProvider();


  expect.extend({
    HasCommits(received: GithubSummary) {
      return {
        pass: received.commits && received.commits.length > 0,
        message: "No commits returned",
        then: null,
        catch: null
      };
    }
  });
  
  // Test for checking if it is working
  it('Should do something', () => {
      expect(true).toBeTruthy();
  });
  
  it('Should return commits for a known account', (done) => {
    expect.assertions(1);
    expect(apiProvider.UserData('joon').then((data) => data.commits.length)).resolves.toBeGreaterThan(0).then(done);
  });

  it('Should return repos for a known account', (done) => {
    expect.assertions(1);
    expect(apiProvider.UserData('joon').then((data) => data.repos.length)).resolves.toBeGreaterThan(0).then(done);
  })

});
