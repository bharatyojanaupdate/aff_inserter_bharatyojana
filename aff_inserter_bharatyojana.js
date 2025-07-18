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
    box.style.cssText = "width:100%;display:block;clear:both;";
    box.innerHTML = `
      <div style="width:100%;box-sizing:border-box;border:1px solid #ccc; background:#fff9f0; padding:16px; margin:20px auto; border-radius:10px; box-shadow:0 2px 5px rgba(0,0,0,0.05); max-width:100%;">
        <h3 style="margin-top:0; font-size:18px; color:#b35400;">${item.title}</h3>
        <a href="${item.url}" target="_blank" style="background:#b35400;color:#fff;padding:10px 18px;border-radius:6px;text-decoration:none;display:inline-block;">👉 Learn & Earn Now</a>
      </div>
    `;
    return box;
  }

  function injectAffiliateBoxes() {
    const content = document.querySelector('.post-body') || document.querySelector('.entry-content');
    if (!content) return;

    const children = Array.from(content.children).filter(el => el.offsetHeight > 0 && el.innerText.trim().length > 0);
    if (children.length < 2) return;

    const box1 = getRandomBox();
    const box2 = getRandomBox();
    const box3 = getRandomBox();

    const index1 = Math.min(3, children.length - 1);
    const index2 = Math.floor(children.length / 2);
    const index3 = children.length - 1;

    content.insertBefore(box1, children[index1]?.nextSibling || null);
    content.insertBefore(box2, children[index2]?.nextSibling || null);
    content.insertBefore(box3, children[index3]?.nextSibling || null);
  }

  document.addEventListener("DOMContentLoaded", injectAffiliateBoxes);
})();
