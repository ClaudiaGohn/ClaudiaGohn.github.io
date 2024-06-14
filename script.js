/*****************************
 * MODIFY SITE CONTENT HERE
 ****************************/
const data = {
  home: {
    video: {
      title: "How Can a Psychic Change Your Life?",
      link: "https://vimeo.com/904624779"
    },
    about: [
      "Claudia Gohn is an emerging documentary filmmaker and journalist based in New York and Virginia. She graduated in 2022 from Columbia University, where she earned her B.A. in English and Hispanic Studies. Following graduation, she became the Post-Baccalaureate Follow at Barnard College's Media Center, where her responsibilities as a fellow include managing the production studio, developing workshops, assisting with social media, and other administrative tasks.",
      "In addition to her fellowship, Claudia is a part-time student at Columbia University's Graduate School of Journalism. Her reporting at the school has included coverage of the Astoria neighborhood in Queens and housing rights in the city. She intends to continue developing her skills as a reporter and visual journalist.",
      "Claudia is also a freelance journalist, and her work has recently been included in Rolling Stone, Al Jazeera English, and C-VILLE Weekly.",
      "In her free time, Claudia enjoys reading, making friendship bracelets, and watching reality television."
    ],
    highlights: [
       {
        title: "In New York, Israeli conscientious objectors find community after ostracism",
        description: "Mandatory military service in Israel has left some young Israelis facing a stark choice: fight or be branded outsiders.",
        image: "shoresh.JPEG",
        link: "https://www.aljazeera.com/features/2024/3/1/in-new-york-israeli-conscientious-objectors-find-community-after-ostracism"
      },
      {
        title: "Dousing the fire",
        description: "Madison County volunteers help fight the Quaker Run blaze.",
        image: "dousing-the-fire.jpg",
        link: "https://www.c-ville.com/dousing-the-fire"
      },
      {
        title: "Building Solidarity Among Astoria Tenants",
        description: "A budding tenants union in Astoria hopes to organize across buildings.",
        image: "building-solidarity.jpg",
        link: "https://indypendent.org/2023/12/building-solidarity-among-astoria-tenants/"
      },
    ],
    portfolio: {
      writing: [
        {
          title: "Inside the Columbia University Student Encampment — and the Crackdown",
          image: "ROLLINGSTONE.PNG",
          link: "https://www.rollingstone.com/politics/politics-features/columbia-university-inside-student-encampment-protest-crackdown-1235013724/"
        },
        {
          title: "Inside the NYPD’s ‘Dystopian’ Raid on Columbia Student Protesters",
          image: "HELLGATE.PNG",
          link: "https://hellgatenyc.com/nypd-raid-columbia-student-protesters-gaza-encampment-hamilton-hall"
        },
        {
          title: "Police and pro-Palestine protests at Columbia University",
          image: "CTXT.PNG",
          link: "https://ctxt.es/es/20240401/Politica/46234/Claudia-Gohn-Anna-Oakes-protests-columbia-university-palestine.htm"
        },
        {
          title: "Dousing the fire",
          image: "dousing-the-fire.jpg",
          link: "https://www.c-ville.com/dousing-the-fire"
        },
        {
          title: "Building Solidarity Among Astoria Tenants",
          image: "building-solidarity.jpg",
          link: "https://indypendent.org/2023/12/building-solidarity-among-astoria-tenants/"
        },
        {
          title: "Another day, another Olympian: UVA women’s swim team adds Olympic medalist to its roster",
          image: "claire-curzan.jpeg",
          link: "https://www.c-ville.com/another-day-another-olympian"
        },
        {
          title: "Living legacy: Fourth-year UVA swimmers lead team to third national title",
          image: "living-legacy.jpeg",
          link: "https://www.c-ville.com/living-legacy"
        }
      ],
      filmmaking: [
        {
          title: "How Can A Psychic Change Your Life?",
          image: "psychic-change-life.png",
          link: "https://vimeo.com/904624779?share=copy"
        }
      ],
      audio: [
        {
          title: "Nature and Justice: Multimedia Artist Saharah Uses Her Voice to Demand Action",
          image: "nature-justice.jpg",
          link: "https://open.spotify.com/episode/1Oi1ObLv4DQyTfMDMq7cHM?si=f33e671578ef4858"
        }
      ],
      photography: [
      ]
    }
  }
};
/*****************************
 * END CONTENT MODIFICATION
 ****************************/

function carouselItem(item, index, large = false) {
  const div = document.createElement("div");
  div.classList.add("carousel-item");
  index === 0 && div.classList.add("first-item");
  large && div.classList.add("large");
  const anchor = document.createElement("a");
  anchor.href = item.link;
  anchor.target = "_blank";
  const image = document.createElement("img");
  image.src = `assets/images/portfolio/${item.image}`;
  image.alt = item.title;
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  const paragraph = document.createElement("p");
  paragraph.innerHTML = item.title;
  overlay.appendChild(paragraph);
  anchor.appendChild(image);
  anchor.appendChild(overlay);
  div.appendChild(anchor);
  return div;
}

function carouselImage(item, index) {
  const div = document.createElement("div");
  div.classList.add("carousel-item");
  div.classList.add("large");
  index === 0 && div.classList.add("first-item");
  const image = document.createElement("img");
  image.src = `assets/images/portfolio/${item}`;
  div.appendChild(image);
  return div;
}

document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split("/").pop().split(".")[0];
  if (["index", ""].includes(currentPage)) {
    /* HOME */
    // Video
    document.getElementById("videoTitle").innerHTML = data.home.video.title;
    document.getElementById("videoLink").href = data.home.video.link;
    // About
    const about = document.getElementById("aboutParagraphs");
    data.home.about.forEach(paragraph => {
      const p = document.createElement("p");
      p.innerHTML = paragraph;
      about.appendChild(p);
    });
    // Highlights
    const highlights = document.getElementById("highlights");
    data.home.highlights.forEach(article => {
      const anchor = document.createElement("a");
      anchor.classList.add("image-link");
      anchor.href = article.link;
      anchor.target = "_blank";
      const image = document.createElement("img");
      image.src = `assets/images/portfolio/${article.image}`;
      image.alt = article.title;
      const overlay = document.createElement("div");
      overlay.classList.add("image-overlay");
      const title = document.createElement("h2");
      title.innerHTML = article.title;
      const description = document.createElement("p");
      description.innerHTML = article.description;
      overlay.appendChild(title);
      overlay.appendChild(description);
      anchor.appendChild(image);
      anchor.appendChild(overlay);
      highlights.appendChild(anchor);
    });
  } else if (currentPage === "portfolio") {
    /* PORTFOLIO */
    // Writing
    const writing = document.getElementById("writingCarousel");
    data.home.portfolio.writing.forEach((article, index) => {
      writing.appendChild(carouselItem(article, index));
    });
    // Documentary Filmmaking
    const filmmaking = document.getElementById("filmmakingCarousel");
    data.home.portfolio.filmmaking.forEach((article, index) => {
      filmmaking.appendChild(carouselItem(article, index, true));
    });
    // Audio Journalism
    const audio = document.getElementById("audioCarousel");
    data.home.portfolio.audio.forEach((article, index) => {
      audio.appendChild(carouselItem(article, index));
    });
    // Photography
    const photography = document.getElementById("photographyCarousel");
    data.home.portfolio.photography.forEach((article, index) => {
      photography.appendChild(carouselImage(article, index));
    });
  }
});
