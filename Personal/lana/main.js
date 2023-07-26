const right = document.querySelector(".right");
const left = document.querySelector(".left");
const del = document.querySelector(".delete");
const lastIndex = document.querySelector(".lastIndex");
const content = document.querySelector(".content");
const stats = document.querySelector(".stats");

let rightCounter = 1;
let positions = [];

right.addEventListener("click", function addRight() {
  const element = document.createElement("button");
  element.textContent = ` ${rightCounter}R`;
  element.style.border = "1px solid black";
  element.style.height = "40px";
  element.style.width = "50px";
  content.style.color = "#7209b7";
  rightCounter++;
  positions.push(element.textContent);

  if (positions.length % 11 === 1) {
    content.style.gridAutoFlow = "row";
  }

  element.style.borderRadius = "10px";
  content.style.gridTemplateColumns = `repeat(${Math.min(
    positions.length,
    10
  )}, 1fr)`;
  content.appendChild(element);

  // Add click event listener to the newly created button to remove it when clicked
  element.addEventListener("click", function () {
    content.removeChild(element);
  });

  console.log(positions[positions.length - 1]);
});

left.addEventListener("click", function addLeft() {
  const element = document.createElement("button");
  element.textContent = ` ${rightCounter}L`;
  element.style.border = "1px solid black";
  element.style.height = "40px";
  element.style.width = "50px";
  content.style.color = "#7209b7";
  rightCounter++;
  positions.push(element.textContent);

  if (positions.length % 11 === 1) {
    content.style.gridAutoFlow = "row";
  }

  element.style.borderRadius = "10px";
  content.style.gridTemplateColumns = `repeat(${Math.min(
    positions.length,
    10
  )}, 1fr)`;
  content.appendChild(element);

  // Add click event listener to the newly created button to remove it when clicked
  element.addEventListener("click", function () {
    content.removeChild(element);
  });

  console.log(positions[positions.length - 1]);
});

lastIndex.addEventListener("click", () => {
  stats.textContent = "";
  stats.style.textAlign = "center";
  stats.textContent = positions[positions.length - 1];
  setInterval(() => {
    stats.textContent = "";
  }, 5000);
});



// ... Your existing JavaScript code ...

const saveButton = document.querySelector('.save');
const displayButton = document.querySelector('.display');

saveButton.addEventListener('click', async () => {
  const username = prompt('Enter your username:');
  const email = prompt('Enter your email:');

  if (username && email) {
    try {
      const response = await fetch('/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email }),
      });
      if (response.ok) {
        alert('User information saved successfully');
      } else {
        alert('Error saving user information');
      }
    } catch (error) {
      console.error('Error saving user information:', error);
    }
  }
});

displayButton.addEventListener('click', async () => {
  try {
    const response = await fetch('/users');
    const users = await response.json();
    let message = 'Users:\n';
    users.forEach((user) => {
      message += `Username: ${user.username}, Email: ${user.email}\n`;
    });
    alert(message);
  } catch (error) {
    console.error('Error fetching user information:', error);
  }
});
