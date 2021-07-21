import React from 'react';

const Searchresult = (props) =>{
const imgs = `https://source.unsplash.com/600x400/?${props.name}`;
    return (
<>
<div >

<img src = { imgs } alt="img" />
</div>

</>

    );

};

export default Searchresult;