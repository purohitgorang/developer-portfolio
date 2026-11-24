// =============================================================================
// Gorang Purohit — Portfolio Controller
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
  const modalContainer = document.getElementById('modalContainer');

  const ICONS = {
    diagram: `<svg class="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="8.5" y="14" width="7" height="7" rx="1"/><path d="M6.5 10v2a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-2"/><path d="M12 13v1"/></svg>`,
    external: `<svg class="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7"/><polyline points="7 7 17 7 17 17"/></svg>`,
    close: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    copy: `<svg class="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`
  };

  // 1. Render Verified Technical Skills
  const skillsContainer = document.getElementById('skillsContainer');
  if (skillsContainer && typeof OPERATOR_PROFILE !== 'undefined' && OPERATOR_PROFILE.skillCategories) {
    skillsContainer.innerHTML = OPERATOR_PROFILE.skillCategories.map(group => `
      <div class="skill-group">
        <div class="skill-group-header">
          <h4 class="skill-group-title">${group.category}</h4>
          <span class="skill-group-tag">${group.tag}</span>
        </div>
        <div class="skill-pills-row">
          ${group.skills.map(skill => `<span class="skill-chip">${skill}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  // 2. Render Project Cards
  const projectsList = document.getElementById('projectsList');
  if (projectsList && typeof PROJECTS_DATA !== 'undefined') {
    projectsList.innerHTML = PROJECTS_DATA.map(project => `
      <article class="project-card" data-project-id="${project.id}">
        <div class="project-media">
          <div class="screenshot-frame" data-id="${project.id}" title="Inspect system design & architecture">
            <img
              src="${project.image}"
              alt="${project.title} Interface Screenshot"
              class="screenshot-img"
              loading="lazy"
            />
          </div>
        </div>

        <div class="project-body">
          <div>
            ${project.classification ? `<div class="project-eyebrow">${project.classification}</div>` : ''}
            <h3 class="project-title">${project.title}</h3>
            <p class="project-summary">${project.summary}</p>
            <ul class="clean-bullets">
              ${project.highlights.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>

          <div class="project-footer">
            <div class="project-tags">
              ${project.tags.slice(0, 4).map(tag => `<span class="subtle-tag">${tag}</span>`).join('')}
            </div>

            <div class="project-actions">
              <button class="btn-diagram" type="button" data-id="${project.id}">
                ${ICONS.diagram}
                <span>System Design &amp; Flowchart</span>
              </button>
              ${project.liveUrl ? `
                <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-link-outline" onclick="event.stopPropagation()">
                  <span>Live Site</span>
                  ${ICONS.external}
                </a>
              ` : ''}
              ${project.gitLink ? `
                <a href="${project.gitLink}" target="_blank" rel="noopener noreferrer" class="btn-link-outline" onclick="event.stopPropagation()">
                  <span>GitHub</span>
                  ${ICONS.external}
                </a>
              ` : ''}
            </div>
          </div>
        </div>
      </article>
    `).join('');

    document.querySelectorAll('.btn-diagram, .screenshot-frame').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        openSystemDesignModal(el.getAttribute('data-id'));
      });
    });

    // Optional URL parameter or hash deep-linking (?project=01 or #modal-01)
    const urlParams = new URLSearchParams(window.location.search);
    const projParam = urlParams.get('project');
    if (projParam) {
      openSystemDesignModal(projParam);
    } else if (window.location.hash && window.location.hash.startsWith('#modal-')) {
      openSystemDesignModal(window.location.hash.replace('#modal-', ''));
    }
  }

  // 3. System Design & Architecture Flowchart Modal
  function openSystemDesignModal(projectId) {
    const project = PROJECTS_DATA.find(p => p.id === projectId);
    if (!project || !modalContainer) return;

    modalContainer.innerHTML = `
      <div class="modal-overlay" id="modalBackdrop">
        <div class="modal-window" onclick="event.stopPropagation()" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
          <div class="modal-header">
            <div>
              ${project.classification ? `<span class="modal-eyebrow">${project.classification}</span>` : ''}
              <h3 class="modal-title" id="modalTitle">${project.title}</h3>
            </div>
            <button class="btn-close-modal" id="closeModalBtn" type="button" title="Close (Esc)" aria-label="Close modal">
              ${ICONS.close}
            </button>
          </div>

          <div class="modal-scroll-body">
            <div>
              <h4 class="modal-section-title">System Design Architecture &amp; Signal Flow</h4>
              <div class="modal-diagram-box">
                ${project.diagramSvg}
              </div>
            </div>

            <div>
              <h4 class="modal-section-title">Operational Problem</h4>
              <p class="modal-text">${project.problemStatement}</p>
            </div>

            <div>
              <h4 class="modal-section-title">Engineering Solution</h4>
              <p class="modal-text">${project.solution}</p>
            </div>

            <div>
              <h4 class="modal-section-title">Verified Benchmarks &amp; Technical Specifications</h4>
              <ul class="clean-bullets">
                ${(project.systemDesignSpecs || project.highlights).map(spec => `<li>${spec}</li>`).join('')}
              </ul>
            </div>

            <div class="modal-clone-bar">
              ${project.gitLink ? `
                <code class="clone-code">git clone ${project.gitLink}.git</code>
                <div class="modal-clone-actions">
                  ${project.liveUrl ? `
                    <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-link-outline">
                      <span>Live Site</span>
                      ${ICONS.external}
                    </a>
                  ` : ''}
                  <button class="btn-copy-email" id="copyGitBtn" type="button">
                    ${ICONS.copy}
                    <span>Copy Clone Command</span>
                  </button>
                </div>
              ` : `
                <span class="clone-code">Production Deployment · ${project.liveUrl ? project.liveUrl.replace('https://', '') : 'Live Platform'}</span>
                <div class="modal-clone-actions">
                  ${project.liveUrl ? `
                    <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-link-outline">
                      <span>Visit Live Platform</span>
                      ${ICONS.external}
                    </a>
                  ` : ''}
                </div>
              `}
            </div>
          </div>
        </div>
      </div>
    `;

    const closeModal = () => {
      modalContainer.innerHTML = '';
      document.removeEventListener('keydown', escHandler);
      if (window.location.hash.startsWith('#modal-')) {
        history.replaceState(null, null, ' ');
      }
    };

    const escHandler = (e) => {
      if (e.key === 'Escape') closeModal();
    };

    document.getElementById('closeModalBtn')?.addEventListener('click', closeModal);
    document.getElementById('modalBackdrop')?.addEventListener('click', closeModal);
    document.addEventListener('keydown', escHandler);

    const copyGitBtn = document.getElementById('copyGitBtn');
    if (copyGitBtn) {
      copyGitBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(`git clone ${project.gitLink}.git`).then(() => {
          const span = copyGitBtn.querySelector('span');
          if (span) span.textContent = 'Copied';
          setTimeout(() => { if (span) span.textContent = 'Copy Clone Command'; }, 2000);
        });
      });
    }
  }

  // 4. Copy Email Handler
  const btnCopyEmail = document.getElementById('btnCopyEmail');
  const copyEmailLabel = document.getElementById('copyEmailLabel');
  if (btnCopyEmail) {
    btnCopyEmail.addEventListener('click', () => {
      const email = 'gorangpurohit@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        if (copyEmailLabel) copyEmailLabel.textContent = 'Copied';
        setTimeout(() => {
          if (copyEmailLabel) copyEmailLabel.textContent = 'Copy';
        }, 2000);
      }).catch(() => {
        window.location.href = `mailto:${email}`;
      });
    });
  }
});
