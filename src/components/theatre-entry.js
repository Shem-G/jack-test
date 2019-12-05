import React from 'react'

const TheatreEntry = props => {
    const Entry = props.entryData.map((entry, key) => {
        let id = key
        let image = '../images/' + entry.image
        let content = entry.content

        console.log(entry)

        return (
            <div className="row" id={id}>
                <div className="col">
                    <img src={image} alt={image} />
                </div>
                <div className="col d-sm-none d-md-inline">
                    <p>{content}</p>
                </div>
            </div>

        )
    })

    return <div>{Entry}</div>
}

export default TheatreEntry