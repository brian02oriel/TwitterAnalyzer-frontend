import React, {useState }from 'react';
import { Input, InputGroup, Icon, IconButton, Row, Col } from 'rsuite';
import axios from 'axios'

const MainForm = () => {
    const { inputContainerStyle, inputStyle, inputGroupButton, iconButtonStyle } = mainFormStyles
    const [state, setState] = useState({
        keywords: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(state)
        axios.post('http://127.0.0.1:5000/api/twitter', {
            keywords: state.keywords
        }).then(function(res){
            console.log(res)
        }).catch(function(error){
            console.log(error)
        })
    }

    const handleInputChange = (data, e) =>{
        // data is equal to e.target.value
        const { name, value } = e.target
        setState(prevState => ({...prevState, [name]: value}))
    }


    console.log("State: ", state)

    return (
        <Row style={inputContainerStyle}>
        <Col>
            <form onSubmit={handleSubmit}>
                <InputGroup inside>
                    <Input size="lg" style={inputStyle} name="keywords" value={state.keywords} onChange={handleInputChange}/>
                    <InputGroup.Button style={inputGroupButton}>
                        <IconButton type="submit" icon ={<Icon icon="search" />} circle style={iconButtonStyle}/>
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