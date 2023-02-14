import Dog from './dog';
const { v4: uuidv4 } = require('uuid');
uuidv4();

//Added image id to tie two separate pieces of data together

const dogData: Array<Dog> = [

	{	id: uuidv4(),
		imageID: 'd1519374',
		name: 'Spaetzli',
		species: 'Dachsund/Noodle',
		favFoods: ['marshmallows, hot messes, single malt whiskey'],
		birthYear: 2020,
	},

	{	id: uuidv4(),
		imageID: 'h3380548',
		name: 'Direwolf',
		species: 'Ninja Husky',
		favFoods: ['Weaker Beings'],
		birthYear: 2010,
	},
	{	id: uuidv4(),
		imageID: 'c3389729',
		name: 'Pauli',
		species: 'Corgi',
		favFoods: ['peanut butter, shoes, whatever the dachsund is eating'],
		birthYear: 2015,
	},
];

export default dogData;


