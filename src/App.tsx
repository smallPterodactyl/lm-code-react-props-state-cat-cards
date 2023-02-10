//app framework
import { useState } from 'react';
import { isPropertySignature } from 'typescript';
const { v4: uuidv4 } = require('uuid');
//components
import Cat from './data/cat';
import CatCard from './components/cat_card';
import catData from './data/catData';
//styling
import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';

//data

function App(): JSX.Element {

   /*Initial state is a big 'cats' array with the cat card shape */
	const [ cats, setCats ] = 
	useState <Array<Cat>> (catData);

	const catCount:number = cats.length;

	return (
		<>
		    
			<Navbar />
			<Header catCount={catCount}/>
			<main>
                
			     <div className='cards__wrapper'> 

				 {cats.map((cat,index) => (
         			<CatCard 
						key={cat.id}
						name={cat.name}
				   		species={cat.species}
				   		favFoods={cat.favFoods}
				   		birthYear={cat.birthYear}
						catIndex={index}
				  />
				  ))}
				 
				</div>

			</main>
			  
			<Footer />
		</>

	);
}

export default App;
