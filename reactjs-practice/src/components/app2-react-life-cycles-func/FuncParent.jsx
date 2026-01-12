import React, { useEffect, useLayoutEffect } from 'react'

const FuncParent = () => {
    // 1. Mounting Phase (Component Did Mount)
    // Runs once after the component is rendered for the first time.
    useEffect(()=>{
        console.log("Component mounted");
        // API call, subscriptions, timers
    },[])
    // 🟢 Equivalent to: componentDidMount

    // 2. Updating Phase (Component Did Update)
    // Runs when specific state or props change.
    useEffect(()=>{

    },[dependencyChanges]);  // runs when `dependencyChanges` changes


    // 3. Unmounting Phase (Component Will Unmount)
    // Cleanup function inside useEffect
    // Runs when the component is removed from the DOM.
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Running...");
        }, 1000);

        return () => {
            clearInterval(timer);
            console.log("Component unmounted");
        };
    }, []);


    // 4. Mount + Update (Combined)
    // If no dependency array is provided, the effect runs after every render.
    useEffect(() => {
        console.log("Runs on every render");
    });
    // 🟢 Equivalent to: componentDidMount & componentDidUpdate

    // 5. Before DOM Paint (Advanced)
    // useLayoutEffect
    // Runs synchronously after DOM updates but before painting.
    useLayoutEffect(() => {
        console.log("DOM updated, before paint");
    });
    // 🟢 Used for:
    //     Measuring DOM elements
    //     Preventing flicker
  return (
    <div>FuncParent</div>
  )
}

export default FuncParent