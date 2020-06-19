import {validateUserChoice} from '/rock-paper-sis-refactored'
//import consts/ make modules?
//const validateUserChoice = require('./rock-paper-sis-refactored.js')

//wouldn't work, cant test: no return
describe('validateUserChoice', () => {
  it('Should take one of three strings as input: rock, paper, scissors', () => {
    expect(validateUserChoice('rock')).toBe(ROCK);
  });
  it('Should change string to uppercase', () => {
      expect(validateUserChoice()).toBe();
  });
  it('Should not accept any other data type', () => {
    expect(validateUserChoice()).toBe();
  });
  it('Should not accept spelling errors', () => {
      expect(validateUserChoice()).toBe();
  });
})
