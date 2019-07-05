import React from 'react';

const SearchBox=({searchfield,searchChange}) => {
	return (
		<div className='pa2'>
			<input 
			className="pa3 ba b--green bg-lighest-blue"
			type='search'
			placeholder='search here'
			onChange={searchChange}
			/>
			<button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-green"

			onClick={searchChange}> Click to load</button>
		</div>	

		);
}
export default SearchBox;