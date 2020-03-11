// For a better performance, use requestAnimationFrame instead of setInterval
// https://css-tricks.com/snippets/javascript/replacements-setinterval-using-requestanimationframe/
const requestInterval = (fn: Function, delay: number) => {
  let start = new Date().getTime();
  let handle = { value: 0 };
  let loop = () => {
    handle.value = requestAnimationFrame(loop);
    let current = new Date().getTime();
    let delta = current - start;
    if (delta >= delay) {
      fn();
      start = new Date().getTime();
    }
  };
  handle.value = requestAnimationFrame(loop);
  return handle;
};
const sample = (arr: number[]) => arr[Math.floor(Math.random() * arr.length)];

let bubbleSizes = [3, 6, 9, 12];
let bubbleText = document.querySelector(".bubbling");
let bubblePositions = Array.from(
  Array((bubbleText as HTMLElement).offsetWidth).keys()
);
requestInterval(() => {
  let bubbleSize = sample(bubbleSizes);
  let bubblePosition = sample(bubblePositions);
  let bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.style.width = `${bubbleSize}px`;
  bubble.style.height = `${bubbleSize}px`;
  bubble.style.left = `${bubblePosition}px`;
  bubbleText.append(bubble);
  let bubbleAnimation = bubble.animate(
    [{ bottom: "10px", opacity: 1 }, { bottom: "180%", opacity: 0.6 }],
    {
      fill: "forwards",
      duration: 3000
    }
  );
  bubbleAnimation.onfinish = () => bubble.remove();
}, 300);
