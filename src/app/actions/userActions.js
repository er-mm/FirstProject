export function setName(name){
  return{  type:"NAME",
    payload:name
};
};
export function setAge(age){
    return{  
    type:"AGE",
      payload:age
  };
  };