import HotelDetail from '@/components/HotelDetailModule/HotelDetail';
import React from 'react';

function Page(props) {
    const { name } = props.params;

    return (
        <>
        <HotelDetail name={name}  prop={props}/>
            {/* <h1>{`${name}`}</h1> */}
        </>
    );
}

export default Page;
