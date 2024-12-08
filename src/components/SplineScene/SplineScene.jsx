import Spline from "@splinetool/react-spline";
import "./spline.css";
import Social from "../SplineScene/Social";
export default function Home() {
  return (
    <main className="spline">
      <Spline scene="https://prod.spline.design/jrSbZGdCikX4Fh0P/scene.splinecode" />
      <Social />
      <div className="logo-cover">
        <p>Scroll Down</p>
      </div>
    </main>
  );
}
