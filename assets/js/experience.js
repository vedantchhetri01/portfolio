AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [

  {
    title: "Data Reporting Specialist",
    cardImage: "assets/images/experience-page/finl.png",
    place: "Supporting Google via Marketstar",
    time: "(Jun, 2025 - present)",
    desp: "<li>Improved customer insights by designing efficient SQL/BigQuery data pipelines and building interactive Power BI dashboards; leveraged Google internal tools to streamline analysis and accelerate reporting cycles.</li><br> <li>Designed KPI frameworks and automated reporting pipelines using Python and Google Sheets; collaborated with cross-functional stakeholders to enhance CRM systems, leading to smoother client workflows and improved decision-making.</li>",
  },



  {
    title: "Data Analyst",
    cardImage: "assets/images/experience-page/flipkart.png",
    place: "Wyzmindz Solutions Pvt Ltd",
    time: "(Dec, 2023 - Nov, 2024) 1 Yr",
    desp: "<li>Maintained SQL queries to extract, analyze, and report customer data, utilizing advanced database querying techniques to derive comprehensive insights.</li><br> <li>Developed and maintained Key Performance Indicators (KPIs) to track business performance, while optimizing customer relationship management systems to enhance client interactions and streamline processes.</li>",
  },
  {
    title: "Data Analyst",
    cardImage: "assets/images/experience-page/gsoc.jpg",
    place: "Rahul Steel India",
    time: "(Aug, 2019 - Feb, 2021) 1 Yr 7 Mos",
    desp: "<li>Demonstrated expertise in transforming data into meaningful visual representations using tools such as Tableau, Excel, and Power BI to create compelling data visualizations that enhance understanding and support decision-making.</li><br><li>Coordinated cross-functional teams to create automated and manual business process models, leading to a 20% increase in key performance indicators for marketing strategy.</li>",
  },
  ];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "PYTHON",
    cardImage: "assets/images/experience-page/1.jpg",
    description:"Worked extensively with Python to automate and streamline workflows, enhancing efficiency and accuracy in daily operations.",
  },
  {
    title: "Excel",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Worked proficiently with Excel to analyze data, create dashboards, automate tasks, and generate insightful reports.",
  },
  {
    title: "Tableau",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Utilized Tableau to design dynamic dashboards, interpret data patterns, and deliver meaningful visual insights for decision-making.",
  },
  {
    title: "Database",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Worked effectively with databases to manage data, optimize queries, design schemas, and ensure efficient data retrieval in SQL.",
  },
{
    title: "Tensor-Flow",
    cardImage: "assets/images/experience-page/ten.jpg",
    description:
      "Leveraged TensorFlow to develop and train advanced machine learning models, enabling efficient and accurate predictions.",
  },

{
    title: "Generative-AI",
    cardImage: "assets/images/experience-page/gen.jpg",
    description:
      "Worked with generative AI techniques to develop models that create new content, enhance automation, and improve decision-making processes.",
  },


];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Newton Hackthon",
   subtitle: "",
    image: "assets/images/experience-page/uplift.png",
    desp: "Achieved 78th rank in All India Rank (AIR) at Newton's Coding Challenge, demonstrating strong problem-solving skills, algorithmic thinking, and proficiency in coding under competitive conditions. Successfully solved complex coding problems, showcasing expertise in data structures, algorithms, and programming logic, further validating technical capabilities and performance.",
    href: "https://uplift.girlscript.tech/",
  },
  {
    title: "Machine Learning by ISRO",
    subtitle: "",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "Contributed to machine learning projects with ISRO, applying advanced algorithms and data analysis techniques to develop predictive models. Leveraged AI-driven technologies to solve complex problems, enhancing the overall efficiency and accuracy of the models used in real-world.",
    href: "https://ulhacks.com/",
  },
  {
    title: "Python Automation",
    subtitle: "at Wyzmindz Soltuions Pvt Ltd",
    image: "assets/images/experience-page/auto.jpg",
    desp: "Developed a Python automation to extract data from the database, generate reports, and send them via email. Utilized libraries such as smtplib and pandas to streamline the process, ensuring timely delivery of accurate and formatted reports to stakeholders, significantly enhancing operational efficiency.",
    href: "https://wafflehacks.org/",
  },
  {
    title: "Women in AI (GOOGLE) ",
    subtitle: "",
    image: "assets/images/experience-page/elevate.png",
    desp: "Contributed to initiatives promoting women in AI by mentoring aspiring female data scientists, participating in workshops, and advocating for greater representation of women in the AI field. Collaborated on projects that highlight the importance of diversity in AI, aiming to inspire and empower women to pursue careers in technology and machine learning.",
    href: "https://elevatetech.codes/",
  },
 ];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
