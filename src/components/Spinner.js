import React from 'react';
import { TailSpin } from 'react-loader-spinner'

function Spinner({ message }) {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full">
            <TailSpin
                height="80"
                width="80"
                color="#00BFFF"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />

            <p className="text-lg text-center px-2">{message}</p>
        </div>
    );
}

export default Spinner;