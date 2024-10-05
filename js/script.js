const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");

const learning = {
    topic: "JS",
    learningGoals: ["Build JS Programs", "React", "Streamline Design", "Build Confidence"],
    category: "Front End Development",
    topicImportance: "High",
};

console.log(learning)

learning.topic = "JavaScript"
learning.learningGoals.splice(1,1) //(index of first item to remove, number of items to remove)

topicElement.innerText = `I'm learning ${learning.topic}.`
topicElement.classList.remove("hide")

countElement.innerText = `I have ${learning.learningGoals.length} learning goals.`
countElement.classList.remove("hide")

