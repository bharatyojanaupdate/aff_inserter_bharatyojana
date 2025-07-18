(function () {
  const links = [
    { title: "🚀 Boost Your Income!", url: "https://example.com/1" },
    { title: "📘 Claim Your Govt Benefits", url: "https://example.com/2" },
    { title: "💡 Learn & Earn Today", url: "https://example.com/3" }
  ];

  const target = document.getElementById("affSpot1");
  if (!target) return;

  const item = links[Math.floor(Math.random() * links.length)];

  const box = document.createElement("div");
  box.innerHTML = `
    <div style="max-width:100%;margin:20px auto;padding:16px;border:1px solid #ccc;background:#fff9f0;border-radius:8px;box-shadow:0 2px 5px rgba(0,0,0,0.05);text-align:center;">
      <strong style="font-size:16px;color:#b35400;">${item.title}</strong><br>
      <a href="${item.url}" target="_blank" style="display:inline-block;margin-top:10px;padding:10px 16px;background:#b35400;color:#fff;border-radius:6px;text-decoration:none;">👉 Try Now</a>
    </div>
  `;

  target.appendChild(box);
})();
