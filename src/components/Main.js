import React, { useState } from 'react';
import { Container } from 'rsuite';
import MainHeader from './MainHeader';
import MainContent from './MainContent';
import MainFooter from './MainFooter';

const Main = (props) => {
    const { containerStyle } = mainStyles
    const [state, setState] = useState({
        data:{},
        keywords: '',
        loading: false
    })

    const getData = (data, keywords) =>{
        setState({data, keywords})
    }

    const isLoading = (loading) =>{
        setState(prevState =>({...prevState, loading}))
    }

    console.log('main state: ', state.data)
    const { loading, data, keywords } = state
    return (
       <Container style={containerStyle}>
           <MainHeader getData={getData} isLoading={isLoading}/>
           <MainContent loading={loading}  data={data} keywords={keywords}/>
           <MainFooter/>
       </Container>
    );
}

const mainStyles = {
    containerStyle: {
        /*width: 'auto',
        height: 'auto',*/
        //border: '1px solid black',
        /*display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start'*/
    }
}

export default Main;