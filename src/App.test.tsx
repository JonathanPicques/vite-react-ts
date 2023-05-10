import {App} from './App';
import {expect, it} from 'vitest';
import {render, screen} from '@testing-library/react';

it('sample test', () => {
    render(<App />);
    expect(screen.getByRole('heading')).toHaveTextContent('Hello vite!');
});
