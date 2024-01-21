const skills = [
  {
    title: 'Amazon Web Services',
    competency: 3,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'XML + Ajax + jQuery + JSON',
    competency: 1.5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Jupyter',
    competency: 2,
    category: ['Data Science'],
  },
  {
    title: 'Ruby on Rails',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'C++',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'MATLAB',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Data Visualization',
    competency: 1,
    category: ['Data Science', 'Javascript'],
  },
  {
    title: 'GraphQL',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'MongoDB',
    competency: 3.5,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'ElasticSearch',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Oracle',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'MySQL',
    competency: 4,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Redis',
    competency: 2.5,
    category: ['Web Development', 'Databases'],
  },
  //
  //
  {
    title: 'Python',
    competency: 3.25,
    category: ['Languages', 'Data Science'],
  },
  {
    title: 'Java',
    competency: 5,
    category: ['Languages', 'Java'],
  },
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Typescript',
    competency: 3.5,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 3.5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'JSP',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Servlet',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'HTML + CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Angular',
    competency: 2.5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Material UI + Bootstrap',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'REST',
    competency: 4,
    category: ['Web Services'],
  },
  {
    title: 'SOAP',
    competency: 3.5,
    category: ['Web Services'],
  }, // Design Patterns

  {
    title: 'MVC',
    competency: 4,
    category: ['Design Patterns'],
  },
  {
    title: 'Singleton',
    competency: 3,
    category: ['Design Patterns'],
  },
  {
    title: 'Factory',
    competency: 2.5,
    category: ['Design Patterns'],
  },
  {
    title: 'Builder',
    competency: 2,
    category: ['Design Patterns'],
  }, // Tools
  {
    title: 'Kafka',
    competency: 4.5,
    category: ['Tools'],
  },
  {
    title: 'Git',
    competency: 5,
    category: ['Tools', 'Java'],
  },
  {
    title: 'Maven',
    competency: 3,
    category: ['Tools', 'Java'],
  },
  {
    title: 'Postman',
    competency: 4.25,
    category: ['Tools', 'Java'],
  },
  {
    title: 'Swagger',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'Star UML',
    competency: 4.5,
    category: ['Tools'],
  },
  {
    title: 'Kubernetes',
    competency: 3.5,
    category: ['Tools'],
  },
  {
    title: 'Google Cloud Compute',
    competency: 2,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'AWS',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Docker',
    competency: 3.25,
    category: ['Tools'],
  },
  {
    title: 'AWS Lambda',
    competency: 3,
    category: ['Tools', 'Web Development'],
  }, // IDE'S
  {
    title: 'Eclipse',
    competency: 3.5,
    category: ['Tools', 'Java', 'IDE'],
  },
  {
    title: 'IntelliJ IDEA',
    competency: 4,
    category: ['Tools', 'Java', 'IDE'],
  },

  {
    title: 'RAD',
    competency: 3.25,
    category: ['Tools', 'Java', 'IDE'],
  },
  {
    title: 'Visual Studio Code',
    competency: 3.25,
    category: ['Tools', 'IDE'],
  },
  {
    title: 'Junit',
    competency: 4,
    category: ['Tools', 'Java'],
  },
  {
    title: 'Mockito',
    competency: 3.25,
    category: ['Tools', 'Java'],
  },

].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
