const darkModeToggle = document.querySelector("dark-mode-toggle");

// Set the mode to light
darkModeToggle.mode = "light";

// Set the appearance to resemble a switch (theme: light/dark)
darkModeToggle.appearance = "switch";
// Set the appearance to resemble a toggle (dark mode: on/off)
darkModeToggle.appearance = "toggle";

// Set a "remember the last selected mode" label
// darkModeToggle.remember = "Remember this";

// Remember the user's last color scheme choice
darkModeToggle.setAttribute("permanent", "");
// Forget the user's last color scheme choice
darkModeToggle.removeAttribute("permanent");

document.addEventListener("colorschemechange", (e) => {
  //   console.log(`Color scheme changed to ${e.detail.colorScheme}.`);

  if (e.detail.colorScheme === "dark") {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  } else if (e.detail.colorScheme === "light") {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  }
});

// document.addEventListener("permanentcolorscheme", (e) => {
//   console.log(
//     `${e.detail.permanent ? "R" : "Not r"}emembering the last selected mode.`
//   );
// });
