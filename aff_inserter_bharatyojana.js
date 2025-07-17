(function () {
  const dummyLinks = [
    { title: "🚀 Boost Your Income with This Tool", url: "https://example.com/1" },
    { title: "🔥 Don’t Miss These Free Govt Tools", url: "https://example.com/2" },
    { title: "💡 Earn From Home Using Smart Ideas", url: "https://example.com/3" },
    { title: "📘 Learn Blogging and Start Earning", url: "https://example.com/4" },
    { title: "📢 Govt Job Alerts & Tools", url: "https://example.com/5" },
    { title: "📊 Track Schemes with 1 Click", url: "https://example.com/6" },
    { title: "🎓 Free Courses & Certifications", url: "https://example.com/7" },
    { title: "📱 Earn From Apps in Your Free Time", url: "https://example.com/8" },
    { title: "📥 Tools to Download PDFs Easily", url: "https://example.com/9" },
    { title: "🧠 AI Tool That Writes For You", url: "https://example.com/10" },
    // add more up to 25
  ];

  function getRandomBox() {
    const random = dummyLinks[Math.floor(Math.random() * dummyLinks.length)];
    const div = document.createElement("div");
    div.innerHTML = `
      <div style="border:1px solid #eee; background:#fffbe7; padding:14px; margin:20px 0; border-radius:10px; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
        <h3 style="margin:0 0 10px; font-size:17px; color:#b35400;">${random.title}</h3>
        <a href="${random.url}" target="_blank" style="background:#b35400;color:#fff;padding:8px 16px;border-radius:6px;text-decoration:none;display:inline-block;">👉 Click to Explore</a>
      </div>
    `;
    return div;
  }

  function injectSmartCTAs() {
    const body = document.querySelector('.post-body');
    if (!body) return;

    const text = body.innerText.trim();
    const lines = text.split('\n').filter(Boolean);

    const insertAfter = (lineIndex, box) => {
      const htmlLines = body.innerHTML.split(/<br\s*\/?>/gi);
      if (lineIndex >= htmlLines.length) lineIndex = htmlLines.length - 1;
      htmlLines.splice(lineIndex, 0, box.outerHTML);
      body.innerHTML = htmlLines.join("<br>");
    };

    const box1 = getRandomBox();
    const box2 = getRandomBox();
    const box3 = getRandomBox();

    // Approx positions
    insertAfter(4, box1); // after 4 lines
    insertAfter(Math.floor(lines.length / 2), box2); // middle
    insertAfter(lines.length - 1, box3); // end
  }

  document.addEventListener("DOMContentLoaded", injectSmartCTAs);
})();
