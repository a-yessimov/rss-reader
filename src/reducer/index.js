
const initialState = {
    urlsList: [
        'https://vringe.com/export/rss/news.xml',
        'https://vringe.com/export/rss/exclusive.xml',
        'http://vringe.com/export/rss/mma.xml'
    ]
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}