import Image from "next/image";
import bg from "../../public/background/home-background.png"
import RenderModel from "@/components/RenderModel";
import Wizard from "@/components/models/wizard";
import Navigation from "@/components/navigation" 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt="background-image" fill className="w-full min-h-screen object-cover object-center opacity-25"></Image>
      <div className="w-full h-screen">
        <Navigation></Navigation>
        <RenderModel>
          <Wizard></Wizard>
        </RenderModel>
      </div>
    </main>
  );
}
