import React from "react";
//We need react to enable the components to function properly so we can test them.
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
//import the component we're testing
import About from "..";

afterEach(cleanup);
// This will ensure that after each test, we won't have any leftover memory data that could give us false results.

// Then we'll use the describe function to declare the component we're testing, by adding the following code:
describe('About component', () => {

    //first test
    // it function
    // string that declares what is being tested
    it ('renders', () => {
        //call back function that runs the test
        render(<About />);
    });

    //second testing
    it ('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
    
        expect(asFragment()).toMatchSnapshot();
    })
})