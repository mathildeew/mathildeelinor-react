export function colorize() {
  const colors = ["#0002FA", "#F3BBB0", "#59A983", "#5600c2"];
  const rotation = ["45", "-45", "96", "-12", "180"];

  const spansEven = document.querySelectorAll("span:nth-child(even)");
  const spansOdd = document.querySelectorAll("span:nth-child(odd)");

  spansEven.forEach((spanEven) => {
    spanEven.addEventListener("mouseover", () => {
      const pickRandomColor = Math.floor(Math.random() * colors.length);
      const randomColor = colors[pickRandomColor];
      spanEven.style.color = randomColor;

      const pickRandomRotate = Math.floor(Math.random() * rotation.length);
      const randomRotate = rotation[pickRandomRotate];
      spanEven.style.transform = `rotate(${randomRotate}deg)`;

      spanEven.addEventListener("mouseout", () => {
        spanEven.style.color = randomColor;
      });
    });
  });

  spansOdd.forEach((spanOdd) => {
    spanOdd.addEventListener("mouseover", () => {
      const pickRandom = Math.floor(Math.random() * colors.length);
      const randomColor = colors[pickRandom];
      spanOdd.style.color = randomColor;

      const pickRandomRotate = Math.floor(Math.random() * rotation.length);
      const randomRotate = rotation[pickRandomRotate];
      spanOdd.style.transform = `rotate(${randomRotate}deg)`;

      spanOdd.addEventListener("mouseout", () => {
        spanOdd.style.color = randomColor;
      });
    });
  });
}
