import React,{Component} from 'react';
import logo from './meme.svg';
import Card from './Card';

const getCaption=(user)=>{
		if(user.caption==null){
			return "no Caption";
		}else
		return user.caption.text ; 
	}	


const Meme=({robots,likechange})=>{
// 	const likechange=(event)=>{
// console.log("liked");
// 	}
	
	// 
		return (
 		
			<div>
			{robots.map((user,i)=>{
				return <Card key={i}
				 img={user.images.standard_resolution.url} 
				 alt={user.user.full_name}
				 name={getCaption(user)} 
				 likes={user.likes.count}
				 likechange={likechange}
				 />
			})}
			
		    </div> 
		  );
	
}

export default Meme;
