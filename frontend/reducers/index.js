let mockResults = [
    {
        up: 12,
        down: 4,
        total: 8,
        link: "magnet:?xt.1=urn:sha1:YNCKHTQCWBTRNJIV4WNAE52SJUQCZO5C&xt.2=urn:sha1:TXGCZQTH26NL6OUQAJJPFALHG2LTGBC7"
    },
    {
        up: 21,
        down: 19,
        total: 2,
        link: "ipfs:2FQmRA3NWM82ZGynMbYzAgYTSXCVM14Wx1RZ8fKP42G6gjgj"
    }
]

let mockEntry = {
    title: "Bitcoin: A Peer-to-Peer Electronic Cash System",
    results: mockResults
}

const mockUser = {
    username: 'liamz',
    reputation: 1200
}

const initial = {
    query: "Bitcoin: A Peer-to-Peer Electronic Cash System",
    user: mockUser
}

function user(state = {}, action) {
    return mockUser
}

import { LOAD_NEWEST_ENTRIES_COMPLETE } from '../actions/registry'


function misc(state = { newestEntries: [] }, action) {
    switch(action.type) { 
        case LOAD_NEWEST_ENTRIES_COMPLETE:
            return {
                ...state,
                newestEntries: action.results
            }
        default:
            return state
    }
}

import entry from './entry'

import { combineReducers } from 'redux'

export default combineReducers({
    user,
    entry,
    misc
})