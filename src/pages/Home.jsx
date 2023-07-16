import Hero from "../components/Hero";
const Home = () => {
  console.log(import.meta.env.VITE_OPENAI_KEY);
  return (
    <>
      <Hero />
    </>
  );
};

export default Home;
