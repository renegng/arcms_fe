export const STEP_ONE_INPUTS = 'STEP_ONE_INPUTS'


export const setStepOneInputs = (data) => ({
    type: STEP_ONE_INPUTS,
    inputName: data.target.name,
    value: data.target.value,
})
