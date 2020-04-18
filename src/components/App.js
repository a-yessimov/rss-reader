import React from 'react'
import { Sidebar } from './Sidebar'
import { AddForm } from './AddForm'

export const App = () => {

    return (
        <div className='container pt-5'>
            <div className='row'>
                <div className='col-4'>
                    <Sidebar />
                </div>
                <div className='col-8'>
                    <AddForm />
                </div>
            </div>
        </div>
    )
}