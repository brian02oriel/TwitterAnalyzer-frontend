import React, { useState, useContext }from 'react';
import { stateContext, dispatchContext, actions } from '../reducer/reducer'
import { Input, InputGroup, Icon, IconButton, Row, Col } from 'rsuite';
import axios from 'axios'

const MainForm = () => {
    const { inputContainerStyle, inputStyle, inputGroupButton, iconButtonStyle } = mainFormStyles
    const [localState, setState] = useState({
        keywords: "",
        disableInput: false
    })
    const state = useContext(stateContext)
    const dispatch = useContext(dispatchContext)

    const handleSubmit = (e) => {
        e.preventDefault()
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
        })
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
                    <Input size="lg" style={inputStyle} name="keywords" value={localState.keywords} onChange={handleInputChange} disabled={localState.disableInput}/>
                    <InputGroup.Button style={inputGroupButton}>
                        <IconButton type="submit" icon ={<Icon icon="search" />} circle style={iconButtonStyle} disabled={localState.disableInput}/>
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