// import React from 'react'

// const User = (props) => {
//   return (
//     <div>
//       <img src={props.img} width={200}/>
//       <h2>{props.name}</h2>
//       <p>Age:{props.age}</p>

//     </div>
//   )
// }

// export default User



const User = ({name, age}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      
    </div>
  )
}

export default User
