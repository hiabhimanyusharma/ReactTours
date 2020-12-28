import React from 'react'
import Tour from './Tour'

function Tours({tours,removeEle}) {
    return (
        <div className="tours">
            {tours.map((tour)=>{
                return <Tour key={tour.id} {...tour} removeEle={removeEle}/>
            })}
        </div>
    );
}

export default Tours
