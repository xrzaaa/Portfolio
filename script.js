const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    root: null,
    rootMargin: '0px 0px -12% 0px',
    threshold: 0.12,
  }
);

revealEls.forEach((el) => observer.observe(el));

const lazyVideos = document.querySelectorAll('.video-lazy[data-bvid]');

lazyVideos.forEach((container) => {
  const trigger = container.querySelector('.video-lazy-trigger');
  if (!trigger) {
    return;
  }

  trigger.addEventListener('click', () => {
    if (container.dataset.loaded === 'true') {
      return;
    }

    const bvid = container.dataset.bvid;
    const iframe = document.createElement('iframe');
    iframe.src = `https://player.bilibili.com/player.html?bvid=${bvid}&page=1`;
    iframe.title = 'Bilibili 演示视频';
    iframe.loading = 'lazy';
    iframe.allowFullscreen = true;
    iframe.setAttribute('frameborder', '0');

    container.innerHTML = '';
    container.appendChild(iframe);
    container.dataset.loaded = 'true';
  });
});
