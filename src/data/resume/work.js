/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Deloitte Consulting LLP',
    position: 'Java Developer',
    url: 'https://www2.deloitte.com/us/en.html',
    startDate: '2023-08-21',
    summary: `Deloitte Consulting LLP is a prominent and globally recognized consulting 
    firm known for its expertise in providing a wide range of professional services. 
    With a focus on delivering innovative solutions, Deloitte Consulting LLP collaborates with clients 
    to address complex challenges and drive organizational success. Their commitment to excellence and diverse 
    industry knowledge positions them as a trusted advisor for businesses seeking strategic guidance and transformative solutions. `,

    highlights: [
      'Working on the overall phase of SDLC including designing and development of the features',
      'Designed and developed the API',
      'Working on the development of the new features.',
      'Working on replicating the existed issue, tracking them and solving them.',
    ],
  },
  {
    name: 'DB Workshop and IT Support Pvt, Ltd',
    position: 'Software Engineer',
    startDate: '2021-02-01',
    endDate: '2022-04-01',
    summary: `Contributed to all the phases of the software development 
    cycle to design and develop the internal and web applications.
     Played a vital role in implementation of front-end and back-end programming. 
    Assisted in improving communications between team and operations. `,

    highlights: [
      'Worked on the overall phases of the SDLC including designing and creating DDS, performing the analysis and implementation of user requirements using an Agile methodology.',
      ' Created microservices using MVC pattern using Java, Spring frameworks, Hibernate ORM, Docker as a container and Kubernetes.',
      ' Designed and developed REST APIs and Consumed third-party APIs and tested the APIs using Postman and Swagger also.',
      ' Provided database design and maintenance using MySQL and MongoDB as a database system.',
      ' Worked closely with the client and developers thereby collaborating with the juniors and seniors to solve the challenges and problems encountered while building the applications.',
      ' Played key role in Agile/Scrum processes implementation – including meetings, grooming sessions, sprint planning, and demos.',
    ],
  },
  {
    name: 'DB Workshop and IT Support Pvt, Ltd',
    position: 'Junior Software Developer',
    startDate: '2018-07-01',
    endDate: '2021-01-30',
    summary: `Conducted coding and maintenance operations with focus on timeframe and goals. Implemented back-end 
    and front-end solutions.Assisted to the development team by analyzing technical requirements, coding, fixing bugs and errors by collaborating with the senior developers. `,

    highlights: [
      'Collaborated with developers and the team members to enhance software coding and development.',
      'Worked in a team to develop and implement the changes thereby enhancing the team performance development support.',
      'Worked on both full stack development using Angular, Java and Spring Frameworks, including creating the simple and complex SQL queries to perform CRUD operations in the databases.',
      'Reviewed the code and implemented changes when required by testing and troubleshooting the bugs and errors.',
      'Worked as a positive and passionate team member by actively participating in the Stand Up and Scrum, meetings.',
    ],
  },

  {
    name: 'DB Workshop and IT Support Pvt, Ltd',
    position: 'Trainee',
    startDate: '2018-02-01',
    endDate: '2021-06-30',
    summary: `Worked as a trainee by developing and contributing to code implementation. Assisted developers while learning code development and implementation. 
    Actively participated in team sprint and meetings. `,

    highlights: [
      'Worked in team to design and implement the changes.',
      'Reviewed code and performed changes when necessary.',
      'Implemented enhanced codes in the existing system.',
      'Implemented knowledge and problem-solving skills to solve the problems.',
    ],
  },
];

export default work;
