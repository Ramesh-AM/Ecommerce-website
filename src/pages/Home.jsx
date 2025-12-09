import Carousel from "../components/carousel";
import slider1 from "../assets/black-friday.avif"
import slider2 from "../assets/black-friday-1.jpg"
import slider3 from "../assets/slide3.avif"
import slider4 from "../assets/slide4.jpg"

const images = [
  slider1,
  slider2,
  slider3,
  slider4
];

export default function Home() {
  return (
    <div>
      <Carousel images={images} />
      <section className="container mx-auto p-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Welcome to MyStore</h2>
        <p className="text-gray-600">Your one-stop shop for all premium products.</p>
      </section>
    </div>
  );
}