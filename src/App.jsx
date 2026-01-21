// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
// import WelcomeMessage from "./components/WelcomeMessage";
// const App = () => {
//   return (
//     <div>
//     <Header/>
//     <Main/>
//     <Footer/>
//     <WelcomeMessage/>
//     </div>
//   )
// }
// export default App

// import React from 'react'

// const App = () => {
//   return (
//     <section id="section">
//       <h1>My Website</h1>
//       <article>
//         <h2>Welcome to React</h2>
//         <p className='text'>Paragraph Content</p>
//       </article>
//     </section>
//   )
// }

// export default App

// expression in jsx

// // const name= "Abhay";
// const age= 21;
// const multiply=(a,b)=>a*b;
// const specialclass = "anything-i-want from you";
// const WelcomeMessage = () => {
//   return (
//     <div>
//       <h1>Hello,{name}</h1>
//       <p>next year your age will be {age+1}</p>
//       <p>multiply will be:{multiply(2,13)}</p>
//       <p className={specialclass}>This is a special class</p>
//     </div>
//   )
// }

// export default WelcomeMessage

// import Greeting from "./components/Greeting"
// import ProductInfo from "./components/ProductInfo"
// const App = () => {
//   return (
//     <div>
//       <Greeting/>
//       <ProductInfo/>
//     </div>
//   )
// }

// export default App

// const App = () => {
//   const fruits = ["Apple", "Banana", "Orange"];
//   return (
//     <div>
//       <h1>My fruits List:</h1>
//       <ol>
//         {fruits.map(fruit=>
//           <li>{fruit}</li>
//         )}
//       </ol>
//     </div>
//   )
// }

// export default App

// import ProductList from "./components/ProductList"
// import UserList from "./components/UserList"
// const App = () => {
//   return (
//     <div>
//       {/* <UserList/> */}
//       <ProductList/>
//     </div>
//   )
// }

// export default App

// import User from "./components/User"
// const App = () => {

//   return (
//     <div>
//       <User img="https://avatars.githubusercontent.com/u/85052811?v=4" name="Abhay" age={22}/>
//       <User name= "Anmol" age={18}/>
//     </div>
//   )
// }

// export default App

// import User from "./components/User"
// const App = () => {
//   return (
//     <div>
//       <User name="Abhay" age= {23} />
//         <User name="Anma" age= {23} />

//     </div>
//   )
// }

// export default App

// import Card from "./components/Card"
// const App = () => {
//   return (
//     <div>
//        <Card>
//         <h1>My Card</h1>
//         <p>This is  some content for card 1</p>
//        </Card>
//        <Card>
//         <h1>My Card</h1>
//         <p>This is  some content for card 2</p>
//        </Card>
//        <Card>
//         <h1>My Card</h1>
//         <p>This is  some content for card 3</p>
//        </Card>

//     </div>
//   )
// }

// export default App

// import Greeting from './components/Greeting'
// import UserStatus from './components/UserStatus'
// import Weather from './components/Weather'

// const App = () => {
//   return (
//     <div>
//       {/* <Weather/> */}
//       {/* <UserStatus loggedIn={true} isAdmin={true}/> */}
//       <Greeting timeOfDay="hi"/>
//     </div>
//   )
// }

// export default App

// const App = () => {
//   const styles = {color: "white", backgroundColor:"teal", padding:"2rem"};
//   return (
//     <section>
//       <h1 style={styles}>Inline Style</h1>
//     </section>
//   )
// }

// export default App

// import "./index.css";
// import { FaShoppingCart } from "react-icons/fa";
// import { FaComputer } from "react-icons/fa6";
// const App = () => {
//   return (
//     <section>
//       <FaShoppingCart />
//       <FaComputer />
//     </section>
//   );
// };

// export default App;

// import IconComponent from './components/IconComponent'
// import ProfileCard from './components/ProfileCard'
// import StyledCard from './components/StyledCard'

// const App = () => {
//   return (
//     <div>
//      <StyledCard/>
//      <ProfileCard/>
//      <IconComponent/>
//     </div>
//   )
// }

// export default App

// const Button=() =>{
//   const handleClick = ()=> console.log(Math.round(Math.random()*10))
//   return <button onClick={handleClick}>Click</button>
// }

// const Copy = () => {
//   const copyHandler=()=>{
//     console.log("stop copying my content")
//   }
//   return (
//     <p onCopy={copyHandler}>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vel ipsa porro cum nemo quas doloribus voluptate illo sint quibusdam?
//     </p>
//   )
// }

// const Move = () => {
//   function moveHandler(){
//     alert('Mouse move event fired')
//     console.log("Mouse move event fired")
//   }
//   return (
//     <p onMouseMove={moveHandler}>
//       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus temporibus autem, inventore quibusdam asperiores tenetur porro laboriosam quo cumque iste.
//     </p>
//   )
// }

// import { useState } from "react"

// const App = () => {
//    const [count, setCount]= useState(0);
//    const decrement =()=> setCount(count-1);
//    const increment =()=> setCount(count+1);
//   return (
//    <section>
//     <h1>{count}</h1>
//     <button onClick={increment}>+</button>
//     <button onClick={decrement}>- </button>
//    </section>
//   )
// }

// export default App

// import { useState } from "react"

// const App = () => {
//   const [friends, setFriends]=useState(['Alex', 'John']);
//   const addOneFriend=()=>setFriends([...friends, "Riddhima"]);
//   const removeOneFriend=()=>setFriends(friends.filter((f)=>f!=="John"));
//   const updateOneFriend=()=>{
//     setFriends(friends.map((f)=>(f==="Alex" ? "Alex Smith":f)))
//   }
//   return (
//     <section>
//       {friends.map((f)=>(
//         <li key={Math.random()}>{f}</li>
//       ))}
//       <button onClick={addOneFriend}>Add New Friend</button>
//        <button onClick={removeOneFriend}>remove One Friend</button>
//        <button onClick={updateOneFriend}>Update one Friend</button>

//     </section>

//   )
// }

// export default App

import React, { useState } from "react";
import CourseList from "./components/CourseList";

const App = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("none");
  const courses = [
    { id: 1, title: "React Basics", category: "Frontend", price: 0 },
    { id: 2, title: "Advanced React", category: "Frontend", price: 999 },
    { id: 3, title: "Node.js Backend", category: "Backend", price: 799 },
    { id: 4, title: "Full Stack Web", category: "Full Stack", price: 1499 },
    { id: 5, title: "DSA with C++", category: "Programming", price: 0 },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "All" || course.category === category;

    return matchesSearch && matchesCategory;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortOrder == "az") {
      return a.title.localeCompare(b.title);
    }
    if (sortOrder == "za") {
      return b.title.localeCompare(a.title);
    }
    return 0;
  });

  
  return (
    <div className="min-h-screen flex justify-center pt-10 bg-gray-600 ">
      <div className="border px-6 py-6 mb-8 rounded-lg bg-white shadow w-full max-w-xl">
      <div className=" flex flex-col  items-center gap-4 pt-10 ">
      <input
        className="border px-4 py-2 rounded-lg"
        type="text"
        placeholder="enter the course"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        onClick={() => setSearch("")}
        className="mt-4 px-2 py-1 border rounded cursor-pointer"
      >
        Reset
      </button>

      <select
        className="border px-2 py-1 rounded cursor-pointer"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Full Stack">Full Stack</option>
        <option value="Programming">Programming</option>
      </select>

      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="border rounded px-2 py-1 cursor-pointer  "
      >
        <option value="none">No Sorting</option>
        <option value="az">Title A to Z</option>
        <option value="za">Title Z to A</option>
      </select>

      <p className="text-sm text-grey-600">
        Showing {filteredCourses.length} courses
      </p>
      <CourseList courses={sortedCourses} title="Available Courses"/>
    </div>
    </div>
    </div>
  );
};

export default App;
