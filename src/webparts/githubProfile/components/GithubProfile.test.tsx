/// <reference types="jest" />
/// <reference types="sinon" />

import * as React from 'react';
import { assert, expect } from 'chai';
import { mount, configure, ReactWrapper } from 'enzyme';
import GithubProfile from './GithubProfile';
import * as Adapter from 'enzyme-adapter-react-15';
import {GithubAPIProvider} from '../../../integration/GithubAPIProvider';

import * as sinon from 'sinon';

configure({ adapter: new Adapter() });

describe('<GithubProfile />', () => {
    let componentDidMountSpy: sinon.SinonSpy;
    let renderedElement;

    beforeEach(() => {
        componentDidMountSpy = sinon.spy(GithubProfile.prototype, 'componentDidMount');
        renderedElement = mount(<GithubProfile githubUserName="joon" userFullName="Joon du Randt" githubDataProvider= {new GithubAPIProvider()} />);
    });

    afterEach(() => {
        componentDidMountSpy.restore();
    });

    // Test for checking if it is working
    it('Should do something', () => {
        assert.ok(true);
    });

    it('Should render user name', () => {
        // define the css selector
        let cssSelector: string = '#header';

        // find the element using css selector
        const headerText = renderedElement.find(cssSelector).text();
        expect(headerText).to.be.equal('Github information for Joon du Randt');
    });
});
