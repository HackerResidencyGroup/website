import Image from "next/image";
import Link from "next/link";

export default function PeoplePage() {
  const team = [
    {
      name: "Travis Fischer",
      role: "Founder",
      image: "/people/travis.jpg",
      description:
        "Founder of Agentic. 2 exits. Prev HF0, Microsoft Research, and Amazon.",
      links: {
        x: "https://x.com/transitive_bs",
        github: "https://github.com/transitive-bullshit",
        linkedin: "https://linkedin.com/in/fisch2",
      },
    },
    {
      name: "Tony Dinh",
      role: "Founder",
      image: "/people/tony.jpg",
      description:
        "Making over $1M ARR solo while building typingmind.com and devutils.com.",
      links: {
        x: "https://x.com/tdinh_me",
        github: "https://github.com/trungdq88",
        linkedin: "https://www.linkedin.com/in/tdinh-me/",
      },
    },
    {
      name: "Minh-Phuc Tran",
      role: "Founder",
      image: "/people/phuc.jpg",
      description:
        "Built 8 startups in 12 months. Sold 3/8 startups. Building multiple SaaS.",
      links: {
        x: "https://x.com/phuctm97",
        github: "https://github.com/phuctm97",
        linkedin: "https://www.linkedin.com/in/phuctm97/",
      },
    },
    {
      name: "David Park",
      role: "Founder",
      image: "/people/david.jpg",
      description:
        "Built Raya & Kippo and then 120 other apps. Building Nomad Social.",
      links: {
        x: "https://x.com/dayonefoundry",
        github: "https://github.com/davidvypark",
        linkedin: "https://www.linkedin.com/in/david-park-69587844/",
      },
    },
  ];

  return (
    <div className="min-h-screen px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl tracking-tight">People</h1>
          <p className="text-lg opacity-60">
            Learn from builders who've done it.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-16">
          {team.map((person, index) => (
            <div key={index} className="flex gap-8 items-start">
              <div className="w-24 h-24 flex-shrink-0 overflow-hidden">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={96}
                  height={96}
                  className="object-cover"
                  style={{ filter: "grayscale(100%)" }}
                  priority
                />
              </div>
              <div className="space-y-3">
                <div>
                  <h2 className="text-2xl">{person.name}</h2>
                  <p className="text-sm opacity-60 mt-1">{person.role}</p>
                </div>
                <p className="opacity-60 leading-relaxed">
                  {person.description}
                </p>
                <div className="flex gap-4">
                  {person.links.x && (
                    <a
                      href={person.links.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-60 hover:opacity-100 transition-opacity text-sm"
                    >
                      X
                    </a>
                  )}
                  {person.links.github && (
                    <a
                      href={person.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-60 hover:opacity-100 transition-opacity text-sm"
                    >
                      GitHub
                    </a>
                  )}
                  {person.links.linkedin && (
                    <a
                      href={person.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-60 hover:opacity-100 transition-opacity text-sm"
                    >
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* What We Look For */}
        <div className="border-t border-[theme(--color-border)] pt-12">
          <h2 className="text-2xl mb-8 text-center">What We Look For?</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg mb-3">Technical Excellence</h3>
              <p className="opacity-60 leading-relaxed">
                Strong engineering skills with the ability to build and ship
                products quickly.
              </p>
            </div>
            <div>
              <h3 className="text-lg mb-3">Entrepreneurial Spirit</h3>
              <p className="opacity-60 leading-relaxed">
                Track record of building projects, startups, or side projects.
                Bias for action.
              </p>
            </div>
            <div>
              <h3 className="text-lg mb-3">Clear Vision</h3>
              <p className="opacity-60 leading-relaxed">
                Know what you want to build and why. Have a plan for the month.
              </p>
            </div>
            <div>
              <h3 className="text-lg mb-3">Growth Mindset</h3>
              <p className="opacity-60 leading-relaxed">
                Open to feedback, eager to learn, and ready to help others
                succeed.
              </p>
            </div>
          </div>
        </div>

        {/* Apply CTA */}
        <div className="text-center pt-8">
          <p className="opacity-60 mb-6">Ready to join us?</p>
          <Link
            href="/apply"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground text-sm hover:opacity-90 transition-opacity"
          >
            Apply
          </Link>
        </div>
      </div>
    </div>
  );
}
