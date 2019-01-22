# ReactJsPractise
ReactJs Practise from scratch

*Use command to make package.json file

npm init

*To install different node modules to run react use these commands  : 

npm install react react-dom --save
npm install webpack webpack-dev-server babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-2 --save-dev


make a folder src --- inside it make a folder app 
also inside a folder make a file index .html with html5 body

now create a file webpack.config.js in root directory

REDUX is a standalone, 
we can use it with other frameworks also.

to start with redux, install redux pkg
imort method createStore.. 
create store takes two argumants 
1. reducer (it takes the action and dispatch anywhere in our app and then perform different opertiona like changes state).
2. any object, array,integer,value...

create reducer (method) --> it takes state and action and gives back state. 

to get all the properties of something in one way is using "..." (spread operator)) 

here comes middleware in redux. 
middleware is use between antions and reducers. 
means,once action is dispatch  before going to reducers middleware comes
in picture and tells what type of action is called 
and then the reduces do its work.

to see the logs of actions ,  
redux-logger is used 
it has a property createLogger which automatically show 
logs of the actions

=======================================ECMA SCRIPT 6 TUTORIAL wih CODE SNIPPETS==========================================================

You can try it here : 
https://jsbin.com/wucucupoja/edit?js,console

we need a compiler (babel), 
loader(webpack), server(loghtweight)

http://kangax.github.io/compat-table/es6/
in this table we will see which es6 topics are supported in which browsers.

1. Syntax changes  :
 * let & const
      * let alows us to use block scoping
             let name = "MM";
                if(true){
                let name = "Mayank";
                console.log(name);
                }
                console.log(name);
            
        * const doen't make the variable constant, it just holds the pointer in the memory
                const AGES = [27, 29, 31];
                AGES.push(27)
                console.log(AGES);
                const obj = {age :27};
                obj.age = 30;
                console.log(obj);
    * hosting with let and const
        hosting with let and const doesnt work like var
            age = 27;
            console.log(age);
            var age
        we have to declare variable first then assign.
---------------------------------------------------------------------------------------------------
2. Fat Arrow Functions : 
    * previous approach : 
        function abc(){
        console.log("hello");
        }
        abc();   
    * new approach (fat arrow)
            var abc = () => {
            console.log("hello");
            }
            abc(); 

            // () == these are the arguments which passes to functions,
            // => fat arrow
            // {} function body

            if I have one line of code I write in this way also : 
        *  var abc = () => console.log("hello");
                abc();

        * passing arguments :
                var abc = (a,b) => {
                return a+ b; 
                };
                console.log(abc(2,5));
        
        * if I have one argument I dont need paranthesis : 
                var abc = a =>  a+ 8;
                console.log(abc(2));

        * another example : 
            setTimeout(() => console.log("Hello"),2000);
        
        * fat arrow with this keyword : 
            var fn2 = ()=> console.log(this); 
            it keeps the context in which the function is defined
                var button = document.querySelector('button');
                var fn2 = ()=> console.log(this);
                button.addEventListener('click',fn2);
        * Default parameters : 
            in prev approach,  we can write as : 
                function abc(first, second=10 ){
                return first == second;
                    }
                console.log(abc(10));
---------------------------------------------------------------------------------------------------

3. Object Literal Extensions
    let name = "Mayank";
    let age = 23;
    let ageField = "age";

    let obj = {
    name,
    age,
    [ageField]:27,
    greet(){
        console.log(this.name+','+this.age);
    }
    };

    console.log(obj);
    obj.greet();
    console.log(obj.age);
    console.log(obj["age"]);
    console.log(obj[ageField]);
---------------------------------------------------------------------------------------------------

4. the rest operator (...) // rest params
            //let numbers = [1,2,3,4,5];
            function add(...num){
            console.log(num);
            let result = 0;
            for(let i=0; i< num.length; i++){
                result += num[i];
            }
            return result;
            }
            console.log(add(1,2,3,4)); //gives 10
            console.log(add(1,2,3,"4")); // gives 64
            //console.log(add(numbers));

    // sometimes we dont know how many params we are passing and how we handleit. 
    so we use rest (...) params it converts it into the array and then we can use it.. 

---------------------------------------------------------------------------------------------------

5. spread operator (...)
    its just like rest operator but its totally opp of that ,  we can use it in different places. 
        let numbers = [1,2,3,4,5];
        console.log(numbers);
        console.log(...numbers);
        console.log(Math.max(...numbers));
        //now here it spreads the numbers to find the maximum value.. 
        // in revious example ... binds or makes an array 
        // one thing used in different places with different meanings. 

---------------------------------------------------------------------------------------------------
    
6. For-of-loop
        it gives the exact value of the elements of array
            let numbers = [1,2,"3",4,5];
            for(let number of numbers){
            console.log(number);
            }

---------------------------------------------------------------------------------------------------

7. For-In-Loop
        it gives the index of the elements of array
            let numbers = [1,2,"3",4,5];
            for(let number in numbers){
            console.log(number);
            }

---------------------------------------------------------------------------------------------------

8. Template Literals
    these are basically strings with extra features : 
        uses backtik
        used to write MUTILINE strings
                let name = "Mayank";
                let desc = `
                Hello All! , 
                I am ${name + ' !!!'},
                can also write it as it is...
                I am \${name + ' !!!'},
                calci ${2+6}
                `;
                console.log(desc);

---------------------------------------------------------------------------------------------------

9. Destructuring Arrays
    let numbers = [1,2,3,4,5];
        // prev approach
        //let a=numbers[0];
        //let b=numbers[1];

        //new approach
        //let [a,b,c,d] = numbers;

            //different way -- only last numbers are rest
            //let [a,b,...c] = numbers;
            //console.log(a,b,c);
            //console.log(numbers);
            //console.log(a);
            //console.log(b);
            //console.log(c);

                //see the difference in next two ex.
                /*let [a,b,c,d,e,f] = numbers;
                console.log(f);
                console.log(numbers);
                */

                /*//there the value of f is undefined. 
                //here we can assign the value but prev value which is in the array remains same
                let [a="MM",b,c,d,e,f="Mayank"] = numbers;
                console.log(a);
                console.log(f);
                console.log(numbers);
                */

                    /*
                    //it can be used to sum up variables 
                    let a=5;
                    let b=10;

                    //swapping is easy - we first destructure it and then assign again
                    [b,a]=[a,b];
                    console.log(a);
                    console.log(b);
                    */

        /* //immediate destructring
        let [a, ,c]=numbers;
        console.log(a,c)
        */

                    //slice - slices the array and retrives the original array
                    /*let newSlicedNumber = numbers.slice(2,4);
                    console.log(newSlicedNumber);
                    console.log(numbers);
                    */
                    //splice - slice the array and also sices the original array
                    /*let newSlicedNumber = numbers.splice(1,3);
                    console.log(newSlicedNumber);
                    console.log(numbers);
                    */

---------------------------------------------------------------------------------------------------

10. Destructuring Objects : 
        let obj ={
            name: "MM",
            age : "23",
            greet: function(){
                console.log("hello greet");
                }
            }

            /*
            let{name,age} = obj;
            console.log(name);
            console.log(age);
            greet();
            */

                /*//like in array we cannt left space -let{name, ,greet} 
                //because we are already refrencing this by name not by position
                //we have to wrtie this
                let{name,greet} = obj;
                console.log(name);
                greet();*/

        //we can also use this like
        //here we change the name if greet or make alias of that
        //now greet will wont work here 
        let{name,greet:hey} = obj;
        console.log(name);
        hey();


        //console.log(obj);

Note : in Array : we take the position for destructring
    while in Object : we take the property names for destructuring