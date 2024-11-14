import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Tech Trends and Innovations",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Travel and Adventure",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Health and Wellness",
    description:
      "A supportive chatroom focused on mental health, fitness, nutrition, and overall well-being. Members can exchange advice, fitness routines, and wellness practices.",
    link: "https://google.com",
  },
  {
    title: "Book Club",
    description:
      "A space for book lovers to discuss current reads, favorite genres, author recommendations, and more. Members can also organize reading challenges and book reviews.",
    link: "https://meta.com",
  },
  {
    title: "Career Development",
    description:
      "For professionals and students to discuss job search tips, resume advice, skill-building, networking, and career growth strategies.",
    link: "https://amazon.com",
  },
  {
    title: "Hobbies and DIY Projects",
    description:
      "A creative chatroom where members can share their latest projects, from art and crafts to home improvement and gardening. It’s a space for inspiration and feedback.",
    link: "https://microsoft.com",
  },
];
