import { FaBriefcase , FaGraduationCap } from "react-icons/fa";



const ResumeApi = [
  {
    id: 1,
    category: "education",
    year: "University of Isfahan, Iran. (2018 - 2022)",
    title: "PhD, Software Engineering",
    desc: "THESIS: Improvement and development of semantic interoperability (Semantic Reasoning) based on ontology using Type-2 Fuzzy Set.",
    rate: <FaGraduationCap  size={22} />,
  },
  {
    id: 2,
    category: "education",
    year: "Azad university North Tehran Branch, Tehran, Iran (2016 - 2018) ",
    title: "Master of Science, Software Engineering",
    desc: "THESIS: The Detection of Taxpayers with False Invoices using Data Mining Techniques.",
    rate: <FaGraduationCap  size={22} />,
  },
  {
    id: 3,
    category: "education",
    year: "Azad university, khomein Branch, Khomein, Iran (2008 - 2010) ",
    title: "Bachelor of Science, Software Engineering",
    desc: "THESIS: The Detection of Taxpayers with False Invoices using Data Mining Techniques.",
    rate: <FaGraduationCap  size={22} />,
  },
  {
    id: 4,
    category: "experience",
    year: "Front End Developer  (2019 - 2020) ",
    title: "Tax Organization",
    desc: "React.js, Redux, Next.js, Axios, SWR, Bootstrap.",
    rate: <FaBriefcase  size={22} />,
  },
  {
    id: 5,
    category: "experience",
    year: "System Analyst and IT Expert (2013 - 2019) ",
    title: "Tax Organization",
    desc: "windows, Linux, Network+, windows server, DNS, DHCP, Active Directory, CCNA (Routing and Switching).",
    rate: <FaBriefcase size={22} />,
  },
  {
    id: 6,
    category: "experience",
    year: "System Analyst and IT Expert (2010 - 2013) ",
    title: "DPI Co",
    desc: "Technical Support, install hardware and software, troubleshooting in the fields of hardware and software, networks and communication systems, Support for end devices in a networked environment.",
    rate: <FaBriefcase  size={22} />,
  },
  {
    id: 6,
    category: "experience",
    year: "System Analyst and IT Expert (2008 - 2010) ",
    title: "Iran Nara Co",
    desc: "Technical Support, install hardware and software, troubleshooting in the fields of hardware and software, networks and communication systems, Support for end devices in a networked environment.",
    rate: <FaBriefcase  size={22} />,
  },
]

export default ResumeApi
