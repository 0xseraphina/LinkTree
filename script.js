const links = [
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
];

function generateLinks() {
    const linksContainer = document.querySelector('.links');
    linksContainer.innerHTML = '';
    
    links.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.className = 'link-item';
        linkElement.target = '_blank';
        linkElement.rel = 'noopener noreferrer';
        linkElement.innerHTML = `<span>${link.title}</span>`;
        
        linkElement.addEventListener('click', () => {
            trackClick(link.title);
        });
        
        linksContainer.appendChild(linkElement);
    });
}

function trackClick(linkTitle) {
    console.log(`Link clicked: ${linkTitle}`);
}

function updateProfile() {
    const profileData = {
        username: "@myusername",
        bio: "Developer & Creator 🚀",
        avatar: "https://via.placeholder.com/200x200/667eea/ffffff?text=Avatar"
    };
    
    document.querySelector('h1').textContent = profileData.username;
    document.querySelector('.bio').textContent = profileData.bio;
    document.querySelector('.avatar').src = profileData.avatar;
}

document.addEventListener('DOMContentLoaded', () => {
    generateLinks();
    updateProfile();
});