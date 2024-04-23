

function EyesOnMe() {

function onFocus() {
    console.log("Good!")
}

function blur() {
    console.log("Hey! Eyes on me!")
}

    return (
        <div>
            <button onFocus={onFocus} onBlur={blur}>
                Eyes on me
            </button>
        </div>
    )
}

export default EyesOnMe;