import PropTypes from 'prop-types';
import Profilecss from './Profilecss'
export const Profile =({fullName ,bio, profession, imagesrc, handleName}) =>{
  return (
    <div className='Profile'>
         <h2>My fullName is {fullName}</h2> 
            <h3>My bio is {bio}</h3> 
            <h4>My profession is {profession}</h4>
            <h5>My Picture is {imagesrc}</h5>
            <button  onClick={handleName} >sumbit</button> 
          </div>
      
  
  )
}

Profile.defaultProps={
    fullName: "Mehdi",
    age : 26
}

Profile.propTypes = {
    fullName: PropTypes.string
}

