import React, {useState} from 'react'

function Tour({id,image,info,name,price,removeEle}) {

    const [readMore,setReadMore] = useState(false);
    
    return (
        <div className="tour">
            <img src={image} alt={name}/>
            <section>
                <h3>{name}</h3>
                <h3>${price}</h3>
            </section>
            <p>{readMore?info:`${info.substring(0,200)}...`}
                <button className="btn" onClick={()=> setReadMore(!readMore)}>{readMore?"Read Less":"Read More"}</button>
            </p>
            <button className="btn-m" onClick={() => removeEle(id)}> <strong>Remove</strong> </button>
        </div>
    )
}

export default Tour
