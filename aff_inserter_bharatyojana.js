(function () {
  const links = [
    { title: "🚀 Start Earning with This Free Tool", url: "https://example.com/1" },
    { title: "📘 Govt Support Scheme – Claim Benefits", url: "https://example.com/2" },
    { title: "💡 Learn & Earn with Smart Apps", url: "https://example.com/3" }
  ];

  const random = links[Math.floor(Math.random() * links.length)];

  const box = document.createElement("div");
  box.innerHTML = `
    <div id="aff-float-cta" style="position:fixed;bottom:-200px;left:50%;transform:translateX(-50%);background:#fff9f0;border:1px solid #ccc;box-shadow:0 0 8px rgba(0,0,0,0.1);border-radius:8px;padding:16px 20px;max-width:320px;width:90%;z-index:9999;transition:bottom 0.5s ease;">
      <strong style="color:#b35400;font-size:16px;">${random.title}</strong><br>
      <a href="${random.url}" target="_blank" style="margin-top:8px;display:inline-block;background:#b35400;color:#fff;padding:10px 16px;border-radius:6px;text-decoration:none;">👉 Grab It Now</a>
      <span id="aff-close-btn" style="position:absolute;top:4px;right:8px;cursor:pointer;color:#999;">✖</span>
    </div>
  `;

  document.body.appendChild(box);

  document.addEventListener("DOMContentLoaded", () => {
    const trigger = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const postHeight = document.body.scrollHeight / 2;

      if (scrollY > postHeight) {
        document.getElementById("aff-float-cta").style.bottom = "20px";
        window.removeEventListener("scroll", trigger);
      }
    };

    document.getElementById("aff-close-btn").onclick = () => {
      document.getElementById("aff-float-cta").style.display = "none";
    };

    window.addEventListener("scroll", trigger);
  });
})();
