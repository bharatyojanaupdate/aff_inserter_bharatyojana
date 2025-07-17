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
    { title: "🧠 AI Tool That Writes For You", url: "https://example.com/10" }
  ];

  function getRandomBox() {
    const item = dummyLinks[Math.floor(Math.random() * dummyLinks.length)];
    const box = document.createElement("div");
    box.innerHTML = `
      <div style="border:1px solid #ccc; background:#fff9f0; padding:14px; margin:20px 0; border-radius:10px; box-shadow:0 2px 5px rgba(0,0,0,0.05);">
        <h3 style="margin-top:0; font-size:18px; color:#b35400;">${item.title}</h3>
        <a href="${item.url}" target="_blank" style="background:#b35400;color:#fff;padding:10px 18px;border-radius:6px;text-decoration:none;display:inline-block;">👉 Learn & Earn Now</a>
      </div>
    `;
    return box;
  }

  function injectCTAs() {
    const content = document.querySelector('.post-body') || document.querySelector('.entry-content');
    if (!content) return;

    let htmlParts = content.innerHTML.split(/<br\s*\/?>/i);
    const total = htmlParts.length;

    if (total < 3) return; // skip very short content

    // Generate boxes
    const box1 = getRandomBox().outerHTML;
    const box2 = getRandomBox().outerHTML;
    const box3 = getRandomBox().outerHTML;

    // Insert after 4th line, middle, and end
    htmlParts.splice(4, 0, box1);
    htmlParts.splice(Math.floor(total / 2), 0, box2);
    htmlParts.push(box3);

    content.innerHTML = htmlParts.join("<br>");
  }

  document.addEventListener("DOMContentLoaded", injectCTAs);
})();
