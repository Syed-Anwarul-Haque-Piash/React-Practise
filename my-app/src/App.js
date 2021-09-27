import React, {useState,useEffect} from 'react';
//import logo from './logo.svg';
import './App.css';

function App() { 
  const [nayoks,setNayoks]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setNayoks(data))
  })
  const heroes=['Jeet','Dev','Riaz','Salman']
  const bat=[
    {name:'SS',price:'$150'},
    {name:'TON',price:'$200'},
    {name:'MRF',price:'$250'},
    {name:'Puma',price:'$300'}
  ]
  const student=[
    {name:'Piash',id:'1630444',cgpa:'2.2'},
    {name:'Subed',id:'1630346',cgpa:'2.3'},
    {name:'Azim',id:'1620639',cgpa:'2.5'}
  ]
  const product=[
    {name:'Photoshop',price:'$99.99'},
    {name:'Illustrator',price:'$69.99'},
    {name:'PDF',price:'$16.99'},
    {name:'Special',price:'$3.99'}
  ]
    
  
  return (
    <div className="App">
      <Nayoks></Nayoks>
      <h1>Ami</h1>
      <header className="App-header">
       <p>Think in a react way</p>
       <Users></Users>
       <Counter></Counter>
       <ul>
       {
         heroes.map(hero=><li>{hero}</li>)
       } 
       {
         student.map(student=><li>{student.name} {student.id} {student.cgpa}</li>)
       }
       </ul>
       
       {
         product.map(p=><Product p={p}></Product>)
       }
       <Student student={student[0]}></Student>
       <Student student={student[1]}></Student>
       <Student student={student[2]}></Student>
       <Bat name={bat[0].name}price={bat[0].price}></Bat>
       <Bat name={bat[1].name}price={bat[1].price}></Bat>
       <Bat name={bat[2].name}price={bat[2].price}></Bat>
       <Bat name={bat[2].name}price={bat[3].price}></Bat>
        <Friends name="Sakib" age='26' home='Dhaka'></Friends>
        <Friends name="Fuad" age='25' home='Mymensingh'></Friends>
        <Friends name="Subed" age='24' home='Badda'></Friends>
        <Friends name="Noman" age='27' home='Jamalpur'></Friends>
        
      </header>
    </div>
    
  );
}
function Nayoks(){
  return(
    <div>

    </div>
  )
}
 function Users(){
   const [users,setUsers]=useState([])
   useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res=>res.json())
     .then(data=>setUsers(data))
   })
   return(
     <div>
       <h1>Users:{users.length}</h1>
       {
         users.map(user=><li>{user.name}</li>)
       }
     </div>
   )
 }   
function Counter(){
  const cStyle={
    border:'1px solid grey',
    borderRadius:'5px',
    backgroundColor:'lightgrey',
    margin:'10px',
    padding:'10px',
    width:'250px'
  }
  const[count,setCount]=useState(0)
  // const increase=()=>setCount(count+1)
  // const decrease=()=>setCount(count-1)
  return(
    <div style={cStyle}>
      <h1>Number of :{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      <Display movie={count}></Display>
      <Display movie={count}></Display>
      <Display movie={count}></Display>
      <Display movie={count}></Display>
    </div>
  )
}
function Display(props){
  const [mov,setMov]=useState(0)
  const inc=()=>setMov(mov+1)
  return(
    <div>
      <h1>Sakibs acted:{mov} </h1>
      <button onClick={inc}>Acted</button>
    </div>
  )
}
function Product(props){
  const pStyle={
    border:'1px solid grey',
    borderRadius:'5px',
    backgroundColor:'lightgrey',
    margin:'10px',
    padding:'10px',
    width:'250px'
  }
  return(
    <div style={pStyle}>
      <h3>Name:{props.p.name}</h3>
      <h1>Price:{props.p.price}</h1>
      <button>CLick Me</button>
    </div>
  );
}
function Student(props){
  return(
    <div>
      <h1>Name:{props.student.name}</h1>
      <h2>id:{props.student.id}</h2>
      <h3>CGPA:{props.student.cgpa}</h3>
    </div>
  );
}
function Bat(props){
  return(
    <div>
      <h1>Name:{props.name}</h1>
      <h2>Price:{props.price}</h2>
    </div>
  );
}
function Friends(props){
  const style={
    border:'1px solid red'
  }
  return(
    <div style={style}>
      <h1>Name:{props.name}</h1>
      <h2>Age:{props.age}</h2>
      <h3>Home:{props.home}</h3>
    </div>
  );
}

  





  



  

  
  


  



export default App;
