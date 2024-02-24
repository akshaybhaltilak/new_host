// ANIMATION JS START

window.addEventListener('load', function () {
  const loader = document.querySelector('.loader');
  const content = document.querySelector('.content');

  const animationDuration = 3000;
  setTimeout(function () {
    loader.style.display = 'none';
    content.classList.remove('hidden');
  }, animationDuration);
});

// ANIMATION JS CLOSE

// LIGHT / DARK MODE JS

function toggleMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
}

const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const storedDarkMode = JSON.parse(localStorage.getItem("darkMode"));

if (storedDarkMode !== null) {
  if (storedDarkMode) {
    document.body.classList.add("dark-mode");
  }
} else if (userPrefersDark) {
  document.body.classList.add("dark-mode");
}

function toggleImage() {
  var imageButton = document.getElementById("dark_light");
  var buttonImage = document.getElementById("buttonImage");

  if (buttonImage.src.endsWith("https://cdn-icons-png.flaticon.com/128/4489/4489231.png")) { // image 1
    buttonImage.src = "https://cdn-icons-png.flaticon.com/128/1829/1829191.png";
    buttonImage.alt = "Image 2";
  } else {
    buttonImage.src = "https://cdn-icons-png.flaticon.com/128/4489/4489231.png";
    buttonImage.alt = "Image 1";
  }
}


// LIGHT / DARK MODE CLOSE

// JAVASCRIPT FOR START PROGRAMMING LANGUAGES

const languageSelector = document.getElementById('languageSelector');
const roadmapContainer = document.getElementById('roadmapContainer');

// Check if languageSelector and roadmapContainer exist
if (languageSelector && roadmapContainer) {
  languageSelector.addEventListener('change', function () {
    const selectedLanguage = this.value;
    const allRoadmaps = roadmapContainer.getElementsByClassName('roadmap');

    for (let i = 0; i < allRoadmaps.length; i++) {
      allRoadmaps[i].classList.remove('active');
    }

    if (selectedLanguage !== 'none') {
      const selectedRoadmap = document.getElementById(selectedLanguage);
      if (selectedRoadmap) {
        selectedRoadmap.classList.add('active');
      }
    }
  });
}

// 50 DSA Question Cheack point JS start
document.addEventListener('DOMContentLoaded', function () {
  const tasks = document.querySelectorAll('.task');
  let completedTasks = 0;

  tasks.forEach(task => {
    task.addEventListener('click', function () {
      if (task.classList.contains('completed')) {
        task.classList.remove('completed');
        completedTasks--;
      } else {
        task.classList.add('completed');
        completedTasks++;
      }
      updateProgress(completedTasks);
      saveProgress();
    });
  });

  function updateProgress(completedTasks) {
    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.querySelector('.progress-text');
    const totalTasks = tasks.length;
    const progress = (completedTasks / totalTasks) * 100;

    const circumference = 2 * Math.PI * 40; // Adjusted radius
    const strokeDashOffset = circumference - (progress / 100) * circumference;

    progressBar.style.strokeDasharray = `${circumference} ${circumference}`;
    progressBar.style.strokeDashoffset = strokeDashOffset;

    progressText.textContent = `${progress.toFixed(0)}%`;
    document.getElementById('completedCount').textContent = completedTasks;
  }

  function saveProgress() {
    const completedTaskList = [];
    tasks.forEach(task => {
      if (task.classList.contains('completed')) {
        completedTaskList.push(task.textContent);
      }
    });
    localStorage.setItem('completedTasks', JSON.stringify(completedTaskList));
  }

  function loadProgress() {
    const completedTaskList = JSON.parse(localStorage.getItem('completedTasks'));
    if (completedTaskList) {
      tasks.forEach(task => {
        if (completedTaskList.includes(task.textContent)) {
          task.classList.add('completed');
          completedTasks++;
        }
      });
      updateProgress(completedTasks);
    }
  }

  loadProgress();
});


// Notification JS Start
document.addEventListener('DOMContentLoaded', function () {
  showNotification();
});

function showNotification() {
  const notification = document.getElementById('notification');
  notification.style.display = 'block';
}

function closeNotification() {
  const notification = document.getElementById('notification');
  notification.style.display = 'none';
}

// Notification JS End

// Search Bar Js Start
function searchQuestions() {
  var searchTerm = document.getElementById('search-bar').value.toLowerCase();
  var questions = document.getElementsByClassName('question-item');

  for (var i = 0; i < questions.length; i++) {
    var questionText = questions[i].innerText.toLowerCase();

    if (questionText.includes(searchTerm)) {
      questions[i].style.display = 'block';
    } else {
      questions[i].style.display = 'none';
    }
  }
}
// Search Bar JS End

document.getElementById('filterForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const position = document.getElementById('position').value;
  const userType = document.getElementById('userType').value;
  const workMode = document.getElementById('workMode').value;
  const educationMode = document.getElementById('educationMode').value;

  const roadmap = generateRoadmap(position, userType, workMode, educationMode);
  document.getElementById('roadmap').innerHTML = roadmap;
});

function generateRoadmap(position, userType, workMode, educationMode) {
  // Generate roadmap based on user selections
  let roadmap = '';

  // Example roadmap generation logic
  if (position === 'sde1') {
    roadmap += `<hr>Arrays : Understanding arrays, their properties, and operations like insertion, deletion, and searching.<br>
    Linked Lists : Understanding singly and doubly linked lists, their properties, and operations like insertion, deletion, and searching.<br><br>
    Stacks: Understanding the stack data structure, its properties, and operations like push and pop.<br>
    Queues: Understanding the queue data structure, its properties, and operations like enqueue and dequeue.<br><br>
    Trees : Understanding binary trees, binary search trees, AVL trees, and their properties. Also, understanding tree traversal algorithms like in-order, pre-order, and post-order traversal.<br>
    Graphs : Understanding graph data structures, their properties, and algorithms like BFS and DFS.
    Hash Tables: Understanding hash tables, their properties, and operations like insertion, deletion, and searching.<br><br>
    Heaps : Understanding the heap data structure, its properties, and operations like insertion, deletion, and heapify.<br><br>
    Trie : Understanding the trie data structure and its applications.
    Disjoint Set Union (DSU): Understanding the DSU data structure and its applications in algorithms like Kruskal's algorithm for minimum spanning tree.<br>
    Segment Trees: Understanding the segment tree data structure and its applications in range queries and updates.<br><br>
    Fenwick Trees (Binary Indexed Trees) : Understanding the Fenwick tree data structure and its applications in range queries and updates.<br><br>
    Priority Queues: Understanding the priority queue data structure and its applications.
    Advanced Data Structures: Understanding advanced data structures like B-trees, Red-Black trees, and Splay trees.<br><hr>`;
  } else if (position === 'sde2') {
    roadmap += 'Roadmap for SDE2';
  } else if (position === 'frontend') {
    roadmap += 'Roadmap for Frontend Developer';
  } else if (position === 'backend') {
    roadmap += 'Roadmap for Backend Developer';
  } else if (position === 'fullstack') {
    roadmap += 'Roadmap for Full Stack Developer';
  }

  roadmap += `<br>User Type : ${userType}`;
  roadmap += `<br>Work Mode : ${workMode}`;
  roadmap += `<br>Educational Mode : ${educationMode}`;

  return roadmap;
}
