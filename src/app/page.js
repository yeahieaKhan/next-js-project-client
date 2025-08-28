import HotProduct from "@/components/HotProduct";
import Lungi from "@/components/Lungi";
import Product from "@/components/Product";
import Slider from "@/components/Slider";
import { getServerSession } from "next-auth";

import Image from "next/image";
import { authOptions } from "./api/auth/[...nextauth]/route";
// import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <Slider></Slider>
      <HotProduct></HotProduct>
    </div>
  );
}
