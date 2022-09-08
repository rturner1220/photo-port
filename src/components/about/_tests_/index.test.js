import React from "react";
import { render, cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
    // First Test
    it('renders', () => {
    });

    // Second Test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        // render About
        expect(asFragment()).toMatchSnapshot();

    });
})