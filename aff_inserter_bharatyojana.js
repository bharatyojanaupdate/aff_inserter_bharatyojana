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

  function tryInject() {
    const cards = document.querySelectorAll(".card");

    if (cards.length < 3) return;

    const positions = [1, 3, cards.length - 2];
    let injected = 0;

    positions.forEach(pos => {
      if (cards[pos] && injected < 3) {
        const link = pickRandom();
        const box = createBox(link);
        cards[pos].insertAdjacentElement("afterend", box);
        injected++;
      }
    });
  }

  // Repeatedly check until it works or 5 tries max
  let tries = 0;
  const interval = setInterval(() => {
    tries++;
    if (tries > 5) return clearInterval(interval);
    if (document.querySelectorAll(".card").length > 2) {
      tryInject();
      clearInterval(interval);
    }
  }, 500);
})();
