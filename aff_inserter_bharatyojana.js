(function () {
  const styles = [
    { bg: "#fff3e6", border: "#f90", btn: "#b35400", emoji: "🚀" },
    { bg: "#e8f5e9", border: "#4caf50", btn: "#2e7d32", emoji: "📘" },
    { bg: "#e3f2fd", border: "#2196f3", btn: "#1565c0", emoji: "🎯" }
  ];

  const affLinks = [
    { title: "Boost Your Digital Income!", url: "https://example.com/1" },
    { title: "Free Govt Toolkit for VLEs", url: "https://example.com/2" },
    { title: "Earn via CSC Skills", url: "https://example.com/3" },
    { title: "Top Rural AI Tools", url: "https://example.com/4" },
    { title: "Freelance Course for Beginners", url: "https://example.com/5" },
    { title: "Govt eBooks You Must Read", url: "https://example.com/6" },
    { title: "Top Grants You Didn't Know", url: "https://example.com/7" }
  ];

  const pick = (arr) => arr.splice(Math.floor(Math.random() * arr.length), 1)[0];

  const createBox = (data, style) => `
    <div style="max-width:100%;margin:16px 0;padding:16px;border:2px dashed ${style.border};background:${style.bg};border-radius:8px;box-shadow:0 2px 5px rgba(0,0,0,0.08);text-align:center;">
      <strong style="font-size:18px;color:${style.btn};">${style.emoji} ${data.title}</strong><br>
      <a href="${data.url}" target="_blank" style="display:inline-block;margin-top:12px;padding:10px 22px;background:${style.btn};color:#fff;border-radius:30px;text-decoration:none;font-weight:bold;">👉 Grab Now</a>
    </div>
  `;

  const inject = () => {
    const cards = document.querySelectorAll(".card");
    if (!cards || cards.length < 2) return;

    const boxWrap = document.createElement("div");
    boxWrap.style.margin = "20px 0";

    for (let i = 0; i < 3 && affLinks.length && styles.length; i++) {
      const data = pick(affLinks);
      const style = pick(styles);
      boxWrap.innerHTML += createBox(data, style);
    }

    cards[1].insertAdjacentElement("afterend", boxWrap);
    console.log("✅ Injected 3 stacked affiliate boxes in one place.");
  };

  // Smart wait loop for slow Blogger themes
  let tries = 0;
  const timer = setInterval(() => {
    const cards = document.querySelectorAll(".card");
    const contentReady = Array.from(cards).some(c => c.innerText.length > 50);

    if (cards.length >= 2 && contentReady) {
      clearInterval(timer);
      inject();
    } else if (++tries > 10) {
      clearInterval(timer);
      console.warn("⚠️ Failed to inject after 10 tries.");
    }
  }, 700);
})();
