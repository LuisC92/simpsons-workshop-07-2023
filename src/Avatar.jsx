/* eslint-disable react/prop-types */

const Avatar = ({firstName, image}) =>{
    return(
        <div>
            <img src={image} alt={`avatar pic of ${firstName}`}/>
            <h1>{`${firstName}`}</h1>
            {/* <h1>{firstName} {lastName}</h1> */}
        </div>
    )
}

export default Avatar