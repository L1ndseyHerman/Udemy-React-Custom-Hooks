import {useState, useEffect} from 'react';
//  This is a custom hook! Can name it whatever you want, but needs a "use" (in the method, not the file.)
//  "use" is a keyword! Don't use for a normal function!

//  This is default code saying that it's expecting a forwards param.
//  If none given, the default is true.
const useCounter = (forwards = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
          if (forwards) {
            setCounter((prevCounter) => prevCounter + 1);
          } else {
            setCounter((prevCounter) => prevCounter - 1);             
          }
      }, 1000);
  
      return () => clearInterval(interval);
    }, [forwards]);

    return counter;
};

export default useCounter;