// =============================================================================
// Gorang Purohit — Technical Engineering Portfolio Data
// Verified Fact-Checked System Architecture & Project Case Studies
// =============================================================================

const OPERATOR_PROFILE = {
  name: "Gorang Purohit",
  title: "Software Engineer",
  tagline: "Building AI-driven security systems, computer vision, and defensive infrastructure.",
  bio: "Security-focused software engineer specializing in AI-driven threat detection, computer vision monitoring, and defensive infrastructure. Experienced in designing machine learning systems for intrusion detection, edge computer vision, and packet-level threat analysis. Skilled in Python, Flask, FastAPI, PyTorch, and networking protocols, with technical leadership experience managing cross-functional engineering teams.",
  location: "Available for Software Engineering, AI & Security Roles",
  hobbies: [
    { label: "Distance Running", icon: "🏃", tag: "Endurance & Mental Stamina" },
    { label: "Road Cycling", icon: "🚴", tag: "Pacing & Focus" },
    { label: "Fitness & Strength", icon: "🏋️", tag: "Daily Discipline" },
    { label: "Motorcycling", icon: "🏍️", tag: "Cruising & Mechanics" },
    { label: "Connecting with People", icon: "🎙️", tag: "Curiosity & Collaboration" }
  ],
  links: {
    github: "https://github.com/purohitgorang",
    linkedin: "https://linkedin.com/in/gorangpurohit",
    x: "https://x.com/GorangPurohit",
    email: "gorangpurohit@gmail.com",
    resume: "Gorang_Purohit_Resume.pdf"
  },
  skillCategories: [
    {
      category: "AI & Computer Vision",
      tag: "Core Focus",
      color: "var(--pastel-yellow)",
      skills: [
        "PyTorch (CUDA)",
        "YOLOv8 (Object Detection)",
        "OpenCV (DNN & YuNet)",
        "SFace (128-d Embeddings)",
        "ONNX Runtime (Edge AI)",
        "MediaPipe (FaceMesh & BlazePose)",
        "Anti-Spoofing & Liveness (PAD)",
        "Real-Time Inference (~14.8ms)",
        "Gemini API & Genkit"
      ]
    },
    {
      category: "Applied ML & Signal Processing",
      tag: "Anomaly & DSP",
      color: "var(--pastel-blue)",
      skills: [
        "Scikit-Learn",
        "Isolation Forest (Anomaly Detection)",
        "Random Forest Classifiers",
        "Audio DSP (MFCCs & Prosody)",
        "Multimodal Sensor Fusion",
        "Vector Embeddings & Cosine Distance"
      ]
    },
    {
      category: "Backend, Systems & Security",
      tag: "Infrastructure",
      color: "var(--pastel-green)",
      skills: [
        "Python (FastAPI, Flask)",
        "WebSockets (Live Telemetry)",
        "Scapy (Custom Frame Crafting)",
        "Wireshark (PCAP Analysis)",
        "Network Protocols (TCP/IP, OSI)",
        "Linux (Ubuntu, Kali)",
        "Docker Containerization",
        "REST APIs & Microservices"
      ]
    }
  ],
  skills: [
    "PyTorch (CUDA)", "YOLOv8", "OpenCV", "YuNet Face Detection", "SFace 128-d Embeddings", 
    "ONNX Runtime", "Computer Vision", "Anti-Spoofing / PAD", "MediaPipe", "Scikit-Learn", 
    "Isolation Forest", "Audio DSP", "FastAPI", "Flask", "Python", "WebSockets", 
    "Scapy", "Wireshark", "Network Protocols (TCP/IP, OSI)", "Linux (Ubuntu, Kali)", "Docker"
  ]
};

const PROJECTS_DATA = [
  // 1st: Biometric Attendance System for ERP (Acespritech Internship / Odoo ERP)
  {
    id: "01",
    slug: "face-detection-v2",
    displayUrl: "face-detection-v2",
    title: "Biometric Attendance System for ERP — On-Device Face Recognition & Liveness",
    shortTitle: "Biometric Attendance for ERP",
    classification: "Enterprise Internship Deliverable — Acespritech Solutions (Odoo ERP)",
    classificationIcon: "🏢",
    classificationClass: "badge-enterprise",
    category: "Enterprise Systems & Computer Vision",
    summary: "Enterprise biometric attendance engine engineered during my Software/AI internship at Acespritech Solutions. Packaged as a deployable module integrated directly with Odoo ERP (hr.attendance) using on-device YuNet landmark detection, 128-d SFace embeddings, and active eye-blink verification with sub-35ms inference.",
    image: "images/face-detection-v2.png",
    tags: ["Odoo ERP", "Workforce Verification", "Anti-Spoofing", "Python", "OpenCV", "Acespritech"],
    highlights: [
      "Engineered during Software/AI internship at Acespritech Solutions as a deployable face attendance module for Odoo ERP (hr.attendance).",
      "Sub-35 ms on-device CPU verification latency using 5-point YuNet detection and 128-d SFace embeddings with O(1) 1-to-1 cosine distance thresholding.",
      "100% impostor rejection across 15 real-world edge tests (stranger video playback, synthetic blur, and extreme lighting).",
      "Active eye-blink liveness verification and mirror-aware nose-to-eye pose symmetry gating, neutralizing photographic and video replay spoofing.",
      "In-memory biometric vector matching: 128-d ONNX embeddings used for authentication with zero biometric template reconstruction risk."
    ],
    problemStatement: "Enterprises running Odoo ERP lose substantial payroll budget to 'buddy-punching' (coworkers clocking in for absent colleagues) and unverified remote attendance. Furthermore, proprietary biometric fingerprint scanners require expensive hardware leases, fail under humid or worn finger conditions, and cloud facial recognition services raise severe data compliance and employee privacy concerns.",
    solution: "Engineered an edge-native biometric verification module during my Software/AI internship at Acespritech Solutions, specifically tailored for Odoo ERP. Using standard office webcams, the system performs fast on-device face detection, verifies natural eye-blink liveness, converts facial features into encrypted 128-dimensional vectors, and commits authenticated check-in timestamps directly into Odoo's hr.attendance model in sub-35ms with zero external cloud dependencies.",
    systemDesignSpecs: [
      "On-Device Verification Latency: Sub-35 ms execution on standard office CPU hardware without requiring expensive dedicated GPUs.",
      "Neural Feature Alignment: 5-point facial landmark detection via lightweight YuNet DNN coupled with 128-dimensional SFace feature embeddings.",
      "Liveness & Anti-Spoofing Algorithm: Dynamic eye-aspect-ratio (EAR) blink gating and nose-to-eye pose symmetry analysis neutralizing 2D photo and screen replays.",
      "Privacy-Preserving Vector Matching: O(1) 1-to-1 cosine distance thresholding (similarity threshold >= 0.363); raw facial imagery is wiped immediately from memory post-verification."
    ],
    gitLink: "https://github.com/purohitgorang/face-detection-biometrics",
    diagramSvg: `
      <svg viewBox="0 0 760 220" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arr2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#000000"/>
          </marker>
        </defs>
        <rect width="760" height="220" rx="6" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
        
        <!-- 1. Video Ingest -->
        <rect x="20" y="70" width="120" height="75" rx="4" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
        <text x="80" y="98" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#000">Webcam Feed</text>
        <text x="80" y="115" font-family="monospace" font-size="9" text-anchor="middle" fill="#64748B">Flask Port 5000</text>
        <text x="80" y="130" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#22C55E">1-to-1 Match Mode</text>

        <!-- Arrow 1 -> 2 -->
        <line x1="140" y1="107" x2="185" y2="107" stroke="#000" stroke-width="2" marker-end="url(#arr2)"/>
        <text x="162" y="100" font-family="monospace" font-size="8" text-anchor="middle" fill="#64748B">Frames</text>

        <!-- 2. Liveness & Detection -->
        <rect x="190" y="60" width="150" height="95" rx="4" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
        <text x="265" y="88" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#000">YuNet + Blink Check</text>
        <text x="265" y="106" font-family="monospace" font-size="9" text-anchor="middle" fill="#0284C7">Haar Eye Detection</text>
        <text x="265" y="122" font-family="monospace" font-size="9" text-anchor="middle" fill="#0284C7">5-Point Alignment</text>
        <text x="265" y="140" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#22C55E">Anti-Spoof Verified</text>

        <!-- Arrow 2 -> 3 -->
        <line x1="340" y1="107" x2="385" y2="107" stroke="#000" stroke-width="2" marker-end="url(#arr2)"/>
        <text x="362" y="100" font-family="monospace" font-size="8" text-anchor="middle" fill="#64748B">Crop</text>

        <!-- 3. SFace Vector -->
        <rect x="390" y="60" width="150" height="95" rx="4" fill="#0F172A" stroke="#000000" stroke-width="2"/>
        <text x="465" y="88" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#F8FAFC">SFace Embedding</text>
        <text x="465" y="106" font-family="monospace" font-size="9" text-anchor="middle" fill="#38BDF8">128-d Vector</text>
        <text x="465" y="122" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#94A3B8">Cosine Sim &gt;= 0.363</text>
        <text x="465" y="140" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#10B981">Photos Discarded</text>

        <!-- Arrow 3 -> 4 -->
        <line x1="540" y1="107" x2="585" y2="107" stroke="#000" stroke-width="2" marker-end="url(#arr2)"/>
        <text x="562" y="100" font-family="monospace" font-size="8" text-anchor="middle" fill="#64748B">Auth</text>

        <!-- 4. Storage & Audit -->
        <rect x="590" y="70" width="150" height="75" rx="4" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
        <text x="665" y="98" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#000">Audit &amp; Attendance</text>
        <text x="665" y="115" font-family="monospace" font-size="9" text-anchor="middle" fill="#64748B">attendance.csv / Odoo ERP</text>
        <text x="665" y="130" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#22C55E">hr.attendance Sync</text>
      </svg>
    `
  },

  // 2nd: Bluestar Employment Solutions (Commercial Client Production Deployment)
  {
    id: "05",
    slug: "bluestar-employment",
    displayUrl: "bluestaremployment.com",
    liveUrl: "https://bluestaremployment.com/",
    title: "Bluestar Employment Solutions — Enterprise Staffing Platform",
    shortTitle: "Bluestar Employment",
    classification: "Commercial Client Production Deployment — bluestaremployment.com",
    classificationIcon: "🌐",
    classificationClass: "badge-commercial",
    category: "Distributed Web & Systems",
    summary: "Production enterprise recruitment and staffing platform connecting qualified professionals with India's leading employers in Healthcare, Hospitality, FMCG, and Aviation.",
    image: "images/bluestar-employment.png",
    tags: ["Jamstack", "Netlify Edge CDN", "Vanilla JS", "Headless Google Sheets", "Zero OpEx"],
    highlights: [
      "Commercial Production Deployment: Live at bluestaremployment.com, serving enterprise recruitment operations across India in Healthcare, Hospitality, FMCG, and Aviation.",
      "Zero-Code HR Operations: Custom headless Google Sheets pipeline allowing non-technical recruiters to post, update, and archive active vacancies instantly without developer assistance.",
      "Serverless Candidate Pipeline: Automated applicant form intake and routing with instant notification dispatch directly to regional hiring coordinators.",
      "Zero Recurring Infrastructure Cost: Deployed on a hardened Jamstack architecture across global Edge CDN nodes, eliminating database maintenance overhead and server hosting fees."
    ],
    problemStatement: "Bluestar Employment Solutions needed a high-performance web platform to showcase vetted talent and live job openings. Traditional dynamic CMS platforms (such as WordPress) introduce ongoing hosting maintenance costs, slow mobile load times, and constant security vulnerabilities like SQL injection and plugin CVEs.",
    solution: "Architected and deployed a hardened Jamstack web platform on global edge CDN nodes. Integrated a headless Google Sheets database pipeline via Google Apps Script that serves sanitized data feeds directly to lightweight client browsers, delivering high reliability with zero database attack surface.",
    systemDesignSpecs: [
      "Global Edge Distribution: Static pre-rendering cached across worldwide Netlify Edge CDN nodes with automated cache invalidation.",
      "Headless CMS Architecture: Google Sheets serving as a structured tabular database queried via lightweight JSON endpoints.",
      "Serverless Form Processing: Sanitized applicant submission pipeline with zero SQL injection risk and automated recruiter notifications.",
      "Optimized Client Footprint: Zero-framework Vanilla JS engine achieving sub-second First Contentful Paint (FCP) on mobile networks."
    ],
    gitLink: null,
    liveUrl: "https://bluestaremployment.com",
    diagramSvg: `
      <svg viewBox="0 0 760 220" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arr5" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#000000"/>
          </marker>
        </defs>
        <rect width="760" height="220" rx="6" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
        
        <!-- 1. Google Sheets Input -->
        <rect x="20" y="70" width="130" height="75" rx="4" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
        <text x="85" y="98" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#000">Google Sheets CMS</text>
        <text x="85" y="115" font-family="monospace" font-size="9" text-anchor="middle" fill="#64748B">Recruiter Job Postings</text>
        <text x="85" y="130" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#22C55E">Zero Tech Overhead</text>

        <!-- Arrow 1 -> 2 -->
        <line x1="150" y1="107" x2="195" y2="107" stroke="#000" stroke-width="2" marker-end="url(#arr5)"/>
        <text x="172" y="100" font-family="monospace" font-size="8" text-anchor="middle" fill="#64748B">Webhook</text>

        <!-- 2. Apps Script ETL -->
        <rect x="200" y="60" width="150" height="95" rx="4" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
        <text x="275" y="88" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#000">Apps Script Form Handler</text>
        <text x="275" y="106" font-family="monospace" font-size="9" text-anchor="middle" fill="#0284C7">Data Sanitization</text>
        <text x="275" y="122" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#64748B">Email Notifications</text>
        <text x="275" y="140" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#22C55E">Zero SQL Injection</text>

        <!-- Arrow 2 -> 3 -->
        <line x1="350" y1="107" x2="395" y2="107" stroke="#000" stroke-width="2" marker-end="url(#arr5)"/>
        <text x="372" y="100" font-family="monospace" font-size="8" text-anchor="middle" fill="#64748B">Deploy</text>

        <!-- 3. Netlify Edge CDN -->
        <rect x="400" y="60" width="160" height="95" rx="4" fill="#0F172A" stroke="#000000" stroke-width="2"/>
        <text x="480" y="88" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#F8FAFC">Global Edge CDN</text>
        <text x="480" y="106" font-family="monospace" font-size="9" text-anchor="middle" fill="#38BDF8">Static Pre-rendering</text>
        <text x="480" y="122" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#94A3B8">High Availability</text>
        <text x="480" y="140" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#10B981">Zero OpEx</text>

        <!-- Arrow 3 -> 4 -->
        <line x1="560" y1="107" x2="605" y2="107" stroke="#000" stroke-width="2" marker-end="url(#arr5)"/>
        <text x="582" y="100" font-family="monospace" font-size="8" text-anchor="middle" fill="#64748B">HTTP</text>

        <!-- 4. Client Browser -->
        <rect x="610" y="70" width="130" height="75" rx="4" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
        <text x="675" y="98" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#000">bluestaremployment.com</text>
        <text x="675" y="115" font-family="monospace" font-size="9" text-anchor="middle" fill="#64748B">Candidate Portal</text>
        <text x="675" y="130" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#22C55E">Vanilla JS Engine</text>
      </svg>
    `
  },

  // 3rd: Drone Hawk X (Autonomous Edge AI & Defense Architecture)
  {
    id: "04",
    slug: "dronewatch",
    displayUrl: "dronewatch",
    title: "Drone Hawk X — C-UAS Drone Detection & Surveillance Platform",
    shortTitle: "Drone Hawk X",
    classification: "Autonomous Edge AI & Perimeter Defense Architecture",
    classificationIcon: "🛡️",
    classificationClass: "badge-defense",
    category: "Perimeter Defense & Computer Vision",
    summary: "Air-gapped edge computer vision system for airspace perimeter security, detecting aerial drones and multi-rotors using fine-tuned YOLOv8, PyTorch CUDA hardware acceleration, and real-time optical video feeds.",
    image: "images/drone-hawk-x-glass.png?v=3.0",
    tags: ["Perimeter Defense", "Edge Vision", "Air-Gapped", "FastAPI", "React 19", "PyTorch"],
    highlights: [
      "Measured hardware latency: 14.8 ms (~67 FPS) on NVIDIA GTX 1650 (CUDA) and 42.1 ms on Intel i7 CPU fallback.",
      "100% precision across 16-sample benchmark (8 multi-rotor/FPV drone targets, 8 wildlife and aviation distractors).",
      "Presentation Attack Defense (PAD) using dual-head spatial bounding-box suppression to detect and reject screen and monitor replays.",
      "Air-gapped edge architecture with zero cloud egress, zero external API keys, and local SQLite/JSON incident telemetry."
    ],
    problemStatement: "Securing airspaces against unauthorized commercial drone incursions requires instant, reliable detection. Traditional radar systems struggle with low-altitude micro-drones, while cloud-based computer vision APIs introduce high latency, require constant internet connectivity that fails in field environments, and introduce critical data privacy risks in secured facilities.",
    solution: "Architected a zero-cloud, 100% offline perimeter defense system. Video streams from optical cameras are ingested locally and processed through a drone-specialized neural network running directly on local hardware. A high-throughput FastAPI backend processes live frames and broadcasts real-time threat bounding boxes and incident telemetry to a tactical React 19 operator HUD.",
    systemDesignSpecs: [
      "Hardware Latency: 14.8 ms (~67 FPS) CUDA inference on NVIDIA GTX 1650; 42.1 ms CPU fallback on Intel i7.",
      "Benchmark Validation: 100% precision across 16-sample evaluation benchmark (8 multi-rotor/FPV drone targets, 8 environmental and aviation distractors).",
      "Presentation Attack Defense (PAD): Dual-head spatial bounding-box suppression algorithm detecting display bezels, refresh rate anomalies, and screen replays.",
      "Zero-Egress Data Architecture: Local SQLite/JSON incident telemetry with zero external network packets and zero remote API keys."
    ],
    gitLink: "https://github.com/purohitgorang/dronewatch-surveillance",
    diagramSvg: `
      <svg viewBox="0 0 760 220" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#000000"/>
          </marker>
        </defs>
        <!-- Background Card -->
        <rect width="760" height="220" rx="6" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
        
        <!-- Nodes -->
        <!-- 1. Video Input -->
        <rect x="20" y="70" width="125" height="75" rx="4" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
        <text x="82" y="98" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#000">Optical Camera Feed</text>
        <text x="82" y="115" font-family="monospace" font-size="9" text-anchor="middle" fill="#64748B">Webcam / Snapshot</text>
        <text x="82" y="130" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#22C55E">● Live Stream</text>

        <!-- Arrow 1 -> 2 -->
        <line x1="145" y1="107" x2="190" y2="107" stroke="#000" stroke-width="2" marker-end="url(#arr)"/>
        <text x="167" y="100" font-family="monospace" font-size="8" text-anchor="middle" fill="#64748B">Frames</text>

        <!-- 2. FastAPI Backend -->
        <rect x="195" y="60" width="150" height="95" rx="4" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
        <text x="270" y="88" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#000">FastAPI Server</text>
        <text x="270" y="106" font-family="monospace" font-size="9" text-anchor="middle" fill="#0284C7">Port 8000 /detect</text>
        <text x="270" y="122" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#64748B">In-Memory Buffer</text>
        <text x="270" y="140" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#22C55E">Zero Cloud Egress</text>

        <!-- Arrow 2 -> 3 -->
        <line x1="345" y1="107" x2="390" y2="107" stroke="#000" stroke-width="2" marker-end="url(#arr)"/>
        <text x="367" y="100" font-family="monospace" font-size="8" text-anchor="middle" fill="#64748B">VRAM</text>

        <!-- 3. Local YOLOv8 Engine -->
        <rect x="395" y="60" width="160" height="95" rx="4" fill="#0F172A" stroke="#000000" stroke-width="2"/>
        <text x="475" y="88" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#F8FAFC">YOLOv8 Aerial Vision</text>
        <text x="475" y="106" font-family="monospace" font-size="9" text-anchor="middle" fill="#38BDF8">PyTorch CUDA / CPU</text>
        <text x="475" y="122" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#94A3B8">drone_yolov8n.pt</text>
        <text x="475" y="140" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#10B981">100% Offline</text>

        <!-- Arrow 3 -> 4 -->
        <line x1="555" y1="107" x2="600" y2="107" stroke="#000" stroke-width="2" marker-end="url(#arr)"/>
        <text x="577" y="100" font-family="monospace" font-size="8" text-anchor="middle" fill="#64748B">HUD Boxes</text>

        <!-- 4. UI Dashboard -->
        <rect x="605" y="70" width="140" height="75" rx="4" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
        <text x="675" y="98" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#000">React 19 HUD UI</text>
        <text x="675" y="115" font-family="monospace" font-size="9" text-anchor="middle" fill="#64748B">Vite (Port 5173)</text>
        <text x="675" y="130" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#EF4444">Incident Ledger</text>
      </svg>
    `
  },

  // 4th: AuraAssess (Multimodal Telemetry & Self-Rehearsal Engine)
  {
    id: "02",
    slug: "auraassess",
    displayUrl: "auraassess",
    title: "AuraAssess — Multimodal Telemetry & Self-Rehearsal Engine",
    shortTitle: "AuraAssess",
    classification: "Multimodal Behavioral Telemetry & Applied ML Platform",
    classificationIcon: "🎙️",
    classificationClass: "badge-telemetry",
    category: "Communication Telemetry & DSP",
    summary: "Interactive rehearsal sandbox designed to help technical candidates and presenters overcome speech anxiety. Provides real-time visual feedback on pacing, vocal composure, and posture dynamics in a private, non-judgmental environment.",
    image: "images/auraassess.png",
    tags: ["Candidate Rehearsal", "Speech Pacing", "Audio DSP", "FastAPI", "WebSockets", "Private Sandbox"],
    highlights: [
      "Objective Presentation Rehearsal: Helps speakers detect speech rushing, voice modulation issues, and nervous posture habits before high-stakes technical interviews and keynotes.",
      "100% Private In-Memory Processing: Protects sensitive candidate rehearsals by processing audio and motion telemetry entirely in temporary memory—zero video or audio is ever recorded to disk.",
      "Individualized Baseline Calibration: Calibrates against each speaker's unique natural baseline during a 15-second warm-up, ensuring feedback adapts to personal styles rather than applying rigid stereotypes.",
      "Real-Time Composure Dashboard: Translates complex speech signals and motion dynamics into clear, actionable pacing trends delivered over a low-latency live interface."
    ],
    problemStatement: "Preparing for high-stakes interviews, executive pitches, and technical presentations is often hampered by blind spots in speaking pace, voice inflection, and nervous body language. Practicing in front of peers or mock interviewers can trigger performance anxiety, while existing automated tools often attempt to 'score' candidates unfairly or store sensitive user recordings on external servers.",
    solution: "Built a self-contained, client-calibrated rehearsal sandbox that analyzes speech prosody and body language dynamics in real-time. Instead of evaluating or ranking individuals, the engine computes individualized statistical deviations against a 15-second opening baseline, streaming real-time pacing feedback and session trend graphs over WebSockets with zero persistent media storage.",
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
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#000000"/>
          </marker>
        </defs>
        <rect width="760" height="220" rx="6" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
        
        <!-- 1. Sensor Input -->
        <rect x="20" y="70" width="130" height="75" rx="4" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
        <text x="85" y="98" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#000">Webcam &amp; Mic</text>
        <text x="85" y="115" font-family="monospace" font-size="9" text-anchor="middle" fill="#64748B">30 FPS Video + Audio</text>
        <text x="85" y="130" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#22C55E">Candidate Stream</text>

        <!-- Arrow 1 -> 2 -->
        <line x1="150" y1="107" x2="195" y2="107" stroke="#000" stroke-width="2" marker-end="url(#arr3)"/>
        <text x="172" y="100" font-family="monospace" font-size="8" text-anchor="middle" fill="#64748B">AV Stream</text>

        <!-- 2. Feature Extraction -->
        <rect x="200" y="60" width="150" height="95" rx="4" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
        <text x="275" y="88" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#000">MediaPipe Vision</text>
        <text x="275" y="106" font-family="monospace" font-size="9" text-anchor="middle" fill="#0284C7">468 FaceMesh Points</text>
        <text x="275" y="122" font-family="monospace" font-size="9" text-anchor="middle" fill="#0284C7">BlazePose Angles</text>
        <text x="275" y="140" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#22C55E">Prosody DSP</text>

        <!-- Arrow 2 -> 3 -->
        <line x1="350" y1="107" x2="395" y2="107" stroke="#000" stroke-width="2" marker-end="url(#arr3)"/>
        <text x="372" y="100" font-family="monospace" font-size="8" text-anchor="middle" fill="#64748B">Features</text>

        <!-- 3. Z-Score ML Engine -->
        <rect x="400" y="60" width="160" height="95" rx="4" fill="#0F172A" stroke="#000000" stroke-width="2"/>
        <text x="480" y="88" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#F8FAFC">Behavior Classifier</text>
        <text x="480" y="106" font-family="monospace" font-size="9" text-anchor="middle" fill="#38BDF8">15s Baseline Z-Score</text>
        <text x="480" y="122" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#94A3B8">4 Behavioral States</text>
        <text x="480" y="140" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#10B981">Fairness Normalized</text>

        <!-- Arrow 3 -> 4 -->
        <line x1="560" y1="107" x2="605" y2="107" stroke="#000" stroke-width="2" marker-end="url(#arr3)"/>
        <text x="582" y="100" font-family="monospace" font-size="8" text-anchor="middle" fill="#64748B">WS Telemetry</text>

        <!-- 4. Interactive Dashboard -->
        <rect x="610" y="70" width="130" height="75" rx="4" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
        <text x="675" y="98" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#000">WebSocket GUI</text>
        <text x="675" y="115" font-family="monospace" font-size="9" text-anchor="middle" fill="#64748B">Port 8080 Live</text>
        <text x="675" y="130" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#22C55E">Composure Telemetry</text>
      </svg>
    `
  },

  // 5th: HyTrace (Verified Green Hydrogen Credit Tokenization Platform)
  {
    id: "03",
    slug: "hytrace",
    displayUrl: "hytrace",
    title: "HyTrace — Verified Green Hydrogen Credit Tokenization Platform",
    shortTitle: "HyTrace",
    classification: "CleanTech Provenance & Automated Audit Infrastructure",
    classificationIcon: "🌱",
    classificationClass: "badge-cleantech",
    category: "CleanTech & Provenance Systems",
    summary: "CleanTech provenance platform tackling corporate greenwashing in the clean energy sector. Verifies green hydrogen production directly from power plant telemetry and permanently retires offset credits to prevent fraudulent double-counting.",
    image: "images/hytrace.png",
    tags: ["CleanTech", "Provenance", "Plant Telemetry", "Next.js 15", "Solidity ERC-721", "Audit Automation"],
    highlights: [
      "Eliminates Carbon Credit Fraud: Solves certificate double-counting by permanently burning offset tokens on-chain upon enterprise redemption, guaranteeing an immutable audit trail.",
      "Direct Plant Telemetry Validation: Bridges physical-to-digital trust by verifying that claimed hydrogen production directly matches actual clean power generation (solar/wind MWh).",
      "Automated Compliance Auditing: Replaces weeks of manual paper certification with automated verification flows that cross-check renewable grid certificates and environmental regulations.",
      "Peer-to-Peer Enterprise Trading: Allows certified green hydrogen producers to trade directly with industrial energy consumers, eliminating opaque broker fees and markups."
    ],
    problemStatement: "Green hydrogen trading markets suffer from certificate double-counting, lack of producer origin verification, and slow manual auditing of power plant telemetry logs, opening the door to corporate greenwashing and invalid environmental claims.",
    solution: "Architected a decentralized provenance and trading platform pairing verifiable ERC-721 credit tokens with automated plant telemetry audit flows. The system validates energy input against hydrogen output, automatically cross-checks regulatory compliance, and ensures tokens are permanently retired upon redemption so they can never be resold.",
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
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#000000"/>
          </marker>
        </defs>
        <rect width="760" height="220" rx="6" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
        
        <!-- 1. Producer Telemetry -->
        <rect x="20" y="70" width="130" height="75" rx="4" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
        <text x="85" y="98" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#000">Clean Power Logs</text>
        <text x="85" y="115" font-family="monospace" font-size="9" text-anchor="middle" fill="#64748B">Solar / Wind MWh</text>
        <text x="85" y="130" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#22C55E">Producer Verification</text>

        <!-- Arrow 1 -> 2 -->
        <line x1="150" y1="107" x2="195" y2="107" stroke="#000" stroke-width="2" marker-end="url(#arr4)"/>
        <text x="172" y="100" font-family="monospace" font-size="8" text-anchor="middle" fill="#64748B">Audit</text>

        <!-- 2. AI Compliance Flow -->
        <rect x="200" y="60" width="150" height="95" rx="4" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
        <text x="275" y="88" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#000">Google Genkit AI</text>
        <text x="275" y="106" font-family="monospace" font-size="9" text-anchor="middle" fill="#0284C7">Telemetry Parsing</text>
        <text x="275" y="122" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#64748B">Provenance Validation</text>
        <text x="275" y="140" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#22C55E">Audit Passed</text>

        <!-- Arrow 2 -> 3 -->
        <line x1="350" y1="107" x2="395" y2="107" stroke="#000" stroke-width="2" marker-end="url(#arr4)"/>
        <text x="372" y="100" font-family="monospace" font-size="8" text-anchor="middle" fill="#64748B">Mint</text>

        <!-- 3. Smart Contract -->
        <rect x="400" y="60" width="160" height="95" rx="4" fill="#0F172A" stroke="#000000" stroke-width="2"/>
        <text x="480" y="88" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#F8FAFC">Solidity ERC-721</text>
        <text x="480" y="106" font-family="monospace" font-size="9" text-anchor="middle" fill="#38BDF8">GHC Token Contract</text>
        <text x="480" y="122" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#94A3B8">retireCredit() Burn</text>
        <text x="480" y="140" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#10B981">No Double Count</text>

        <!-- Arrow 3 -> 4 -->
        <line x1="560" y1="107" x2="605" y2="107" stroke="#000" stroke-width="2" marker-end="url(#arr4)"/>
        <text x="582" y="100" font-family="monospace" font-size="8" text-anchor="middle" fill="#64748B">Trade</text>

        <!-- 4. Marketplace UI -->
        <rect x="610" y="70" width="130" height="75" rx="4" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
        <text x="675" y="98" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#000">Next.js 15 P2P</text>
        <text x="675" y="115" font-family="monospace" font-size="9" text-anchor="middle" fill="#64748B">Port 9002 Trading</text>
        <text x="675" y="130" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#22C55E">Zero Broker Markup</text>
      </svg>
    `
  }
];
