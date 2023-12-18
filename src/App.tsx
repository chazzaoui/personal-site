import { FC, useMemo, useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  useParams,
} from 'react-router-dom';
import Header from './common/Header/Header.tsx';
import Home from './pages/Home/Home.tsx';
import './App.css';
import About from './pages/About/About.tsx';
import { HomeData } from './common/types/HomeData.tsx';
import { AboutData } from './common/types/AboutData.tsx';
import Contact from './pages/Contact/Contact.tsx';
import ContactData from './common/types/ContactData.tsx';
import Projects from './pages/Projects/Projects.tsx';
import NotFound from './NotFound.tsx';
import Project from './pages/Project/Project.tsx';

const App: FC = () => {
  useEffect(() => {
    const userTheme = window.localStorage.getItem('theme');
    const systemTheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
      ? 'dark'
      : 'light';
    document.body.classList.add(userTheme || systemTheme);
    localStorage.setItem('theme', userTheme || systemTheme);
  }, []);

  const ProjectOr404 = () => {
    const { slug } = useParams();
    if (
      slug &&
      userData.slugs.length > 0 &&
      userData.slugs.some((s: { slug: string }) => s.slug === slug)
    ) {
      return <Project userData={userData} />;
    } else {
      return <NotFound />;
    }
  };

  const userData = useMemo(
    () => ({
      name: 'Charaf',
      email: 'charafazzaoui@gmail.com',
      phone: '+31640937561',
      company: 'Fareplay protoco and Troop Labs',
      location: 'Amsterdam',
      about:
        " I'm all about creating awesome tech stuff that's both fun and makes a real difference. My style? Mixing serious skills with a love for all the new and exciting things in tech. For me, it's about making the tech world enjoyable and meaningful",
      skills: [
        'TypeScript',
        'Progressive Web Apps',
        'React Native',
        'React',
        'NodeJs',
        'User Experience Design',
        'Blockchain',
      ],
      projects: [
        {
          name: 'FarePlay',
          description: 'A decentralised blockchain casino',
          languages: ['React'],
          updatedAt: '2023-10-20T03:25:32.825Z',
          image: 'https://images.codefoli.com/217-projects-image-358',
          id: '358',
          slug: 'fareplay',
        },
        {
          name: 'Bite social',
          description:
            'Build a social app for spontaneous meetups to battle loneliness during the pandemic',
          languages: ['React Native'],
          updatedAt: '04/05/2021',
          image: 'https://images.codefoli.com/217-projects-image-357',
          id: '357',
          slug: 'bite-social',
        },
        {
          name: 'Troops',
          description: 'Create an onchain club with your frens',
          languages: ['React'],
          updatedAt: '2023-10-20T03:42:51.992Z',
          image: 'https://images.codefoli.com/217-projects-image-359',
          id: '359',
          slug: 'troops',
        },
      ],
      work: [
        {
          id: 163,
          company: 'Fareplay protocol',
          position: 'Front-end developer',
          startDate: '03/02/2023',
          endDate: 'current',
          description:
            'Building the front-end for decentralised games',
          orderId: 2,
          image:
            'https://images.codefoli.com/217-job-image-upload-163',
        },
        {
          id: 162,
          company: 'Troop labs',
          position: 'Founding engineer',
          startDate: '11/01/2022',
          endDate: 'current',
          description: 'Building an onchain community tool',
          orderId: 1,
          image:
            'https://images.codefoli.com/217-job-image-upload-162',
        },
        {
          id: 164,
          company: 'Achmea insurance',
          position: 'Lead front-end dev',
          startDate: '02/10/2021',
          endDate: '01/01/2023',
          description:
            'Developed an IoT app with a team of developers',
          orderId: 3,
          image:
            'https://images.codefoli.com/217-job-image-upload-164',
        },
        {
          id: 165,
          company: 'Label A Digital agency',
          position: 'Full-stack developer',
          startDate: '09/12/2019',
          endDate: '02/01/2021',
          description:
            'Responsible for the development of various digital products',
          orderId: 4,
          image:
            'https://images.codefoli.com/217-job-image-upload-165',
        },
      ],
      role: 'USER',
      profession: 'Web3 dev',
      services: [
        'WEB_DEVELOPMENT',
        'BLOCKCHAIN_DEVELOPMENT',
        'PRODUCT_MANAGEMENT',
        'MOBILE_DEVELOPMENT',
      ],
      slugs: [
        {
          slug: 'fareplay',
          header: 'FarePlay.io',
          description:
            'The mint & burn crypto casino. gamble with $FARE. winnings are minted. losses are burned. $FARE is deflationary.',
          about: 'Fareplay is a decentralized casino\n',
          image:
            'https://images.codefoli.com/217-project-content-358',
          overview: 'Overview',
          platforms: 'Web, Android, iOS',
          link: 'https://www.fareplay.io/',
        },
        {
          slug: 'bite-social',
          header: 'Bite social',
          description:
            'Ever since covid struck, people have come to appreciate sharing moments with each other now more than ever before. Whether that entails going for a drink, watching a new movie in the theaters, or grabbing a Bite — shared moments often bring joy.\n\nBite helps you capture these opportunities around you. We just want to bring people together. Instead of spending time on countless networking events, you’ll be able to meet people you actually want to hang out with. A community of people who are respectful, empathetic, and without judgment. Who you can have recurring hangouts with.\n\nWe believe that some of our most joyful moments are formed within the presence of others. Regardless of whether these people are strangers or close friends, sharing experiences with other people is what makes these moments so special.',
          about:
            ' Build your social circle and meet new people around you🍻',
          image:
            'https://images.codefoli.com/217-project-content-357',
          overview: 'Overview',
          platforms: 'Web, Android, iOS',
          link: 'https://bites-spectacular-site.webflow.io/',
        },
        {
          slug: 'troops',
          header: 'Troops',
          description:
            'Build once, cultivate forever\nCreate an onchain club that welcomes new members, gives everyone their place, and fosters fun activities through shared ownership.\n\nThe best of all: your memberships reputations, and permissions live onchain, which means you can take them to any platform you want.',
          about: 'Build an onchain club for your community',
          image:
            'https://images.codefoli.com/217-project-content-359',
          overview: 'Overview',
          platforms: 'Web, PWA',
          link: 'https://mvp.troo.ps/',
        },
      ],
    }),
    []
  );

  const homeData = useMemo(
    () => ({
      headerOne:
        "Hey there! I'm Charaf – Web3 Enthusiast, Front-End Whiz, and Tech founder",
      descriptionOne:
        "Hey, I'm Charaf, and I'm a developer who loves building things that have a positive impact on people's lives. I'm all about tackling real-world problems and building solutions that make a difference. ",
      profileImage: 'https://images.codefoli.com/217-profile-image',
      sections: [
        {
          type: 'SKILL',
          details: {
            headerOne: 'My broad set of services and skills',
            order: 1,
          },
        },
      ],
    }),
    []
  );

  const aboutData = useMemo(
    () => ({
      headerOne: "Hello, I'm Charaf",
      iconOne:
        'https://assets.website-files.com/63360c0c2b86f80ba8b5421a/633b443e2bb8e12b5faf51a7_about-hero-rigth-image-paperfolio-webflow-template.png',
      iconTwo:
        'https://assets.website-files.com/63360c0c2b86f80ba8b5421a/633b440128f648585c383865_about-hero-left-image-paperfolio-webflow-template.png',
      iconThree:
        'https://assets.website-files.com/63360c0c2b86f80ba8b5421a/633b52d3639fb5250039e574_my-story-image-paperfolio-webflow-template.png',
      headerTwo: 'My story as a designer',
      descriptionOne:
        "Hey, I'm Charaf, and I'm a developer who loves building things that have a positive impact on people's lives. I'm all about tackling real-world problems and building solutions that make a difference. ",
      descriptionTwo:
        "Embarking on a journey fueled by curiosity and passion, I found solace in the world of code. From solving complex problems to creating user-friendly interfaces, every project has been a stepping stone in my development career. Continually learning and adapting, I've embraced new technologies and methodologies to build robust and efficient solutions. My path as a developer is more than a career; it's a lifelong pursuit of innovation, creativity, and technological advancement.",
      sections: [
        {
          type: 'RESUME',
          details: {
            headerOne: 'Take a look at my resume',
            order: 1,
          },
        },
      ],
    }),
    []
  );

  const projectsPageData = useMemo(
    () => ({
      headerOne: 'Projects',
      descriptionOne:
        "Here are some of my recent projects. I've worked on a wide range of projects, from website and app design to branding and graphic design. Each project brings its own unique challenges and opportunities.",
    }),
    []
  );

  const contactData = useMemo(
    () => ({
      headerOne: 'Contact Me',
      descriptionOne:
        "Don't hesitate to get in touch! Whether you're looking for a design consult, interested in a collaboration, or just want to say hello, feel free to holla at me!",
      sections: [],
    }),
    []
  );

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              userData={userData}
              pageData={homeData as HomeData}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact
              pageData={contactData as ContactData}
              userData={userData}
            />
          }
        />
        <Route
          path="/projects"
          element={
            <Projects
              pageData={projectsPageData}
              userData={userData}
            />
          }
        />
        <Route
          path="/about"
          element={
            <About
              pageData={aboutData as AboutData}
              userData={userData}
            />
          }
        />
        <Route path="/:slug" element={<ProjectOr404 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
