const BUTTON_SUBMIT = 'BUTTON_SUBMIT';


function button_submit(arg) {
    return  {
        type: BUTTON_SUBMIT,
        arg
    }
}

const boundButtonSubmit = text => dispatch(button_submit(text));