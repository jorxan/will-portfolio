import React from 'react'

function Version(versionType, versionTitle, versionListClass, {listContent}, image) {


 

    return (
        <div className={versionType}>
            <div>
                <h1>
                    {versionTitle}
                </h1>
            </div>
            <div className={versionListClass}>
                <ul className="version__list">
                {listContent.map(listContent => <li>{listContent.content}</li>)}
                </ul>
            </div>
            <div className="v1__image">
                <img src={image} alt=""/>
            </div>
        </div>
    )
}

export default Version
