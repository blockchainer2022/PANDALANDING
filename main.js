const countOnContainer = document.querySelector(".count_on_container");
const countOffContainer = document.querySelector(".count_off_container");

// get the timestamp of desired date from https://www.epochconverter.com/ and paste it as first parameter of Flipdown()
new FlipDown(1634394600, {
  headings: ["DAYS", "HRS", "MIN", "SEC"],
  theme: "dark",
})
  .start()
  .ifEnded(() => {
    countOnContainer.classList.add("hidden_ut");
    countOffContainer.classList.add("display_ut");
  });
