(function () {
  const affLinks = [
    { title: "🚀 Boost Your Income!", url: "https://example.com/1" },
    { title: "💡 Learn & Earn Now", url: "https://example.com/2" },
    { title: "📘 Claim Your Govt Tools", url: "https://example.com/3" }
  ];

  const chosen = affLinks[Math.floor(Math.random() * affLinks.length)];

  const createBox = () => {
    const box = document.createElement("div");
    box.innerHTML = `
      <div style="max-width:100%;margin:20px auto;padding:16px;border:1px solid #ccc;background:#fff9f0;border-radius:8px;box-shadow:0 2px 5px rgba(0,0,0,0.08);text-align:center;">
        <strong style="font-size:17px;color:#b35400;">${chosen.title}</strong><br>
        <a href="${chosen.url}" target="_blank" style="display:inline-block;margin-top:10px;padding:10px 20px;background:#b35400;color:#fff;border-radius:6px;text-decoration:none;font-weight:bold;">👉 Try Now</a>
      </div>
    `;
    return box;
  };

  function injectAffiliateBox() {
    const cards = document.querySelectorAll(".card");
    if (cards.length >= 2) {
      const secondCard = cards[1];
      const box = createBox();
      secondCard.insertAdjacentElement("afterend", box);
    }
  }

  window.addEventListener("load", function () {
    setTimeout(injectAffiliateBox, 800); // wait for Blogger rendering
  });
})();
