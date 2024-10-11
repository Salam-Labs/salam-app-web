# Salam App Web Documentation

## Introduction

Welcome to the source code repository for Salam App website! Salam App is an advertisement-free and privacy-focused Islamic app that offers all the features a Muslim may need throughout their day with no compromises, and it's all for free!


## Technology Stack
#### You only need to know a little about most of them but you will need to focus on Astro and Tailwindcss.
- [**Astrojs**](https://docs.astro.build/en/getting-started/): A modern frontend framework for building fast, modern websites with less code.
- [**SolidJS**](https://www.solidjs.com/guides/getting-started/): A declarative JavaScript library for building user interfaces.
- [**Tailwind CSS**](https://tailwindcss.com/docs): A utility-first CSS framework for quickly building custom designs.
- [**Anime.js**](https://animejs.com/documentation/): A lightweight JavaScript animation library.
- [**Swiper**](https://swiperjs.com/get-started/): A modern mobile touch slider.
- [**MDX**](https://mdxjs.com/docs/): Markdown for the component era.
- [**Unplugin Icons**](https://icon-sets.iconify.design/): A collection of icons for use in web development projects.


## Installation

To get started with Salam App Web, follow these steps:

1. Ensure you have pnpm installed. If you don't have `pnpm` installed, you can install it globally using npm:
    ```bash
    npm install -g pnpm
    ```

    Note: You may need administrative privileges (sudo on Unix-based systems or run as administrator on Windows) to install pnpm globally.

2. Clone the repository, navigate into the project directory, and install dependencies with a single command:
    ```bash
    git clone https://github.com/Salam-Labs/salam-app-web
    cd salam-app-web
    pnpm install 
    pnpm start
    ```

    This command will clone the repository, navigate into the project directory, install all dependencies using pnpm, and start the development server.

## Page Structure 

- public (has all images, svg and json data)
- src
  - components
    - Card.astro
    - Features.astro
    - Footer.astro
    - Hero.astro
    - Stats.astro
    - WordBubble.astro
  - layouts
    - BlogLayout.astro
    - Layout.astro
  - pages
    - index.astro
    - data-deletion.astro
    - gallery.astro
    - privacy-policy.mdx
    - team.astro
    - version-history.astro
    - help-center
      - *.mdx
      
     - release
       - *.mdx
  - solid
    - Modal.jsx
    - Navbar.jsx
    - Testimonials.jsx

## How the project works
- first of all every astro page is under the astro js layout names `Layout.astro`
- every markdown file is under the `BlogLayout.astro`
- All pages have the `Navbar.jsx` at top 
- Every astro page has `Footer.astro` at bottom

<details>
 <summary>Index</summary>
 
  # Documentation for index.html
  
  ## Imports
  
  ### 1. Layout
  - **File Path:** `../layouts/Layout.astro`
  - **Description:** This file defines the layout for the entire application, including the header, footer, and the main content area.
  - **Components Imported:**
    - `Footer` from `"@components/Footer.astro"`
    - `NavBar` from `"../solid/Navbar.jsx"`
    - `SpeedInsights` from `"@vercel/speed-insights/astro"`
  
  #### Footer Component
  - **File Path:** `@components/Footer.astro`
  - **Description:** Defines the footer section of the application.
  - **Dependencies:**
    - None
  
  #### NavBar Component
  - **File Path:** `../solid/Navbar.jsx`
  - **Description:** Defines the navigation bar component.
  - **Dependencies:**
    - None
  
  #### SpeedInsights Component
  - **File Path:** `@vercel/speed-insights/astro`
  - **Description:** Provides insights and optimizations for improving website speed.
  - **Dependencies:**
    - None
  
  ### 2. Components
  #### Hero Component
  - **File Path:** `../components/Hero.astro`
  - **Description:** Renders the hero section of the application with a title, slogan, and a modal component.
  - **Dependencies:**
    - `Modal` from `"../solid/Modal.jsx"`
  
  ##### Modal Component
  - **File Path:** `../solid/Modal.jsx`
  - **Description:** Defines a modal component for displaying content in a pop-up window.
  - **Dependencies:**
    - `Dismiss` from `"solid-dismiss"`
    - `createSignal` from `"solid-js"`
  
  ### 3. Solid Library
  #### Dismiss Component
  - **File Path:** `solid-dismiss`
  - **Description:** Provides functionality for dismissing pop-up windows or modals.
  - **Dependencies:**
    - None
  
  #### createSignal Function
  - **File Path:** `solid-js`
  - **Description:** Creates a signal that can be used to track changes in a component's state.
  - **Dependencies:**
    - None
  
  ### 4. Other Libraries
  - No other external libraries imported directly in the `index.html` file.

</details>

<details>
  <summary>Gallery</summary>
  <h1>Gallery</h1>
  <h2>we list almost all of salam app features here</h2>
  <p>An example code looks like this:</p>

  ```jsx
  <!-- quran part starts here -->
  <div class="sm:flex sm:justify-around sm:m-6 lg:ml-52 2xl:ml-60">
    <div>
      <div class="text-center text-7xl font-bold mt-16 text-aquamarine" id="quran-tafsir">
        QURAN
      </div>
      <p class="text-white text-4xl font-semibold mt-10 ml-16">3 Modes</p>
      <ul class="mt-7 ml-28">
        <li class="text-white text-2xl font-medium list-disc">Verse by Verse</li>
        <li class="text-white text-2xl font-medium list-disc">Mushaf Mode</li>
        <li class="text-white text-2xl font-medium list-disc">List Mode</li>
      </ul>
      <p class="text-white text-4xl font-semibold mt-16 ml-16">Including</p>
      <ul class="mt-7 ml-28">
        <li class="text-white text-2xl font-medium list-disc">Tafsir</li>
        <li class="text-white text-2xl font-medium list-disc">Quran Audio</li>
        <li class="text-white text-2xl font-medium list-disc">Transliteration</li>
        <li class="text-white text-2xl font-medium list-disc">Bookmarks</li>
        <li class="text-white text-2xl font-medium list-disc">Translation</li>
      </ul>
    </div>
    <div class="swiper mySwiper mx-auto sm:mx-0 mt-12 flex-shrink-0">
      <div class="swiper-wrapper">
        <img src="/quran7.png" alt="quran image" class="swiper-slide min-w-full h-[665px] w-[356px]" />
        <img src="/quran1.png" alt="quran image" class="swiper-slide min-w-full h-[665px] w-[356px]" />
        <img src="/quran2.png" alt="quran image" class="swiper-slide min-w-full h-[665px] w-[356px]" />
        <img src="/quran3.png" alt="quran image" class="swiper-slide min-w-full h-[665px] w-[356px]" />
        <img src="/quran4.png" alt="quran image" class="swiper-slide min-w-full h-[665px] w-[356px]" />
        <img src="/quran5.png" alt="quran image" class="swiper-slide min-w-full h-[665px] w-[356px]" />
        <img src="/quran6.png" alt="quran image" class="swiper-slide min-w-full h-[665px] w-[356px]" />
        <img src="/tafsir1.png" alt="tafsir image" class="swiper-slide min-w-full h-[665px] w-[356px]" />
        <img src="/tafsir2.png" alt="tafsir image" class="swiper-slide min-w-full h-[665px] w-[356px]" />
        <img src="/tafsir3.png" alt="tafsir image" class="swiper-slide min-w-full h-[665px] w-[356px]" />
        <img src="/tafsir4.png" alt="tafsir image" class="swiper-slide min-w-full h-[665px] w-[356px]" />
      </div>
      <div class="swiper-pagination m-[-10px]"></div>
    </div>
  </div>
  <!--this part is quran only below is hadith -->
```
  And this just keeps repeating. Also, here is the Swiper JS part
  ```html
  <script>
  // i really hate swiper js
  // edit i dont anymore

  import Swiper from "swiper";
  import { Navigation, Pagination, Autoplay } from "swiper/modules";
  import "swiper/css";
  import "swiper/css/pagination";
  import "swiper/css/navigation";
  import "swiper/css/autoplay";

  // eslint-disable-next-line no-unused-vars
  const swiper = new Swiper(".mySwiper", {
    autoplay: {
      delay: 2000,
      pauseOnMouseEnter: true,
    },

    loop: true,
    preloadImages: false,
    lazy: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    modules: [Navigation, Pagination, Autoplay],
  });
</script>

  ```
</details>

<details>
  <summary>Team</summary>
  
  ## Data is loaded like this
  
  ```js
  const developers = [
    {
      name: "Saad",
      position: "Head App Developer",
      image: "saad.png",
  
      flags: [
        {
          src: "pakistan.svg",
          alt: "Pakistan flag",
        },
        {
          src: "canada.svg",
          alt: "Canada flag",
        },
      ],
  
      bio: "Computer Science graduate trying to serve the Ummah with his knowledge and skills. Also loves RuneScape (Oldschool).",
  
      links: [
        {
          github: "https://github.com/saad197",
        },
        {
          discord: "https://discord.com/users/692505234571788359",
        },
      ],
    },
    // Add other developer objects here
  ];
  ```
  ## The icons come from unplugin icons and svg are custom from [here](https://alexsobolenko.github.io/flag-icons/)
  ### We use tenary operator to add the links 
  ```js
{developer.links.map((link) => (
                    <a
                      key={Object.values(link)[0]}
                      class="text-white p-3"
                      target="_blank"
                      href={Object.values(link)[0]}
                      aria-label={`Link to ${Object.keys(link)[0]}`}
                    >
                      {Object.keys(link)[0] === "github" ? (
                        <CiGithub alt="GitHub logo" class="w-6 h-6" />
                      ) : Object.keys(link)[0] === "discord" ? (
                        <CiDiscord alt="Discord logo" class="w-6 h-6" />
                      ) : Object.keys(link)[0] === "website" ? (
                        <CiWebsite alt="Website logo" class="w-6 h-6" />
                      ) : Object.keys(link)[0] === "mail" ? (
                        <CiMail alt="Website logo" class="w-6 h-6" />
                      ) : null}
                    </a>
                  ))}
```
  </details>
 
<details>
 <summary>Help-Center</summary>
 
 ## Help Center is where all the modules are listed, modules are in markdown but this page is in astro
 - Fetch data from `searchData.json`
 - Generate Cards which are taken from components
 ```jsx
 //Components/Card.astro
 const { title, image, brief, link } = Astro.props;
 <div class="max-w-[320px] border-2 border-aquamarine-50 rounded-lg shadow-sm shadow-aquamarine-50 hover:shadow-md hover:shadow-aqu
amarine-60 bg-gray-80 hover:bg-smoke-50 m-4 transform translate-y-0 hover:-translate-y-5 transition-all duration-30">
    <a href={link}>
      <div class="">
        <img class="rounded-t-lg h-[180px] w-[320px]" src={image} alt={title} loading="lazy" />
      </div>
      <div class="px-3 py-2 text-center">
        <h5 class="mb-2 text-2xl font-bold tracking-tigh text-white">{title}</h5>
        <p class="mb-3 font-normal text-gray-40">{brief}</p>
      </div>
    </a>
 </div>
 ```
 - The cards part is generated on build time
 ```jsx
 {
    blogData.map((data) => (
      // card here
      <Card
        title={data.title}
        image={data.image}
        brief={data.brief}
        link={data.link}
      />
    ))
 }
 ```
 - Upon page load fetch the search data and listen for users key strokes
 - Based on the input show suggestions mainly links to go to that page
 ```jsx
 <a href="${suggestion.link}" class="block text-white focus:bg-smoke-50 focus:outline-none focus:rounded-lg">
    <div class="hover:rounded-lg flex hover:bg-smoke-50 transition-all duration-30">
      <div class="hidden sm:block flex justify-center items-center sm:min-w-5/6">
        <img class="rounded-l-xl align-middle" src="${suggestion.image}" height="250px" width="50px">
      </div>
      <div class="sm:w-full">
        <p class="p-2 text-white text-xl font-bold tracking-tigh sm:min-w-20">${suggestion.title}</p>
        <p class="p-2 text-base text-gray-40 max-h-20 overflow-hidden sm:min-w-20">${suggestion.brief}</p>
      </div>
    </div>
 </a>
 ```
 - There is a fixed button at the bottom of the page.
  ```jsx
  <div class="fixed bottom-0 right-0 m-4 z-50">
      <a
        href="https://discord.com/invite/bKqvBtD"
        target="_blank"
        class="flex items-center p-2 border-4 border-aquamarine-500 text-lg rounded-full text-aquamarine-500 hover:shadow bg-gray-800 hover:bg-smoke-500 m-4 transform duration-300"
      >
        <CiDiscord class="text-xl m-1" />
        <p>Get Support</p>
      </a>
    </div>
  ```
  # The images on this page are hosted on `https://articles.salam.app/General/`
   - only `1210saad` has access to it  
   - it is a cloudflare r2 bucket I think 
</details>

<details>
 <summary>Version-History</summary>
 
 # Version Histor Page (aka releases) 



### Overview

This displays the version history of the Salam App, presenting details such as release version, date, heading, and brief summary of changes for each version.

### Props

- **data**: Array of objects containing version information.
  - Each object should have the following properties:
    - **version**: String - The version number of the release.
    - **date**: String - The release date in the format "Month Day, Year".
    - **heading**: String - The heading or title of the release.
    - **brief**: String - A brief summary of the changes introduced in the release.
- note that they are all a tags as in all we generate from data are a tags.
- upon clicking them the mdx page for that version is opened.
- that page conatins data about that release.
### Example Data
```jsx
const data = [
  {
    version: "1.3.0",
    date: "Mar 11, 2024",
    heading: "Introducing Salam App 1.3.0!",
    brief:
      "This update brings many exciting features, including Cloud backup and the Reminder Swipe Module.",
  },

  {
    version: "1.2.0",
    date: "Jun 15, 2023",
    heading: "Introducing Salam App 1.2.0!",
    brief:
      "This update enhances prayer auto-detection for more accurate times and includes various fixes and improvements.",
  },]
```
and later used to map and generate on page build 
```jsx
 {
      data.map((item) => (
        <div class="flex justify-center p-2 mt-8 sm:mt-0 sm:p-5">
          <a
            href={`release/${item.version}`}
            class="flex flex-col items-center rounded-lg shadow md:flex-row w-11/12 lg:w-2/3 border-gray-800 bg-gray-900 hover:bg-gray-700"
          >
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h1 class="mb-2 text-4xl font-bold tracking-tight text-white">
                {item.heading}
              </h1>
              <div class="flex">
                <p class="mb-3 font-normaln  text-gray-200">
                  Date : {item.date}
                </p>
                <CiDate class="w-5 h-5 ml-2  fill-current text-grey-50" />
              </div>
              <p class="mb-3 font-normal text-lg text-gray-400">{item.brief}</p>
            </div>
          </a>
        </div>
      ))
    }
  ```
  
</details>

<details>
 <summary>Data Deletion Request</summary>
 
# Data Deletion Request
- Let user solve capctha
- Get token 
- After solving captha let user type on text field
- User types email so show the trash icon
- Ping the backend server with the token and mail
- Verify request on backend (captcha token)
- Send user Email with secret link
- User clicks link User is now verified to have the email they put before
- Redirect to delete page with salam.app/data-deletion#SUCCESS
- Tell user it was successful
## JavaScript Functionality

The Data Deletion Request page includes inline JavaScript scripts to handle the deletion request process, reCAPTCHA verification, and UI interactions.

### Handling reCAPTCHA

The page utilizes reCAPTCHA for user verification. When the reCAPTCHA is solved, the `onRecaptchaCallback` function is triggered, storing the response token. This token is then used to verify the user's authenticity during the data deletion process.

## Preventing Abuse

The page utilizes reCAPTCHA for user verification even in the backend for extra security.

### Initiating Data Deletion

The `remove()` function is responsible for initiating the data deletion process. It retrieves the user's email address from the input field and sends a POST request to the backend server (`https://salam-app-backend.onrender.com/delete`) along with the email and reCAPTCHA token. Upon successful deletion, the page content is replaced with a confirmation message instructing the user to check their email for further instructions.

### Email Input Field

The `<input>` tag with the id "email" allows users to input their email address. The input is checked for validity, and the data deletion button (`<CiTrash>`) becomes visible only when a valid email address is entered and reCAPTCHA is solved.

###  Usage

```html
<input
  type="email"
  id="email"
  aria-describedby="helper-text-explanation"
  class="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
  placeholder="example@gmail.com"
/>
```
- and the code for sending the request and showing button 
```html
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
  <script is:inline>
    //wake up the server
    var awake = new XMLHttpRequest();
    awake.open(
      "POST",
      "https://salam-app-backend.onrender.com/heartbeat",
      true,
    );
    awake.setRequestHeader("Content-Type", "text/plain");
    awake.send("awake");

    //server woken

    let solvedCaptcha = 0;
    var token;
    function handleRecaptcha() {
      grecaptcha.ready(function () {
        grecaptcha
          .execute("6Ldm02QpAAAAAL0_vVUB7nesbM4Yn8QT8OxBfa1E")
          .then(function (responseToken) {
            console.log("Response Token:", responseToken);
          }); // i dont know why but this does not show output
      });
    }
    // Callback function to handle reCAPTCHA completion
    function onRecaptchaCallback(response) {
      token = response;
      console.log("User solved reCAPTCHA. Response:", token);
      solvedCaptcha = 1;
    }

    function remove() {
      var email = document.getElementById("email").value;
      console.log("email  is");
      console.log(email);
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "https://salam-app-backend.onrender.com/delete", true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log(xhr.responseText);
        }
      };
      console.log(token);
      // xhr.send("email=" + email);
      xhr.send("email=" + email + "&token=" + token);
      //
      document.getElementById("main").innerHTML = "";
      document.getElementById("main").innerHTML =
        '<h1 class="text-center text-5xl text-aquamarine font-bold mb-16">Please check your mail</h1>' +
        '<p class="mb-10 text-lg text-center text-white">A confirmation link has been sent to your e-mail. Please click the link to in your mail account to confirm your data deletion request. The link expires in 10 minutes.</p>' +
        '<h1 class="text-center text-aquamarine font-bold mb-16">Check spam folder too.</h1>';
    }
    // Get the current URL
    var currentUrl = window.location.href;

    // Check if the URL contains '#success'
    if (currentUrl.includes("#success")) {
      document.getElementById("main").innerHTML = "";
      document.getElementById("main").innerHTML =
        '<h1 class="text-center text-5xl text-aquamarine font-bold mb-16">SUCCESS</h1>' +
        '<p class="text-center mb-10 text-lg text-white">Your data deletion request has been submitted; all your user data will be removed within the next few days. You can re-enable the sync feature by logging into Salam App, but old data will be irretrievable.</p>' +
        '<h1 class="text-center text-aquamarine font-bold mb-16">You may close this window.</h1> ';
    }

    //check for gmail.com
    document.getElementById("email").addEventListener("input", function () {
      var email = this.value;
      var button = document.getElementById("button");

      if (email.includes("@") && email.includes(".")) {
        if (solvedCaptcha == 1) {
          document.getElementById("button").classList.remove("hidden");
        }
      }
    });
  </script>
```  

- the backend code is not opensource for security reasons 
- will open up in future
</details>

<details>
 <summary>MDX Pages</summary>
 
# *.mdx
## In the project there are 3 types of them
- help-ceneter/*.mdx
- version-history/*.mdx
- privacy-policy.mdx


## overview
They are static and generated on build time there SEO stuff is handled by the `BlogLayout.astro` file
```jsx
---
// Import the NavBar component
import { NavBar } from "../solid/Navbar.jsx";
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width" name="viewport" />
    <link href="/favicon.ico" rel="icon" type="image/svg+xml" />

    <title>{Astro.props.title}</title>

    <!-- HTML Meta Tags -->
    <meta
      name="description"
      content={Astro.props.metaData || "Default description"}
    />

    <!-- Normal Meta Tags -->
    <meta property="og:url" content={Astro.props.link || "https://salam.app"} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={Astro.props.title} />
    <meta
      property="og:description"
      content={Astro.props.metaData || "Default description"}
    />
    <meta
      property="og:image"
      content={Astro.props.metaImage || "https://salam.app/image.png"}
    />

    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content="salam.app" />
    <meta
      property="twitter:url"
      content={Astro.props.link || "https://salam.app"}
    />
    <meta name="twitter:title" content={Astro.props.title} />
    <meta
      name="twitter:description"
      content={Astro.props.metaData || "Default description"}
    />
    <meta
      name="twitter:image"
      content={Astro.props.metaImage || "https://salam.app/image.png"}
    />
    <meta name="keywords" content={Astro.props.words || "salam,app"} />
  </head>
  <body class="bg-smoke-400">
    <NavBar client:load />

    <!-- Custom content here -->
    <div class="w-full flex justify-center">
      <div
        class="prose lg:prose-base sm:prose-xl xl:prose-2xl prose-blockquote:font-serif prose-a:text-lime-300 prose-a:underline align-middle prose-invert p-5 pt-16 sm:p-20"
      >
        <div
          class="prose-img:rounded-2xl sm:prose-img:w-1/2 sm:prose-img:mx-auto prose-h1:text-aquamarine-500 prose-h2:text-aquamarine-300"
        >
          <div
            class="bg-aquamarine-600 rounded-r-full h-1 left-0 w-0 fixed top-0 z-50"
            id="progressBar"
          >
          </div>
          <>
            <!-- Children content -->
            <slot />
          </>
        </div>
      </div>
    </div>
    <!-- Custom content ends here -->
  </body>

  <script>
    window.addEventListener("scroll", function () {
      var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;

      document.getElementById("progressBar").style.width = scrolled + "%";
    });
  </script>
</html>
```
- note that there is a progress bar it is the green line you see on top at the blog pages

This document lists the props used in the provided HTML file.

- **Astro.props.title**: String - Specifies the title of the webpage.
- **Astro.props.metaData**: String - Specifies the description metadata of the webpage. Defaults to "Default description" if not provided.
- **Astro.props.link**: String - Specifies the URL of the webpage. Defaults to "https://salam.app" if not provided.
- **Astro.props.metaImage**: String - Specifies the URL of the image metadata of the webpage. Defaults to "https://salam.app/image.png" if not provided.
- **Astro.props.words**: String - Specifies the keywords metadata of the webpage. Defaults to "salam,app" if not provided.

## the content for the slot may be markdown but html and jsx can also be used

# Help Center 
 - it was explained before 
 - here is a template
 ```jsx
import BlogLayout from "../../layouts/BlogLayout.astro";

<BlogLayout 
  title="Salam App Version 99 Names Module"
  metaImage="https://articles.salam.app/99_Names/Cover.png"
  metaData="Learn how to use the 99 Names in Salam App "
  link="https://salam.app/help-center/99-names"
  words="salam,app,99,names,module,help"
>

# Introduction to ASMA AL-HUSNA (99 Names of Allah) Module

## How to Open the Module:

**Step 1:** Open Salam App and press the Module Section Button at the bottom of your Screen.

![Module Section Button](https://articles.salam.app/99_Names/1.jpg)

**Step 2:** Click on the Module “Asma Al-Husna”

![Asma Al-Husna Module](https://articles.salam.app/99_Names/2.jpg)

This is what should be displayed.

![Module Display](https://articles.salam.app/99_Names/3.jpg)

## How to Navigate in the Module:

As you can see, there are all the 99 Names of Allah on this page. They include the meaning of each name and more information about it. To navigate, you have to scroll up or down.

Clicking on any name will open a new page which would show the meaning of that name. Scrolling down in this page will most likely provide more information about the name.

![Name Section](https://articles.salam.app/99_Names/4.jpg)

To go back, press the Arrow button at the top left corner of your screen.

![Exit Section](https://articles.salam.app/99_Names/5.jpg)

## Why the Module is in the Salam App & why is it beneficial to learn the 99 Names of Allah:

The Module is in Salam App because it is informational and provides a deeper understanding of the names of Allah. Learning and memorizing these names are very beneficial for the believers, as learning Allah's names will allow you to know Allah more, and remembering these names is what we as Muslims are supposed to do. The more you learn about Allah, and His names, the more you will increase in faith & Imaan.

The Prophet Muhammad صلى الله عليه وسلم said the following about the Asma'ul Husna: “Allah has 99 names. Whoever memorizes and embraces (ihsa) these qualities will enter heaven” (Bukhari).

Allah says in the Qur'an: “The most beautiful names belong to Allah: so call on Him by them; but shun such men as use profanity in His names: for what they do, they will soon be requited” (Surah al-Araf, verse 180).

<br />
<br />
<br />

_Last update: March 7, 2024_

    [Go To Help Center](/help-center)

</BlogLayout>
 ```
 - write markdown in between the layout
 - use 3 br tags to space
 - and a link to get back to help center page

# Version history
- they basically just list what happened on a version 
- we do have a template and looks like this 
```jsx
import BlogLayout from "../../layouts/BlogLayout.astro";

<BlogLayout 
  title="Salam App Version 1.0.0 🎉🎉"
  metaData="Version 1.0.0 of Salam App , Now with local backup and charity module"
  link="https://salam.app/release/1.0.0"
  words="salam,app,version,1.0.0,first,release"
>

# First release (1.0.0) 🎉🎉

## New Features ✨✨

- iOS widget issues fixed.
- iOS App icon updated.
- First time launch prayer time issues fixed.
- Theme switching fixed.
- Fixed home screen clock not updating.
- Prayer calculation method auto detection.
- Preview of Hadith module (still in progress, do not report bugs for it).
- Independent Tafsir module.
- Visual adjustments.
- Improvements to prayer tracker.
- Added quick access links to popular surahs in Quran module.
- Dark mode for Quran, Tafsir, and 99 names.
- Performance improvements.
- Pastel theme now has optimized resolution for assets for improved performance.
- Improved location detection for iOS.
- Compass will disable on manual location.
- New compass screen with haptic feedback.
- Additional prayer time calculation settings.
- Some background improvements to how updates are logged.
- 99 Names of Allah will now have adaptive theme with numbers.
- New theme system in progress.
- UI adjustments for better tablet support.
- Dark mode disabled temporarily in Quran and 99 names modules.
- On iOS, system zoom won't affect app.
- Added home screen widgets for iOS (still in progress). For Android coming soon.

## Known issues this release ⚠️⚠️

- Flashing in Tafsir. BE WARNED!.
- Prayer tracker taking vacation randomly.
- Home screen location not updating when location switches to local city.
- Home screen clock does not update.
- Home screen prayer tracker has positioning issues.
- Salah notifications may not set correctly first time, please disable and enable them after updated settings.
- App theme does not change automatically on first time launch of app after set up.
- On first time launch prayer countdown will ask to update settings, just go to settings page.

[Go To Version History Page](/version-history)

</BlogLayout>
```
- we try to use emojis like  🎉 ⚠️ 🛠️📱 🚀🚨
- 🎉 New Feature
- ⚠️ Known issues
- 🛠️ Bug Fixes
- 📱 Platform Specific
- 🚀 Other Changes
- 🚨 Critical Change or Special Note


# privacy policy 
- same as the 2 before

</details>


## Contribution Guidelines

- Follow [gitmoji convention](https://gitmoji.dev/)
- Follow the coding style and conventions used in the project.
- Write clear and concise commit messages.
- Test your changes thoroughly before submitting a pull request.
- Contribute to discussions and help fellow contributors where possible.

Feel free to contribute to the Salam App Web project and help make it even better!

If you have any questions or need further assistance, please don't hesitate to reach out to us. We're here to help!

