const formatUserQuestion = require('./magicEightball.js');
const magicEightball = require('./magicEightball.js');


describe('formatUserQuestion', () => {
  it('Should return a string with user name and question to upper case', () => {
    expect(formatUserQuestion('Name', 'String')).toBe('NAME', 'STRING');
