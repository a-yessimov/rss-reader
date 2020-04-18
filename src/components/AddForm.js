import React from 'react'

export const AddForm = () => {
    return (
        <div className='jumbotron'>
            <form>
                <div className="form-group">
                    <label for="add-input">Добавить новый канал</label>
                    <input type="text" className="form-control" id="add-input" />
                </div>
                <button type="submit" className="btn btn-primary">Добавить</button>
            </form>
        </div>
    )
}