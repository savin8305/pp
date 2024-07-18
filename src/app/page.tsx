
import Hero from "@/components/Home/Hero";
import MainPage from "@/components/OurMachine/MainPage";
export default function Home() {

  return (
    <main className="bg-[#f5f5f5]">
      <Hero/>
      <div className="my-12 text-black text-4xl text-center">Our Machines</div>
      <MainPage/>
    </main>
  );
}
