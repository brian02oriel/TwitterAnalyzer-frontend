import React from 'react';
import ReactWordcloud from 'react-wordcloud'

const WordCloudComponent = ({data}) => {
    
    return (
        <ReactWordcloud
            words={data}
            callbacks ={{
                getWordColor: ({value}) =>{
                    if(value > 50){
                        return '#1da1f2'
                    } else if(value >= 20 && value <= 50){
                        return '#002e63'
                    } else {
                        return '#aab8c2'
                    }
                }
            }}
            options = {{
                fontSizes: [16, 80]
            }}
        />
    );
};

export default WordCloudComponent;