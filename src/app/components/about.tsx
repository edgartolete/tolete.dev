import { Container } from "@/components/container";
import { differenceInYears } from "date-fns";

const initialReactExp = new Date("February 20 2023");
const initialFrontendExp = new Date("September 20 2020");
const frontendYrsExp = differenceInYears(new Date(), initialFrontendExp);
const reactYrsExp = differenceInYears(new Date(), initialReactExp);

export function About() {
  return (
    <Container className="py-20" id="about">
      <h2 className="font-bold text-center text-3xl"> About Me</h2>
      <p className="mt-6">
        I am a web developer with {frontendYrsExp}+ years of experience,
        and &nbsp; {reactYrsExp}+ years of experience using React/NextJS
        framework. I graduated with a Bachelor&apos;s degree in Information
        Technology in 2013.
      </p>

      <p className="mt-6">
        I am a passionate and dedicated web developer with strong experience in
        building and optimizing user interfaces. I have continuously enhanced my
        skills in testing, debugging, and improving web functionality to deliver
        high-quality digital experiences.
      </p>

      <p className="mt-6">
        Hard-working by nature and an enthusiastic team player, I take pride in
        my commitment to every task I take on. I am always eager to learn and
        grow—both technically and interpersonally—while staying up to date with
        the latest trends and best practices in website design and development.
      </p>

      <p className="mt-6">
        I thrive in collaborative environments, actively contributing ideas in
        brainstorming sessions and working closely with teams and clients to
        bring creative solutions to life. I’m confident in managing projects,
        perform well under pressure, and consistently meet deadlines. I value
        constructive feedback as a tool for growth and always maintain a high
        level of professionalism in everything I do.
      </p>
    {/* <Testimonials /> */}
    {/*<Certifications /> */}
    </Container>
  );
}



// function Testimonials(){
//   return (
//     <Container className="py-20" id="testimonials">
//       <h3 className="font-bold text-start text-xl">Testimonials</h3>
//       <p className="mt-6">
//         I have completed the following certifications:
//       </p>
//
//     </Container>
//   );
// }

// function Certifications(){
//   return (
//     <Container className="py-20" id="certifications">
//       <h3 className="font-bold text-start text-xl"> Certifications</h3>
//       <p className="mt-6">
//         I have completed the following certifications:
//       </p>
//
//     </Container>
//   );
// }
//
