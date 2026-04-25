import React from 'react'

const SensorPlatform = () => {
    return (
        <div className='sensor-platform container-size mt-12'>
            <h2 className='text-2xl text-black font-bold'>Sensor Platform</h2>

            <div className="experimental-setup">
                <h3 className='text-1xl text-black font-bold mt-4'>Experimental Setup</h3>
                <img src="/My-Paper/image/experimental-setup.png" alt="Experimental Setup" className="mx-auto mt-8" />
                <p className='text-center'>
                    Figure 3: Overview of the experimental environment.
                </p>
            </div>

            <div className="sensor">
                <h3 className='text-1xl text-black font-bold mt-4'>ESP32 Communication Reliability</h3>
                <img src="/My-Paper/image/sensor.png" alt="sensor-platform" className="mx-auto mt-8" />
                <p className='text-center'>
                    Figure 4: Overview of the experimental hardware setup, highlighting ESP32 modules, laptops, USB connections, and monitoring devices.
                </p>
            </div>

            <div className="architecture">
                <h3></h3>
                <img src="/My-Paper/image/architecture.png" alt="architecture" className="mx-auto mt-8" />
                <p className='text-center'>
                    Figure 5: Software architecture and data flow between ESP32 devices, laptops, backend processing, and the React Native frontend.
                </p>
            </div>
        </div>
    )
}

export default SensorPlatform