import React from 'react'
import { Sidebar } from './Sidebar'
import { AddForm } from './AddForm'
import { ChangeForm } from './ChangeForm'
import { Chanel } from './Chanel'

export const App = () => {

    return (
        <div className='container pt-5'>
            <div className='row'>
                <div className='col-4'>
                    <Sidebar />
                </div>
                <div className='col-8'>
                    <Chanel />
                    <AddForm />
                    <ChangeForm />
                </div>
            </div>
        </div>
    )
}