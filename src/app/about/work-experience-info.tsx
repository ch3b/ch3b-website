const AwazeDesc: React.FC = () => {
    return (
        <ul className="list-disc pl-6 text-base space-y-2">
          <li>
            Developed a
              brand-agnostic search engine solution for high-traffic websites.
          </li>
          <li>
            Backend development with Kotlin and
              Quarkus for APIs; maintained legacy Clojure services for data transformation.
          </li>
          <li className="mb-2 leading-tight">
            Used Opensearch to store property and
              availability data, building and updating indexes with services written in Kotlin. Implemented a long
              running task to process updates by consuming events from another internal team.
          </li>
          <li>
            Built infrastructure
              with Terraform and deployed APIs/services on AWS ECS and EC2.
          </li>
          <li>
            Automated deployments
              and tasks using GitHub Actions.
          </li>
          <li>
            Used collaborative practices such as mob
              and pair programming, with a strong focus on TDD to create thorough unit, integration, and end-to-end
              tests.
          </li>
          <li>
            Provided 24-hour on-call support to promptly address and resolve outages.
          </li>
        </ul>
    )
  }
  
export const workExperiences = [
    {
      companyName: 'Awaze',
      startDate: 'Oct 2023',
      endDate: 'Present',
      role: 'Software Developer',
      description: <AwazeDesc />,
      techStack: ['Kotlin', 'OpenSearch', 'AWS', 'Docker', 'Quarkus']
    },
    {
      companyName: 'THG',
      startDate: 'Jun 2021',
      endDate: 'Oct 2023',
      role: 'Software Developer',
      description: <AwazeDesc />,
      techStack: ['Java', 'Angular', 'Spring', 'Docker', 'K8s', 'Jenkins', 'PostgreSQL']
    },
    {
      companyName: 'Apadmi',
      startDate: 'Jul 2020',
      endDate: 'Jun 2020',
      role: 'Graduate Software Developer',
      description: <AwazeDesc />,
      techStack: ['Kotlin', 'Swift', 'Android', 'iOS', 'Firebase']
    },
  ];
  