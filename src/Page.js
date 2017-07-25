import React from 'react';


const Page = (props) => {
    return <iframe title="This is a unique title" src={props.src} frameBorder="0"></iframe>  
}


export default Page;
