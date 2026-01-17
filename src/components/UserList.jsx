

const UserList = () => {
  const users=[
    {id:1 , name: "Abhay", age:25},
    {id:2, name: "Anmol", age: 18},
    {id:3, name:"Raunak", age:18}
  ];
  return (
    <div>
      <h1>List of users is as follows:</h1>
      {users.map(user=>(
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>Age: {user.age}</p>

        </div>

      ))}


    </div>
  )
}

export default UserList
