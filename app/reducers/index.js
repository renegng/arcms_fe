/* eslint-disable no-case-declarations */
import { combineReducers } from "redux"
import axios from 'axios'


//action types
const FOUND_ORGS = "FOUND_ORGS"
const ADD_ORG = "ADD_ORG"


//action creators
const foundOrgs = (orgs) => {
  return {type: FOUND_ORGS, orgs}
}

const addedOrg = (org) => {
  return {
    type: ADD_ORG,
    org
  }
}




//thunks
export const searchOrgs = (orgParam) => async (dispatch) => {
  try {
    console.log(typeof orgParam)
    const {data} = await axios.get('/api/organizations', {params: {orgParam}})
  dispatch(foundOrgs(data))
  } catch (error) {
    console.error(error)
  }

}

export const addOrg = (newOrg) => async (dispatch) => {
  try {
    const {data} = await axios.post('/api/organizations', newOrg)
    dispatch(addedOrg(data))
  } catch (error) {
    console.error(error)
  }

}



//reducer

const orgInitState = {
  organizations: [],
  searchResults: []
}


const organizationsReducer = (state = orgInitState, action) => {
  switch (action.type) {
    case FOUND_ORGS:
      return {...state, searchResults: [...action.orgs]}

    case ADD_ORG:
      const newOrg = action.org
      return {...state, organizations: [...state.organizations, newOrg]}


    default:
      return state

  }

}




const rootReducer = combineReducers({organizationsReducer})

export default rootReducer
