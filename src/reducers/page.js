import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_FAIL,
} from '../constants/Page'

const initialState = {
  year: 2018,
  photos: [],
  isFetching: false,
  error: '',
}

export function pageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTOS_REQUEST:
      return { ...state, year: action.payload, isFetching: true, error: '' }

    case GET_PHOTOS_SUCCESS:
      return { ...state, photos: action.payload, isFetching: false, error: '' }

    case GET_PHOTOS_FAIL:
      return {
        ...state,
        photos: [],
        error: action.payload.message,
        isFetching: false,
      }

    default:
      return state
  }
}
