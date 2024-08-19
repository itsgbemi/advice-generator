// testadvice.js

const METADATA_VERSION = "1.0";
const LAST_UPDATED = "2024-08-17";

const lifeAdviceData = {
  metadata: {
    version: METADATA_VERSION,
    lastUpdated: LAST_UPDATED
  },
  advice: [
    {
      id: 1,
      label: "Advice #001",
      content: "Focus on what you can control."
    },
    {
      id: 2,
      label: "Advice #002",
      content: "Surround yourself with people who uplift and support you."
    },
    {
      id: 3,
      label: "Advice #003",
      content: "Find joy in the little things."
    },
    {
      id: 4,
      label: "Advice #004",
      content: "This too shall pass."
    },
    {
      id: 5,
      label: "Advice #005",
      content: "Stop living for the approval of others."
    },
    {
      id: 6,
      label: "Advice #006",
      content: "There is more than one way of doing things."
    },
    {
      id: 7,
      label: "Advice #007",
      content: "Take responsibility for your actions."
    },
    {
      id: 8,
      label: "Advice #008",
      content: "Examine what is said, not who is speaking."
    },
    {
      id: 9,
      label: "Advice #009",
      content: "Listen more."
    },
    {
      id: 10,
      label: "Advice #010",
      content: "Maintain a positive outlook and focus on solutions."
    },
    {
      id: 11,
      label: "Advice #011",
      content: "Always be open to feedback and use it for growth."
    },
    {
      id: 12,
      label: "Advice #012",
      content: "Develop effective strategies for overcoming procrastination."
    },
    {
      id: 13,
      label: "Advice #013",
      content: "Make time for activities that bring you joy and fulfillment."
    },
    {
      id: 14,
      label: "Advice #014",
      content: "Foster a culture of positivity and support in your environment."
    },
    {
      id: 15,
      label: "Advice #015",
      content: "Balance ambition with self-care and relaxation."
    },
    {
      id: 16,
      label: "Advice #016",
      content: "Stay disciplined with your commitments and promises."
    },
    {
      id: 17,
      label: "Advice #017",
      content: "Learn to manage and resolve conflicts effectively."
    },
    {
      id: 18,
      label: "Advice #018",
      content: "Develop a personal mission statement."
    },
    {
      id: 19,
      label: "Advice #019",
      content: "Build a strong foundation of trust with others."
    },
    {
      id: 20,
      label: "Advice #020",
      content: "Understand and leverage your unique strengths."
    },
    {
      id: 21,
      label: "Advice #021",
      content: "Cultivate a habit of reflection and self-assessment."
    },
    {
      id: 22,
      label: "Advice #022",
      content: "Stay curious and open to new experiences."
    },
    {
      id: 23,
      label: "Advice #023",
      content: "Celebrate progress, not just outcomes."
    },
    {
      id: 24,
      label: "Advice #024",
      content: "Cultivate a mindset of abundance rather than scarcity."
    },
    {
      id: 25,
      label: "Advice #025",
      content: "Learn to let go of perfectionism."
    },
    {
      id: 26,
      label: "Advice #026",
      content: "Practice empathy and understanding towards others."
    },
    {
      id: 27,
      label: "Advice #027",
      content: "Set aside time for creative thinking and brainstorming."
    },
    {
      id: 28,
      label: "Advice #028",
      content: "Stay disciplined and committed to your goals."
    },
    {
      id: 29,
      label: "Advice #029",
      content: "Use affirmations to boost your self-confidence."
    },
    {
      id: 30,
      label: "Advice #030",
      content: "Keep learning and improving your skills."
    },
    {
      id: 31,
      label: "Advice #031",
      content: "Create a vision board to keep your goals in sight."
    },
    {
      id: 32,
      label: "Advice #032",
      content: "Manage your energy levels by knowing when you’re most productive."
    },
    {
      id: 33,
      label: "Advice #033",
      content: "Develop leadership skills."
    },
    {
      id: 34,
      label: "Advice #034",
      content: "Find ways to balance ambition with contentment."
    },
    {
      id: 35,
      label: "Advice #035",
      content: "Focus on solutions rather than dwelling on problems."
    },
    {
      id: 36,
      label: "Advice #036",
      content: "Manage finances wisely and create a budget."
    },
    {
      id: 37,
      label: "Advice #037",
      content: "Be open to new perspectives and ideas."
    },
    {
      id: 38,
      label: "Advice #038",
      content: "Learn to say no."
    },
    {
      id: 39,
      label: "Advice #039",
      content: "Celebrate your small victories."
    },
    {
      id: 40,
      label: "Advice #040",
      content: "Learn to delegate tasks."
    },
    {
      id: 41,
      label: "Advice #041",
      content: "Practice self-compassion and avoid negative self-talk."
    }
  ]
};

function getRandomAdvice() {
  const adviceList = lifeAdviceData.advice; // Reference the correct array
  const randomIndex = Math.floor(Math.random() * adviceList.length);
  return adviceList[randomIndex];
}

function displayAdvice() {
  const advice = getRandomAdvice();
  document.getElementById("adviceText").textContent = `"${advice.content}"`; // Correct property name
  document.getElementById("adviceNumber").textContent = `${advice.label}`;
}

document.getElementById("shuffleAdvice").addEventListener("click", () => {
  displayAdvice();
});

// Load the initial advice when the page loads
window.onload = () => displayAdvice();

// Menu Toggle Script
const menuIcon = document.querySelector('.menu-icon');
const menuContent = document.querySelector('.menu-content');
menuIcon.addEventListener('click', () => {
  menuContent.classList.toggle('show');
});
