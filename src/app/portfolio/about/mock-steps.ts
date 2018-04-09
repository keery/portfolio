import { Step } from './steps.interface';

export const STEPS: { [key: number]: Step } = {	
	1 : {
		idSlide : 1,
		delay: 3000,
		titre: "A propos de moi",
		subInfo: {			
			Email : '<a href="mailto:contact@guillaumeesnault.fr" class="slide-link"><div class="default">contact@guillaumeesnault.fr</div><div>contact@guillaumeesnault.fr</div></a>',
		},
		description: "Hello, je m'appelle Guillaume ESNAULT, j'ai 23 ans, je vis en région parisienne et suis actuellement en étude à l'école ESGI (BAC +3). J'ai commencé en autodidacte le développement web en 2013 jusqu'à aujourd'hui où j'ai pu apprendre des technos comme Symfony ou Angular, je cherche dorénavant à me spécialiser dans le développement front pour lequel j'ai un penchant significatif."
	},
	2 : {
		idSlide : 2,
		delay: 5000,
		titre: "GEN Contact",
		subInfo: {
			Période : "2015 - 2017",
			Site : "<a href='http://www.gencontact.fr' target='_blank' class='slide-link'><div class='default'>gencontact.fr</div><div>gencontact.fr</div></a>",
			Poste : "Full stack"
		},
		description: "GEN Contact est une agence web vendant de la création de sites et des prestations en print. Premier emploi dans le développement j'ai pu me faire la main sur tous les aspects du métier, front, back, graphisme et ainsi enrichir et renforcer mes compétences. Mes tâches principales étaient de l'intégration et le développement de modules."
	},
	4 : {
		idSlide : 3,
		delay: 2000,
		titre: "Neftis",
		subInfo: {
			Période : "2017 - 2018",
			Entreprise : "<a href='http://www.neftis.fr' target='_blank' class='slide-link'><div class='default'>neftis.fr</div><div>neftis.fr</div></a>",
			Poste : "Full stack"
		},
		description: "Neftis est une agence web ayant développé son CMS nommé Flexit, mon activité première a été de développer des fonctionnalités pour ce CMS. Mon poste majoritairement orienté back, j'y ai pu néanmoins réaliser quelques sites internets et interfaces graphiques."
	}
};