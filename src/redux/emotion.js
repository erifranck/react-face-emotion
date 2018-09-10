const SAVE = 'apiface/settings/SAVE'

const INITIAL_STATE = {
  data: {}
}

export default function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SAVE:
      return {
        ...state,
        data: action.data
      }
    default:
      return state
  }
}

export const saveSettings = (data) => ({
  type: SAVE,
  data
})
