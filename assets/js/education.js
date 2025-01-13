AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
 {
     "title": "<h6>Deep Learning with PyTorch</h6><p style='font-size: 10px; color: white;'>It equips learners with skills to build neural networks, optimize models, and apply deep learning techniques for tasks like image classification and segmentation.</p>",
    "cardImage": "assets/images/education-page/py.jpg",
    "moocLink": "https://www.linkedin.com/posts/vedant-chhetri-1dec2001_deeplearning-pytorch-imagesegmentation-activity-7278483088588881920-HRvq?utm_source=share&utm_medium=member_desktop"
},
  {
    title: "<h6>Applications of Machine Learning by ISRO</h6><p style='font-size: 10px; color: white;'>It focuses on using ML techniques for satellite data analysis, remote sensing, image processing, and optimizing space missions with real-world applications.</p>",
    cardImage: "assets/images/education-page/isro.jpg",
    moocLink: "https://www.linkedin.com/posts/vedant-chhetri-1dec2001_certificationachievement-lifelonglearner-activity-7077147441526882304-lKcg?utm_source=share&utm_medium=member_desktop",
  },
{
    title: "<h6>Six Sigma Green Belt</h6><p style='font-size: 10px; color: white;'>This certification signifies expertise in process improvement, data analysis, and quality management. Green Belts lead projects, apply statistical tools, and enhance organizational efficiency by reducing defects.</p>",
    cardImage: "assets/images/education-page/udemy.jpg",
    moocLink: "https://www.linkedin.com/posts/vedant-chhetri-1dec2001_sixsigmagreenbelt-sixsigmacertification-sixsigmatraining-activity-7161575559003668480-cbvA?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "<h6>Machine Learning by IBM</h6><p style='font-size: 10px; color: white;'>It emphasizes using IBM's technologies like Watson Studio to develop, train, and deploy machine learning models, enhancing decision-making, automation, and data-driven insights across industries.</p>",
    cardImage: "assets/images/education-page/ibm.jpg",
    moocLink: "https://www.credly.com/badges/46a0d298-ad82-4de6-a266-2be0adb66405/linked_in?t=rzq1ru",
  },
  {
    title: "<h6>C++ by Cipher Schools</h6><p style='font-size: 10px; color: white;'>They offers a comprehensive course focusing on C++ programming, covering key concepts such as object-oriented programming, data structures, algorithms, and practical coding skills for real-world applications.</p>",
    cardImage: "assets/images/education-page/cip.jpg",
    moocLink: "https://www.linkedin.com/posts/vedant-chhetri-1dec2001_cprogramming-c-cipherschools-activity-7099606145606033408-Fe7i?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "<h6>Python for Data science</h6><p style='font-size: 10px; color: white;'>It teaches how to use Python for data analysis, visualization, and machine learning. It includes practical applications using libraries like Pandas, NumPy, and Matplotlib to derive insights.</p>",
    cardImage: "assets/images/education-page/ds.jpg",
    moocLink: "https://www.mygreatlearning.com/certificate/MNTOKYVA",
  },
  {
    title: "<h6>AI:NLP Models with Azure ML by Linkedin Learning</h6><p style='font-size: 10px; color: white;'>AutoML tools to create and deploy natural language processing models, automating the model selection and training process for text analysis.</p>",
    cardImage: "assets/images/education-page/lnk.jpg",
    moocLink: "https://www.linkedin.com/posts/vedant-chhetri-1dec2001_certificate-of-completion-activity-7154521246150402048-EoS_?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "<h6>Google AI summit</h6><p style='font-size: 10px; color: white;'<p>It brings together experts and innovators to explore the latest advancements in artificial intelligence. It covers cutting-edge AI technologies, tools, research, and real-world applications from Google.</p>",
    cardImage: "assets/images/education-page/goog.jpg",
    moocLink: "https://www.linkedin.com/posts/vedant-chhetri-1dec2001_womeninai-googleai-diversityintech-activity-7270719166976798721-KiQO?utm_source=share&utm_medium=member_desktop",
  },
];



const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
