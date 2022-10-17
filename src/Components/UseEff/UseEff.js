import React, { useEffect, useState } from 'react'

const useEff = () => {
    const [store, setStore] = useState([])
    const getUser = async () => {
        const apiData = await fetch('http://jsonplaceholder.typicode.com/albums/1/photos');
        setStore(await apiData.json());
    }

    console.log(store);

    useEffect(() => {
        getUser();
    }, []);
    return (
        <>
            <div className="row">
                {
                    store.map((curElem) => {
                        return (
                            <div className="col-md-6">
                                <div className="card mb-3">
                                    <div key={curElem.id} className="row g-0">
                                        <div className="col-md-4">
                                            <img src={"https://via.placeholder.com/150/92c952"} className="img-fluid rounded-start" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{curElem.title}</h5>
                                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>













        </>
    )
}

export default useEff
