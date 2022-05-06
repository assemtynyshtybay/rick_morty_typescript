import axios from 'axios'
import { Dispatch } from 'redux'
import {CharAction, CharActionType } from '../action'
type Location = {
  name: string
}

export type Characters = {
  id: number
  name: string
  image: string
  status: string
  gender: string
  location: Location
}

export type CharsAction = {
  characters: Characters[],
  isLoading: boolean
}

export const fetchCharacters = () => (dispatch: Dispatch<CharAction>) => {
    dispatch({ type: CharActionType.FETCH_CHARACTERS })
    axios.get<CharsAction>('https://rickandmortyapi.com/api/character').then((res) => {
        setTimeout(() => {
            dispatch({ type: CharActionType.FETCH_CHARS_SUCCESS, payload: res.data })
        },1000)
    })
}