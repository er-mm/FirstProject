import React, { useState, useEffect } from 'react';

export function Hooks() {
  // Declare a new state variable, which we'll call "count"

  const obj = { a: 1, b: 2 };
  const [count, setCount] = useState(obj);
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    console.log('in use effect 1');
    localStorage.setItem('title', `You clicked ${count.a} times`);
  });

  console.log('count', count);

  const [name, setName] = useState('Mary');

  // 2. Use an effect for persisting the form
  // if(name == '') {
  useEffect(function persistForm() {
    console.log('in use effect 2');
    localStorage.setItem('Name', name);
  });
  // }

  // 3. Use the surname state variable
  const [surname, setSurname] = useState('Poppins');

  // 4. Use an effect for updating the title
  useEffect(function updateTitle() {
    console.log('in use effect 3');
    localStorage.setItem('SurName', surname);
    document.title = localStorage.getItem('Name') + ' ' + surname + ' ' + localStorage.getItem('title');
  });
  return (
    <React.Fragment>
      <div>
        <p>{`You clicked a = ${count.a} and b = ${count.b} times`}</p>
        <button onClick={() => setCount({ ...count, a: count.a + 1 })}>
          {`Click to inc a`}
        </button>
        <button onClick={() => setCount({ ...count, b: count.b + 1 })}>
          {`Click to inc b`}
        </button>
      </div>
      <div>
        <p>{`Current Name = ${name} and surname = ${surname}`}</p>
        <button onClick={() => setName('Mary' + count.a)}>
          {`Click to change Name`}
        </button>
      </div>
    </React.Fragment>
  );
}
