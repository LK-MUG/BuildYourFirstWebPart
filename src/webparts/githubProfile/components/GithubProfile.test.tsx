/// <reference types="mocha" />
/// <reference types="sinon" />

import * as React from 'react';
import { assert, expect } from 'chai';
import { mount, configure } from 'enzyme';
import GithubProfile from './GithubProfile';
import * as Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

declare const sinon;

describe('<GithubProfile />', () => {
    const descTxt = "TestingThisOneOut";
    let componentDidMountSpy;
    let renderedElement;

    before(() => {
        componentDidMountSpy = sinon.spy(GithubProfile.prototype, 'componentDidMount');
        renderedElement = mount(<GithubProfile githubUserName="joon" userFullName="Joon du Randt"  />);
    });

    after(() => {
        componentDidMountSpy.restore();
    });

     // Test for checking if it is working
     it('Should do something', () => {
        assert.ok(true);
    });
});
