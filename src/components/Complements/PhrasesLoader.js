import quotes from '../../assets/loaderData/loaderData.json'
import React, { useState, useEffect } from 'react';
import { Animation } from 'rsuite';
const { Fade } = Animation;

const PhrasesLoader = () => {
    const [state, setState] = useState({
        quote: '',
        show: false
    })

    const timeout = (ms, index, show) =>{
        return new Promise(resolve => {
            setTimeout(()=>{
                resolve(
                    setState({
                        quote: quotes[index],
                        show
                    })
                )
            }, ms)
        })
    }
    
    

    useEffect(()=>{
        const manageAnimation = async () =>{
            for(let i=0; i<10; i++){
                let index = Math.floor(Math.random() * (quotes.length - 1))
                console.log('getting in')
                await timeout(2000, index, true)
                console.log('getting out')
                await timeout(10000, index, false)
                console.log('loop')
            }
    
        }
        manageAnimation()
    }, [])

  
    //sleep()
    console.log('render', {state})
    return (
        <div>
             <Fade in={state.show} transitionAppear={true} timeout={1000}>
                 <div style={{textAlign: 'center'}}>
                        <blockquote>
                            <p>{state.quote.phrase}</p>
                            <br/>
                            <footer style={{fontSize: '1.1vmax'}}>—{state.quote.author}</footer>
                        </blockquote>
                 </div>
            </Fade>
        </div>
    );
};

export default PhrasesLoader;