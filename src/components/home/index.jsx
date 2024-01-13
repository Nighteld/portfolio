import { firstName, role } from "../../utils/constants";

export default function LandingPage() {
  return (
    <div className="hero-section">
      <span className="title-heading">
        <img
          src="/star.svg"
          srcset=""
          alt=""
          width=""
          height=""
          loading="lazy"
          class="star-heading-two"
        />
        <span className="span-block">Hi. I'm {firstName}</span>

        <img
          src="/star.svg"
          srcset=""
          alt=""
          width=""
          height=""
          loading="lazy"
          class="star-heading"
        />
        <span className="span-block">A {role} .</span>
      </span>
      <p className="text-center fs-4 mt-4">
        I'm passionate about crafting experiences that are engaging, accessible,
        and user-centric.
      </p>
    </div>
  );
}
