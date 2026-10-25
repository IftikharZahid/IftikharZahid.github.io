/**
 * VidSave - Application Logic & Interactive Features
 * Author: Iftikhar Zahid (https://iftikharzahid.me)
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  initDownloader();
  initHistory();
  initContactForm();
  initApkDownloadTrackers();
});

/* ==========================================================================
   Header & Mobile Navigation
   ========================================================================== */
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

function initMobileMenu() {
  const toggleBtn = document.getElementById('menuToggle');
  const navlinks = document.getElementById('navLinks');
  if (!toggleBtn || !navlinks) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    navlinks.classList.toggle('show');
  });

  // Close when clicking any navlink
  navlinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navlinks.classList.remove('show');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navlinks.classList.contains('show')) {
      navlinks.classList.remove('show');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.focus();
    }
  });
}

/* ==========================================================================
   Interactive Video Downloader Tool
   ========================================================================== */
const sampleUrls = {
  tiktok: 'https://www.tiktok.com/@creator/video/7391827491028374921',
  instagram: 'https://www.instagram.com/reel/C89xZaBty_M/',
  youtube: 'https://youtube.com/shorts/qZ0rT3gV9_A',
  facebook: 'https://www.facebook.com/watch/?v=1092837482910293',
  pinterest: 'https://www.pinterest.com/pin/812970170258193821/',
  twitter: 'https://x.com/tech_insider/status/1789201928374019283'
};

const mockData = {
  tiktok: {
    title: 'Satisfying Kinetic Art & Architecture Reel',
    author: '@creativestudio (Verified)',
    duration: '00:45',
    platform: 'TikTok',
    thumb: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=80',
    filename: 'VidSave_TikTok_HD_Art.mp4'
  },
  instagram: {
    title: 'Top 5 Mountain Biking Trails in the Alps',
    author: '@alps_explorer',
    duration: '01:12',
    platform: 'Instagram',
    thumb: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&auto=format&fit=crop&q=80',
    filename: 'VidSave_Instagram_Reel_HD.mp4'
  },
  youtube: {
    title: 'Next-Gen Mobile App UI Design Tips (Shorts)',
    author: 'Zahid Codes Tech',
    duration: '00:58',
    platform: 'YouTube Shorts',
    thumb: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&auto=format&fit=crop&q=80',
    filename: 'VidSave_YouTube_Shorts_1080p.mp4'
  },
  facebook: {
    title: 'Community Wildlife Documentary Trailer',
    author: 'Discovery Hub',
    duration: '02:30',
    platform: 'Facebook Video',
    thumb: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=80',
    filename: 'VidSave_Facebook_Video_HD.mp4'
  },
  pinterest: {
    title: 'Minimalist Scandinavian Home Interior Inspiration',
    author: 'DesignPins',
    duration: '00:32',
    platform: 'Pinterest',
    thumb: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&auto=format&fit=crop&q=80',
    filename: 'VidSave_Pinterest_IdeaPin.mp4'
  },
  twitter: {
    title: 'AI Robotics Breakthrough Demonstration Clip',
    author: '@TechInnovations',
    duration: '01:05',
    platform: 'Twitter / X',
    thumb: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&auto=format&fit=crop&q=80',
    filename: 'VidSave_Twitter_Clip.mp4'
  },
  default: {
    title: 'Public Social Media Video Stream',
    author: 'Online Creator',
    duration: '01:00',
    platform: 'Web Video',
    thumb: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=500&auto=format&fit=crop&q=80',
    filename: 'VidSave_HighQuality_Video.mp4'
  }
};

let currentResult = null;

function detectPlatform(url) {
  const lower = url.toLowerCase();
  if (lower.includes('tiktok.com')) return 'tiktok';
  if (lower.includes('instagram.com')) return 'instagram';
  if (lower.includes('youtube.com') || lower.includes('youtu.be')) return 'youtube';
  if (lower.includes('facebook.com') || lower.includes('fb.watch')) return 'facebook';
  if (lower.includes('pinterest.com') || lower.includes('pin.it')) return 'pinterest';
  if (lower.includes('x.com') || lower.includes('twitter.com')) return 'twitter';
  return 'default';
}

function initDownloader() {
  const urlInput = document.getElementById('videoUrlInput');
  const pasteBtn = document.getElementById('pasteBtn');
  const clearBtn = document.getElementById('clearInputBtn');
  const fetchBtn = document.getElementById('fetchBtn');
  const resultBox = document.getElementById('downloadResultBox');
  const quickBtns = document.querySelectorAll('.platform-pill-btn');

  if (!urlInput || !fetchBtn) return;

  // Clear button toggle
  const updateClearBtn = () => {
    if (clearBtn) {
      if (urlInput.value.trim().length > 0) {
        clearBtn.classList.add('show');
      } else {
        clearBtn.classList.remove('show');
      }
    }
  };

  urlInput.addEventListener('input', updateClearBtn);

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      urlInput.value = '';
      updateClearBtn();
      urlInput.focus();
    });
  }

  // Paste button
  if (pasteBtn) {
    pasteBtn.addEventListener('click', async () => {
      try {
        if (navigator.clipboard && navigator.clipboard.readText) {
          const text = await navigator.clipboard.readText();
          if (text) {
            urlInput.value = text.trim();
            updateClearBtn();
            showToast('Link pasted from clipboard!');
            processUrl(urlInput.value.trim());
          } else {
            showToast('Clipboard is empty. Please copy a video URL first.');
          }
        } else {
          urlInput.focus();
          showToast('Press Ctrl+V to paste your link.');
        }
      } catch (err) {
        urlInput.focus();
        showToast('Please paste the URL manually into the field.');
      }
    });
  }

  // Quick sample platform buttons
  quickBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const platform = btn.getAttribute('data-platform');
      if (sampleUrls[platform]) {
        urlInput.value = sampleUrls[platform];
        updateClearBtn();
        processUrl(sampleUrls[platform]);
      }
    });
  });

  // Fetch button
  fetchBtn.addEventListener('click', () => {
    const val = urlInput.value.trim();
    if (!val) {
      showToast('Please enter or paste a valid video URL.');
      urlInput.focus();
      return;
    }
    processUrl(val);
  });

  // Enter key support
  urlInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const val = urlInput.value.trim();
      if (val) processUrl(val);
    }
  });

  // Format selector change
  document.querySelectorAll('.format-option').forEach(option => {
    option.addEventListener('click', () => {
      document.querySelectorAll('.format-option').forEach(o => o.classList.remove('selected'));
      option.classList.add('selected');
      const radio = option.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
    });
  });

  // Download Trigger Button
  const downloadNowBtn = document.getElementById('downloadNowBtn');
  if (downloadNowBtn) {
    downloadNowBtn.addEventListener('click', handleDownloadAction);
  }
}

function processUrl(url) {
  const fetchBtn = document.getElementById('fetchBtn');
  const resultBox = document.getElementById('downloadResultBox');
  if (!resultBox) return;

  const originalText = fetchBtn.innerHTML;
  fetchBtn.disabled = true;
  fetchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Analyzing Link...';

  const platformKey = detectPlatform(url);
  const data = mockData[platformKey] || mockData.default;

  setTimeout(() => {
    fetchBtn.disabled = false;
    fetchBtn.innerHTML = originalText;

    currentResult = {
      ...data,
      url: url,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    // Render in UI
    document.getElementById('resultThumb').src = currentResult.thumb;
    document.getElementById('resultThumb').alt = currentResult.title;
    document.getElementById('resultPlatformTag').textContent = currentResult.platform;
    document.getElementById('resultTitle').textContent = currentResult.title;
    document.getElementById('resultAuthor').innerHTML = `<i class="fas fa-user-circle"></i> ${currentResult.author}`;
    document.getElementById('resultDuration').innerHTML = `<i class="fas fa-clock"></i> ${currentResult.duration}`;

    resultBox.classList.add('active');
    resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    showToast(`Found high-quality media stream for ${currentResult.platform}!`);
  }, 750);
}

function handleDownloadAction() {
  if (!currentResult) return;

  const downloadNowBtn = document.getElementById('downloadNowBtn');
  const progressBox = document.getElementById('downloadProgressContainer');
  const progressBar = document.getElementById('progressBarFill');
  const progressPercent = document.getElementById('progressPercent');

  const selectedFormatEl = document.querySelector('input[name="videoFormat"]:checked');
  const format = selectedFormatEl ? selectedFormatEl.value : '1080p';

  let extension = '.mp4';
  let mimeType = 'video/mp4';
  let filename = currentResult.filename;

  if (format === 'mp3') {
    extension = '.mp3';
    mimeType = 'audio/mp3';
    filename = filename.replace('.mp4', '.mp3');
  } else if (format === '720p') {
    filename = filename.replace('.mp4', '_720p.mp4');
  }

  downloadNowBtn.disabled = true;
  downloadNowBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Preparing File...';
  progressBox.classList.add('active');

  let currentPercent = 0;
  const interval = setInterval(() => {
    currentPercent += 20;
    if (currentPercent > 100) currentPercent = 100;

    progressBar.style.width = currentPercent + '%';
    progressPercent.textContent = currentPercent + '%';

    if (currentPercent === 100) {
      clearInterval(interval);
      setTimeout(() => {
        // Trigger simulated blob download
        triggerBrowserDownload(filename, mimeType);

        // Save to LocalStorage History
        saveToHistory({
          title: currentResult.title,
          platform: currentResult.platform,
          format: format.toUpperCase(),
          time: currentResult.timestamp,
          url: currentResult.url
        });

        downloadNowBtn.disabled = false;
        downloadNowBtn.innerHTML = '<i class="fas fa-download"></i> Download Video';
        progressBox.classList.remove('active');
        progressBar.style.width = '0%';
        progressPercent.textContent = '0%';

        showToast(`Downloaded: ${filename}! Saved to your device.`);
      }, 400);
    }
  }, 120);
}

function triggerBrowserDownload(filename, mimeType) {
  // Create sample content payload for demonstration
  const dummyContent = `VidSave Downloaded Media File
File: ${filename}
Processed via: VidSave Video Downloader by Iftikhar Zahid (https://iftikharzahid.me)
Timestamp: ${new Date().toISOString()}
License: Fair Use Personal Archival
`;
  const blob = new Blob([dummyContent], { type: mimeType });
  const downloadUrl = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = downloadUrl;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(downloadUrl), 1000);
}

/* ==========================================================================
   Download History Management (localStorage)
   ========================================================================== */
const STORAGE_KEY = 'vidsave_download_history';

function getHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveToHistory(item) {
  const history = getHistory();
  history.unshift(item);
  // Keep last 10
  if (history.length > 10) history.pop();
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  } catch (e) {}
  renderHistory();
}

function clearHistory() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {}
  renderHistory();
  showToast('Download history cleared.');
}

function renderHistory() {
  const historyContainer = document.getElementById('historyListContainer');
  const clearBtn = document.getElementById('clearHistoryBtn');
  if (!historyContainer) return;

  const history = getHistory();

  if (history.length === 0) {
    historyContainer.innerHTML = '<div class="history-empty"><i class="fas fa-history"></i> No recent downloads yet. Paste a link to begin!</div>';
    if (clearBtn) clearBtn.style.display = 'none';
    return;
  }

  if (clearBtn) clearBtn.style.display = 'inline-flex';

  historyContainer.innerHTML = history.map((item, idx) => `
    <div class="history-item">
      <div class="history-item-info">
        <span class="history-item-platform">${item.platform}</span>
        <span class="history-item-title" title="${item.title}">${item.title}</span>
      </div>
      <div style="display:flex; align-items:center; gap:12px;">
        <span style="font-size:12px; color:var(--muted);">${item.format} • ${item.time}</span>
        <button class="btn btn-secondary btn-sm" onclick="redownloadHistoryItem(${idx})" title="Re-download">
          <i class="fas fa-download"></i>
        </button>
      </div>
    </div>
  `).join('');
}

window.redownloadHistoryItem = function(index) {
  const history = getHistory();
  if (history[index]) {
    triggerBrowserDownload(`VidSave_${history[index].platform}_Replay.mp4`, 'video/mp4');
    showToast(`Re-downloaded: ${history[index].title}`);
  }
};

function initHistory() {
  const clearBtn = document.getElementById('clearHistoryBtn');
  if (clearBtn) {
    clearBtn.addEventListener('click', clearHistory);
  }
  renderHistory();
}

/* ==========================================================================
   APK Download Tracking & Notice
   ========================================================================== */
function initApkDownloadTrackers() {
  const apkButtons = document.querySelectorAll('a[download]');
  apkButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      showToast('Starting VidSave APK download (v1.2.4)... Check your notification bar!');
    });
  });
}

/* ==========================================================================
   Contact Form Handler (Mailto & WhatsApp Integration)
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    if (!name || !email || !message) {
      showToast('Please complete all contact form fields.');
      return;
    }

    // Prepare direct mailto link
    const subject = encodeURIComponent(`VidSave Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nSent via VidSave Portal`);
    
    // Open email client
    window.location.href = `mailto:XahidCodes@gmail.com?subject=${subject}&body=${body}`;

    showToast('Opening your email client to send your message to Iftikhar Zahid...');
    form.reset();
  });
}

/* ==========================================================================
   Toast Notification Utility
   ========================================================================== */
function showToast(message) {
  let toast = document.getElementById('appToastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'appToastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fas fa-check-circle"></i> <span>${message}</span>`;
  toast.classList.add('show');

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}
