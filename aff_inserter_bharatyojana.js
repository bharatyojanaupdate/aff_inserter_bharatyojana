(function() {
  const dummyLinks = [
    { title: "📘 Learn Blogging & Earn Daily", url: "https://example.com/blogging" },
    { title: "💰 India's #1 Earning App", url: "https://example.com/app1" },
    { title: "📚 Sarkari Naukri Prep Bundle", url: "https://example.com/govtprep" },
    { title: "🚀 AI Tool for Passive Income", url: "https://example.com/aitool" },
    { title: "📈 Start Freelancing Today", url: "https://example.com/freelance" },
    { title: "🏦 Best Finance Tools for 2025", url: "https://example.com/finance" },
    { title: "🔍 Government Scheme Finder", url: "https://example.com/schemes" },
    { title: "🎥 Make ₹2000/Day from YouTube Shorts", url: "https://example.com/youtube" },
    { title: "🧠 AI Notes Generator for Students", url: "https://example.com/ainotes" },
    { title: "📌 GST & ITR Filing Made Easy", url: "https://example.com/gstfiling" },
    { title: "💻 Work-from-Home Starter Kit", url: "https://example.com/wfh" },
    { title: "📊 Create & Sell Ebooks Easily", url: "https://example.com/ebook" },
    { title: "✍️ Resume Builder + Job Links", url: "https://example.com/resume" },
    { title: "📷 AI Image & Video Generator", url: "https://example.com/aivideo" },
    { title: "📋 Free Exam Alerts on WhatsApp", url: "https://example.com/exam" },
    { title: "💼 Start Affiliate Marketing", url: "https://example.com/affiliate" },
    { title: "🏫 Get Free Courses with Certificate", url: "https://example.com/courses" },
    { title: "📥 PDF Tools for Govt Forms", url: "https://example.com/pdf" },
    { title: "🛠 Free Tools for Bloggers", url: "https://example.com/blogtools" },
    { title: "🗂 100+ Sarkari Yojana PDFs", url: "https://example.com/sarkarilist" },
    { title: "📡 Earn with WhatsApp Broadcast", url: "https://example.com/whatsapp" },
    { title: "📢 Start Your News Page & Monetize", url: "https://example.com/news" },
    { title: "📱 Android Apps to Earn ₹", url: "https://example.com/android" },
    { title: "🔐 Safe Password Generator Tool", url: "https://example.com/password" },
    { title: "🔧 IFSC / HSN / Tax Tools", url: "https://example.com/toolkit" }
  ];

  const createBox = (title, url) => {
    const box = document.createElement("div");
    box.innerHTML = `
      <div style="border:1px solid #ccc; background:#fdf9f0; padding:15px; margin:20px 0; border-radius:12px; box-shadow:0 4px 8px rgba(0,0,0,0.05);">
        <strong style="font-size:18px; color:#333;">${title}</strong><br><br>
        <a href="${url}" target="_blank" style="background:#f57c00; color:white; padding:10px 16px; border-radius:6px; text-decoration:none; display:inline-block;">👉 Learn & Earn Now</a>
      </div>
    `;
    return box;
  };

  const injectCTAs = () => {
    const article = document.querySelector('.post-body.entry-content');
    if (!article) return;

    const paras = article.querySelectorAll('p');
    if (paras.length < 4) return;

    const cta1 = dummyLinks[Math.floor(Math.random() * dummyLinks.length)];
    const cta2 = dummyLinks[Math.floor(Math.random() * dummyLinks.length)];
    const cta3 = dummyLinks[Math.floor(Math.random() * dummyLinks.length)];

    if (paras[3]) paras[3].after(createBox(cta1.title, cta1.url));
    const mid = Math.floor(paras.length / 2);
    if (paras[mid]) paras[mid].after(createBox(cta2.title, cta2.url));
    article.appendChild(createBox(cta3.title, cta3.url));
  };

  document.addEventListener('DOMContentLoaded', injectCTAs);
})();
