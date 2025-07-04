"use client";

import Background from "@/components/GeneralComponents/Background";
import ButtonRedirect from "@/components/GeneralComponents/Button";
import { ScrollFeature } from "@/components/GeneralComponents/ScrollFeature";
import OnePiece from "@/assets/GeneralImages/OnePieceRoadMap.png";
import Mugis from "@/assets/GeneralImages/Mugis.png";
import GeneralOnepiece from "@/assets/GeneralImages/One_Piece.png";

const Home = () => {
  return (
    <Background image={GeneralOnepiece}>
      <main className="flex justify-center items-center h-screen">
        <ScrollFeature
          title="Welcome to the One Piece Roadmap!"
          text="Explore the vast world of One Piece. Discover sagas, characters, islands and much more!"
          imageUrl={OnePiece.src}
          bottomImageUrl={Mugis.src}
        >
          <div className="flex space-x-4">
            <ButtonRedirect text="Start Adventure" route="/map" />
            <ButtonRedirect text="Choose Saga" route="/sagas" />
          </div>
        </ScrollFeature>
      </main>
    </Background>
  );
};

export default Home;
