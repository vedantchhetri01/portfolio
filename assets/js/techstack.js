// Initialize AOS (Animate On Scroll)
AOS.init();

// Data for Technical Skills (Data Science and Analytics)
const techSkills = [
  {
    langImage: "assets/images/techstack-page/machine-learning.jpg",
    langName: "Machine Learning",
    langDesc: "Machine learning is a subset of AI that allows systems to learn from data and improve over time without explicit programming."
  },
{
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
    langDesc: "Python is a high-level programming language used in data science, machine learning, web development, and more."
  },
 
  {
    langImage: "assets/images/techstack-page/power-bi.jpg",
    langName: "Power BI",
    langDesc: "Power BI is a Microsoft tool for data visualization and business intelligence, transforming raw data into insightful dashboards."
  },
 
  {
    langImage: "assets/images/techstack-page/excel.jpg",
    langName: "Excel",
    langDesc: "Excel is a spreadsheet tool widely used for data analysis, performing calculations, and visualizing data."
  },
  {
    langImage: "assets/images/techstack-page/sql.jpg",
    langName: "SQL",
    langDesc: "SQL (Structured Query Language) is used to communicate with databases, allowing you to query, update, and manage data."
  },
 {
    langImage: "assets/images/techstack-page/ai.jpg",
    langName: "Artificial Intelligence (AI)",
    langDesc: "AI involves creating algorithms that enable machines to simulate human intelligence, such as learning and problem-solving."
  },
  {
    langImage: "assets/images/techstack-page/mongodb.jpg",
    langName: "MongoDB",
    langDesc: "MongoDB is a NoSQL database that stores data in a flexible, JSON-like format and is ideal for handling large-scale unstructured data."
  },
  
  {
    langImage: "assets/images/techstack-page/cplusplus.jpg",
    langName: "C++",
    langDesc: "C++ is a powerful programming language used in performance-critical applications, such as game development and large-scale data processing."
  },
 {
    langImage: "assets/images/techstack-page/tableau.jpg",
    langName: "Tableau",
    langDesc: "Tableau is a powerful data visualization tool that helps in creating interactive and shareable dashboards."
  },
  {
    langImage: "assets/images/techstack-page/powerpoint.jpg",
    langName: "PowerPoint",
    langDesc: "PowerPoint is a presentation software used to create slideshows for business analysis and reporting purposes."
  },
];

// Data for Power Skills (Data Science & Data Analyst Traits)
const powerSkills = [
  {
    skillName: "Problem Solving",
    skillDesc: "Ability to identify and analyze issues, providing data-driven solutions to complex problems."
  },
  {
    skillName: "Critical Thinking",
    skillDesc: "Assess and evaluate information using logic to solve complex data challenges effectively."
  },
  {
    skillName: "Attention to Detail",
    skillDesc: "Strong focus on accuracy and precision to ensure the reliability and validity of data insights."
  },
  {
    skillName: "Communication",
    skillDesc: "Skilled in conveying complex data insights in a clear, concise, and actionable manner to non-technical stakeholders."
  },
  {
    skillName: "Teamwork",
    skillDesc: "Collaborative approach, working seamlessly with cross-functional teams to achieve successful data project outcomes."
  },
  {
    skillName: "Adaptability",
    skillDesc: "Quick to adapt to new tools, technologies, and evolving business needs in fast-paced data environments."
  },
  {
    skillName: "Project Management",
    skillDesc: "Experienced in managing data science projects, ensuring timely delivery of actionable, data-driven solutions."
  },
  {
    skillName: "Business Acumen",
    skillDesc: "Deep understanding of business objectives, aligning data analysis and insights with organizational goals to drive value."
  },
{
    skillName: "Business Intelligence",
    skillDesc: "Skilled in leveraging data to drive strategic decisions, using tools like Tableau, Power BI, and SQL for data visualization and reporting."
  },
{
    skillName: "Statistical Analysis & Interpretation",
    skillDesc: "Proficient in advanced statistical techniques, including regression analysis, hypothesis testing, and multivariate analysis."
  },

];

// DOM elements
const techSkillsContainer = document.querySelector(".tech-skills");
const powerSkillsContainer = document.querySelector(".power-skills");
const techButton = document.querySelector("#techBtn");
const powerButton = document.querySelector("#powerBtn");

// Function to display technical skills
const displayTechSkills = () => {
  const skillCards = techSkills
    .map((skill) => {
      return `
        <div class="skill-card" data-aos="fade-up">
          <div class="skill-img">
            <img src="${skill.langImage}" alt="${skill.langName}">
          </div>
          <div class="skill-info">
            <h4>${skill.langName}</h4>
            <p>${skill.langDesc}</p>
          </div>
        </div>
      `;
    })
    .join('');
  techSkillsContainer.innerHTML = skillCards;
};

// Function to display power skills
const displayPowerSkills = () => {
  const skillCards = powerSkills
    .map((skill) => {
      return `
        <div class="skill-card" data-aos="fade-up">
          <div class="skill-info">
            <h4>${skill.skillName}</h4>
            <p>${skill.skillDesc}</p>
          </div>
        </div>
      `;
    })
    .join('');
  powerSkillsContainer.innerHTML = skillCards;
};

// Event listeners for buttons
techButton.addEventListener("click", () => {
  techSkillsContainer.style.display = "grid";
  powerSkillsContainer.style.display = "none";
  displayTechSkills();
});

powerButton.addEventListener("click", () => {
  powerSkillsContainer.style.display = "grid";
  techSkillsContainer.style.display = "none";
  displayPowerSkills();
});

// Default display on page load
document.addEventListener("DOMContentLoaded", () => {
  techSkillsContainer.style.display = "grid";
  powerSkillsContainer.style.display = "none";
  displayTechSkills();
});
