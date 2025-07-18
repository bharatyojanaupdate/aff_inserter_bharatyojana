(function() {
  const dummyLinks = [
    { title: "🚀 Boost Your Income!", url: "https://example.com/1" },
    /* other 9+ items */
  ];

  function makeBox(item) {
    const outer = document.createElement("div");
    outer.style.cssText = "display:block;width:100%;margin:30px 0;padding:0;clear:both;";
    const inner = document.createElement("div");
    inner.style.cssText = "max-width:800px;margin:0 auto;border:1px solid #ccc;background:#fff9f0;padding:16px;border-radius:8px;box-shadow:0 2px 5px rgba(0,0,0,0.05);";
    inner.innerHTML = `<h3 style="margin:0 0 10px;color:#b35400">${item.title}</h3><a href="${item.url}" target="_blank" style="display:inline-block;background:#b35400;color:#fff;padding:10px 18px;border-radius:6px;text-decoration:none;">👉 Learn & Earn Now</a>`;
    outer.appendChild(inner);
    return outer;
  }

  function injectBoxes() {
    const content = document.querySelector('.post-body.entry-content');
    if (!content) return;

    const children = Array.from(content.children).filter(el => el.offsetHeight > 0 && el.innerText.trim());
    if (children.length < 2) return;

    const positions = [
      Math.min(3, children.length - 1),
      Math.floor(children.length / 2),
      children.length - 1
    ];

    positions.forEach(index => {
      const link = dummyLinks[Math.floor(Math.random() * dummyLinks.length)];
      const box = makeBox(link);
      children[index].insertAdjacentElement('afterend', box);
    });
  }

  document.addEventListener('DOMContentLoaded', injectBoxes);
})();
