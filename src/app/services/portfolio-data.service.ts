
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  getPersonalInfo() {
    return {
      name: 'Ntokozo Mweli',
      title: 'Full Stack Software Developer',
      location: 'Soweto, Gauteng',
      email: 'ntokozomweli001@gmail.com',
      phone: '+27 72 985 3908',
      linkedin: 'https://linkedin.com/in/ntokozo-mweli',
      github: 'https://github.com/ntokom89',
      summary: `A versatile Full Stack Developer with proven experience in designing, developing, and deploying dynamic web and mobile applications. Proficient in the entire development lifecycle, from concept to deployment, with a strong command of modern technology stacks including Angular, Ionic, and Node.js. Specializes in creating robust backend services, RESTful APIs, and integrating third-party payment systems like Paystack and PayPal. Possesses hands-on experience in deploying applications to both web servers and major app stores (Android/iOS). A certified Microsoft Azure professional (AZ-900), adept at leveraging cloud services and working with a variety of databases. A collaborative team player with excellent problem-solving skills, committed to delivering high-quality, scalable software solutions.`
    };
  }

  getWorkExperience() {
    return [
      {
        role: 'Full Stack software developer',
        company: 'Freelance',
        period: '02/2024 - Present',
        description: [
          'Implemented user payment and transfer systems using Paystack.',
          'Built a real-time trading application with dynamic graphs, profit/loss calculation, and integrated Paystack for both client (Angular, Ionic) and backend (Node.js) systems.',
        ],
        stack: ['Ionic', 'Node.js', 'TypeScript', 'Angular', 'Paystack']
      },
      {
        role: 'Full Stack Developer',
        company: 'Alchemy Asset Management',
        period: '01/2023 - 07/2025',
        description: [
          'Managed ordering systems and integrated PayPal for seamless payments.',
          'Developed and deployed REST APIs on Render using Node.js for Zoom integration, enabling login and meeting management.',
          'Deployed web applications to Android and iOS app stores and hosted on the web via Afrihost.'
        ],
        stack: ['Angular', 'Ionic', 'Node.js', 'TypeScript', 'Python', 'Java', 'Firebase', 'REST API', 'GitHub']
      }
    ];
  }

  getProjects() {
    return [
      {
        name: '.NET Farmer Management System',
        description: 'An ASP.NET-based system allowing farmers to efficiently track and manage their products. Includes features for adding, updating, and deleting products, with an employee view for oversight.',
        technologies: ['ASP.NET', 'C#', 'Azure', 'SQL Server', 'JavaScript'],
        githubLink: 'https://github.com/ntokom89/FarmerManagement-.NET'
      },
      {
        name: 'South Side App',
        description: 'A navigation application for users in South Africa, focusing on local landmarks. Leveraged Firebase for real-time database, authentication, and security.',
        technologies: ['Firebase', 'Android Studio', 'Java', 'Google Maps API'],
        githubLink: 'https://github.com/ntokom89/OPSC_South_Side_APPLICATION'
      },
      {
        name: '.NET Dewey Decimal System',
        description: 'Developed and implemented a .NET Decimal System utilizing C#, Microsoft SQL Server, .NET WPF, and object-oriented principles.',
        technologies: ['C#', 'SQL Server', '.NET WPF'],
        githubLink: 'https://github.com/ntokom89/.Net-Dewey-Decimal-System'
      }
    ];
  }

  getSkills() {
    return {
      languages: ['C#', 'TypeScript', 'Java', 'JavaScript', 'JSON', 'SQL', 'NoSQL', 'HTML', 'CSS', 'Python'],
      frameworks: ['Angular', 'Node.js', 'Ionic Framework', 'MongoDB', 'Microsoft SQL Server', 'MySQL', 'Bootstrap', 'Firebase'],
      tools: ['Microsoft Azure', 'Visual Studio', 'Git', 'Android Studio', 'Figma', 'Office 365', 'Linux'],
      softSkills: ['Communication', 'Conflict Management', 'Team Leadership', 'Problem Solving']
    };
  }

  getEducationAndCerts() {
    return {
      education: {
        degree: 'Bachelor Of Computer And Information Sciences In Application Development',
        institution: 'IIE Varsity College, Midrand, Gauteng',
        period: '03/2020 - 12/2022'
      },
      certifications: [
        {
          name: 'AZ-900: Microsoft Azure Fundamentals',
          issuer: 'Microsoft',
          period: '12/2021 - 04/2022'
        }
      ]
    };
  }

  getServices() {
    return [
      {
        title: 'Full Stack Development',
        icon: '⚙️',
        description: 'End-to-end application development from frontend interfaces to robust backend systems. I handle everything including database design, API development, and cloud deployment.',
        technologies: ['Angular', 'Node.js', 'TypeScript', 'MongoDB', 'Firebase', 'REST APIs']
      },
      {
        title: 'Web Application Development',
        icon: '🌐',
        description: 'Create responsive and modern web applications using Angular and other frameworks. Specializing in interactive UIs, real-time data updates, and seamless user experiences.',
        technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap', 'Responsive Design']
      },
      {
        title: 'Mobile App Development',
        icon: '📱',
        description: 'Develop cross-platform mobile applications for iOS and Android using Ionic Framework and native technologies. Deploy to app stores and ensure optimal performance.',
        technologies: ['Ionic Framework', 'Angular', 'Java', 'Android Studio', 'Firebase', 'App Store Deployment']
      },
      {
        title: 'Backend API Development',
        icon: '🔧',
        description: 'Build scalable REST APIs and backend services using Node.js, Express, and various databases. Implement authentication, payment integration, and real-time features.',
        technologies: ['Node.js', 'Express.js', 'RESTful APIs', 'MongoDB', 'MySQL', 'Payment Integration']
      },
      {
        title: 'Database Design & Management',
        icon: '💾',
        description: 'Design efficient database schemas and implement database solutions. Work with both relational databases (SQL Server, MySQL) and NoSQL databases (MongoDB, Firebase).',
        technologies: ['MongoDB', 'MySQL', 'SQL Server', 'Firebase', 'Database Optimization', 'Data Modeling']
      },
      {
        title: 'Payment System Integration',
        icon: '💳',
        description: 'Integrate third-party payment gateways like Paystack and PayPal. Implement secure payment processing, user transfer systems, and financial transaction handling.',
        technologies: ['Paystack', 'PayPal', 'Payment APIs', 'Security', 'Transaction Management']
      }
    ];
  }
}