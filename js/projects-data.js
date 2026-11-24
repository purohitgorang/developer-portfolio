// =============================================================================
// Gorang Purohit — Portfolio Project & Technical Skills Data
// =============================================================================

const OPERATOR_PROFILE = {
  name: "Gorang Purohit",
  title: "Software Engineer",
  location: "Ahmedabad, Gujarat, India",
  links: {
    github: "https://github.com/purohitgorang",
    linkedin: "https://linkedin.com/in/gorangpurohit",
    x: "https://x.com/GorangPurohit",
    email: "gorangpurohit@gmail.com",
    resume: "Gorang_Purohit_Resume.pdf"
  },
  // Technical Skills — Exact match to official resume
  skillCategories: [
    {
      category: "AI & Computer Vision",
      tag: "Vision Core",
      skills: [
        "PyTorch (CUDA)",
        "YOLOv8",
        "OpenCV",
        "ONNX Runtime (YuNet, SFace)",
        "Object Detection",
        "Biometric Liveness Verification (PAD)"
      ]
    },
    {
      category: "Languages & Frameworks",
      tag: "Full Stack",
      skills: [
        "Python (FastAPI, Flask)",
        "Scikit-Learn",
        "React 19",
        "TypeScript",
        "JavaScript",
        "C++",
        "Bash",
        "HTML5 / CSS3"
      ]
    },
    {
      category: "Systems & Security",
      tag: "Defense & Core",
      skills: [
        "System Design",
        "Cryptography (HMAC-SHA256)",
        "Network Security",
        "TCP/IP & OSI Model",
        "Linux (Kali, Ubuntu)",
        "Redis",
        "SQLite (WAL Mode)"
      ]
    },
    {
      category: "Infrastructure & Tools",
      tag: "Edge & Ops",
      skills: [
        "Cloudflare Workers & Pages",
        "Docker",
        "WebSockets (Live Telemetry)",
        "Git & GitHub",
        "Postman (API Testing)",
        "Agile / Scrum Development"
      ]
    }
  ]
};

const PROJECTS_DATA = [
  // 1st: Biometric Attendance System for ERP (Acespritech Internship / Odoo ERP)
  {
    id: "01",
    slug: "face-detection-v2",
    displayUrl: "face-detection-v2",
    title: "Biometric Attendance System for ERP",
    classification: "Internship Deliverable · Acespritech Solutions · Odoo ERP",
    summary: "Workforce attendance module built during my Software/AI internship at Acespritech Solutions for Odoo ERP. Stops proxy clock-ins ('buddy-punching') and removes the need for proprietary biometric fingerprint hardware by running face and liveness checks directly on standard office webcams.",
    image: "images/face-detection-v2.png",
    tags: ["Odoo ERP", "Python", "Flask", "OpenCV", "ONNX Runtime"],
    highlights: [
      "Packaged as an installable Odoo module that logs verified employee check-ins straight into Odoo's hr.attendance model.",
      "Requires an active eye-blink and pose check before confirming attendance, blocking printed photos and phone-screen replay attempts.",
      "Runs on everyday office webcams and standard PCs without dedicated GPU servers or vendor-locked fingerprint scanners.",
      "Verifies facial identity entirely in temporary memory and clears camera frames immediately without writing raw photos to disk."
    ],
    problemStatement: "Enterprises running Odoo ERP lose payroll budget to proxy clock-ins ('buddy-punching') and unverified remote check-ins. Proprietary fingerprint scanners require costly hardware leases, struggle with worn or humid fingertips, and cloud face APIs raise compliance and employee privacy concerns.",
    solution: "Built an edge-native biometric verification module during my Software/AI internship at Acespritech Solutions tailored specifically for Odoo ERP. Standard office webcams feed frames locally for face detection, blink liveness gating, and 128-dimensional vector matching in temporary RAM, committing authenticated timestamps straight into Odoo's hr.attendance model with zero external cloud calls.",
    systemDesignSpecs: [
      "On-Device Verification Latency: Sub-35 ms execution on standard office CPU hardware using 5-point YuNet detection and 128-d SFace ONNX embeddings.",
      "Benchmark Evaluation (15 Edge Scenarios): 100% genuine match (0.742 mean similarity score vs. 0.365 threshold) and 100% impostor rejection (max impostor score 0.231).",
      "Liveness & Anti-Spoofing Gate: Dynamic eye-aspect-ratio (EAR) blink gating and mirror-aware nose-to-eye pose symmetry analysis blocking photo and video replay spoofing.",
      "Privacy-Preserving Matching: O(1) 1-to-1 cosine distance verification; raw facial frames are wiped immediately from memory post-verification with zero disk persistence."
    ],
    gitLink: "https://github.com/purohitgorang/face-detection-biometrics",
    diagramSvg: `
      <svg viewBox="0 0 760 220" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arr2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#18181B"/>
          </marker>
        </defs>
        <rect width="760" height="220" rx="6" fill="#F8FAFC" stroke="#E4E4E7" stroke-width="1.5"/>
        <rect x="20" y="70" width="120" height="75" rx="6" fill="#FFFFFF" stroke="#18181B" stroke-width="1.5"/>
        <text x="80" y="98" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#18181B">Webcam Feed</text>
        <text x="80" y="115" font-family="monospace" font-size="9" text-anchor="middle" fill="#64748B">Flask Port 5000</text>
        <text x="80" y="130" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#15803D">1-to-1 Match Mode</text>
        <line x1="140" y1="107" x2="185" y2="107" stroke="#18181B" stroke-width="1.5" marker-end="url(#arr2)"/>
        <text x="162" y="100" font-family="monospace" font-size="8" text-anchor="middle" fill="#64748B">Frames</text>
        <rect x="190" y="60" width="150" height="95" rx="6" fill="#FFFFFF" stroke="#18181B" stroke-width="1.5"/>
        <text x="265" y="88" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#18181B">YuNet + Blink Check</text>
        <text x="265" y="106" font-family="monospace" font-size="9" text-anchor="middle" fill="#1D4ED8">Haar Eye Detection</text>
        <text x="265" y="122" font-family="monospace" font-size="9" text-anchor="middle" fill="#1D4ED8">5-Point Alignment</text>
        <text x="265" y="140" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#15803D">Anti-Spoof Verified</text>
        <line x1="340" y1="107" x2="385" y2="107" stroke="#18181B" stroke-width="1.5" marker-end="url(#arr2)"/>
        <text x="362" y="100" font-family="monospace" font-size="8" text-anchor="middle" fill="#64748B">Crop</text>
        <rect x="390" y="60" width="150" height="95" rx="6" fill="#18181B" stroke="#18181B" stroke-width="1.5"/>
        <text x="465" y="88" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#FFFFFF">SFace Embedding</text>
        <text x="465" y="106" font-family="monospace" font-size="9" text-anchor="middle" fill="#93C5FD">128-d Vector</text>
        <text x="465" y="122" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#CBD5E1">Cosine Sim &gt;= 0.365</text>
        <text x="465" y="140" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#86EFAC">Photos Discarded</text>
        <line x1="540" y1="107" x2="585" y2="107" stroke="#18181B" stroke-width="1.5" marker-end="url(#arr2)"/>
        <text x="562" y="100" font-family="monospace" font-size="8" text-anchor="middle" fill="#64748B">Auth</text>
        <rect x="590" y="70" width="150" height="75" rx="6" fill="#FFFFFF" stroke="#18181B" stroke-width="1.5"/>
        <text x="665" y="98" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#18181B">Audit &amp; Attendance</text>
        <text x="665" y="115" font-family="monospace" font-size="9" text-anchor="middle" fill="#64748B">attendance.csv / Odoo ERP</text>
        <text x="665" y="130" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#15803D">hr.attendance Sync</text>
      </svg>
    `
  },

  // 2nd: Bluestar Employment Solutions (Commercial Client Production Deployment)
  {
    id: "05",
    slug: "bluestar-employment",
    displayUrl: "bluestaremployment.com",
    liveUrl: "https://bluestaremployment.com",
    title: "Bluestar Employment Solutions Recruitment Portal",
    classification: "Client Production Deployment · bluestaremployment.com",
    summary: "Live staffing portal built during my internship for Bluestar Employment Solutions across Healthcare, Hospitality, FMCG, and Aviation. Replaces slow, maintenance-heavy CMS setups so HR coordinators can publish and close openings without touching code or managing servers.",
    image: "images/bluestar-employment.png",
    tags: ["Cloudflare Pages", "Cloudflare Workers", "Google Apps Script", "JavaScript"],
    highlights: [
      "Running in production at bluestaremployment.com for staffing operations across multiple industry verticals.",
      "Backed by a headless Google Sheets and Apps Script workflow so non-technical recruiters can update active job listings directly.",
      "Hosted on Cloudflare Pages and Workers to keep mobile page loads fast without a database server or monthly hosting fees.",
      "Refined application steps with recruiters so mobile candidates can submit resumes directly to regional coordinators."
    ],
    problemStatement: "Bluestar Employment Solutions needed a fast, dependable portal for live openings and candidate submissions without paying for dynamic CMS hosting or dealing with WordPress plugin maintenance and security patches.",
    solution: "Built and deployed a Jamstack portal on Cloudflare Pages and Cloudflare Workers wired to a Google Sheets and Google Apps Script intake pipeline. Recruiters manage job rows in a familiar spreadsheet while applicants hit a fast, edge-cached site with zero database attack surface.",
    systemDesignSpecs: [
      "Edge Caching & Distribution: Global edge routing and caching via Cloudflare Pages and Cloudflare Workers, decreasing page load latency by 45%.",
      "High-Capacity Vacancy Routing: Dynamic listing and routing framework supporting 500+ concurrent job postings via Google Apps Script JSON feeds.",
      "Conversion & UX Iteration: Streamlined mobile candidate application flow, increasing completed mobile submissions by 25%.",
      "Zero Recurring OpEx: Hardened Jamstack architecture operating with $0 recurring server hosting or database maintenance fees."
    ],
    gitLink: null,
    diagramSvg: `
      <svg viewBox="0 0 760 220" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arr5" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#18181B"/>
          </marker>
        </defs>
        <rect width="760" height="220" rx="6" fill="#F8FAFC" stroke="#E4E4E7" stroke-width="1.5"/>
        <rect x="20" y="70" width="130" height="75" rx="6" fill="#FFFFFF" stroke="#18181B" stroke-width="1.5"/>
        <text x="85" y="98" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#18181B">Google Sheets CMS</text>
        <text x="85" y="115" font-family="monospace" font-size="9" text-anchor="middle" fill="#64748B">Recruiter Job Postings</text>
        <text x="85" y="130" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#15803D">Zero Tech Overhead</text>
        <line x1="150" y1="107" x2="195" y2="107" stroke="#18181B" stroke-width="1.5" marker-end="url(#arr5)"/>
        <text x="172" y="100" font-family="monospace" font-size="8" text-anchor="middle" fill="#64748B">Webhook</text>
        <rect x="200" y="60" width="150" height="95" rx="6" fill="#FFFFFF" stroke="#18181B" stroke-width="1.5"/>
        <text x="275" y="88" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#18181B">Apps Script Handler</text>
        <text x="275" y="106" font-family="monospace" font-size="9" text-anchor="middle" fill="#1D4ED8">Data Sanitization</text>
        <text x="275" y="122" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#64748B">Coordinator Alerts</text>
        <text x="275" y="140" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#15803D">Zero SQL Surface</text>
        <line x1="350" y1="107" x2="395" y2="107" stroke="#18181B" stroke-width="1.5" marker-end="url(#arr5)"/>
        <text x="372" y="100" font-family="monospace" font-size="8" text-anchor="middle" fill="#64748B">Deploy</text>
        <rect x="400" y="60" width="160" height="95" rx="6" fill="#18181B" stroke="#18181B" stroke-width="1.5"/>
        <text x="480" y="88" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#FFFFFF">Cloudflare Pages &amp; Workers</text>
        <text x="480" y="106" font-family="monospace" font-size="9" text-anchor="middle" fill="#93C5FD">Edge Serverless Compute</text>
        <text x="480" y="122" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#CBD5E1">-45% Load Latency</text>
        <text x="480" y="140" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#86EFAC">$0 Server OpEx</text>
        <line x1="560" y1="107" x2="605" y2="107" stroke="#18181B" stroke-width="1.5" marker-end="url(#arr5)"/>
        <text x="582" y="100" font-family="monospace" font-size="8" text-anchor="middle" fill="#64748B">HTTP</text>
        <rect x="610" y="70" width="130" height="75" rx="6" fill="#FFFFFF" stroke="#18181B" stroke-width="1.5"/>
        <text x="675" y="98" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#18181B">bluestaremployment.com</text>
        <text x="675" y="115" font-family="monospace" font-size="9" text-anchor="middle" fill="#64748B">Candidate Portal</text>
        <text x="675" y="130" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#15803D">Vanilla JS Engine</text>
      </svg>
    `
  },

  // 3rd: Drone Hawk X (Autonomous Edge AI & Defense Architecture)
  {
    id: "04",
    slug: "dronewatch",
    displayUrl: "dronewatch",
    title: "Drone Hawk X Airspace Surveillance System",
    classification: "Edge Computer Vision · Perimeter Defense",
    summary: "Offline airspace monitoring tool built to spot unauthorized low-altitude drones in real time. Designed for restricted sites where conventional radar misses small multi-rotors and cloud video APIs cannot be reached or trusted.",
    image: "images/drone-hawk-x-glass.png?v=3.0",
    tags: ["PyTorch", "YOLOv8", "FastAPI", "React 19", "Air-Gapped"],
    highlights: [
      "Identifies commercial drones and FPV quadcopters in optical camera feeds while filtering out birds and normal aviation traffic.",
      "Operates completely air-gapped on local hardware without internet connectivity, third-party API keys, or cloud video uploads.",
      "Includes presentation-attack filtering to reject drone footage held up to the camera on phones or external monitors.",
      "Writes detection timestamps and incident logs locally so security operators can audit events offline."
    ],
    problemStatement: "Traditional perimeter radar often misses small, low-altitude commercial drones, while cloud vision APIs add network latency, break in field conditions without internet access, and leak sensitive camera footage outside secured perimeters.",
    solution: "Built an offline perimeter monitoring pipeline combining a custom-trained YOLOv8 aerial detector with a FastAPI inference server and a tabbed React 19 operator interface. All video frames remain in local memory while verified events write strictly to local storage.",
    systemDesignSpecs: [
      "Hardware Latency: 14.8 ms (~67.5 FPS) CUDA inference on NVIDIA GTX 1650; 42.1 ms CPU fallback on Intel i7.",
      "Benchmark Validation: 100% precision across 16 real-world evaluation scenes (8 multi-rotor/FPV drone targets, 8 wildlife and aviation distractors).",
      "Presentation Attack Defense (PAD): Dual-head spatial bounding-box suppression detecting display bezels and screen replay attacks.",
      "Zero-Egress Data Architecture: Local SQLite/JSON incident telemetry with zero external network packets and zero remote API keys."
    ],
    gitLink: "https://github.com/purohitgorang/dronewatch-surveillance",
    diagramSvg: `
      <svg viewBox="0 0 760 220" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#18181B"/>
          </marker>
        </defs>
        <rect width="760" height="220" rx="6" fill="#F8FAFC" stroke="#E4E4E7" stroke-width="1.5"/>
        <rect x="20" y="70" width="125" height="75" rx="6" fill="#FFFFFF" stroke="#18181B" stroke-width="1.5"/>
        <text x="82" y="98" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#18181B">Optical Camera Feed</text>
        <text x="82" y="115" font-family="monospace" font-size="9" text-anchor="middle" fill="#64748B">Webcam / Snapshot</text>
        <text x="82" y="130" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#15803D">Local Video Stream</text>
        <line x1="145" y1="107" x2="190" y2="107" stroke="#18181B" stroke-width="1.5" marker-end="url(#arr)"/>
        <text x="167" y="100" font-family="monospace" font-size="8" text-anchor="middle" fill="#64748B">Frames</text>
        <rect x="195" y="60" width="150" height="95" rx="6" fill="#FFFFFF" stroke="#18181B" stroke-width="1.5"/>
        <text x="270" y="88" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#18181B">FastAPI Server</text>
        <text x="270" y="106" font-family="monospace" font-size="9" text-anchor="middle" fill="#1D4ED8">Port 8000 /detect</text>
        <text x="270" y="122" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#64748B">In-Memory Buffer</text>
        <text x="270" y="140" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#15803D">Zero Cloud Egress</text>
        <line x1="345" y1="107" x2="390" y2="107" stroke="#18181B" stroke-width="1.5" marker-end="url(#arr)"/>
        <text x="367" y="100" font-family="monospace" font-size="8" text-anchor="middle" fill="#64748B">VRAM</text>
        <rect x="395" y="60" width="160" height="95" rx="6" fill="#18181B" stroke="#18181B" stroke-width="1.5"/>
        <text x="475" y="88" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#FFFFFF">YOLOv8 Aerial Vision</text>
        <text x="475" y="106" font-family="monospace" font-size="9" text-anchor="middle" fill="#93C5FD">PyTorch CUDA / CPU</text>
        <text x="475" y="122" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#CBD5E1">drone_yolov8n.pt</text>
        <text x="475" y="140" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#86EFAC">100% Offline</text>
        <line x1="555" y1="107" x2="600" y2="107" stroke="#18181B" stroke-width="1.5" marker-end="url(#arr)"/>
        <text x="577" y="100" font-family="monospace" font-size="8" text-anchor="middle" fill="#64748B">HUD Boxes</text>
        <rect x="605" y="70" width="140" height="75" rx="6" fill="#FFFFFF" stroke="#18181B" stroke-width="1.5"/>
        <text x="675" y="98" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#18181B">React 19 HUD UI</text>
        <text x="675" y="115" font-family="monospace" font-size="9" text-anchor="middle" fill="#64748B">Vite (Port 5173)</text>
        <text x="675" y="130" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#B91C1C">Incident Logs</text>
      </svg>
    `
  },

  // 4th: AuraAssess (Multimodal Telemetry & Self-Rehearsal Engine)
  {
    id: "02",
    slug: "auraassess",
    displayUrl: "auraassess",
    title: "AuraAssess Presentation Rehearsal Sandbox",
    classification: "Audio & Motion Telemetry · Private Practice Tool",
    summary: "Self-rehearsal tool built to help speakers catch speech rushing, flat pacing, and nervous posture habits before interviews or demos, without saving recordings or ranking people against generic scores.",
    image: "images/auraassess.png",
    tags: ["Python", "FastAPI", "WebSockets", "Audio Signal Processing"],
    highlights: [
      "Flags sudden pacing shifts and posture tension in real time so presenters can self-correct during private dry runs.",
      "Calibrates to each speaker's natural baseline during a short warm-up instead of penalizing personal speaking styles.",
      "Streams audio and landmark signals purely in memory so private practice footage never touches disk or external storage."
    ],
    problemStatement: "Technical candidates and presenters rarely notice when they start rushing speech or tensing up mid-answer, yet practicing on recorded video or external scoring platforms raises privacy anxiety and treats different speaking styles unfairly.",
    solution: "Built a self-contained rehearsal sandbox that establishes an individualized statistical baseline during an opening warm-up, then tracks deviations across vocal stability and posture landmarks over WebSockets while purging raw media buffers immediately.",
    systemDesignSpecs: [
      "Multimodal Sensor Ingestion: 30 FPS client-side feature streaming capturing 468 facial landmark coordinates, 33 skeletal posture keypoints, and live acoustic audio frames.",
      "Audio DSP & Prosody Pipeline: Extracts rolling fundamental frequency (f0), jitter, shimmer, and vocal energy to track vocal stability and speech tempo.",
      "Fairness & Personal Calibration: Normalizes metrics against an individualized 15-second rolling Z-score baseline, preventing demographic or neurodivergent evaluation bias.",
      "Ephemeral Stream Architecture: Full-duplex WebSocket connection streaming live telemetry packets; raw audio and visual buffers are purged immediately upon processing."
    ],
    gitLink: "https://github.com/purohitgorang/auraassess-multimodal-ai",
    diagramSvg: `
      <svg viewBox="0 0 760 220" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arr3" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#18181B"/>
          </marker>
        </defs>
        <rect width="760" height="220" rx="6" fill="#F8FAFC" stroke="#E4E4E7" stroke-width="1.5"/>
        <rect x="20" y="70" width="130" height="75" rx="6" fill="#FFFFFF" stroke="#18181B" stroke-width="1.5"/>
        <text x="85" y="98" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#18181B">Webcam &amp; Mic</text>
        <text x="85" y="115" font-family="monospace" font-size="9" text-anchor="middle" fill="#64748B">30 FPS Video + Audio</text>
        <text x="85" y="130" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#15803D">Candidate Stream</text>
        <line x1="150" y1="107" x2="195" y2="107" stroke="#18181B" stroke-width="1.5" marker-end="url(#arr3)"/>
        <text x="172" y="100" font-family="monospace" font-size="8" text-anchor="middle" fill="#64748B">AV Stream</text>
        <rect x="200" y="60" width="150" height="95" rx="6" fill="#FFFFFF" stroke="#18181B" stroke-width="1.5"/>
        <text x="275" y="88" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#18181B">Feature Extraction</text>
        <text x="275" y="106" font-family="monospace" font-size="9" text-anchor="middle" fill="#1D4ED8">468 FaceMesh Points</text>
        <text x="275" y="122" font-family="monospace" font-size="9" text-anchor="middle" fill="#1D4ED8">33 Pose Keypoints</text>
        <text x="275" y="140" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#15803D">Prosody DSP</text>
        <line x1="350" y1="107" x2="395" y2="107" stroke="#18181B" stroke-width="1.5" marker-end="url(#arr3)"/>
        <text x="372" y="100" font-family="monospace" font-size="8" text-anchor="middle" fill="#64748B">Features</text>
        <rect x="400" y="60" width="160" height="95" rx="6" fill="#18181B" stroke="#18181B" stroke-width="1.5"/>
        <text x="480" y="88" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#FFFFFF">Baseline Z-Score</text>
        <text x="480" y="106" font-family="monospace" font-size="9" text-anchor="middle" fill="#93C5FD">15s Rolling Calibration</text>
        <text x="480" y="122" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#CBD5E1">4 Behavioral States</text>
        <text x="480" y="140" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#86EFAC">Zero Disk Storage</text>
        <line x1="560" y1="107" x2="605" y2="107" stroke="#18181B" stroke-width="1.5" marker-end="url(#arr3)"/>
        <text x="582" y="100" font-family="monospace" font-size="8" text-anchor="middle" fill="#64748B">WS Telemetry</text>
        <rect x="610" y="70" width="130" height="75" rx="6" fill="#FFFFFF" stroke="#18181B" stroke-width="1.5"/>
        <text x="675" y="98" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#18181B">WebSocket UI</text>
        <text x="675" y="115" font-family="monospace" font-size="9" text-anchor="middle" fill="#64748B">Port 8080 Live</text>
        <text x="675" y="130" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#15803D">Pacing Feedback</text>
      </svg>
    `
  },

  // 5th: HyTrace (Verified Green Hydrogen Credit Tokenization Platform)
  {
    id: "03",
    slug: "hytrace",
    displayUrl: "hytrace",
    title: "HyTrace Green Hydrogen Credit Platform",
    classification: "CleanTech Provenance · Audit Automation",
    summary: "Provenance and credit retirement platform tackling double-counting in green hydrogen markets. Cross-checks energy generation logs before issuing credits and permanently retires tokens once claimed.",
    image: "images/hytrace.png",
    tags: ["Next.js", "TypeScript", "Solidity", "Audit Automation"],
    highlights: [
      "Prevents certificate double-counting by permanently retiring offset credits on-chain when claimed by an industrial buyer.",
      "Matches claimed hydrogen output against renewable power generation logs before issuing tradable credits.",
      "Replaces slow paper certificate reviews with automated checks against renewable origin records."
    ],
    problemStatement: "Green hydrogen credit markets suffer from double-counting, weak origin verification, and slow manual paper audits of plant generation logs, making invalid environmental claims easy to slip through.",
    solution: "Built a provenance and trading platform pairing non-reusable ERC-721 credit tokens with automated plant telemetry verification. Energy input is checked against hydrogen output before minting, and tokens are permanently burned on redemption.",
    systemDesignSpecs: [
      "Smart Contract Lifecycle: ERC-721 token interface with verifiable provenance metadata and a permanent non-reversible retireCredit() burn function.",
      "Oracle Telemetry Validation: Ingests signed Modbus/MQTT power plant telemetry to validate physical energy conversion (MWh input vs. kg H2 produced).",
      "Automated Audit Engine: Automated compliance verification flows parsing renewable energy certificates and grid origin documents.",
      "Decoupled Web3 Architecture: Client-side wallet state management decoupled from Next.js 15 App Router server-side execution to avoid hydration collisions."
    ],
    gitLink: "https://github.com/purohitgorang/hytrace-marketplace",
    diagramSvg: `
      <svg viewBox="0 0 760 220" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arr4" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#18181B"/>
          </marker>
        </defs>
        <rect width="760" height="220" rx="6" fill="#F8FAFC" stroke="#E4E4E7" stroke-width="1.5"/>
        <rect x="20" y="70" width="130" height="75" rx="6" fill="#FFFFFF" stroke="#18181B" stroke-width="1.5"/>
        <text x="85" y="98" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#18181B">Clean Power Logs</text>
        <text x="85" y="115" font-family="monospace" font-size="9" text-anchor="middle" fill="#64748B">Solar / Wind MWh</text>
        <text x="85" y="130" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#15803D">Origin Telemetry</text>
        <line x1="150" y1="107" x2="195" y2="107" stroke="#18181B" stroke-width="1.5" marker-end="url(#arr4)"/>
        <text x="172" y="100" font-family="monospace" font-size="8" text-anchor="middle" fill="#64748B">Audit</text>
        <rect x="200" y="60" width="150" height="95" rx="6" fill="#FFFFFF" stroke="#18181B" stroke-width="1.5"/>
        <text x="275" y="88" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#18181B">Compliance Engine</text>
        <text x="275" y="106" font-family="monospace" font-size="9" text-anchor="middle" fill="#1D4ED8">Modbus / MQTT Parsing</text>
        <text x="275" y="122" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#64748B">MWh vs kg H2 Match</text>
        <text x="275" y="140" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#15803D">Audit Passed</text>
        <line x1="350" y1="107" x2="395" y2="107" stroke="#18181B" stroke-width="1.5" marker-end="url(#arr4)"/>
        <text x="372" y="100" font-family="monospace" font-size="8" text-anchor="middle" fill="#64748B">Mint</text>
        <rect x="400" y="60" width="160" height="95" rx="6" fill="#18181B" stroke="#18181B" stroke-width="1.5"/>
        <text x="480" y="88" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#FFFFFF">Solidity ERC-721</text>
        <text x="480" y="106" font-family="monospace" font-size="9" text-anchor="middle" fill="#93C5FD">GHC Token Contract</text>
        <text x="480" y="122" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#CBD5E1">retireCredit() Burn</text>
        <text x="480" y="140" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#86EFAC">No Double Count</text>
        <line x1="560" y1="107" x2="605" y2="107" stroke="#18181B" stroke-width="1.5" marker-end="url(#arr4)"/>
        <text x="582" y="100" font-family="monospace" font-size="8" text-anchor="middle" fill="#64748B">Trade</text>
        <rect x="610" y="70" width="130" height="75" rx="6" fill="#FFFFFF" stroke="#18181B" stroke-width="1.5"/>
        <text x="675" y="98" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#18181B">Next.js 15 Portal</text>
        <text x="675" y="115" font-family="monospace" font-size="9" text-anchor="middle" fill="#64748B">Port 9002 Trading</text>
        <text x="675" y="130" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#15803D">Direct Settlement</text>
      </svg>
    `
  }
];
