// File: menu.js

const PENGATURAN_MENU = {
    layoutMode: "grid",         
    gridColumns: 3,             
    flexDirection: "row",       
    gap: "12px",                
    shadowNormal: "0 8px 20px rgba(37, 99, 235, 0.25)", 
    shadowHover: "0 8px 20px rgba(29, 78, 216, 0.4)",   
    activeBackground: "#64748b", 
    activeShadow: "none",        
    
    buttons: [
        { id: "home", title: "HOME", url: "/", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`, bgNormal: "linear-gradient(145deg, #2563eb, #1d4ed8)", bgHover: "linear-gradient(145deg, #1d4ed8, #1e3a8a)" },
        { id: "pengurus", title: "PENGURUS", url: "pengurus.html", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`, bgNormal: "linear-gradient(145deg, #2563eb, #1d4ed8)", bgHover: "linear-gradient(145deg, #1d4ed8, #1e3a8a)" },
        { id: "inventaris", title: "INVENTARIS", url: "inventaris.html", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`, bgNormal: "linear-gradient(145deg, #2563eb, #1d4ed8)", bgHover: "linear-gradient(145deg, #1d4ed8, #1e3a8a)" },
        { id: "scanner", title: "SCANNER", url: "scanner.html", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h6v6H4z"/><path d="M14 4h6v6h-6z"/><path d="M4 14h6v6H4z"/><path d="M14 14h6v6h-6z"/></svg>`, bgNormal: "linear-gradient(145deg, #2563eb, #1d4ed8)", bgHover: "linear-gradient(145deg, #1d4ed8, #1e3a8a)" },
        { id: "tatatertib", title: "TATA TERTIB", url: "tatatertib.html", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`, bgNormal: "linear-gradient(145deg, #2563eb, #1d4ed8)", bgHover: "linear-gradient(145deg, #1d4ed8, #1e3a8a)" },
        { id: "galeri", title: "GALERI", url: "galeri.html", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`, bgNormal: "linear-gradient(145deg, #2563eb, #1d4ed8)", bgHover: "linear-gradient(145deg, #1d4ed8, #1e3a8a)" },
        { id: "warga", title: "WARGA", url: "warga.html", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>`, bgNormal: "linear-gradient(145deg, #2563eb, #1d4ed8)", bgHover: "linear-gradient(145deg, #1d4ed8, #1e3a8a)" },
        { id: "agustusan", title: "AGUSTUSAN", url: "agustusan.html", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"/><path d="M11 12 5.12 2.2"/><path d="m13 12 5.88-9.8"/><path d="M8 7h8"/><circle cx="12" cy="17" r="5"/><path d="M12 18v-2h-.5"/></svg>`, bgNormal: "linear-gradient(145deg, #2563eb, #1d4ed8)", bgHover: "linear-gradient(145deg, #1d4ed8, #1e3a8a)" },
        { id: "ronda", title: "RONDA", url: "ronda.html", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`, bgNormal: "linear-gradient(145deg, #7c3aed, #5530a6)", bgHover: "linear-gradient(145deg, #5b21b6, #4c1d95)" }
    ]
};

function renderNavigasi(idHalamanAktif) {
    const navContainer = document.getElementById('navWrapper');
    if (!navContainer) return;

    let dynamicStyles = `
        .nav-container-custom { display: ${PENGATURAN_MENU.layoutMode}; gap: ${PENGATURAN_MENU.gap}; }
    `;

    if (PENGATURAN_MENU.layoutMode === 'grid') {
        dynamicStyles += `.nav-container-custom { grid-template-columns: repeat(${PENGATURAN_MENU.gridColumns}, 1fr); }`;
    } else {
        dynamicStyles += `.nav-container-custom { flex-direction: ${PENGATURAN_MENU.flexDirection}; flex-wrap: wrap; }
                          .nav-container-custom .nav-item { flex: 1; min-width: 90px; }`;
    }

    PENGATURAN_MENU.buttons.forEach(btn => {
        dynamicStyles += `
            #btn-${btn.id} { background: ${btn.bgNormal}; box-shadow: ${PENGATURAN_MENU.shadowNormal}; }
            #btn-${btn.id}:not(.btn-active):hover { background: ${btn.bgHover}; box-shadow: ${PENGATURAN_MENU.shadowHover}; transform: translateY(-2px); }
        `;
    });

    dynamicStyles += `
        .btn-active { background: ${PENGATURAN_MENU.activeBackground} !important; box-shadow: ${PENGATURAN_MENU.activeShadow} !important; cursor: default !important; pointer-events: none; }
    `;

    const styleTag = document.createElement('style');
    styleTag.innerHTML = dynamicStyles;
    document.head.appendChild(styleTag);

    let htmlMenu = `<nav class="hero-nav-container"><div class="nav-container-custom">`;

    PENGATURAN_MENU.buttons.forEach(menu => {
        const isAktif = (menu.id === idHalamanAktif);
        const classAktif = isAktif ? "btn-active" : "";
        const atributHref = isAktif ? "" : `href="${menu.url}"`;
        htmlMenu += `<a ${atributHref} id="btn-${menu.id}" class="nav-item ${classAktif}" title="${menu.title}">${menu.icon}<span>${menu.title}</span></a>`;
    });

    htmlMenu += `</div></nav>`;
    navContainer.innerHTML = htmlMenu;
}
