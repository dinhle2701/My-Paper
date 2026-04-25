import React from 'react'

const Experiment = () => {
    return (
        <div className='experiment container-size'>

            {/* 5.1 data collection framework */}
            <div className="data-collection-framework">

            </div>

            {/* 5.1.1 experimental-setup */}
            <div className="experimental-setup mt-20">
                <h2 className='text-3xl text-black font-bold'>Experimental Setup</h2>
                <img src="My-Paper/image/experimental-setup.png" alt="Experimental Setup" className="mx-auto mt-4" />
            </div>

            {/* 5.1.2 Communication Reliability */}
            <div className="communication-reliability">
                <h2 className='text-4xl text-black font-bold'>Communication Reliability</h2>
                <img src="My-Paper/image/communication-reliability.png" alt="Communication Reliability" className="mx-auto mt-4" />
            </div>

            {/* 5.1.3. WiVi32-Count Dataset */}
            <div className="wiVi32-count-dataset">
                <h2 className='text-3xl text-black font-bold'>WiVi32-Count Dataset</h2>
                <img src="My-Paper/image/wivi32-count-dataset.png" alt="WiVi32-Count Dataset" className="mx-auto mt-4" />
            </div>

        </div>
    )
}

export default Experiment
