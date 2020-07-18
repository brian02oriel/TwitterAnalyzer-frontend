import React, { useRef, Suspense, lazy } from 'react';
import { Container, Placeholder } from 'rsuite';
import MainContent from './MainContent';
const MainHeader = lazy(() => import('./MainHeader'))
const MainFooter = lazy(() => import('./MainFooter'))

const Main = (props) => {
    const { containerStyle } = mainStyles

    const topScrollRef = useRef(null)

    return (
       <Container style={containerStyle}>
            <div ref={topScrollRef} />
            <Suspense fallback={<Placeholder.Graph active style={{ width: '100vw', height: '100vh'}}/>}>
                <MainHeader/>
            </Suspense>
            <MainContent topScrollRef={topScrollRef}/>
            <Suspense fallback={<Placeholder.Paragraph> </Placeholder.Paragraph>}>
                <MainFooter/>
            </Suspense>
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