import React from 'react'
import documents from '@/data/documents'

const Header = () => {
    const doc = documents[0]

    return (
        <div className='text-black text-center'>
            <div className="title">

            </div>

            <div className="info">
                <div className="author">

                </div>

                <div className="educate">

                </div>

                <div className="link-related">
                    <button className='bg-black text-white border-6 rounded-4xl px-5 py-2'>Paper</button>
                    <button className='bg-black text-white border-6 rounded-4xl px-5 py-2'>arXiv</button>
                    <button className='bg-black text-white border-6 rounded-4xl px-5 py-2'>Video</button>
                    <button className='bg-black text-white border-6 rounded-4xl px-5 py-2'>Data</button>
                </div>
            </div>
            <div className="comment">
                <span>Accepted by NeurIPS 2023 Datasets and Benchmarks Track</span>
            </div>
        </div>
    )
}

export default Header
