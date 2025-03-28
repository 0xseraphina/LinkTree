let config = {
    profile: {
        username: "@myusername",
        bio: "Developer & Creator 🚀",
        avatar: "https://via.placeholder.com/200x200/667eea/ffffff?text=Avatar"
    },
    links: [
        {
            title: "🌟 My Portfolio",
            url: "https://portfolio.example.com",
            description: "Check out my work"
        },
        {
            title: "📱 Twitter",
            url: "https://twitter.com/username",
            description: "Follow me on Twitter"
        },
        {
            title: "💼 LinkedIn",
            url: "https://linkedin.com/in/username",
            description: "Connect with me professionally"
        },
        {
            title: "📧 Contact Me",
            url: "mailto:hello@example.com",
            description: "Send me an email"
        }
    ],
    analytics: {
        trackClicks: true
    }
};

async function loadConfig() {
    try {
        const response = await fetch('./config.json');
        const configData = await response.json();
        config = { ...config, ...configData };
    } catch (error) {
        console.log('Using default config');
    }
}

function generateLinks() {
    const linksContainer = document.querySelector('.links');
    linksContainer.innerHTML = '';
    
    config.links.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.className = 'link-item';
        linkElement.target = '_blank';
        linkElement.rel = 'noopener noreferrer';
        linkElement.innerHTML = `<span>${link.title}</span>`;
        
        linkElement.addEventListener('click', () => {
            if (config.analytics && config.analytics.trackClicks) {
                trackClick(link.title);
            }
        });
        
        linksContainer.appendChild(linkElement);
    });
}

function trackClick(linkTitle) {
    console.log(`Link clicked: ${linkTitle}`);
}

function updateProfile() {
    if (config.profile) {
        document.querySelector('h1').textContent = config.profile.username;
        document.querySelector('.bio').textContent = config.profile.bio;
        document.querySelector('.avatar').src = config.profile.avatar;
    }
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const themeToggle = document.getElementById('themeToggle');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.textContent = '☀️';
    }
    
    themeToggle.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadConfig();
    generateLinks();
    updateProfile();
    initTheme();
});