//app framework
import { useState } from 'react';

//styling framework
import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';

//cat and dog components
import catData from './data/catData';
import Cat from './data/cat';
import CatCard from './components/cat_card';

import dogData from './data/dog-data';
import Dog from './data/dog';
import DogCard from './components/dog_card';


function App(): JSX.Element {

	//Set initial cat data	
	const [ cats, setCats ] = useState <Array<Cat>> (catData);
	const catCount: number = cats.length;

	//Set initial dog data	
	const [ dogs ] = useState <Array<Dog>> (dogData);
	const dogCount: number = dogs.length;

	return (
		<>
		    
			<Navbar />
			<Header catCount={catCount} dogCount={dogCount}/>
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

				<div className='cards__wrapper'>

					{ dogs.map ((dog) => (
							<DogCard
							key={dog.id}
							dogObject={dog}					
							/>	
							))}	
				</div>	

			</main>
			  
			<Footer />
		</>

	);
}

export default App;
