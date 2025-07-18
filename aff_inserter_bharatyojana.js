(function () {
  const styles = [
    { bg: "#fff3e6", border: "#f90", btn: "#b35400", emoji: "🚀" },
    { bg: "#e8f5e9", border: "#4caf50", btn: "#2e7d32", emoji: "📘" },
    { bg: "#e3f2fd", border: "#2196f3", btn: "#1565c0", emoji: "🎯" }
  ];

  const affLinks = [
    { title: "Boost Your Digital Income!", url: "https://example.com/1" },
    { title: "Get Your Free Govt Toolkit", url: "https://example.com/2" },
    { title: "AI Skills for CSC VLEs", url: "https://example.com/3" },
    { title: "Top 10 Rural Side Hustles", url: "https://example.com/4" },
    { title: "Become a Certified Freelancer", url: "https://example.com/5" }
  ];

  const pick = (arr) => arr.splice(Math.floor(Math.random() * arr.length), 1)[0];

  const createBox = (title, url, style) => {
    const box = document.createElement("div");
    box.innerHTML = `
      <div style="max-width:100%;margin:20px auto;padding:16px;border:2px dashed ${style.border};background:${style.bg};border-radius:8px;box-shadow:0 2px 5px rgba(0,0,0,0.08);text-align:center;">
        <strong style="font-size:18px;color:${style.btn};">${style.emoji} ${title}</strong><br>
        <a href="${url}" target="_blank" style="display:inline-block;margin-top:12px;padding:10px 22px;background:${style.btn};color:#fff;border-radius:30px;text-decoration:none;font-weight:bold;">👉 Grab Now</a>
      </div>`;
    return box;
  };

  function injectBoxes() {
    const cards = document.querySelectorAll(".card");
    if (!cards || cards.length < 3) return;

    const indexes = [1, 3, cards.length - 2];
    let count = 0;

    indexes.forEach(i => {
      if (cards[i] && affLinks.length && styles.length) {
        const data = pick(affLinks);
        const style = pick(styles);
        const box = createBox(data.title, data.url, style);
        cards[i].insertAdjacentElement("afterend", box);
        count++;
      }
    });

    console.log(`✅ Injected ${count} visually distinct affiliate box(es)`);
  }

  // Smart wait loop to handle Blogger delays
  let tries = 0;
  const wait = setInterval(() => {
    const ready = document.querySelectorAll(".card").length >= 3;
    const hasText = [...document.querySelectorAll(".card")].some(c => c.innerText.length > 50);
    if (ready && hasText) {
      clearInterval(wait);
      injectBoxes();
    } else if (++tries > 10) {
      clearInterval(wait);
      console.warn("⚠️ Affiliate injector gave up after 10 tries.");
    }
  }, 700);
})();
