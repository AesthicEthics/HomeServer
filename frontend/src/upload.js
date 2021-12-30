import React, {useRef} from 'react'

const fileupload = () => {
    const fileInput=useRef(null)
    const handlefile = (e) => {
        onFSelect(e.target.files[0])
    }

    return (
        <div> className="file" 
            <input> type="file" onChange={handlefile}</input>
            <button onClick={e => fileInput.current && fileInput.current.click()} className='btn btn-primary'></button>
        </div>
    )
}