import { Step } from './steps.interface';

export const STEPS: { [key: number]: Step } = {	
	1 : {
		idSlide : 1,
		delay: 3000,
		titre: "GEN Contact",
		subInfo: {			
			Période : "2015 - 2017",
			Site : "<a href='http://www.gencontact.fr' target='_blank' class='slide-link'><div class='default'>gencontact.fr</div><div>gencontact.fr</div></a>",
			Poste : "Full stack"
		},
		description: "Hi, my name is Guillaume ESNAULT, 25 years old, JS (fan) developer from Paris with huge preference for React. I started to learn development by myself in 2013 until my first experience. It was in GEN Contact a web agency selling websites and print services. My first job as developer I discovered a lot of aspects about this profession, back, front, how to manage a database, how to create a graphic model. My main tasks was websites integration and module development in PHP/jQuery."
	},
	2 : {
		idSlide : 2,
		delay: 2000,
		titre: "Neftis",
		subInfo: {
			Période : "2017 - 2018",
			Entreprise : "<a href='http://www.neftis.fr' target='_blank' class='slide-link'><div class='default'>neftis.fr</div><div>neftis.fr</div></a>",
			Poste : "Full stack"
		},
		description: "Neftis is a web agency that had developed a home made CMS named FLEXIT, my main activity was to develop new features for it. Mainly back oriented, but I developed websites for customers."
	},
	4 : {
		idSlide : 3,
		delay: 2000,
		titre: "Sewan",
		subInfo: {
			Période : "2018 - 2020",
			Entreprise : "<a href='http://www.sewan.fr' target='_blank' class='slide-link'><div class='default'>sewan.fr</div><div>sewan.fr</div></a>",
			Poste : "Full stack JS"
		},
		description: "Sewan is a telecommunication company where I worked on many projects in order to make life easier for employees. My first experience in a big company with more than 80 developers, that offers the possibility to share about a lot of different subjects. I worked on projects using React, Node, GraphQL, MongoDB, with a SCRUM organization."
	}
};