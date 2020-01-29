import JWT from './jwt.service'


test('echo', () => {
    const val = new JWT('abc', 'abc');
    expect(val).toBe(({} as any));
});

