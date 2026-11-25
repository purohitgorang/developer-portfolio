// =============================================================================
// Gorang Purohit — Portfolio Controller
// Neo-Brutalist Project Showcase & System Design Flowchart Inspector
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
  const modalContainer = document.getElementById('modalContainer');

  // 1. Render Skills in About Section with Deep AI & Vision Focus
  const skillsContainer = document.getElementById('skillsContainer');
  if (skillsContainer && typeof OPERATOR_PROFILE !== 'undefined') {
    if (OPERATOR_PROFILE.skillCategories) {
      skillsContainer.innerHTML = OPERATOR_PROFILE.skillCategories.map(group => `
        <div class="skill-category-block" style="margin-bottom: 1.35rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem;">
            <div style="display: flex; align-items: center; gap: 0.45rem;">
              <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: ${group.color}; border: 1.5px solid var(--ink-primary);"></span>
              <h4 style="font-family: var(--font-display); font-size: 0.95rem; font-weight: 800; color: var(--ink-primary); margin: 0;">
                ${group.category}
              </h4>
            </div>
            <span style="font-family: var(--font-mono); font-size: 0.72rem; font-weight: 700; color: var(--ink-muted); text-transform: uppercase;">
              ${group.tag}
            </span>
          </div>
          <div class="skills-badge-wrap" style="margin-top: 0; gap: 0.45rem;">
            ${group.skills.map(s => `
              <span class="skill-tag-pill" style="font-size: 0.78rem; padding: 0.3rem 0.65rem;">${s}</span>
            `).join('')}
          </div>
        </div>
      `).join('');
    } else {
      skillsContainer.innerHTML = OPERATOR_PROFILE.skills.map(skill => `
        <span class="skill-tag-pill">${skill}</span>
      `).join('');
    }
  }

  // Tint mapping for project media frames
  const tintClasses = {
    '04': 'tint-lavender',
    '01': 'tint-coral',
    '02': 'tint-mint',
    '03': 'tint-sky',
    '05': 'tint-amber',
    '06': 'tint-obsidian'
  };

  const tagColorClasses = ['tag-yellow', 'tag-purple', 'tag-pink', 'tag-green', 'tag-blue'];

  function renderProjectCard(project, idx) {
    const tintClass = tintClasses[project.id] || 'tint-lavender';
    const mainTagColor = tagColorClasses[idx % tagColorClasses.length];

    return `
      <article class="neo-project-card" data-project-id="${project.id}">
        <!-- Left: Real UI Screenshot in Neo-Brutalist Browser Frame -->
        <div class="project-media-col ${tintClass}">
          <div class="browser-frame" data-id="${project.id}" title="Click to inspect system design architecture">
            <div class="browser-bar">
              <span class="browser-dot dot-red"></span>
              <span class="browser-dot dot-yellow"></span>
              <span class="browser-dot dot-green"></span>
              <span class="browser-address">${project.displayUrl || project.slug}</span>
            </div>
            <img 
              src="${project.image}" 
              alt="${project.title} Interface Screenshot" 
              class="browser-image"
              loading="lazy"
            />
          </div>
        </div>

        <!-- Right: Technical Details & Case Study Information -->
        <div class="project-content-col">
          <div>
            ${project.classification ? `
              <div class="project-classification-badge ${project.classificationClass || ''}">
                <span class="classification-badge-icon">${project.classificationIcon || '✦'}</span>
                <span class="classification-badge-text">${project.classification}</span>
              </div>
            ` : ''}

            <div class="project-tags-row">
              <span class="neo-tag ${mainTagColor}">${project.category}</span>
              ${project.tags.slice(0, 3).map((tag, tIdx) => `
                <span class="neo-tag ${tagColorClasses[(tIdx + 1) % tagColorClasses.length]}">${tag}</span>
              `).join('')}
            </div>

            <h3 class="project-h3-title">${project.title}</h3>
            <p class="project-summary-text">${project.summary}</p>
            
            <ul class="project-bullets-list">
              ${project.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
          </div>

          <div class="project-actions-row">
            <button class="btn-card-diagram" data-id="${project.id}">
              <span>System Design & Flowchart</span> ➔
            </button>
            ${project.liveUrl ? `
              <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-live" onclick="event.stopPropagation()">
                Live Website ↗
              </a>
            ` : ''}
            ${project.gitLink ? `
              <a href="${project.gitLink}" target="_blank" rel="noopener noreferrer" class="btn-card-github" onclick="event.stopPropagation()">
                GitHub ↗
              </a>
            ` : ''}
          </div>
        </div>
      </article>
    `;
  }

  // 2. Render Featured & Under-Development Project Cards
  const projectsList = document.getElementById('projectsList');
  if (projectsList && typeof PROJECTS_DATA !== 'undefined') {
    projectsList.innerHTML = PROJECTS_DATA.map((project, idx) => renderProjectCard(project, idx)).join('');
  }

  const underDevList = document.getElementById('underDevList');
  if (underDevList && typeof UNDER_DEVELOPMENT_PROJECTS !== 'undefined') {
    underDevList.innerHTML = UNDER_DEVELOPMENT_PROJECTS.map((project, idx) => renderProjectCard(project, idx + 2)).join('');
  }

  if (projectsList || underDevList) {
    // Attach click listeners to open System Design Modal
    document.querySelectorAll('.btn-card-diagram').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const pId = btn.getAttribute('data-id');
        openSystemDesignModal(pId);
      });
    });

    document.querySelectorAll('.browser-frame').forEach(frame => {
      frame.addEventListener('click', (e) => {
        e.stopPropagation();
        const pId = frame.getAttribute('data-id');
        openSystemDesignModal(pId);
      });
    });

    // Direct URL parameter or hash navigation to open modal (e.g. ?project=04 or #modal-04)
    const urlParams = new URLSearchParams(window.location.search);
    const projParam = urlParams.get('project');
    if (projParam) {
      openSystemDesignModal(projParam);
    } else if (window.location.hash && window.location.hash.startsWith('#modal-')) {
      const pId = window.location.hash.replace('#modal-', '');
      openSystemDesignModal(pId);
    }
  }

  // 3. System Design & Architecture Flowchart Modal
  function openSystemDesignModal(projectId) {
    const allProjects = [
      ...(typeof PROJECTS_DATA !== 'undefined' ? PROJECTS_DATA : []),
      ...(typeof UNDER_DEVELOPMENT_PROJECTS !== 'undefined' ? UNDER_DEVELOPMENT_PROJECTS : [])
    ];
    const project = allProjects.find(p => p.id === projectId);
    if (!project || !modalContainer) return;

    modalContainer.innerHTML = `
      <div class="modal-overlay" id="modalBackdrop">
        <div class="modal-window" onclick="event.stopPropagation()">
          <div class="modal-header">
            <div class="modal-title-group">
              ${project.classification ? `
                <div style="margin-bottom: 0.5rem;">
                  <div class="project-classification-badge ${project.classificationClass || ''}" style="margin-bottom: 0;">
                    <span class="classification-badge-icon">${project.classificationIcon || '✦'}</span>
                    <span class="classification-badge-text">${project.classification}</span>
                  </div>
                </div>
              ` : ''}
              <span class="modal-category-label">${project.category}</span>
              <h3>${project.title}</h3>
            </div>
            <button class="btn-close-modal" id="closeModalBtn" title="Close (Esc)">✕</button>
          </div>

          <div class="modal-scroll-body">
            <!-- System Design & Signal Flowchart -->
            <div>
              <h4 class="modal-section-h4">
                <span>📐</span> System Design Architecture & Signal Flow
              </h4>
              <div class="modal-diagram-container">
                ${project.diagramSvg}
              </div>
            </div>

            <!-- Problem Statement -->
            <div>
              <h4 class="modal-section-h4">
                <span>⚠️</span> The Operational Problem It Solves
              </h4>
              <p class="modal-text">${project.problemStatement}</p>
            </div>

            <!-- Engineering Solution -->
            <div>
              <h4 class="modal-section-h4">
                <span>⚙️</span> Engineering Solution & System Flow
              </h4>
              <p class="modal-text">${project.solution}</p>
            </div>

            <!-- Deep Technical Specifications & Benchmarks -->
            <div>
              <h4 class="modal-section-h4">
                <span>🔬</span> Deep Technical Architecture & Verified Specs
              </h4>
              <ul class="project-bullets-list" style="margin-bottom: 0;">
                ${(project.systemDesignSpecs || project.highlights).map(h => `<li>${h}</li>`).join('')}
              </ul>
            </div>

            <!-- Reproducible Git Clone / Live Platform Box -->
            <div class="modal-clone-row">
              ${project.gitLink ? `
                <span class="clone-code">git clone ${project.gitLink}.git</span>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                  ${project.liveUrl ? `
                    <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-copy-clone" style="text-decoration: none; background: #BAE6FD;">Live Website ↗</a>
                  ` : ''}
                  <button class="btn-copy-clone" id="copyGitBtn">Copy Command 📋</button>
                </div>
              ` : `
                <span class="clone-code" style="color: #64748B;">${project.inDevelopment ? `In Active Development — ${project.shortTitle || project.title}` : `Production Deployment — ${project.liveUrl ? project.liveUrl.replace('https://', '') : 'Live Platform'}`}</span>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                  ${project.liveUrl ? `
                    <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-copy-clone" style="text-decoration: none; background: #BAE6FD; color: #0369A1; font-weight: 700;">Visit Live Platform ↗</a>
                  ` : ''}
                </div>
              `}
            </div>
          </div>
        </div>
      </div>
    `;

    // Modal Events
    const closeModal = () => {
      modalContainer.innerHTML = '';
      if (window.location.hash.startsWith('#modal-')) {
        history.replaceState(null, null, ' ');
      }
    };

    document.getElementById('closeModalBtn')?.addEventListener('click', closeModal);
    document.getElementById('modalBackdrop')?.addEventListener('click', closeModal);

    const copyGitBtn = document.getElementById('copyGitBtn');
    if (copyGitBtn) {
      copyGitBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(`git clone ${project.gitLink}.git`);
        copyGitBtn.textContent = 'Copied! ✓';
        setTimeout(() => { copyGitBtn.textContent = 'Copy Command 📋'; }, 2000);
      });
    }

    const escHandler = (e) => {
      if (e.key === 'Escape') {
        closeModal();
        document.removeEventListener('keydown', escHandler);
      }
    };
    document.addEventListener('keydown', escHandler);
  }

  // 4. Copy Email Handler
  const btnCopyEmail = document.getElementById('btnCopyEmail');
  if (btnCopyEmail) {
    btnCopyEmail.addEventListener('click', () => {
      const email = 'gorangpurohit@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        const originalText = btnCopyEmail.textContent;
        btnCopyEmail.textContent = 'Copied! ✓';
        btnCopyEmail.style.backgroundColor = '#BBF7D0';
        setTimeout(() => {
          btnCopyEmail.textContent = originalText;
          btnCopyEmail.style.backgroundColor = '';
        }, 2000);
      }).catch(() => {
        window.location.href = `mailto:gorangpurohit@gmail.com`;
      });
    });
  }
});
