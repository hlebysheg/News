//test data
const BTN_ABOUT_US = 'about/BTN-CLICK';//btn for test action
//text for page "about us " it can by import by some txt
let initial = {
    aboutText:"PLACEHOLDER PLACEHOLDER PLACEHOLDER PLACEHOLDER PLACEHOLDER PLACEHOLDER PLACEHOLDER PLACEHOLDER" +
        "PLACEHOLDER PLACEHOLDER PLACEHOLDER PLACEHOLDER PLACEHOLDER PLACEHOLDER PLACEHOLDERPLACEHOLDERPLACEHOLDER",
};

export const aboutReducer = (state = initial, action) => {

    if (action.type === BTN_ABOUT_US) {
        return {
            ...state,
            aboutText:action.aboutText,
        }
    }
    return state
}

//action creator's
export const aboutBtnAC = (aboutText) => {
    return {
        type: BTN_ABOUT_US,
        aboutText,
    }
}