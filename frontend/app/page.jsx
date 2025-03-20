import Image from "next/image";
import about_image from "./public/about.png";

export default function Home() {
  return (
    <main>
      <Image
        src={about_image}
        alt="edgeBio"
        width={600}
        height={500}
      />
    </main>
  );
}
