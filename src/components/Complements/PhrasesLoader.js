import quotes from '../../assets/loaderData/loaderData.json'
import React, { useState, useEffect } from 'react';
import { Animation } from 'rsuite';
const { Fade } = Animation;

const PhrasesLoader = () => {
    const [state, setState] = useState({
        quote: '',
        author: '',
        show: false
    })

    const timeout = (ms, index, show) =>{
        return new Promise(resolve => {
            setTimeout(()=>{
                resolve(
                    setState({
                        quote: quotes[index].phrase,
                        author: quotes[index].author,
                        show
                    })
                )
            }, ms)
        })
    }
    
    

    useEffect(()=>{
        const manageAnimation = async () =>{
            while(true){
                let index = Math.floor(Math.random() * (quotes.length - 1))
                await timeout(2000, index, true)
                await timeout(10000, index, false)
            }
    
        }
        manageAnimation()
    }, [])

    return (
        <div>
             <Fade in={state.show} transitionAppear={true} timeout={1000}>
                 <div style={{textAlign: 'center'}}>
                        <blockquote>
                            <p>"{state.quote}"</p>
                            <br/>
                            <footer style={{fontSize: '1.5vmax'}}>—{state.author}</footer>
                        </blockquote>
                 </div>
            </Fade>
        </div>
    );
};

export default PhrasesLoader;