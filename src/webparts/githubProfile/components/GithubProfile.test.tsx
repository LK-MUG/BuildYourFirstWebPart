/// <reference types="jest" />
/// <reference types="sinon" />

import * as React from 'react';
import { assert, expect } from 'chai';
import { mount, configure } from 'enzyme';
import GithubProfile from './GithubProfile';
import * as Adapter from 'enzyme-adapter-react-15';

import * as sinon from 'sinon';

configure({ adapter: new Adapter() });

describe('<GithubProfile />', () => {
    const descTxt = "TestingThisOneOut";
    let componentDidMountSpy: sinon.SinonSpy;
    let renderedElement;

    beforeEach(() => {
        componentDidMountSpy = sinon.spy(GithubProfile.prototype, 'componentDidMount');
        renderedElement = mount(<GithubProfile githubUserName="joon" userFullName="Joon du Randt" />);
    });

    afterEach(() => {
        componentDidMountSpy.restore();
    });

     // Test for checking if it is working
     it('Should do something', () => {
        assert.ok(true);
    });
});
