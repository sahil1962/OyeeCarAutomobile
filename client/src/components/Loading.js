import React from 'react'

export default function Loading() {
    return (
        <div className='text-center'>
            <button class="btn" type="button" disabled>
            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>

                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{height:"80px", width:"80px"}}></span>
                <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
            </button>
        </div>
    )
}
