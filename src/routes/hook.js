import React, { useState } from 'react'

// https://www.youtube.com/watch?v=O6P86uwfdR0  14:50



//Hooks can be used only in function components. not class components
//cannot put inside of functions, loops, if statements
//THEY HAVE TO BE AT THE TOP LEVEL OF THE FUNCTION

function countInitial() {
    console.log('run function')
    return 4
}

function App() {

    // const arr = useState(4) 
    //use state throws back array of values 
    //it returns an array with 2 values (current state & function that allow to update that current state)

    // const [count, setCount] = useState(countInitial) // this way it renders everytime we update state
    const [state, setState] = useState({ cuenta: 4, theme: " CHOOSE THEME" }) //en vez de tener un solo state hook podemos tener varios en un objeto
    
    //PODEMOS TENER HOOKS POR SEPARADO Y ES CONVENIENTE PARA QUE HAGA MERGE COMODAMENTE SIN SOBREESCRIBIRSE
/*
    const [count, setCount] = useState(4)
    const [theme, setTheme] = useState('blue')
  */  
    ////////////////////////////////////////////////
    
    const cuenta = state.cuenta
    const theme = state.theme

    const [count, setCount] = useState(() => {
        console.log('run function')
        return 4;
    }) // this way it renders only once


    /* function decrementCount() {
         setCount(count - 1)
     } */ //   --> this would be incorrect because we are editing the original value  and not the element we receive

   /* function decrementCount() {
        setState(previousCount => {
            return{ cuenta: previousCount.cuenta - 1 }  //esto sobreescribe todo el objeto, por tanto borra propiedad theme
        })
    } */ 

    //Si no quiero que sobreescriba, hago spread de previousCount y sobreescribo solo la propiedad que requiero
    function decrementCount() {
        setState(previousCount => {
            return{ ...previousCount, cuenta: previousCount.cuenta - 1 }  
        })
    }
    function incrementCount() {
        setState(previousCount => { 
            return{ ...previousCount, cuenta: previousCount.cuenta + 1 }
        })
    }

    function blueTheme(){
        setState(previousTheme => {
            return{ ...previousTheme, theme: " BLUE THEME"}
        })
    }

    function redTheme(){
        setState(previousTheme => {
            return{ ...previousTheme, theme: " RED THEME"}
        })
    }
    return (
        <div>
            <button onClick={decrementCount}>-</button>
            <span>{cuenta}</span>
            <span>{theme}</span>
            <button onClick={incrementCount}>+</button>
            <button onClick={blueTheme}>Blue theme</button>
            <button onClick={redTheme}>Red theme</button>

        </div>
    );
}

export default App;