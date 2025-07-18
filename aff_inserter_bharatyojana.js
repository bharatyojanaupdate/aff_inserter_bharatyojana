(function () {
  const style = {
    bg: "#e3f2fd",
    border: "#2196f3",
    btn: "#1565c0",
    emoji: "🚀"
  };

  const data = {
    title: "Boost Your Digital Income with Govt-Supported Tools!",
    url: "https://example.com/your-aff-link"
  };

  const createBox = (title, url, style) => {
    const box = document.createElement("div");
    box.innerHTML = `
      <div style="max-width:100%;margin:20px auto;padding:16px;border:2px dashed ${style.border};background:${style.bg};border-radius:8px;box-shadow:0 2px 5px rgba(0,0,0,0.08);text-align:center;">
        <strong style="font-size:18px;color:${style.btn};">${style.emoji} ${title}</strong><br>
        <a href="${url}" target="_blank" style="display:inline-block;margin-top:12px;padding:10px 22px;background:${style.btn};color:#fff;border-radius:30px;text-decoration:none;font-weight:bold;">👉 Grab Now</a>
      </div>`;
    return box;
  };

  const inject = () => {
    const cards = document.querySelectorAll(".card");
    if (!cards || cards.length < 2) return;
    const box = createBox(data.title, data.url, style);
    cards[1].insertAdjacentElement("afterend", box);
    console.log("✅ Affiliate box injected successfully.");
  };

  let tries = 0;
  const timer = setInterval(() => {
    const cards = document.querySelectorAll(".card");
    const contentReady = Array.from(cards).some(c => c.innerText.length > 50);

    if (cards.length >= 2 && contentReady) {
      clearInterval(timer);
      inject();
    } else if (++tries > 10) {
      clearInterval(timer);
      console.warn("⚠️ Gave up after 10 attempts.");
    }
  }, 700);
})();
