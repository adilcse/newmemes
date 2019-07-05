import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {robots} from './robots';
import SearchBox from './SearchBox';
import Meme from './Meme';
import db from './firestore';
// const firebase = require("firebase");

// // Required for side-effects
// require("firebase/firestore");
let memes = [] ;
 



let robo=[];
 const onDataChange=(obj)=>{
   try{ obj.setState({robots:robo});}
   catch{

   }
  
  }

class App extends Component {
 
  constructor(props){
    super(props);
   
 
 this.state={
      robots:[],
      searchfield : '',
    }

  }



 
 

componentDidMount(){
  let x=this;
db.collection("meme")
    .onSnapshot(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          let status=false;

          robo.forEach(function(item,i){
           
              if(item.id == doc.data().id)
                 { status=true;
                
                 }

          });


          if(!status){
          
            robo.unshift(doc.data());
          
             x.setState({robots:robo});
            
          }
          else{
              //  console.log("doc exist");
          }
        });
        // console.log("Current cities in CA: ",robo);
        // console.log("in db",x);
       
    });


}

  render(){
    //  const filterrobots = this.state.robots.filter(robots =>{
    //   return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
   
    // })
   
    if(this.state.robots.length === 0)
    {
      return (
        <div>
           <h1>Loading</h1>
           </div>
           )
    }else{
  return (
    <div>
     <Meme robots={this.state.robots} database={db}/>
    </div>
  );
}
  }
}

export default App;
