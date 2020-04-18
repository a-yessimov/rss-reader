import React, { useState, useEffect } from 'react'
import Feed from 'rss-to-json'

export const ChanelLink = ({ url }) => {

    const [isFetching, setIsFetching] = useState(true)
    const [data, setData] = useState({})

    useEffect(() => {
        Feed.load('https://cors-anywhere.herokuapp.com/' + url, function (err, rss) {
            setData(rss)
            setIsFetching(false)
        });
    }, [])

    if (isFetching) {
        return (
            <li className="list-group-item">
                <h5>Загрузка</h5>
            </li>
        )
    }

    return (
        <li className="list-group-item">
            <h5>{data.title}</h5>
            <p className="m-0 text-truncate">{data.description}</p>
        </li>
    )
}