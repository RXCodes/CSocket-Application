// Behavior Data -- Compiled using CSocket -- //
var storage = {};

exports.Set_Variable = function (variable, scope, value) {
  try {
    storage[variable] = value;
  } catch (e) {
    return;
	}
	storage[variable] = value;
	return;
};
exports.Get_Variable_Value = function (variable, scope, default_value) {
  if (typeof storage[variable] !== 'undefined') {
	return {"Value": storage[variable]};}
	else
	{ 
    return {"Value": default_value};
	}
};
exports.Clear_Variables = function (scope) {
    storage = {};
    console.log("Cleared variables in: " + scope);
};
exports.Destroy_Variable = function (variable) {
  if (storage[variable] !== undefined) {
	delete storage[variable];
	return {"Success": true};
	} else
  return {"Success": false};
};
exports.Test_for_Variable = function (variable) {
  if (storage[variable] !== undefined) {
	return {"Exists":true};
	} else
  return {"Exists":false};
};

exports.Get_Variables = function () {
  return {"Variables":Object.keys(storage)};
};
exports.Get_Variable_Count = function () {
  return {"Count":Object.keys(storage).length};
};
exports.Add_Values = function (value, value2) {
    try {
    return {"Sum": value + value2};
    } catch (e) {return {"Sum": 0}}
    return {"Sum": value + value2};
};
exports.Subtract_Values = function (value, value2) {
    try {
    return {"Difference": value - value2};
    } catch (e) {return {"Difference": 0};}
    return {"Difference": value - value2};
};
exports.Multiply_Values = function (value, value2) {
    try {
    return {"Product": value * value2};
    } catch (e) {return {"Product": 0};}
    return {"Product": value * value2};
};
exports.Divide_Values = function (value, value2) {
    try {
    return {"Quotient": value / value2};
    } catch (e) {return {"Quotient": 0};}
    return {"Quotient": value / value2};
};
exports.Square_Root = function (value) {
    try {
    return {"Result": Math.sqrt(value)};
    } catch (e) {return {"Result": 0};}
    return {"Result": Math.sqrt(value)};
};
exports.Modulus = function (value, value2) {
    try {
    return {"Remainder": value % value2};
    } catch (e) {return {"Remainder": 0};}
    return {"Remainder": value % value2};
};
exports.Power = function (value, value2) {
    try {
    return {"Result": Math.pow(value, value2)};
    } catch (e) {return {"Result": 0};}
    return {"Result": Math.pow(value, value2)};
};
exports.Minimum = function (value, value2) {
    try {
    return {"Minimun": Math.min(value, value2)};
    } catch (e) {return {"Minimun": 0};}
    return {"Minimun": Math.min(value, value2)};
};
exports.Maximum = function (value, value2) {
    try {
    return {"Maximum": Math.max(value, value2)};
    } catch (e) {return {"Maximum": 0};}
    return {"Maximum": Math.max(value, value2)};
};
exports.Round_Number = function(num, method, scale) {
    if (method == "Round") {
  if(!("" + num).includes("e")) {
    return {"Result": +(Math.round(num + "e+" + scale)  + "e-" + scale)};
  } else {
    var arr = ("" + num).split("e");
    var sig = "";
    if(+arr[1] + scale > 0) {
      sig = "+";
    }
    return {"Result": +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale)};
    }
  }
  if (method == "Truncate") {
      return {"Result": Math.trunc(num)};
  }
  if (method == "Ceiling") {
      return {"Result": Math.ceil(num)};
  }
  if (method == "Floor") {
      return {"Result": Math.floor(num)};
  }
};
exports.Math_Function = function(num, method, mode) {
    if (method == "Sine") {
        if (mode == "Normal") {
            return {"Result":Math.sin(num)};
        } else {
            return {"Result":Math.sinh(num)};
        }
    }
    if (method == "Cosine") {
        if (mode == "Normal") {
            return {"Result":Math.cos(num)};
        } else {
            return {"Result":Math.cosh(num)};
        }
    }
    if (method == "Arcosine") {
        if (mode == "Normal") {
            return {"Result":Math.acos(num)};
        } else {
            return {"Result":Math.acosh(num)};
        }
    }
    if (method == "Arcsine") {
        if (mode == "Normal") {
            return {"Result":Math.asin(num)};
        } else {
            return {"Result":Math.asinh(num)};
        }
    }
    if (method == "Artangent") {
        if (mode == "Normal") {
            return {"Result":Math.atan(num)};
        } else {
            return {"Result":Math.atanh(num)};
        }
    }
    if (method == "Tangent") {
        if (mode == "Normal") {
            return {"Result":Math.tan(num)};
        } else {
            return {"Result":Math.tanh(num)};
        }
    }
};
exports.Random_Number = function(num, num2) {
    let m = Math.min(num, num2);
    let d = Math.max(num, num2) - m;
    return {"Result":(Math.random() * d) + m};
};
exports.Absolute_Value = function(num) {
    return {"Result":Math.abs(num)};
};
exports.Calculate_Distance = function(x, y, x2, y2) {
  let x_dif = x - x2;
  let y_dif = y - y2;
  return {"Distance":Math.sqrt(Math.pow(x_dif,2) + Math.pow(y_dif,2))};
};
exports.Calculate_Distance = function(x, y, x2, y2) {
  return {"Angle":Math.atan2(x2 - x, y2 - y) * 180 / Math.PI};
};
exports.Concatenate = function(target, include, target2) {
  let space = "";
  if (include) {
    space = " ";
}
  return {"Result": (target + space + target2)};
};
exports.Get_Type = function(target) {
  return {"Result": (typeof target)};
};
exports.Get_Length = function(target) {
  return {"Length": target.length};
};
exports.Trim = function(target, from, to) {
  return {"Substring": target.substring(from, to)};
};
exports.Contains = function(target, check, capital) {
  if (capital == "True") {
    target = target.toLowerCase();
    check = target.toLowerCase();
  }
  return {"Check": target.includes(check)};
};
exports.Replace = function(target, find, replace, capital) {
  if (capital == "True") {
    var searchMask = find;
    var regEx = new RegExp(searchMask, "ig");
    var replaceMask = replace;

    return {"Result": target.replace(regEx, replaceMask)};
  } else {
  return {"Result": target.replace(find, replace)};
  }
};
exports.Split = function(target, split, capital) {
  if (capital == "True") {
    var searchMask = split;
    var regEx = new RegExp(searchMask, "ig");
    var replaceMask = "&__%%split%%__";
    target = target.replace(regEx, replaceMask);
    return {"Result": target.split("&__%%split%%__")};
  } else {
  return {"Result": target.split(split)};
  }
};
exports.Is_String = function(target) {
  return {"Condition": (typeof target == "string")};
};
exports.Is_Number = function(target) {
  return {"Condition": (typeof target == "number")};
};
exports.Is_Boolean = function(target) {
  return {"Condition": (typeof target == "boolean")};
};
exports.Is_Dictionary = function(target) {
    if (typeof target == "object") {
  try{
        target.push("test");
     } catch(e){
       return {"Condition": true};
    }
  return {"Condition": false};
    }
      return {"Condition": false};
};
exports.Is_Array = function(target) {
  try{
        target.push("test");
     } catch(e){
       return {"Condition": false};
    }
  return {"Condition": true};
};
exports.File_Size = function(target, unit) {
  let size = 3939;
  let measure = ["B","KB","MB","GB","TB","PB","EB","ZB","YB"];
  let unitout = unit;
  let index = 0;
  if (unit == "Auto") {
  while (size >= 1024) {
    size /= 1024;
    index++;
  }
    unitout = measure[index];
} else {
  index = measure.indexOf(unit);
  unitout = unit;
  while (index >= 1) {
    size /= 1024;
    index--;
  }
}
  
  return {"Size": size, "Unit": unitout};
};
exports.To_String = function(target) {
  if (typeof target == "string") {
return {"Result": target, "Success": true};
}
  let x = JSON.stringify(target);
  if (target !== x) {
return {"Result": JSON.stringify(target), "Success": true};
}
  
return {"Result": "undefined", "Success": false};
};
exports.To_Number = function(target) {
  if (typeof target == "number") {
return {"Result": target, "Success": true};
}
  if (Number.isFinite(parseInt(target))) {
  return {"Result": parseInt(target), "Success": true};
  } else {
return {"Result": 0, "Success": false};
  }
};
exports.To_Array = function(target) {
  let array = true;
  try{
    let tmp = target;
    let n = JSON.stringify(target);
    tmp.push("object");
    target = JSON.parse(n);
     } catch(e){
       array = false;
    }
  if (array) {
return {"Success": true, "Result": target};
}
  try{
        JSON.parse(target);
     } catch(e){
       return {"Success": false, "Result": []};
    }
  try{
        JSON.parse(target).push("test");
     } catch(e){
       return {"Success": false, "Result": []};
    }
  return {"Success": true, "Result": JSON.parse(target)};
};
exports.To_Dictionary = function(target) {
  if (typeof target != "object") {
  let dict = false;
  try{
    let tmp = target;
    let n = JSON.stringify(target);
    tmp.push("object");
    target = JSON.parse(n);
     } catch(e){
       dict = true;
    }
  if (dict === false) {
return {"Success": false, "Result": {}};
}
  
  
  try{
      JSON.parse(target);
     } catch(e){
       return {"Success": false, "Result": {}};
    }
  try{
        JSON.parse(target).push("test");
     } catch(e){
       return {"Success": true, "Result": JSON.parse(target)};
    }
  }
  
   try{
        target.push("test");
     } catch(e){
       return {"Success": true, "Result": target};
    }
  return {"Success": false, "Result": {}};
  
};
exports.To_Boolean = function(target) {
  if (target == "false") {
    return {"Success":true, "Result":false};
}
  return {"Success":true, "Result":!!target};
};
exports.Modify_Dictionary = function (dictionary, action, key, value) {
  let dict = false;
  if (typeof dictionary == "object") {
    
    try{
        dictionary.push("test");
     } catch(e){
       dict = true;
    }
  
    if (dict == false) {
return {"Result":{},"Success":false};
}
    
    if (action == "Delete Key") {
      
      if (!(key in dictionary)) {
return {"Result":dictionary,"Success":false};
}
      
      try {
        delete dictionary[key];
      } catch (e) {
        return {"Result":{},"Success":false};
      }
      delete dictionary[key];
      return {"Result":dictionary,"Success":true};
    }
    else {
dictionary[key] = value;
      return {"Result":dictionary,"Success":true};
}
  }
  else {
    return {"Result":{},"Success":false};
  }
};
exports.Get_Dictionary_Value = function (dictionary, key, default_value) {
    let dict = false;
  if (typeof dictionary == "object") {
    
    try{
        dictionary.push("test");
     } catch(e){
       dict = true;
    }
  
    if (dict == false) {
return {"Result":{},"Success":false};
}
    if (key in dictionary) {
return {"Value":dictionary[key], "Success":true};
} else {
return {"Value":default_value, "Success":false};
}
    
  }
  return {"Value":default_value, "Success":false};
};
exports.Get_Dictionary_Keys = function (dictionary) {
  let dict = false;
  if (typeof dictionary == "object") {
    
    try{
        dictionary.push("test");
     } catch(e){
       dict = true;
    }
  
    if (dict == false) {
return {"Result":[],"Success":false};
}
    return {"Result":Object.keys(dictionary),"Success":true};
    
  }
  return {"Result":[],"Success":false};
};
exports.Check_for_Key = function (dictionary, key) {
  let dict = false;
  if (typeof dictionary == "object") {
    
    try{
        dictionary.push("test");
     } catch(e){
       dict = true;
    }
  
    if (dict == false) {
return {"Check":false,"Success":false};
}
    
    return {"Check":(key in dictionary),"Success":true};
  }
  return {"Check":false,"Success":false};
};
exports.Modify_Array = function (array, action, value, index) {
  try {

if (action == "Append Value") {
  array.push(value);
  return {"Result": array, "Success": true};
}

if (action == "Prepend Value") {
  array.unshift(value);
  return {"Result": array, "Success": true};
}

if (action == "Insert Value") {
  array.splice(index, 0, value);
  return {"Result": array, "Success": true};
}

if (action == "Replace Value") {
  array.splice(index, 1, value);
  return {"Result": array, "Success": true};
}

if (action == "Delete Value") {
  array.splice(index, 1);
  return {"Result": array, "Success": true};
}

if (action == "Delete First Value") {
  array.splice(0, 1);
  return {"Result": array, "Success": true};
}
    
if (action == "Delete Last Value") {
  array.splice(array.length - 1, 1);
  return {"Result": array, "Success": true};
}

} catch (e) {
  return {"Result": [], "Success": false};
  }
};
exports.Get_Array_Value = function (array, action, default_value, index) {
  try {

if (action == "Get First Value") {
  return {"Result": array[0], "Success": true};
}

if (action == "Get Last Value") {
  return {"Result": array[array.length - 1], "Success": true};
}
    
if (action == "Get Random Value") {
  return {"Result": array[Math.round(Math.random() * (array.length - 1))], "Success": true};
}
    
if (action == "Get Value at Index") {
  if (array[index] !== undefined) {
  return {"Result": array[index], "Success": true};
  }
  return {"Result": default_value, "Success": false};
}
    
} catch (e) {
  return {"Result": default_value, "Success": false};
  }
};
exports.Get_Array_Count = function (array) {
  if (array.length === undefined) {
return {"Success":false, "Count":0};
}
  return {"Success":true, "Count":array.length};
};
exports.Sort_Array = function (array, sort, order) {
  try {
  let a = array;
  if (sort == "Alphabetical") {
    a.sort();
  }
  if (sort == "Numeric") {
    a.sort(function(a, b){return a - b});
  }
  if (sort == "Shuffle") {
    for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
  }
  if (sort == "Reverse") {
    a.reverse();
  }
  
  if (sort == "Numeric" || sort == "Alphabetical") {
   if (order !== "Ascending") {
    a.reverse();
  }
}
  
  return {"Sorted Array": a, "Success": true};
  } catch (e) {
  return {"Sorted Array": [], "Success": false};
  }
};
Clear_JSON = function (array) {
  if (typeof array == "object") {
    try {
  array.push("value");
  return {"Success":true,"Empty JSON":[]};
} catch (e) {
return {"Success":true,"Empty JSON":{}};
}
  }
else {
    return {"Success":false,"Empty JSON":undefined};
  }
};
exports.Parse_JSON = function (json) {
  try {
    return {"Success":true,"Parsed JSON":JSON.parse(json)};
    } catch (e) {
      return {"Success":false,"Parsed JSON":undefined};
  }
};
exports.Stringify = function (json) {
  return {"Result":JSON.stringify(json), "Success":true};
};
exports.Get_URL = function () {
  return {"URL": window.location.href};
};
exports.Get_Host_Name = function () {
  return {"Host Name": window.location.hostname};
};
exports.Get_Path_Name = function () {
  return {"Path": window.location.pathname};
};
exports.Get_Protocol = function () {
  return {"Protocol": window.location.protocol};
};
exports.Get_Port = function () {
  return {"Port": window.location.port};
};
exports.Get_Time = function () {
  return {"Timestamp": Date.now() / 1000};
};
