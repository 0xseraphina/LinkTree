class LinkAnalytics {
    constructor() {
        this.clicks = this.loadClicks();
        this.startTime = Date.now();
    }

    loadClicks() {
        try {
            return JSON.parse(localStorage.getItem('linkanalytics_clicks') || '{}');
        } catch {
            return {};
        }
    }

    saveClicks() {
        localStorage.setItem('linkanalytics_clicks', JSON.stringify(this.clicks));
    }

    trackClick(linkTitle, linkUrl) {
        const today = new Date().toISOString().split('T')[0];
        
        if (!this.clicks[today]) {
            this.clicks[today] = {};
        }
        
        if (!this.clicks[today][linkTitle]) {
            this.clicks[today][linkTitle] = {
                count: 0,
                url: linkUrl
            };
        }
        
        this.clicks[today][linkTitle].count++;
        this.saveClicks();
        
        console.log(`📊 Analytics: "${linkTitle}" clicked (${this.clicks[today][linkTitle].count} times today)`);
        
        this.updateClickDisplay();
    }

    getTotalClicks() {
        let total = 0;
        Object.values(this.clicks).forEach(day => {
            Object.values(day).forEach(link => {
                total += link.count;
            });
        });
        return total;
    }

    getTodaysClicks() {
        const today = new Date().toISOString().split('T')[0];
        const todayClicks = this.clicks[today] || {};
        return Object.values(todayClicks).reduce((sum, link) => sum + link.count, 0);
    }

    getMostPopularLink() {
        let maxClicks = 0;
        let popularLink = null;
        
        Object.values(this.clicks).forEach(day => {
            Object.entries(day).forEach(([title, data]) => {
                if (data.count > maxClicks) {
                    maxClicks = data.count;
                    popularLink = title;
                }
            });
        });
        
        return { title: popularLink, clicks: maxClicks };
    }

    updateClickDisplay() {
        const statsElement = document.getElementById('analytics-stats');
        if (statsElement) {
            const totalClicks = this.getTotalClicks();
            const todayClicks = this.getTodaysClicks();
            const popular = this.getMostPopularLink();
            
            statsElement.innerHTML = `
                <div class="stats-item">
                    <span class="stats-number">${totalClicks}</span>
                    <span class="stats-label">Total Clicks</span>
                </div>
                <div class="stats-item">
                    <span class="stats-number">${todayClicks}</span>
                    <span class="stats-label">Today</span>
                </div>
                ${popular.title ? `
                <div class="stats-item">
                    <span class="stats-number">${popular.clicks}</span>
                    <span class="stats-label">${popular.title}</span>
                </div>
                ` : ''}
            `;
        }
    }

    createStatsDisplay() {
        const container = document.querySelector('.container');
        const statsDiv = document.createElement('div');
        statsDiv.id = 'analytics-stats';
        statsDiv.className = 'analytics-stats';
        container.appendChild(statsDiv);
        this.updateClickDisplay();
    }
}

window.LinkAnalytics = LinkAnalytics;