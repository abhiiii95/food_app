import React from 'react';

function Page({ params }) {
    const { name } = params;

    return (
        <div>
            <h1>{`${name}`}</h1>
        </div>
    );
}

export default Page;
