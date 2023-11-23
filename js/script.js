const darkModeToggle = document.querySelector("dark-mode-toggle");

// Set the mode to light
darkModeToggle.mode = "light";

// Set the appearance to resemble a switch (theme: light/dark)
darkModeToggle.appearance = "switch";
// Set the appearance to resemble a toggle (dark mode: on/off)
darkModeToggle.appearance = "toggle";

document.addEventListener("colorschemechange", (e) => {
  //   console.log(`Color scheme changed to ${e.detail.colorScheme}.`);

  if (e.detail.colorScheme === "dark") {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  } else if (e.detail.colorScheme === "light") {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  }

  // Remember the user's last color scheme choice
  darkModeToggle.setAttribute("permanent", e.detail.colorScheme);
});

document.addEventListener("load", (e) => {
  if (darkModeToggle.getAttribute("permanent") === "dark") {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
    darkModeToggle.mode = "dark";
  } else if (darkModeToggle.getAttribute("permanent") === "light") {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
    darkModeToggle.mode = "light";
  }
});
