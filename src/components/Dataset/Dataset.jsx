import React, { useState, useRef, useEffect } from 'react'

const base = "/PRoFENCH"

const datasets = [
    {
        id: 1,
        name: "Counting People IR",
        wifi: `${base}/datasets/cv/one-people.mp4`,
        csi: `${base}/datasets/cv/one-people-csi.mp4`,
    },
    {
        id: 2,
        name: "Counting People RGB",
        wifi: `${base}/datasets/cv/two-people.mp4`,
        csi: `${base}/datasets/cv/two-people-csi.mp4`,
    },
    {
        id: 3,
        name: "Human Activity RGB",
        wifi: `${base}/datasets/cv/three-people.mp4`,
        csi: `${base}/datasets/cv/three-people-csi.mp4`,
    },
]

const DatasetTabs = () => {
    const [activeTab, setActiveTab] = useState(1)

    const wifiRef = useRef(null)
    const csiRef = useRef(null)

    const current = datasets.find(d => d.id === activeTab)

    useEffect(() => {
        const forcePlay = (video) => {
            if (!video) return

            video.muted = true
            video.defaultMuted = true
            video.autoplay = true
            video.loop = true
            video.playsInline = true
            video.currentTime = 0

            const playVideo = () => {
                video.play().catch(() => { })
            }

            playVideo()

            video.addEventListener("pause", playVideo)
            video.addEventListener("ended", () => {
                video.currentTime = 0
                playVideo()
            })

            document.addEventListener("visibilitychange", () => {
                if (!document.hidden) playVideo()
            })

            window.addEventListener("focus", playVideo)
        }

        setTimeout(() => {
            forcePlay(wifiRef.current)
            forcePlay(csiRef.current)
        }, 200)

    }, [activeTab])

    return (
        <div className='dataset container-size text-black'>
            <h2 className='text-2xl text-black font-bold mt-12 text-center'>
                Dataset
            </h2>

            <div className="max-w-[1000px] mx-auto mt-10 text-center">

                {/* Tabs */}
                <div className="flex gap-4 border-b mb-6 justify-center">
                    {datasets.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`pb-2 px-10 font-medium transition 
                            hover:cursor-pointer hover:text-gray-900
                            ${activeTab === tab.id
                                    ? 'border-b-2 border-black text-black'
                                    : 'text-gray-500'
                                }`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>

                {current && (
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold mb-4">
                            {current.name}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* WiFi */}
                            <div>
                                <p className="mb-2 font-medium">WiFi</p>
                                <video
                                    key={current.wifi}
                                    ref={wifiRef}
                                    src={current.wifi}
                                    muted
                                    autoPlay
                                    loop
                                    playsInline
                                    preload="auto"
                                    controls={false}
                                    className="w-full h-[260px] object-cover rounded-lg shadow bg-black"
                                />
                            </div>

                            {/* CSI */}
                            <div>
                                <p className="mb-2 font-medium">CSI</p>
                                <video
                                    key={current.csi}
                                    ref={csiRef}
                                    src={current.csi}
                                    muted
                                    autoPlay
                                    loop
                                    playsInline
                                    preload="auto"
                                    controls={false}
                                    className="w-full h-[260px] object-cover rounded-lg shadow bg-black"
                                />
                            </div>

                        </div>

                        <p className="text-sm text-gray-500 mt-4">
                            {current.description}
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default DatasetTabs