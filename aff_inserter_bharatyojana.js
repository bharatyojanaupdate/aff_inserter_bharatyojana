(function () {
  const dummyLinks = [
    { title: "🚀 Boost Your Income!", url: "https://example.com/1" },
    { title: "🔥 Don’t Miss These Free Govt Tools", url: "https://example.com/2" },
    { title: "💡 Learn & Earn Smartly", url: "https://example.com/3" }
  ];

  function createBox(item) {
    const wrap = document.createElement("div");
    wrap.style.cssText = "width:100%;margin:30px 0;padding:0;clear:both;display:block;";
    wrap.innerHTML = `
      <div style="max-width:800px;margin:auto;border:1px solid #ccc;background:#fff9f0;padding:16px;border-radius:10px;box-shadow:0 2px 5px rgba(0,0,0,0.05);">
        <h3 style="margin:0 0 10px;color:#b35400;">${item.title}</h3>
        <a href="${item.url}" target="_blank" style="display:inline-block;background:#b35400;color:#fff;padding:10px 18px;border-radius:6px;text-decoration:none;">👉 Learn & Earn Now</a>
      </div>`;
    return wrap;
  }

  function injectBoxes() {
    const post = document.querySelector('.post-body.entry-content');
    if (!post) return;

    const parent = post.parentNode;
    const box1 = createBox(dummyLinks[Math.floor(Math.random() * dummyLinks.length)]);
    const box2 = createBox(dummyLinks[Math.floor(Math.random() * dummyLinks.length)]);
    const box3 = createBox(dummyLinks[Math.floor(Math.random() * dummyLinks.length)]);

    // Insert after post-body instead of inside it
    parent.insertBefore(box1, post.nextSibling);
    parent.insertBefore(box2, box1.nextSibling);
    parent.insertBefore(box3, box2.nextSibling);
  }

  document.addEventListener("DOMContentLoaded", injectBoxes);
})();
