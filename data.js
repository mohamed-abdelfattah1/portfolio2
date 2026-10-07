const portfolioData = {
    hero: {
        glitchText: "$ Security Starts Here",
        name: "Mohamed Abdelfattah",
        title: "Cybersecurity Engineer & Systems Administrator",
        photo: "2.png", // اسم صورتك في نفس الفولدر
        typingRoles: [
            "Penetration Tester",
            "SOC Analyst & Incident Responder",
            "Infrastructure & System Admin",
            "Web Application Pentester"
        ],
        description: "Specializing in Offensive Security, SOC Operations, Network Hardening, and System Administration. Experienced with Nmap, Burp Suite, Metasploit, FortiGate ,Sophos, Splunk and Wazuh SIEM, Linux, and Active Directory."
    },

    about: {
        heading: "Who_Am_I",
        paragraphs: [
            "Cybersecurity Engineer and System Administrator with hands-on experience in offensive penetration testing, threat detection, and secure infrastructure deployment.",
            "Proficient in vulnerability assessment (VAPT), firewall policy configuration (FortiGate, Sophos, pfSense), SIEM monitoring (Splunk, Wazuh), and Linux/Windows server administration. CCNA certified with hands-on training from NTI and Hack The Box.",
            "Experienced in creating secure enterprise setups with Active Directory, VPNs, and RADIUS servers, as well as testing and securing web applications against OWASP Top 10 vulnerabilities.",
            "Dedicated freelancer available for Penetration Testing, SOC Monitoring, and System Administration projects with high availability and clear communication."
        ],
        stats: [
            { value: "3+", label: "NTI Security Fellowships" },
            { value: "9+", label: "Certifications & Badges" },
            { value: "OWASP", label: "Top 10 VAPT Expert" },
            { value: "100%", label: "Hands-on Lab Security" }
        ]
    },

    education: [
        {
            degree: "B.Sc. Statistics & Computer Science",
            institution: "Mansoura University",
            period: "2022 - 2026",
            desc: "Strong academic grounding in computer science, programming (Python, JAVA, Assembly, Sql, Databases, C++, PHP), and statistical modeling. Self-driven specialized path in cybersecurity through HTB, THM, NTI, and Cisco programs."
        }
    ],

    certifications: [
        {
            title: "CCNA — Cisco Certified Network Associate",
            issuer: "Cisco Networking Academy",
            file: "certs/ccna.pdf"
        },
        {
            title: "Network Security & Cisco ASA",
            issuer: "Cisco Networking Academy",
            file: "certificate/networksec/2.pdf"
        },
        {
            title: "Web Penetration Testing Path",
            issuer: "Hack The Box (HTB)",
            file: "certs/htb-pentester.pdf"
        },
        {
            title: "Fortinet Cybersecurity & Infrastructure",
            issuer: "National Telecommunication Institute (NTI)",
            file: "certificate/2.pdf"
        },
        {
            title: "Ethical Hacking (CEH)",
            issuer: "National Telecommunication Institute (NTI)",
            file: "certificate/1.pdf"
        },
        {
            title: "Red Hat System Administration I",
            issuer: "Mahara-Tech (NTI)",
            file: "certs/rhcsa.pdf"
        }
    ],

    skills: [
        {
            category: "Pentesting & Offensive Security",
            items: ["Web VAPT (OWASP Top 10)", "Network Pentesting", "Exploitation (Metasploit)", "Burp Suite Pro", "Nmap & Reconnaissance", "Hydra & Hashcat", "Python Security Scripting"]
        },
        {
            category: "SOC & Security Operations",
            items: ["Wazuh SIEM", "Splunk SIEM", "Log Analysis & Monitoring", "Incident Response", "Wireshark Packet Analysis", "Threat Detection", "Alert Triage"]
        },
        {
            category: "Networking & System Admin",
            items: ["CCNA", "Network Security", "FortiGate NGFW", "Sophos Firewall", "pfSense Firewall", "Active Directory & GPO", "Windows Server", "Linux Administration (Parrot / RedHat / Ubuntu)", "IPsec & SSL VPNs", "AAA (RADIUS / TACACS+)"]
        }
    ],

    experiences: [
        {
            role: "Freelance Security Engineer & Pentester",
            company: "Self-Employed",
            period: "2025 - Present",
            desc: "Providing freelance VAPT services for web applications and networks. Building local vulnerability labs to test OWASP Top 10 flaws (XSS, SQLi, IDOR, Path Traversal) and providing actionable remediation reports for clients."
        },
        {
            role: "Fortinet Security & Infrastructure Trainee and Team Lead",
            company: "National Telecommunication Institute (NTI)",
            period: "Apr 2026",
            desc: "Led a team in deploying a complete enterprise security stack: FortiGate NGFW integrated with Windows Server (Active Directory, RADIUS, DNS, Web Server), hardened with strict security policies."
        },
        {
            role: "Ethical Hacking Trainee",
            company: "National Telecommunication Institute (NTI)",
            period: "Mar 2025",
            desc: "Executed end-to-end vulnerability assessments and penetration testing across simulated corporate environments using Nmap, Metasploit, Wireshark, and Burp Suite."
        },
        {
            role: "Network Security Trainee",
            company: "National Telecommunication Institute (NTI)",
            period: "Sep 2024",
            desc: "Configured AAA authentication (RADIUS/TACACS+), Extended ACLs, port security, DHCP snooping, and IPsec VPNs on Cisco devices and firewalls."
        }
    ],

    services: [
        {
            icon: "fa-bug",
            title: "Web & Network Pentesting",
            desc: "Comprehensive VAPT identifying vulnerabilities across web applications (OWASP Top 10) and network infrastructure, complete with detailed remediation reports."
        },
        {
            icon: "fa-shield-halved",
            title: "SOC Monitoring & SIEM",
            desc: "Deployment and tuning of Wazuh SIEM for continuous log monitoring, brute-force detection, threat hunting, and incident response."
        },
        {
            icon: "fa-server",
            title: "System Admin & Hardening",
            desc: "Configuration and hardening of Linux & Windows Servers, Active Directory deployment, firewall policies (FortiGate / pfSense), and secure VPN setups."
        }
    ],

    projects: [
        {
            id: "lab-enterprise",
            title: "Enterprise Infrastructure & Wazuh SIEM Lab",
            category: "System Admin & SOC",
            desc: "Complete enterprise setup featuring FortiGate NGFW, Windows Active Directory, RADIUS, and Wazuh SIEM streaming real-time alerts for failed logins and privilege escalations.",
            image: "projects/1.png",
            link: "https://github.com/mohamedabdelfattah/enterprise-security-lab"
        },
        {
            id: "vulnerable-web-lab",
            title: "Custom Vulnerable Web Application Lab",
            category: "Offensive Security / Pentest",
            desc: "Self-built PHP and Python web lab reproducing OWASP Top 10 flaws (SQLi, XSS, IDOR, Path Traversal) with detailed exploitation walkthroughs and secure code patches.",
            image: "projects/3.png",
            link: "https://github.com/mohamedabdelfattah/web-vulnerability-lab"
        },
        {
            id: "cisco-netsec",
            title: "Cisco Network Security & Firewall Architecture",
            category: "Networking & Security",
            desc: "Enterprise Packet Tracer design implementing Zone-Based Firewalls (ZBF), Cisco ASA, AAA RADIUS authentication, Extended ACLs, and IPsec VPNs.",
            image: "projects/2.png",
            link: "https://github.com/mohamedabdelfattah/cisco-network-security"
        }
    ],

    testimonials: [
        {
            quote: "Mohamed demonstrated outstanding technical skills in firewall management, threat monitoring, and network hardening during our NTI security capstone.",
            author: "Technical Mentor — NTI"
        },
        {
            quote: "A dedicated problem solver with great communication skills. Highly recommended for freelance penetration testing and infrastructure security work.",
            author: "Project Coordinator — CIS Team"
        }
    ],

    cta: {
        heading: "Ready to Secure Your Infrastructure?",
        subtext: "Available for freelance projects in Web/Network Pentesting, SOC Monitoring, and Server Administration.",
        buttonText: "Initiate_Contact"
    },

    contact: {
        email: "bdh30104@gmail.com",
        whatsapp: "https://wa.me/201550733305",
        github: "https://github.com/mohamedabdelfattah",
        linkedin: "https://linkedin.com/in/mohamedabdelfattah1",
        cv: "mohamed cv1.pdf"
    }
};