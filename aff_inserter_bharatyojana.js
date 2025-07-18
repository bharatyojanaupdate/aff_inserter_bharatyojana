(function () {
  const affLinks = [
    { title: "🚀 Boost Your Income!", url: "https://example.com/1" },
    { title: "📘 Claim Free Digital Tools", url: "https://example.com/2" },
    { title: "🎓 Learn AI & Earn", url: "https://example.com/3" },
    { title: "💼 Become a Certified VLE", url: "https://example.com/4" },
    { title: "📲 Download Govt Starter Kit", url: "https://example.com/5" }
  ];

  const pickRandom = () => affLinks.splice(Math.floor(Math.random() * affLinks.length), 1)[0];

  const createBox = (data) => {
    const box = document.createElement("div");
    box.innerHTML = `
      <div style="max-width:100%;margin:20px auto;padding:16px;border:2px dashed #f90;background:#fff3e6;border-radius:8px;box-shadow:0 2px 5px rgba(0,0,0,0.08);text-align:center;">
        <strong style="font-size:18px;color:#b35400;">${data.title}</strong><br>
        <a href="${data.url}" target="_blank" style="display:inline-block;margin-top:12px;padding:10px 22px;background:#b35400;color:#fff;border-radius:30px;text-decoration:none;font-weight:bold;">👉 Grab Now</a>
      </div>`;
    return box;
  };

  function injectMultipleAffiliates() {
    const cards = document.querySelectorAll(".card");
    if (cards.length >= 5) {
      const [box1, box2, box3] = [pickRandom(), pickRandom(), pickRandom()].map(createBox);
      cards[1].insertAdjacentElement("afterend", box1); // after card #2
      cards[3].insertAdjacentElement("afterend", box2); // after card #4
      cards[cards.length - 1].insertAdjacentElement("beforebegin", box3); // before last card
    }
  }

  window.addEventListener("load", function () {
    setTimeout(injectMultipleAffiliates, 800);
  });
})();
