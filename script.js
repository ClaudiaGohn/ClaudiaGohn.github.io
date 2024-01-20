/* MODIFY SITE CONTENT HERE */
const data = {
  home: {
    video: {
      title: "How Can a Psychic Change Your Life?",
      link: "https://vimeo.com/904624779"
    },
    about: [
      "Claudia Gohn is an emerging documentary filmmaker and journalist based in New York and Virginia. She graduated in 2022 from Columbia University, where she earned her B.A. in English and Hispanic Studies. Following graduation, she became the Post-Baccalaureate Follow at Barnard College's Media Center, where her responsibilities as a fellow include managing the production studio, developing workshops, assisting with social media, and other administrative tasks.",
      "In addition to her fellowship, Claudia is a part-time student at Columbia University's Graduate School of Journalism. Her reporting at the school has included coverage of the Astoria neighborhood in Queens and housing rights in the city. She intends to continue developing her skills as a reporter and visual journalist.",
      "Claudia is also a freelance journalist, and her work has recently been included in C-VILLE Weekly and The Indypendent.",
      "In her free time, Claudia enjoys reading, making friendship bracelets, and watching reality television."
    ],
    highlights: [
      {
        title: "Dousing the fire",
        description: "Madison County volunteers help fight the Quaker Run blaze",
        link: "https://www.c-ville.com/dousing-the-fire"
      },
      {
        title: "Community Business",
        description: "As the owner of Beehive Events, a flower and décor businessshe launched in 2006, Shawn Cosette is no stranger to...",
        link: "https://www.c-ville.com/community-business"
      },
      {
        title: "A Book For Everyone",
        description: "The Free Book Bus gives children and adults access essential items",
        link: "https://www.c-ville.com/a-book-for-everyone"
      }
    ],
    portfolio: {
      writing: [

      ],
      filmaking: [

      ],
      audio: [

      ],
      photography: [
        
      ]
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
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
  data.home.highlights.forEach((article, index) => {
    document.getElementById(`articleTitle${index}`).innerHTML = article.title;
    document.getElementById(`articleDescription${index}`).innerHTML = article.description;
    document.getElementById(`articleLink${index}`).href = article.link;
  });
  /* PORTFOLIO */
  
});
