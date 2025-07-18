(function () {
  const links = [
    { title: "🚀 Boost Your Income Instantly!", url: "https://example.com/1" },
    { title: "📘 Sarkari Tools You Can Use Daily", url: "https://example.com/2" },
    { title: "💰 One Click. One Tool. One Income Stream", url: "https://example.com/3" }
  ];

  const random = links[Math.floor(Math.random() * links.length)];

  const box = document.createElement("div");
  box.innerHTML = `
    <div id="aff-float-cta" style="position:fixed;bottom:-999px;left:50%;transform:translateX(-50%);background:#fff9f0;border:1px solid #ccc;box-shadow:0 2px 6px rgba(0,0,0,0.1);border-radius:10px;padding:16px 20px;max-width:340px;width:90%;z-index:99999;transition:bottom 0.6s ease;">
      <strong style="color:#b35400;font-size:16px;">${random.title}</strong><br>
      <a href="${random.url}" target="_blank" style="margin-top:10px;display:inline-block;background:#b35400;color:#fff;padding:10px 18px;border-radius:6px;text-decoration:none;">👉 Grab This Free Tool</a>
      <span id="aff-close-btn" style="position:absolute;top:6px;right:10px;font-size:18px;cursor:pointer;color:#888;">×</span>
    </div>
  `;
  document.body.appendChild(box);

  const showBox = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;

    if (scrollY > (docHeight - winHeight) / 2) {
      document.getElementById("aff-float-cta").style.bottom = "20px";
      window.removeEventListener("scroll", showBox);
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", showBox);
    document.getElementById("aff-close-btn").onclick = () => {
      document.getElementById("aff-float-cta").remove();
    };
  });
})();
