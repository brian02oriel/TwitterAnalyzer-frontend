import React, { useState, useContext, useRef }from 'react';
import { /*stateContext,*/ dispatchContext, actions } from '../reducer/reducer'
import { Input, InputGroup, Icon, IconButton, Row, Col, Notification } from 'rsuite';

import axios from 'axios'

const MainForm = () => {
    const { inputContainerStyle, inputStyle, inputGroupButton, iconButtonStyle } = mainFormStyles
    
    const inputRef = useRef(null)
    const [localState, setState] = useState({
        keywords: "",
        disableInput: false
    })
    //const state = useContext(stateContext)
    const dispatch = useContext(dispatchContext)

    const NotificationHandler = (funcName, title, message) =>{
        Notification[funcName]({
            title,
            description: <small> {message} </small>
        })
        const myref = inputRef.current
        const jsref = document.getElementById('test')
        console.log({myref, jsref})
        jsref.focus()

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let regex = new RegExp('^([a-zA-Z-.0-9]){1,20}')
        console.log(regex.test(localState.keywords))
        if(localState.keywords !== ''){
            if(regex.test(localState.keywords)){
                const API_URL = process.env.REACT_APP_FLASK_API
                setState({disableInput: true})
                dispatch({ type: actions.searchTweets, payload: localState.keywords})
                dispatch({ type: actions.isLoading, payload: ''}) // Equivalent to dispatch(createAction(actions.isLoading, '')
                axios.post(API_URL, {
                    keywords: localState.keywords
                },{
                    headers:{
                        'Content-Type': 'application/json'
                    }
                }).then(function(res){
                    let data = res.data
                    setState({disableInput: false})
                    setState({keywords: ''})
                    dispatch({ type: actions.isLoading, payload: ''})
                    dispatch({ type: actions.findTweets, payload: data})
                }).catch(function(error){
                    console.log(error)
                    dispatch({ type: actions.isLoading, payload: ''})
                    setState({disableInput: false})
                    NotificationHandler('error', 'Ha ocurrido un problema', 'Su búsqueda no ha podido ser completada, por favor intente más tarde.')
                })
            } else {
    
                NotificationHandler('warning', 'Ha ocurrido un problema', 'La palabra clave que ha introducido usa caracteres inválidos, favor corrija su búsqueda.')
            }
        } else {
            NotificationHandler('warning', 'Ha ocurrido un problema', 'No ha introducido ninguna palabra, favor introdúzcala e intente nuevamente.')
        }
        
        
    }

    const handleInputChange = (data, e) =>{
        // data is equal to e.target.value
        const { value } = e.target
        setState({keywords: value})
    }

    return (
        <Row style={inputContainerStyle}>
        <Col>
            <form onSubmit={handleSubmit}>
                <InputGroup inside>
                    <Input id="test" autoFocus ref={inputRef} size="lg" style={inputStyle} name="keywords" value={localState.keywords || ''} onChange={handleInputChange} disabled={localState.disableInput || false} placeholder='Escriba su búsqueda...' maxLength="20"/>
                    <InputGroup.Button style={inputGroupButton}>
                        <IconButton type="submit" icon ={<Icon icon="search" />} circle style={iconButtonStyle} disabled={localState.disableInput || false}/>
                    </InputGroup.Button>
                </InputGroup>
            </form>
        </Col>
    </Row>
    );
};

const mainFormStyles = {

    inputContainerStyle:{
        padding:'2%',
        margin: '2%'
    },

    inputStyle:{
        borderRadius: '50px'
    },

    inputGroupButton:{
        padding: '0',
        borderRadius: '50px',
        margin: '3px'
    },

    iconButtonStyle: {
        padding: '1px'
    }
}

export default MainForm;