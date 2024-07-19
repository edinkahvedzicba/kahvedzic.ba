import { type FC, type ReactElement } from 'react';

const App: FC = (): ReactElement => {
  return (
    <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-4 px-4 py-4 xl:px-0">
      <h1>Edin Kahvedžić</h1>
      <h3>
        Hello, I'm Edin Kahvedžić, a web and mobile developer dedicated to
        creating seamless digital experiences.
      </h3>
      <h2>About me</h2>
      <p>
        I'm a web and mobile developer with a passion for turning ideas into
        functional and beautiful digital products. With a keen eye for detail
        and a commitment to excellence, I strive to deliver applications that
        are not only user-friendly but also innovative and efficient. My journey
        in tech started with a curiosity for how things work, which quickly
        evolved into a deep-seated love for coding and problem-solving. Whether
        it's building responsive websites or crafting intuitive mobile apps, I
        enjoy every step of the development process.
      </p>
      <h2>My work</h2>
      <p>
        I am currently working as a software developer at{' '}
        <a href="https://visiot.net/">Visiot d.o.o.</a>, where I focus on
        developing robust and scalable applications. My role involves
        collaborating with a talented team to create innovative solutions that
        meet our clients' needs.
      </p>
      <p>
        Previously, I have extensive experience as a freelance developer,
        delivering high-quality web and mobile applications for various clients.
        At <a href="https://lab387.com/">Lab387</a>, I specialized in PHP and
        Laravel development, contributing to the creation of dynamic and
        responsive web applications. My work included both backend and frontend
        development, ensuring seamless user experiences. In my dual role at{' '}
        <a href="https://teneo.ba/">Teneo d.o.o.</a> as a Software Developer &
        IT Consultant, I not only developed software solutions but also provided
        IT consultancy services, helping clients optimize their technology
        strategies and streamline their operations.
      </p>
      <p>
        As a team lead at <a href="https://www.bloola.com/">bloola GmbH</a>, I
        led a group of talented developers, guiding them through complex
        projects and ensuring timely and successful deliveries. My leadership
        helped foster a collaborative and productive team environment. At both{' '}
        <a href="https://indevitus.com/">Indevitus d.o.o.</a> and{' '}
        <a href="https://bragg.group/">Bragg Group</a>, I worked on a variety of
        software development projects, gaining valuable experience in different
        industries and technology stacks. My contributions were integral to the
        success of numerous projects.
      </p>
      <h2>Contact information</h2>
      <p>
        You can reach me through the following channels:{' '}
        <a href="mailto:edin@kahvedzic.ba">Email</a>,{' '}
        <a href="https://github.com/edinkahvedzicba">Github</a>,{' '}
        <a href="https://ba.linkedin.com/in/edinkahvedzic">Linkedin</a> and{' '}
        <a href="https://x.com/edinkahvedzicba">X</a>
      </p>
    </div>
  );
};

export default App;
