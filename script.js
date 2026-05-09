document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const bgMusic = document.getElementById("bg-music");
  const timelineItems = document.querySelectorAll(".timeline-item");

  // Initially hide all items
  timelineItems.forEach(item => item.classList.add("hidden"));

  // When Begin Journey is clicked
  startBtn.addEventListener("click", () => {
    bgMusic.play();
    bgMusic.volume = 0.3;
    document.querySelector(".timeline").scrollIntoView({ behavior: "smooth" });

    // Reveal items gradually as user scrolls
    const revealOnScroll = () => {
      timelineItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          item.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // run once after click
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const letterText = document.getElementById("letter-text");

  const message = `
You are my biggest inspiration, my strongest supporter, and my forever friend.
Every smile, every word of encouragement has shaped who I am today.
Thank you for being my guiding light, my comfort, and my home.
I honestly don't know where I would be without you. You are the heart of our family and the soul of my life.
And even if I am quite irritating at times, you have always been patient and loving.
I am so grateful for every moment we share together.

Happy Mother's Day, with all my love 💖
  `;

  let index = 0;

  function typeLetter() {
    if (index < message.length) {
      letterText.textContent += message.charAt(index);
      index++;
      setTimeout(typeLetter, 50); // typing speed
    }
  }

  typeLetter();
});

