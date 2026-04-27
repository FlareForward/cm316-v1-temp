// Landing test. cycle_n=oneshot fix-forward.
import { describe, it, expect } from 'vitest';
import HomePage from '../app/page';

describe('Landing Page', () => {
  it('exports a default Home component', () => {
    expect(typeof HomePage).toBe('function');
  });
});
