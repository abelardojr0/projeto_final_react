import { Link } from "react-router-dom";
import Card from "../../components/Card";
import { HomeGames, HomeSection, HomeTitle } from "./style";

function Home() {
  return (
    <>
      <HomeSection>
        <HomeTitle>Categorias</HomeTitle>
        <HomeGames>
          <Link to={"/mmorpg"} style={{ textDecoration: "none" }}>
            <Card
              title={"MMORPG"}
              image={"https://images5.alphacoders.com/640/640377.jpg"}
              id={"mmorpg"}
            />
          </Link>

          <Link to={"/fps"} style={{ textDecoration: "none" }}>
            <Card
              title={"FPS"}
              image={"https://cdn.wallpapersafari.com/9/23/7Fl16w.jpg"}
              id={"fps"}
            />
          </Link>

          <Link to={"/moba"} style={{ textDecoration: "none" }}>
            <Card
              title={"MOBA"}
              image={
                "https://images.hdqwalls.com/wallpapers/2019-genesis-moba-n0.jpg"
              }
              id={"moba"}
            />
          </Link>
        </HomeGames>
      </HomeSection>
    </>
  );
}

export default Home;
