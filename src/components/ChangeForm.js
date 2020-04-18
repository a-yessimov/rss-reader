import React from 'react'

export const ChangeForm = () => {
    return (
        <div className='jumbotron'>
            <form>
                <div className="form-group">
                    <label for="change-input">Изменить канал</label>
                    <input type="text" className="form-control" id="change-input" />
                </div>
                <button type="submit" className="btn btn-primary">Изменить</button>
            </form>
        </div>
    )
}