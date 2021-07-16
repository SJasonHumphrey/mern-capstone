import React from 'react'

//calculates speed by WPM (words typed / minute)
const Speed = (props) => {

    // check if symbols and seconds are not = 0
    //if true, return speed. else don't do anything
    if(props.symbols !== 0 && props.sec !== 0){
        // divide number of words / number of minutes
        const wpm = (props.symbols/5) / (props.sec/60)

        return (

            <div>{Math.round(wpm)} WPM</div>

        )
    }

    return null

}

export default Speed
