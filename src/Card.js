import React,{Component} from 'react';
require ('./thumb.svg');
const Card = ({img,alt,name,likes,likechange,iliked,id}) =>{
	let liked="https://img.trzcacak.rs/myfile/small/303-3034226_emojione-2764-svg-twitter-like-icon-png.png";
	let unliked="http://chittagongit.com/download/274192";
	let image=liked;


	const likechangeclick=(event)=>{
		let likesrc = document.getElementById(name);
			likesrc.innerHTML = ++likes + " likes";
		
		
		
		likechange(event);
		


	}
	
	return (
		
		<div className="card-body p-4 p-md-5" width="500px" height="500px" >
		 <img className="db w-100 br2" src={img} alt={alt} />
		 <div className="pa2 ph3-ns pb3-ns  bg-light-green">
		    <div className="dt w-100 mt1">
		      <div className="dt">
		        <h1 className="f6 f4-ns mv0">{name}</h1>
		      </div>
		      <div className="dtc tr">
		      <img src={image} id={id} width="50px" height="50px" alt="like" onClick={likechangeclick} />
		        <h2 className="f5 mv0" id ={name}>{likes} likes</h2>
		      </div>
		    </div>
		    <p className="f6 lh-copy measure mt2 mid-gray">
		     
		    </p>
		    </div>
		}
		 
</div>
		);
}


export default Card;