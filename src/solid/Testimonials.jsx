const testimonials = [
  [
    {
      content:
        "Love this app with the customability of the calculation methods and madhab selection. The Qibla compass is accurate for me. The design, aesthetics and themes are amazing.",
      author: {
        name: "Mohammed Khan",
      },
    },
    {
      content:
        "This is the one Quran app I found which has a lot of features I really like and does not blast ads in your face or tries to constantly get you to upgrade to a payed plan. Truly the best of all the apps I’ve tried for Quran, Adhan, etc.",
      author: {
        name: "Ansabzy",
      },
    },
  ],
  [
    {
      content:
        "This was an amazing app and beautifully made MashAllah! The design and UI of the app is very elegant and the Quran with the translations and Hadiths are an amazing addition as well considering it’s all ad-free.",
      author: {
        name: "FahmiK78",
      },
    },
    {
      content:
        "This actually really helps me study Quran and it even has an interactive tool to point you in the direction of Mecca! All without advertisements it’s super great, bless your hearts Salam team!",
      author: {
        name: "Cowboy7657",
      },
    },
  ],
  [
    {
      content:
        "Phenomenal. It really is ad-free and the features are really cool. It have qibla direction, Quran, and even salah tracker. I am quite impressed at what one can do for free.",
      author: {
        name: "Firdaus Safari",
      },
    },
    {
      content:
        "Never found a app without ads and this good. Widgets are amazing, I recommended this to my classmate and she has been using it a lot. Salam App should have more reviews and more people. Thank you for this app!",
      author: {
        name: "ABDULLAH MUAJ",
      },
    },
  ],
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="py-16 sm:py-24"
    >
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2
            id="testimonials-semi-title"
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Loved by Muslims Worldwide.
          </h2>
        </div>

        <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 items-stretch gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((column, columnIndex) => (
            <li className="h-full" key={columnIndex}>
              <ul className="grid h-full grid-rows-2 gap-6 sm:gap-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li className="h-full" key={testimonialIndex}>
                    <div class="motion-rise surface flex h-full min-h-[18rem] select-none flex-col rounded-xl border-l-4 border-l-[var(--accent)]">
                      <div class="flex h-full flex-col px-6 py-6">
                        <figure className="flex h-full flex-col">
                          <blockquote className="relative grow">
                            <p className="text-lg leading-8 tracking-tight text-white">
                              {testimonial.content}
                            </p>
                          </blockquote>
                          <figcaption className="relative mt-6 flex items-center justify-between border-t border-[var(--line)] pt-4">
                            <div>
                              <div className="text-sm font-semibold text-[var(--muted)]">
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
