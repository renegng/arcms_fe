import { STEP_ONE_INPUTS } from "../Actions/stepOne";

const initialState = {
    siteName: '',
    siteDesc: '',
    siteMotto: '',
    instName: '',
    domainName: '',
    hamIcon: {},
    favicon: {},
    primaryLogo: {},
}


export const stepOneReducer = (state = initialState, action) => {
    switch (action.type) {
        case STEP_ONE_INPUTS: 
        return {
            ...state,
            [action.inputName]: action.value
        }

        default:
            return state
    }
}
