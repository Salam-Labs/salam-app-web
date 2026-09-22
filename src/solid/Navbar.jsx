import { createSignal } from "solid-js";

export const NavBar = () => {
  const [show, setShow] = createSignal(false);
  return (
    <nav class="relative z-[100] border-b border-[var(--line)] bg-[var(--page)]">
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <a href="/" aria-label="Link to homepage">
                <img
                  class="mr-3 h-10 w-10"
                  src="/icon.svg"
                  width="45"
                  height="45"
                  alt="salam app logo"
                />
              </a>
            </div>
          </div>
          <div class=" flex items-center sm:hidden">
            <button
              type="button"
              class="inline-flex items-center rounded-md border border-[var(--line)] px-3 py-2 text-sm font-semibold text-white hover:border-[var(--accent)] hover:text-[var(--accent)]"
              // focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aquamarine-300
              aria-controls="mobile-menu"
              aria-expanded={show()}
              aria-label="Toggle navigation menu"
              onClick={() => setShow(!show())}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 24 24"
              >
                <path
                  class="font-bold p-5"
                  fill="currentColor"
                  d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"
                />
              </svg>
              {/* <p class="mx-1">Menu</p> */}
              {/* Menu*/}
            </button>
          </div>
          <div class="flex-1 items-center justify-center sm:items-stretch sm:justify-start hidden sm:block ">
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4 justify-end items-center">
                <a
                  href="https://salam-app.canny.io/"
                  target="_blank"
                  class="rounded-md px-2 py-2 text-xs font-medium uppercase tracking-wide text-[var(--muted)] hover:text-white lg:px-3"
                >
                  Feature request
                </a>
                <a
                  href="/gallery"
                  class="rounded-md px-2 py-2 text-xs font-medium uppercase tracking-wide text-[var(--muted)] hover:text-white lg:px-3"
                >
                  Gallery
                </a>
                <a
                  href="/team"
                  class="rounded-md px-2 py-2 text-xs font-medium uppercase tracking-wide text-[var(--muted)] hover:text-white lg:px-3"
                >
                  Team
                </a>
                <a
                  href="/help-center"
                  class="rounded-md px-2 py-2 text-xs font-medium uppercase tracking-wide text-[var(--muted)] hover:text-white lg:px-3"
                >
                  Help center
                </a>
                <a
                  href="/version-history"
                  class="rounded-md px-2 py-2 text-xs font-medium uppercase tracking-wide text-[var(--muted)] hover:text-white lg:px-3"
                >
                  Version history
                </a>
                <a
                  href="/privacy-policy"
                  class="rounded-md px-2 py-2 text-xs font-medium uppercase tracking-wide text-[var(--muted)] hover:text-white lg:px-3"
                >
                  Privacy policy
                </a>

                <a
                  class="inline-flex items-center rounded-md border border-transparent bg-aquamarine px-5 py-2 text-sm font-semibold text-black hover:bg-aquamarine-300"
                  href="/#app-download"
                >
                    <p className="mx-1">Download</p>
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M462.595 399.003c-7.743 17.888-16.908 34.353-27.527 49.492c-14.474 20.637-26.326 34.923-35.459 42.855c-14.159 13.021-29.329 19.69-45.573 20.068c-11.662 0-25.726-3.318-42.096-10.05c-16.425-6.7-31.519-10.019-45.32-10.019c-14.475 0-29.999 3.318-46.603 10.019c-16.63 6.731-30.027 10.24-40.27 10.587c-15.578.664-31.105-6.195-46.603-20.606c-9.892-8.628-22.265-23.418-37.088-44.372c-15.903-22.375-28.977-48.322-39.221-77.904c-10.969-31.952-16.469-62.892-16.469-92.846c0-34.313 7.414-63.906 22.265-88.706c11.672-19.92 27.199-35.633 46.631-47.169s40.431-17.414 63.043-17.79c12.373 0 28.599 3.827 48.762 11.349c20.107 7.547 33.017 11.375 38.677 11.375c4.232 0 18.574-4.475 42.887-13.397c22.992-8.274 42.397-11.7 58.293-10.35c43.076 3.477 75.438 20.457 96.961 51.05c-38.525 23.343-57.582 56.037-57.203 97.979c.348 32.669 12.199 59.855 35.491 81.44c10.555 10.019 22.344 17.762 35.459 23.26c-2.844 8.248-5.846 16.149-9.038 23.735zM363.801 10.242c0 25.606-9.355 49.514-28.001 71.643c-22.502 26.307-49.719 41.508-79.234 39.11a79.735 79.735 0 0 1-.594-9.703c0-24.582 10.701-50.889 29.704-72.398c9.488-10.89 21.554-19.946 36.187-27.17C336.464 4.608 350.275.672 363.264-.001c.379 3.423.538 6.846.538 10.242z"
                        ></path>
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="m14.975 3.019l.96-1.732a.193.193 0 0 0-.338-.187l-.97 1.75a6.541 6.541 0 0 0-5.253 0l-.97-1.75a.193.193 0 0 0-.34.187l.96 1.732a5.546 5.546 0 0 0-3.092 4.876h12.137a5.546 5.546 0 0 0-3.094-4.876ZM9.2 5.674a.507.507 0 1 1 .507-.506a.507.507 0 0 1-.507.506Zm5.602 0a.507.507 0 1 1 .507-.506a.507.507 0 0 1-.507.506ZM5.93 17.171A1.467 1.467 0 0 0 7.4 18.64h.973v3a1.36 1.36 0 1 0 2.721 0v-3h1.814v3a1.36 1.36 0 1 0 2.72 0v-3h.974a1.467 1.467 0 0 0 1.468-1.468V8.375H5.93Zm-1.867-9.03a1.362 1.362 0 0 0-1.36 1.361v5.669a1.36 1.36 0 1 0 2.72 0V9.502a1.362 1.362 0 0 0-1.36-1.36Zm15.872 0a1.362 1.362 0 0 0-1.36 1.361v5.669a1.36 1.36 0 1 0 2.72 0V9.502a1.362 1.362 0 0 0-1.36-1.36Z"
                        ></path>
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        class="pl-1"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M0 0h11.233v11.233H0zm12.767 0H24v11.233H12.767zM0 12.767h11.233V24H0zm12.767 0H24V24H12.767z"
                        />
                      </svg>
                    </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class={show() ? "relative z-20 sm:hidden" : "relative z-20 hidden sm:hidden"} id="mobile-menu">
        <div class="absolute w-full space-y-1 border-t border-[var(--line)] bg-[var(--page)] px-2 pb-3 pt-2">
          <a
            href="https://salam-app.canny.io/"
            class="block rounded-md px-3 py-2 text-base font-medium text-[var(--muted)] hover:bg-[var(--surface-raised)] hover:text-white"
            aria-current="page"
          >
            Feature Request
          </a>

          <a
            href="/gallery"
            class="block rounded-md px-3 py-2 text-base font-medium text-[var(--muted)] hover:bg-[var(--surface-raised)] hover:text-white"
          >
            Gallery
          </a>

          <a
            href="/team"
            class="block rounded-md px-3 py-2 text-base font-medium text-[var(--muted)] hover:bg-[var(--surface-raised)] hover:text-white"
          >
            Team
          </a>
          <a
            href="/help-center"
            class="block rounded-md px-3 py-2 text-base font-medium text-[var(--muted)] hover:bg-[var(--surface-raised)] hover:text-white"
          >
            Help Center
          </a>
          <a
            href="/version-history"
            class="block rounded-md px-3 py-2 text-base font-medium text-[var(--muted)] hover:bg-[var(--surface-raised)] hover:text-white"
          >
            Version History
          </a>

          <a
            href="/#app-download"
            class="block rounded-md px-3 py-2 text-base font-medium text-[var(--muted)] hover:bg-[var(--surface-raised)] hover:text-white"
          >
            Download
          </a>
          <a
            href="/privacy-policy"
            class="block rounded-md px-3 py-2 text-base font-medium text-[var(--muted)] hover:bg-[var(--surface-raised)] hover:text-white"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </nav>
  );
};
