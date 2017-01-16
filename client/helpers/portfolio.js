Template.portfolio.helpers({
	jobs() {
		return [
			{
				'position': 'Independent Contractor',
				'workplace': 'Wildfig Data',
				'location': 'Harrisburg, PA',
				'started': 'May 2016',
				'finished': 'Present',
				'description': 'Working on the development of a social media analytics application \
								and data store built in Python, R, MySQL, and Redis.'
			},
			{
				'position': '.NET Developer',
				'workplace': 'LeHigh University',
				'location': 'Bethlehem, PA',
				'started': 'July 2016',
				'finished': 'August 2016',
				'description': 'Enhanced an existing C# application meant to be used as a teaching tool. \
								The application consists of a model of a groundwater contaminant plume, \
								and students are required to drill wells to characterize it (using as little money as possible). \
								Characterization is done using basic linear interpolation among 3-tuples of wells for both \
								concentration of the contaminant, and the hydraulic head of the aquifer. \
								This application process was part of a KEEN grant.'
			},
			{
				'position': 'Corporate Faculty',
				'workplace': 'Harrisburg University of Science and Technology',
				'location': 'Harrisburg, PA',
				'started': 'May 2016',
				'finished': 'August 2016',
				'description': 'I taught Programming Fundamentals 1 (basic Python programming) over the Summer,\
								 2016 semester at Harrisburg University of Science and Technology.'
			},
			{
				'position': 'Teaching Assistant',
				'workplace': 'Harrisburg University of Science and Technology',
				'location': 'Harrisburg, PA',
				'started': 'December 2014',
				'finished': 'May 2016',
				'description': 'Created and graded tests and assignments, as well as lectured, \
								in both graduate and under-graduate classes in data analytics, mathematics, and computer science. \
								Topics include: data mining, discrete mathematics, and introductory and \
								advanced classes in computer programming.'
			},
			{
				'position': 'Mainframe Developer/Business Analyst',
				'workplace': 'Highmark for Computer Aid, Inc.',
				'location': 'Harrisburg, PA',
				'started': 'March 2014',
				'finished': 'August 2015',
				'description': 'I worked on a variety of projects in both business and technical roles, \
								including a migration of a database system from IMS to Oracle, the creation of a Teradata data warehouse \
								and associated sync process to DB2, the creation of DB2 data access routines, and others. \
								Involved extensive work with COBOL, JCL, DB2, Oracle, PL/SQL, and Teradata.'
			},
			{
				'position': 'Mainframe Developer',
				'workplace': 'Kaiser Permanente for Computer Aid, Inc.',
				'location': 'Harrisburg, PA',
				'started': 'May 2015',
				'finished': 'August 2015',
				'description': 'I worked on a system reverse engineering project involving the review and analysis of many large COBOL programs. \
								This involved reading and interpreting the programs, and preparing program specifications describing the functionality \
								and processing of each program--as well as the creation of documentation describing the overall system architecture.'
			}

		]
	},

	education() {
		return [
			{
				'university': 'LeHigh University',
				'degree': 'Master of Engineering (M.Eng.), Mechanical Engineering and Mechanics',
				'started': '2016',
				'finished': '2018',
				'courses': [
					'Thermodynamics II (ME 304)',
					'Math Methods I (ME 452)',
					'Fluid Mechanics (ME 430)'
				]
			},
			{
				'university': 'Harrisburg University of Science and Technology',
				'degree': 'Bachelor of Science (B.S.), Computer and Information Sciences, \
							Software Engineering and Systems Analysis, Magna Cum Laude',
				'started': '2012',
				'finished': '2016',
				'courses': [
					'Database Security Management (CISC 350)',
					'Intellectual Systems and Artificial Intellegence (CISC 340)',
					'Analytics Principles and Applications (ANYL 500)',
					'Programming Techniques (CISC 260)',
					'Programming Fundamentals I (CISC 120)',
					'Programming Fundamentals II (CISC 160)',
					'Communication Networks (CISC 210)',
					'Operating Systems (CISC 240)',
					'General Physics I (PHYS 210)',
					'General Physics II (PHYS 260)',
					'Organic Chemistry I (CHEM 210)',
					'Calculus I (MATH 220)',
					'Calculus II (MATH 260)',
					'Introductory Statistics (MATH 280)',
					'IT Project Management (CISC 410)',
					'Information Management and Security (CISC 460)',
					'Organic Chemistry II (CHEM 220)',
					'Software Engineering (CISC 430)',
					'Inorganic Chemistry (CHEM 420)',
					'Mathematical Modeling (MATH 380)',
					'Computer and Network Security (CISC 220)',
					'Physical Chemistry (CHEM 410)'
				]
			}
		]
	}
})