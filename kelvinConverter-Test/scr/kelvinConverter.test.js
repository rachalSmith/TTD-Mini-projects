const kelvinConverter = require('./kelvinConverter.js')

describe('kelvin Converter', () => {
  it('Should take in kelvin and return fahrenheit', () => {
    expect(kelvinConverter(0)).toBe(-460);
  });
  it('Should not return any other data type', () => {
    expect(kelvinConverter('0')).toBe(null);
    expect(kelvinConverter({})).toBe(null);
  });
});
