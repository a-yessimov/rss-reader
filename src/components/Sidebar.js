import React from 'react'
import '../styles/Sidebar.scss'
import { useSelector } from 'react-redux'
import { ChanelLink } from './ChanelLink'

export const Sidebar = () => {

    const urlsList = useSelector(state => state.urlsList)

    return (
        <ul className="list-group">
            <li className="list-group-item">
                <button type="button" className="btn btn-primary">Primary</button>
            </li>
            {urlsList.map((item, i) => <ChanelLink key={i} url={item}/>)}
        </ul>
    )
}