import React from 'react';


const Page = (props) => {
    let url;
    try { 
        url = new URL(props.src) 
    } catch (e) {
        url = null
    }

    if (url) {
        return <iframe title="This is a unique title" src={props.src} frameBorder="0"></iframe>
    } else {
        return <p>Wrong URL</p>
    }
}


export default Page;
