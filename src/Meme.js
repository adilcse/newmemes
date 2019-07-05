import React,{Component} from 'react';
import logo from './meme.svg';
import Card from './Card';
import db from './firestore';
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");


const getCaption=(user)=>{
		if(user.caption==null){
			return "no Caption";
		}else
		return user.caption.text ; 
	}	


const Meme=({robots})=>{

	const likechange=(event)=>{
		
		let docid;
		try{
			docid=robots[event.target.id].id;
		
		let docref=db.collection("meme").doc(docid);
		
		docref.update({
				"likes.count" :firebase.firestore.FieldValue.increment(1),
					
		}).then(function() {
  	 	 console.log("Document successfully written! incremented");
		})
		.catch(function(error) {
    	console.error("Error writing document: ", error);
		});

		
}catch(error){
	console.log(error);
	
		}


	}
	
	// 
		return (
 		
			<div>
			{robots.map((user,i)=>{
				return <Card key={i}
				id={i}
				user={robots}
				 img={user.images.standard_resolution.url} 
				 alt={user.user.full_name}
				 name={getCaption(user)} 
				 likes={user.likes.count}
				 likechange={likechange}
				 iliked={true}
				 />
			})}
			
		    </div> 
		  );
	
}

export default Meme;
