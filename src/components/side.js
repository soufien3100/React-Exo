import React from 'react'
import SideMessage from './sideMessage'


export default function side({ color , message}) {
    return (
        <div className="side" style = {{ backgroundColor: color }}>
            <SideMessage message= { message } />
        </div>
    );
}
