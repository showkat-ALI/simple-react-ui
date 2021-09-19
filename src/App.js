import logo from './logo.svg';
import './App.css';

function App() {
  const intro =[
    {name:"showkat",intarest:"web dev"},
    {name:"Dip",intarest:"Guta guti"},
    {name:"Alif",intarest:"Practical electronics"},
    {name:"showab",intarest:"book selling"},
  ]
  return (
    <div className="App">
      {
      intro.map(person=> <Identity name = {person.name} intarest = {person.intarest}></Identity>)
    }

    </div>
  );
}
// function Intro(props){
//   const student ={
//     backgroundColor:"darkblue",
//     color: "white",
//     padding: "20px",
//     margin: "10px",
//     border: "2px solid green",
//     borderRadius:"20px"


//   }
//   return(
//   <div style={{backgroundColor:"darkblue",
//   color: "white",
//   padding: "20px",
//   margin: "10px",
//   border: "2px solid green",
//   borderRadius:"20px",
//   width: "350px"
// }}>
//   <h1>{props.name}</h1>
//   <p>Cpi </p>
//   <p>Department: Electronics</p>
//   <p>Interest in: {props.Interest}</p>
//   </div>
//   );


// }
function Identity(props){
  return(
    <div style={{backgroundColor:"darkblue",
    color: "white",
    padding: "20px",
    margin: "10px",
    border: "2px solid green",
    borderRadius:"20px",
    width: "350px"
  }}>
      <h1> name: {props.name}</h1>
      <h2>interest: {props.intarest}</h2>
    </div>

  )
}

export default App;
