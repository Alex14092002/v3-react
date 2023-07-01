// core/type_checker.js
function type_check_v1(variable, type) {
    if (variable === null) {
      return variable === null && type === 'null';
    }
    if (type === 'null') {
      return variable === null;
    } else if (type === 'array') {
      return Array.isArray(variable);
    } else if (type === 'object') {
      if (Array.isArray(variable)) return false;
      if (!isNaN(variable) && typeof variable === 'number') return false;
      return true;
    } else {
      return typeof variable === type;
    }
  }
  
  function type_check_v2(variable, conf) {
    if (Object.prototype.hasOwnProperty.call(conf, 'type')) {
      if (!type_check_v1(variable, conf.type)) {
        return false;
      }
    }
    if (Object.prototype.hasOwnProperty.call(conf, 'value')) {
      if (JSON.stringify(variable) !== JSON.stringify(conf.value)) {
        return false;
      }
    }
    if (Object.prototype.hasOwnProperty.call(conf, 'enum')) {
      let found;
      for (let i = 0; i < conf.enum.length; i++) {
        found = JSON.stringify(conf.enum[i]) === JSON.stringify(variable);
        if (found) {
          break;
        }
      }
      if (!found) {
        return false;
      }
    }
    return true;
  }
  
  function type_check(variable, conf) {
    if (!type_check_v2(variable, conf)) {
      return false;
    }
    if (Object.prototype.hasOwnProperty.call(conf, 'properties')) {
      let properties = Object.keys(conf.properties);
      console.log(typeof properties);
      let varProperties = Object.keys(variable);
      console.log(typeof varProperties);
      if (JSON.stringify(properties) !== JSON.stringify(varProperties)) {
        return false;
      }
      let value = variable[properties[0]];
      let propertyConf = conf.properties[properties[0]];
      if (!type_check_v2(value, propertyConf)) {
        return false;
      }
    }
    return true;
  }
  
  export { type_check };
  