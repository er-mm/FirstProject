export function setAdd(addnum){
    return{  type:"ADD",
      payload:addnum
  };
  };
  export function setSubtract(subnum){
      return{  
      type:"SUBTRACT",
        payload:subnum
    };
    };