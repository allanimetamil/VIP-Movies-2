const PAGE_CONFIG = {
  home:  { url: "page1.html", free: true },
  page2: { url: "page2.html", free: false },
  page3: { url: "page3.html", free: false }
};

function openPage(pageId) {
  const page = PAGE_CONFIG[pageId];
  if (!page) return;

  if (page.free) {
    location.href = page.url;
  } else {
    Android.requestUnlock(pageId);
  }
}

function onRewardSuccess(pageId) {
  const page = PAGE_CONFIG[pageId];
  if (page) location.href = page.url;
}
