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
    email: "gorangpurohit@gmail.com"
  },
  skills: [
    "Python", "PyTorch", "OpenCV", "YOLOv8", "Computer Vision", 
    "FastAPI", "Flask", "Scapy", "Wireshark", "Network Protocols (TCP/IP, OSI)",
    "Linux (Ubuntu, Kali)", "Docker", "Next.js", "WebSockets", "Solidity"
  ]
};

const PROJECTS_DATA = [
  {
    id: "04",
    slug: "dronewatch",
    displayUrl: "localhost:5173 // dronewatch",
    title: "Drone Hawk X — C-UAS Drone Detection & Surveillance Platform",
    shortTitle: "Drone Hawk X",
    category: "Computer Vision & AI",
    summary: "Air-gapped edge computer vision system for airspace perimeter security, detecting aerial drones and multi-rotors using fine-tuned YOLOv8, PyTorch CUDA hardware acceleration, and real-time optical video feeds.",
    image: "images/drone-hawk-x.png",
    tags: ["PyTorch", "YOLOv8", "CUDA", "FastAPI", "React 19", "Edge Vision"],
    highlights: [
      "100% offline edge surveillance running on local hardware with zero external API dependencies or cloud egress.",
      "Hardware-accelerated inference via PyTorch CUDA on local NVIDIA GPUs with automated CPU fallback.",
      "Dual inspection modes: live optical webcam stream with HUD bounding overlays and drag-and-drop imagery inspection.",
      "Timestamped airspace incident ledger logging detection telemetry, bounding coordinates, and confidence scoring."
    ],
    problemStatement: "Securing airspaces against unauthorized drone incursions requires reliable on-device processing. Cloud-based video APIs introduce high latency and require active internet connectivity that fails in air-gapped or field tactical defense perimeters.",
    solution: "Architected a zero-cloud, 100% offline edge AI system using an aerial drone fine-tuned YOLOv8 neural network. Implemented a Python FastAPI backend that interfaces directly with local GPU VRAM and streams real-time detection bounding coordinates to a React 19 tactical HUD interface.",
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
  {
    id: "01",
    slug: "face-detection-v2",
    displayUrl: "localhost:5000 // face-detection-v2",
    title: "Face Detection v2 — Offline Biometric Verification Portal",
    shortTitle: "Face Detection v2",
    category: "Computer Vision & Security",
    summary: "1-to-1 biometric facial authentication and active eye-blink liveness verification portal running offline on CPU, matching 128-d vector embeddings without storing raw employee photos.",
    image: "images/face-detection-v2.png",
    tags: ["Flask", "OpenCV ONNX", "YuNet", "SFace 128-d", "Liveness Detection", "GDPR Safe"],
    highlights: [
      "Strict 1-to-1 verification against pre-selected employee ID, eliminating 1-to-N database search collisions.",
      "Active Haar-cascade eye-blink liveness verification preventing photo and screen video spoofing attacks.",
      "Dual portal architecture: employee check-in kiosk and administrative console for user registration and audit logging.",
      "Privacy-first vector gallery: raw face photographs are discarded post-enrollment, retaining only mathematical cosine vectors."
    ],
    problemStatement: "Biometric attendance systems frequently rely on cloud APIs or heavy proprietary SDKs that fail on commodity hardware, present security risks via 2D photograph spoofing, and violate privacy mandates by storing unencrypted face photos on database servers.",
    solution: "Engineered a pure Python Flask + OpenCV system utilizing 5-point YuNet landmark detection and 128-dimensional SFace embeddings. Built an active blink-based liveness verification pipeline that requires a genuine human blink before executing cosine similarity matching, recording verified attendance in an immutable CSV audit log.",
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
        <text x="465" y="122" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#94A3B8">Cosine Sim >= 0.363</text>
        <text x="465" y="140" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#10B981">Photos Discarded</text>

        <!-- Arrow 3 -> 4 -->
        <line x1="540" y1="107" x2="585" y2="107" stroke="#000" stroke-width="2" marker-end="url(#arr2)"/>
        <text x="562" y="100" font-family="monospace" font-size="8" text-anchor="middle" fill="#64748B">Auth</text>

        <!-- 4. Storage & Audit -->
        <rect x="590" y="70" width="150" height="75" rx="4" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
        <text x="665" y="98" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#000">Audit & Attendance</text>
        <text x="665" y="115" font-family="monospace" font-size="9" text-anchor="middle" fill="#64748B">attendance.csv</text>
        <text x="665" y="130" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#22C55E">Verified Entry Logged</text>
      </svg>
    `
  },
  {
    id: "02",
    slug: "auraassess",
    displayUrl: "localhost:8080 // auraassess",
    title: "AuraAssess — Multimodal Composure & Behavioral AI Engine",
    shortTitle: "AuraAssess",
    category: "AI & Behavioral Systems",
    summary: "Real-time multimodal evaluation platform analyzing candidate composure, posture angles, and speech prosody during interviews via 468 facial mesh landmarks and full-duplex WebSockets.",
    image: "images/auraassess.png",
    tags: ["FastAPI", "MediaPipe FaceMesh", "BlazePose", "WebSockets", "Multimodal AI", "Librosa"],
    highlights: [
      "Simultaneous multimodal tracking extracting 468 facial geometry landmarks, upper-body posture, and vocal cadence.",
      "4-state composure classification engine: Confident, Relaxed, Stressed, and Defensive.",
      "15-second personalized baseline calibration using Z-score normalization for fair, unbiased scoring across candidates.",
      "Full-duplex WebSocket streaming at 30 FPS powering an interactive browser dashboard on port 8080."
    ],
    problemStatement: "Evaluating candidate soft skills, communicative poise, and anxiety levels during technical interviews relies on subjective interviewer intuition. Human raters introduce cognitive bias and struggle to consistently evaluate communication signals across varied interview formats.",
    solution: "Built a real-time multimodal behavioral telemetry engine using MediaPipe FaceMesh and BlazePose integrated with an audio signal DSP pipeline. Normalizes metrics against an individualized 15-second baseline calibration, streaming continuous composure metrics and session reports over WebSockets.",
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
        <text x="85" y="98" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#000">Webcam & Mic</text>
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
  {
    id: "03",
    slug: "hytrace",
    displayUrl: "localhost:9002 // hytrace",
    title: "HyTrace — Verified Green Hydrogen Credit Tokenization Platform",
    shortTitle: "HyTrace",
    category: "Distributed Systems & Web3",
    summary: "CleanTech marketplace tokenizing Green Hydrogen Credits (GHC) into ERC-721 tokens with permanent on-chain retirement to prevent carbon credit double-counting.",
    image: "images/hytrace.png",
    tags: ["Next.js 15", "Solidity ERC-721", "Google Genkit", "Tailwind CSS", "CleanTech Web3"],
    highlights: [
      "ERC-721 smart contracts encoding clean producer provenance, verification authority, and MWh generation volume.",
      "Permanent on-chain retirement mechanism emitting CreditRetired events to eliminate certificate double-counting.",
      "Google Genkit AI flows parsing power generation telemetry and auditing compliance documentation automatically.",
      "Next.js 15 App Router trading interface with real-time portfolio tracking and transparent auditability."
    ],
    problemStatement: "Green hydrogen trading markets suffer from certificate double-counting, lack of producer origin verification, and slow manual auditing of power plant telemetry logs, opening the door to corporate greenwashing.",
    solution: "Architected a decentralized verification and trading protocol pairing ERC-721 immutable tokens with Google Genkit automated telemetry audit flows. Enforces irreversible on-chain token burns upon credit redemption, ensuring every MWh offset is permanently retired.",
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
  },
  {
    id: "05",
    slug: "bluestar-employment",
    displayUrl: "bluestaremployment.com",
    liveUrl: "https://bluestaremployment.com/",
    title: "Bluestar Employment Solutions — Enterprise Staffing Platform",
    shortTitle: "Bluestar Employment",
    category: "Distributed Web & Systems",
    summary: "Production enterprise recruitment and staffing platform connecting qualified professionals with India's leading employers in Healthcare, Hospitality, FMCG, and Aviation.",
    image: "images/bluestar-employment.png",
    tags: ["Jamstack", "Netlify Edge CDN", "Vanilla JS", "Headless Google Sheets", "Zero OpEx"],
    highlights: [
      "Live production deployment at bluestaremployment.com serving multi-sector recruitment across India.",
      "Automated headless Google Sheets database allowing HR staff to publish job listings without code.",
      "Google Apps Script serverless form processing with automated recruiter email notifications.",
      "Hardened Jamstack architecture cached across global Edge CDN nodes with zero recurring server maintenance cost."
    ],
    problemStatement: "Bluestar Employment Solutions Private Limited needed a high-performance web platform to showcase vetted talent and live job openings. Dynamic CMS alternatives (such as WordPress) introduce ongoing hosting costs, slow mobile load times, and vulnerabilities like SQL injection and plugin CVEs.",
    solution: "Architected and deployed a hardened Jamstack web platform on global edge CDN nodes. Integrated a headless Google Sheets database pipeline via Google Apps Script that serves sanitized data feeds directly to lightweight client browsers, delivering high reliability with zero database attack surface.",
    gitLink: "https://github.com/purohitgorang/bluestar-employment",
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
  }
];
