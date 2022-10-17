import React, { useState, useEffect } from 'react'
import LoadingFile from './LoadingFile'
import GalleryFile from './GalleryFile'

const MainFile = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    const getUser = async () => {
        try {
            setLoading(false)
            const apiData = await fetch("http://jsonplaceholder.typicode.com/albums/1/photos");
            setData(await apiData.json());
        } catch (error) {
            setLoading(false)
            console.log("my error is" + error);
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    if (loading) {
        return <LoadingFile />
    }

    return (
        <div>
            <GalleryFile data={data} />
        </div>
    )
}

export default MainFile
