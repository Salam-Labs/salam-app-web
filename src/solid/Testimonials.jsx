

const testimonials = [
  [
    {
      content:
        "TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.",
      author: {
        name: "Sheryl Berge",

      },
    },
    {
      content:
        "I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.",
      author: {
        name: "Amy Hahn",

      },
    },
  ],
  [
    {
      content:
        "The best part about TaxPal is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
      author: {
        name: "Leland Kiehn",

      },
    },
    {
      content:
        "There are so many things I had to do with my old software that I just don’t do at all with TaxPal. Suspicious but I can’t say I don’t love it.",
      author: {
        name: "Erin Powlowski",

      },
    },
  ],
  [
    {
      content:
        "I used to have to remit tax to the EU and with TaxPal I somehow don’t have to do that anymore. Nervous to travel there now though.",
      author: {
        name: "Peter Renolds",

      },
    },
    {
      content:
        "This is the fourth email I’ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.",
      author: {
        name: "Amy Hahn",

      },
    },
  ],
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="py-20 sm:py-32"
    >
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2
            id="testimonials-title"
            className="font-display font-bold text-3xl tracking-tight text-white sm:text-4xl"
          >
            Loved by businesses worldwide.
          </h2>
          <p className="mt-4 text-white text-lg tracking-tight text-slate-700">
            Our software is so simple that people can’t help but fall in love
            with it. Simplicity is easy when you just skip tons of
            mission-critical features.
          </p>
        </div>

        <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul className="space-y-6 sm:space-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <div class="relative group shadow-xl shadow-slate-900">
                      <div class="absolute -inset-1 bg-gradient-to-r from-aquamarine-600 to-indigo-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                      <div class="relative px-7 py-6 bg-smoke-400 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-9  border-2 border-aquamarine">
                        <figure className="relative rounded-2xl  p-6 ">
                          <blockquote className="relative">
                            <p className="text-xl tracking-tight  text-white">
                              {testimonial.content}
                            </p>
                          </blockquote>
                          <figcaption className="relative mt-6 flex flex-row-reverse  items-center justify-between border-t border-slate-100 pt-6">
                            <div>
                              <div className="font-display text-base text-white">
                                {testimonial.author.name}
                              </div>
                            </div>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
