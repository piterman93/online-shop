import image from "../../images/bac2.jpg";

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Your online shop - check us!</h1>
      <img src={image} alt="background home" />
    </div>
  );
};

export default Home;
