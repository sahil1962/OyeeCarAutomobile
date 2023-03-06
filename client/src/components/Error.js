import React from 'react'

export default function Error({error}) {
    return (
        <div class="alert alert-danger" role="alert">
            {error}
        </div>
    )
}
