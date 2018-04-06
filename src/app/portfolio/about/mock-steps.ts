import { Step } from './steps.interface';

export const STEPS: { [key: number]: Step } = {	
	1 : {
		idSlide : 1,
		delay: 3000,
		titre: "A propos de moi",
		subInfo: {
			Période : "2017-2018",
			Entreprise : "gencontact.fr"
		},
		description: "Non ergo erunt homines deliciis diffluentes audiendi, si quando de amicitia, quam nec usu nec ratione habent cognitam, disputabunt. Nam quis est, pro deorum fidem atque hominum! qui velit, ut neque diligat quemquam nec ipse ab ullo diligatur, circumfluere omnibus copiis atque in omnium rerum abundantia vivere? Haec enim est tyrannorum vita nimirum, in qua nulla fides, nulla caritas, nulla stabilis benevolentiae potest esse fiducia, omnia semper suspecta atque sollicita, nullus locus amicitiae."
	},
	2 : {
		idSlide : 2,
		delay: 5000,
		titre: "Il était une fois la vie",
		subInfo: {
			Période : "2014 à aujourd'hui",
			Entreprise : "gencontact.fr"
		},
		description: "Non ergo erunt homines deliciis diffluentes audiendi, si quando de amicitia, quam nec usu nec ratione habent cognitam"
	},
	4 : {
		idSlide : 3,
		delay: 2000,
		titre: "INB 4",
		subInfo: {
			Période : "2014 à aujourd'hui",
			Entreprise : "gencontact.fr"
		},
		description: "Non ergo erunt homines deliciis diffluentes audiendi, si quando de amicitia, quam nec usu nec ratione habent cognitam"
	}
};