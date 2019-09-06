export default function reducer(state, action) {
    console.log('running dispatch', action.type)
    switch(action.type) {
        case 'UPDATE_SCROLL_Y':
            return { ...state, scrollYPos: action.payload}
        case 'UPDATE_WIDTH':
            return { ...state, screenWidth: action.payload}
        case 'UPDATE_MOBILE':
            return { ...state, mobile: action.payload }
        default:
            return state
    }
}