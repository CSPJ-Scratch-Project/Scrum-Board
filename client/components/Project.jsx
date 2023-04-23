import * as React from 'react';

export const Project = (props) => {
    console.log('props.id: ', props.id)
    return(<div id = {props.id} style={{ 
        width: '400px', 
        height: '100px', 
        border: '2px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center' 
    }}>
        Project {props.id}
    </div>)
}