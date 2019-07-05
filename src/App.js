import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {robots} from './robots';
import SearchBox from './SearchBox';
import Meme from './Meme';
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
let memes = [] ;
  var firebaseConfig = {
    apiKey: "AIzaSyB3SbMFJ8DoPPwMs-4gy8zAzlLfLpS2P_c",
    authDomain: "memes-f0109.firebaseapp.com",
    databaseURL: "https://memes-f0109.firebaseio.com",
    projectId: "memes-f0109",
    storageBucket: "",
    messagingSenderId: "920175333778",
    appId: "1:920175333778:web:bc71767d56fb0cf1"
  };
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();



let robo=[];
 const onDataChange=(obj)=>{
   try{ obj.setState({robots:robo});}
   catch{

   }
  
  }

class App extends Component {
  constructor(){
    super();
   
 
 this.state={
      robots:[],
      searchfield : '',
    }

  }



  likechange=(event)=>{
   console.log(event);
  
  }
 

componentDidMount(){
  let x=this;
db.collection("meme")
    .onSnapshot(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          let status=false;

          robo.forEach(function(item,i){
           
              if(item.created_time == doc.data().created_time)
                 { status=true;
                
                 }

          });


          if(!status){
          
            robo.unshift(doc.data());
          }
          else{
                console.log("doc exist");
          }
        });
        // console.log("Current cities in CA: ",robo);
        // console.log("in db",x);
        x.setState({robots:robo});
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
     <Meme robots={this.state.robots} likechange={this.likechange}/>
    </div>
  );
}
  }
}

export default App;
