export default function FAQPage() {
  const faqs = [
    {
      question: "Who are we looking for?",
      answer: "If you're reading this, there's a good chance we're looking for you. 😊 We're looking to invite 10 ambitious, AI-native developers / founders who're serious about taking their startup game to the next level. While we will be staying in a luxurious tropical villa and there will be plenty of time to do touristy stuff (Da Nang is absolutely _beautiful_), what we're really looking for is like-minded devs who're excited to lock in and BUILD alongside us."
    },
    {
      question: "How much does it cost?",
      answer: "Since we're doing this as an experiment, our first batch will be FREE (unless your company is venture backed). You just have to pay for your flights. We're covering all the costs for the villa, catering, laundry, a professional videographer, and even your very own personal assistant for the month. If your company is venture backed, we'll ask for a small fee to help cover our costs. If you haven't taken any outside funding for your current company, the program will be 100% free."
    },
    {
      question: "Are we taking any equity or rev share?",
      answer: "No. We're not taking any equity or rev share since we're looking at this first residency as a proof of concept, but we'll consider how to make this more sustainable for future batches if it goes well."
    },
    {
      question: "Are you accepting sponsors?",
      answer: "Yes. We are looking for a few select sponsors to help cover the costs, so please DM me or David if you align w/ our vibes and are interested in getting massive marketing exposure to our audience of devs."
    },
    {
      question: "Do I get my own room?",
      answer: "Yes! Everyone we invite will get their own private room + bathroom. We're all adults here, and getting great sleep is a key part of being productive."
    },
    {
      question: "If I can't come for the full month, can I still participate?",
      answer: "Short answer: maybe. Longer answer: we're really looking for 10 committed devs who will be able to share the full container experience with us for the entire month of November, 2025. We will consider a few select offers if you're an exceptional technical founder who absolutely loves what we're doing, but in general we really want people who can commit to the full month."
    }
  ];

  return (
    <div className="min-h-screen px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-lg opacity-60">
            Everything you need to know about Hacker Residency.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-12">
          {faqs.map((faq, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-lg font-medium">
                {faq.question}
              </h3>
              <p className="opacity-60 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="border-t border-[theme(--color-border)] pt-12 text-center space-y-4">
          <h2 className="text-2xl">Still have questions?</h2>
          <p className="opacity-60">
            Reach out to us at{" "}
            <a 
              href="mailto:hello@hackerresidency.com" 
              className="underline hover:no-underline"
            >
              hello@hackerresidency.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}