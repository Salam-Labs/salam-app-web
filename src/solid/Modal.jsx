import Dismiss from "solid-dismiss";
import { createSignal } from "solid-js";

export const Modal = () => {
  const [open, setOpen] = createSignal(false);
  let btnEl;
  let btnSaveEl;

  // const onClickClose = () => {
  //   setOpen(false);
  // };

  const onClickOverlay = (e) => {
    if (e.target !== e.currentTarget) return;
    setOpen(false);
  };

  return (
    <div>
      <button
        type="submit"
        class=" relative w-52 rounded-md flex justify-center   border border-transparent px-5 py-3 bg-aquamarine text-base font-bold text-black shadow hover:bg-aquamarine-300 focus:outline-none focus:ring-2 focus:ring-aquamarine-900 focus:ring-offset-2 "
        ref={btnEl}
      >
        <svg
          class="m-1 mx-2"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <g fill="none" fill-rule="evenodd">
            <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
            <path
              fill="currentColor"
              d="M5.669 4.76a1.469 1.469 0 0 1 2.04-1.177c1.062.454 3.442 1.533 6.462 3.276c3.021 1.744 5.146 3.267 6.069 3.958c.788.591.79 1.763.001 2.356c-.914.687-3.013 2.19-6.07 3.956c-3.06 1.766-5.412 2.832-6.464 3.28c-.906.387-1.92-.2-2.038-1.177c-.138-1.142-.396-3.735-.396-7.237c0-3.5.257-6.092.396-7.235"
            />
          </g>
        </svg>
        Watch Trailer
      </button>
      {/* repeated here  and link was /r/download*/}
      <a
        href="#download"
        class="lg:hidden  relative mt-5 w-52 rounded-md flex justify-center items-center  border border-transparent pl-4 py-3 bg-aquamarine text-base font-bold text-black shadow hover:bg-aquamarine-300 focus:outline-none focus:ring-2 focus:ring-aquamarine-900 focus:ring-offset-2 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          width="25px"
          height="25px"
          viewBox="0 0 1080 1080"
          xml:space="preserve"
        >
          <defs></defs>
          <g
            transform="matrix(1 0 0 1 540 540)"
            id="f5bea70d-2f2d-48c6-8097-9b7bd8b52a2a"
          >
            <rect
              style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1; visibility: hidden;"
              vector-effect="non-scaling-stroke"
              x="-540"
              y="-540"
              rx="0"
              ry="0"
              width="1080"
              height="1080"
            />
          </g>
          <g
            transform="matrix(1 0 0 1 540 540)"
            id="405146e5-4966-4e0a-bcd2-de99452e6b94"
          ></g>
          <g transform="matrix(45 0 0 45 517.5 517.5)">
            <path
              style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
              transform=" translate(-12, -12)"
              d="M 11 4 L 11 16.175 L 5.4 10.575000000000001 L 4 12 L 12 20 L 20 12 L 18.6 10.575 L 13.000000000000002 16.174999999999997 L 13.000000000000002 4 z"
              stroke-linecap="round"
            />
          </g>
        </svg>
        Download App
      </a>

      <Dismiss
        menuButton={btnEl}
        open={open}
        setOpen={setOpen}
        modal
        removeScrollbar={false}
        focusElementOnOpen="menuPopup"
      >
        <div
          class="modal-container fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-blend-normal bg-black backdrop-blur-3xl bg-gray-500/30"
          onClick={onClickOverlay}
          role="presentation"
        >
          <div
            class="relative w-auto  bg-gray-500/30  items-end flex flex-col "
            role="dialog"
            aria-modal="true"
            tabindex="-1"
            ref={btnSaveEl}
          >
            <iframe
              src="https://www.youtube-nocookie.com/embed/RpmqwNaGMyM?vq=hd1080&modestbranding=1"
              width="800"
              height="450"
              title="A YouTube video"
              frameborder="0"
              allowfullscreen
            />
          </div>
        </div>
      </Dismiss>
    </div>
  );
};
