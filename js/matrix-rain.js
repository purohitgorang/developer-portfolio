// =============================================================================
// Kyoto Cyber Rain — Minimalist Japanese Rain Engine
// Subtle, tranquil Katakana & ASCII streams with restrained phosphor luminescence
// =============================================================================

class MatrixRain {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.characters = 'ｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ零一二三四五六七八九十防衛網知能0123456789ABCDEFGHJKLMNPQRSTUVWXYZ<>/*+~-GORANGPUROHIT';
    this.fontSize = 13;
    this.columns = 0;
    this.drops = [];
    this.isActive = true;
    this.animationId = null;

    this.resize = this.resize.bind(this);
    this.render = this.render.bind(this);

    this.init();
    window.addEventListener('resize', this.resize);
  }

  init() {
    this.resize();
    this.start();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.columns = Math.floor(this.canvas.width / this.fontSize);
    this.drops = [];
    for (let i = 0; i < this.columns; i++) {
      this.drops[i] = Math.floor(Math.random() * -80);
    }
  }

  render() {
    if (!this.isActive) return;

    // Semi-transparent wash for elegant phosphor fading
    this.ctx.fillStyle = 'rgba(6, 8, 12, 0.085)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.font = `${this.fontSize}px "JetBrains Mono", monospace`;

    for (let i = 0; i < this.drops.length; i++) {
      const char = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
      const x = i * this.fontSize;
      const y = this.drops[i] * this.fontSize;

      // Subtle luminous lead character (soft bone white with subtle emerald or vermilion tint)
      this.ctx.fillStyle = '#f8fafc';
      this.ctx.shadowBlur = 6;
      this.ctx.shadowColor = 'rgba(0, 229, 117, 0.6)';
      this.ctx.fillText(char, x, y);

      // Trailing tranquil characters
      this.ctx.shadowBlur = 0;
      if (this.drops[i] > 1) {
        const trailChar = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
        this.ctx.fillStyle = Math.random() > 0.85 ? '#00e575' : '#1e3a2b';
        this.ctx.fillText(trailChar, x, y - this.fontSize);
      }

      // Reset once past screen bottom
      if (y > this.canvas.height && Math.random() > 0.982) {
        this.drops[i] = 0;
      }

      this.drops[i]++;
    }

    this.animationId = requestAnimationFrame(this.render);
  }

  start() {
    if (!this.animationId) {
      this.isActive = true;
      this.render();
    }
  }

  stop() {
    this.isActive = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  toggle() {
    if (this.isActive) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }
}