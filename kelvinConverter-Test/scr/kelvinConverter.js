const kelvinConverter = (kelvin) => {
  if (typeof kelvin !== 'number'){
    return null;
  }
return Math.floor((kelvin -273.15)*9/5+32)
};

//const hello = () => 'hello';

module.exports = kelvinConverter;
