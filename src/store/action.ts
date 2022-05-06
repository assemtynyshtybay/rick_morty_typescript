import {SEARCH_CHARACTERS, FETCH_CHARACTERS, MALE_CHECKBOX, FEMALE_CHECKBOX, ALIVE_CHECKBOX,DEAD_CHECKBOX,UNKNOWN_CHECKBOX } from './types'  

import axios from 'axios'
import { Dispatch } from 'redux'
import { Characters, CharsAction } from './reducers/fetchData'
export enum CharActionType {
  SEARCH_CHARACTERS = "SEARCH_CHARACTERS",
  FETCH_CHARS_SUCCESS = "SUCCESS_CHARS",
  FETCH_CHARACTERS = "FETCH_CHARACTERS",
  MALE_CHECKBOX= "MALE_CHECKBOX",
  FEMALE_CHECKBOX="FEMALE_CHECKBOX",
  ALIVE_CHECKBOX = "ALIVE_CHECKBOX",
  DEAD_CHECKBOX = "DEAD_CHECKBOX",
  UNKNOWN_CHECKBOX = "UNKNOWN_CHECKBOX"
}

export type fetchCharacters ={
    type: CharActionType.FETCH_CHARACTERS
}

export type findCharacters = {
   type: CharActionType.SEARCH_CHARACTERS,
   payload: string
}
export type FetchCharSuccessAction = {
  type: CharActionType.FETCH_CHARS_SUCCESS,
  payload: CharsAction
}
export type maleCheckbox = {
    type: CharActionType.MALE_CHECKBOX,
    payload: string
    
}
export type femaleCheckbox = {
  type: CharActionType.FEMALE_CHECKBOX,
  payload: string
  
}
export type aliveCheckbox = {
  type: CharActionType.ALIVE_CHECKBOX,
  payload: string
  
}

export type deadCheckbox = {
  type: CharActionType.DEAD_CHECKBOX,
  payload: string
  
}
export type unknownCheckbox = {
  type: CharActionType.UNKNOWN_CHECKBOX,
  payload: string
}

export type CharAction =fetchCharacters | findCharacters | maleCheckbox | femaleCheckbox | aliveCheckbox | deadCheckbox | unknownCheckbox | FetchCharSuccessAction
