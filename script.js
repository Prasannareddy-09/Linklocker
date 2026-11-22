(() => {
  "use strict";
  const STORAGE_KEY = "linklocker-data-v1";
  const DEFAULT_COLLECTIONS = ["Frontend Resources", "Cloud Architecture", "Research Papers", "Design Inspiration"];
  const COLLECTION_COLORS = ["#a58cff", "#ffad8a", "#65c8a8", "#f2c65d", "#79a8f5", "#e69ac4"];
  const sampleData = {"bookmarks":[{"id":"b01","title":"React Documentation","url":"https://react.dev/","description":"Official React documentation for building user interfaces.","collection":"Frontend Resources","tags":["react","documentation","frontend"],"favorite":true,"pinned":true,"createdAt":"2026-11-01T09:00:00.000Z"},{"id":"b02","title":"MDN Web Docs","url":"https://developer.mozilla.org/","description":"Trusted reference for HTML, CSS, JavaScript and web APIs.","collection":"Frontend Resources","tags":["html","css","javascript"],"favorite":true,"pinned":true,"createdAt":"2026-11-01T09:05:00.000Z"},{"id":"b03","title":"Tailwind CSS","url":"https://tailwindcss.com/docs","description":"Utility-first CSS framework documentation and guides.","collection":"Frontend Resources","tags":["css","tailwind","design"],"favorite":false,"pinned":false,"createdAt":"2026-11-01T09:10:00.000Z"},{"id":"b04","title":"JavaScript.info","url":"https://javascript.info/","description":"Modern JavaScript tutorial from the basics to advanced topics.","collection":"Frontend Resources","tags":["javascript","tutorial"],"favorite":false,"pinned":false,"createdAt":"2026-11-01T09:15:00.000Z"},{"id":"b05","title":"TypeScript Handbook","url":"https://www.typescriptlang.org/docs/","description":"Learn TypeScript with the official handbook.","collection":"Frontend Resources","tags":["typescript","javascript","documentation"],"favorite":false,"pinned":false,"createdAt":"2026-11-01T09:20:00.000Z"},{"id":"b06","title":"Vite Guide","url":"https://vite.dev/guide/","description":"Next-generation frontend tooling and development server.","collection":"Frontend Resources","tags":["vite","javascript","tooling"],"favorite":false,"pinned":false,"createdAt":"2026-11-01T09:25:00.000Z"},{"id":"b07","title":"TanStack Query Docs","url":"https://tanstack.com/query/latest","description":"Powerful asynchronous state management for TypeScript and JavaScript.","collection":"Frontend Resources","tags":["react","async","api"],"favorite":true,"pinned":false,"createdAt":"2026-11-01T09:30:00.000Z"},{"id":"b08","title":"React Router","url":"https://reactrouter.com/","description":"Routing library for React applications.","collection":"Frontend Resources","tags":["react","routing"],"favorite":false,"pinned":false,"createdAt":"2026-11-01T09:35:00.000Z"},{"id":"b09","title":"Can I Use","url":"https://caniuse.com/","description":"Browser support tables for modern web platform features.","collection":"Frontend Resources","tags":["web","reference","css"],"favorite":false,"pinned":false,"createdAt":"2026-11-01T09:40:00.000Z"},{"id":"b10","title":"CSS-Tricks Almanac","url":"https://css-tricks.com/almanac/","description":"A practical reference for CSS properties and selectors.","collection":"Frontend Resources","tags":["css","tutorial"],"favorite":false,"pinned":false,"createdAt":"2026-11-01T09:45:00.000Z"},{"id":"b11","title":"Docker Documentation","url":"https://docs.docker.com/","description":"Guides for containers, images, Dockerfiles and workflows.","collection":"Cloud Architecture","tags":["docker","cloud","devops"],"favorite":true,"pinned":true,"createdAt":"2026-11-02T09:00:00.000Z"},{"id":"b12","title":"Kubernetes Basics","url":"https://kubernetes.io/docs/tutorials/kubernetes-basics/","description":"Learn the basics of deploying and managing containerized applications.","collection":"Cloud Architecture","tags":["kubernetes","cloud","tutorial"],"favorite":false,"pinned":false,"createdAt":"2026-11-02T09:05:00.000Z"},{"id":"b13","title":"AWS Architecture Center","url":"https://aws.amazon.com/architecture/","description":"Reference architectures and cloud design resources from AWS.","collection":"Cloud Architecture","tags":["aws","cloud","architecture"],"favorite":false,"pinned":false,"createdAt":"2026-11-02T09:10:00.000Z"},{"id":"b14","title":"Google Cloud Architecture","url":"https://cloud.google.com/architecture","description":"Cloud architecture framework, patterns and best practices.","collection":"Cloud Architecture","tags":["gcp","cloud","architecture"],"favorite":false,"pinned":false,"createdAt":"2026-11-02T09:15:00.000Z"},{"id":"b15","title":"GitHub Actions","url":"https://docs.github.com/en/actions","description":"Automate builds, tests and deployment workflows.","collection":"Cloud Architecture","tags":["github","ci-cd","devops"],"favorite":false,"pinned":false,"createdAt":"2026-11-02T09:20:00.000Z"},{"id":"b16","title":"The Twelve-Factor App","url":"https://12factor.net/","description":"A methodology for building modern, scalable software-as-a-service apps.","collection":"Cloud Architecture","tags":["architecture","cloud","best-practices"],"favorite":false,"pinned":false,"createdAt":"2026-11-02T09:25:00.000Z"},{"id":"b17","title":"Google Scholar","url":"https://scholar.google.com/","description":"Search scholarly literature across many disciplines.","collection":"Research Papers","tags":["research","papers","academic"],"favorite":true,"pinned":false,"createdAt":"2026-11-03T09:00:00.000Z"},{"id":"b18","title":"arXiv","url":"https://arxiv.org/","description":"Open-access research papers in science, mathematics and computing.","collection":"Research Papers","tags":["research","papers","ai"],"favorite":false,"pinned":false,"createdAt":"2026-11-03T09:05:00.000Z"},{"id":"b19","title":"Papers with Code","url":"https://paperswithcode.com/","description":"Research papers linked with code, datasets and benchmarks.","collection":"Research Papers","tags":["research","machine-learning","ai"],"favorite":false,"pinned":false,"createdAt":"2026-11-03T09:10:00.000Z"},{"id":"b20","title":"Semantic Scholar","url":"https://www.semanticscholar.org/","description":"AI-powered academic search and discovery tool.","collection":"Research Papers","tags":["research","academic","ai"],"favorite":false,"pinned":false,"createdAt":"2026-11-03T09:15:00.000Z"},{"id":"b21","title":"Figma Community","url":"https://www.figma.com/community","description":"Discover UI kits, design systems, plugins and templates.","collection":"Design Inspiration","tags":["figma","ui","design"],"favorite":true,"pinned":true,"createdAt":"2026-11-04T09:00:00.000Z"},{"id":"b22","title":"Dribbble","url":"https://dribbble.com/","description":"Explore creative work and interface design inspiration.","collection":"Design Inspiration","tags":["inspiration","ui","design"],"favorite":false,"pinned":false,"createdAt":"2026-11-04T09:05:00.000Z"},{"id":"b23","title":"Mobbin","url":"https://mobbin.com/","description":"A library of real-world mobile and web app design patterns.","collection":"Design Inspiration","tags":["ui","ux","inspiration"],"favorite":false,"pinned":false,"createdAt":"2026-11-04T09:10:00.000Z"},{"id":"b24","title":"Google Fonts","url":"https://fonts.google.com/","description":"Browse and use open-source fonts for web and product design.","collection":"Design Inspiration","tags":["typography","design","fonts"],"favorite":false,"pinned":false,"createdAt":"2026-11-04T09:15:00.000Z"}]};
  let bookmarks = [];
  let collections = [...DEFAULT_COLLECTIONS];
  let currentView = "all";
  let activeTag = "";
  let listView = false;

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  const els = {
    grid: $("#bookmarkGrid"), pinned: $("#pinnedList"), empty: $("#emptyState"),
    search: $("#searchInput"), domain: $("#domainFilter"), tags: $("#tagStrip"),
    collectionNav: $("#collectionNav"), modal: $("#bookmarkModal"),
    collectionModal: $("#collectionModal"), form: $("#bookmarkForm")
  };

  function safeUrl(value) {
    try {
      const url = new URL(value);
      return ["http:", "https:"].includes(url.protocol) ? url.href : "";
    } catch { return ""; }
  }
  function domainOf(value) {
    try { return new URL(value).hostname.replace(/^www\./, ""); } catch { return "unknown"; }
  }
  function faviconUrl(value) {
    const host = domainOf(value);
    return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(host)}&sz=64`;
  }
  function escapeHtml(value = "") {
    return String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
  }
  function normalizeBookmark(item) {
    if (!item || typeof item !== "object" || Array.isArray(item)) return null;
    const url = safeUrl(item.url);
    if (!url || typeof item.title !== "string" || !item.title.trim()) return null;
    const tags = Array.isArray(item.tags) ? item.tags.filter(tag => typeof tag === "string").map(tag => tag.trim().toLowerCase()).filter(Boolean).slice(0, 20) : [];
    const collection = typeof item.collection === "string" && item.collection.trim() ? item.collection.trim() : DEFAULT_COLLECTIONS[0];
    return {
      id: typeof item.id === "string" && item.id ? item.id : makeId(),
      title: item.title.trim().slice(0, 100), url,
      description: typeof item.description === "string" ? item.description.slice(0, 240) : "",
      collection, tags: [...new Set(tags)],
      favorite: item.favorite === true, pinned: item.pinned === true,
      createdAt: typeof item.createdAt === "string" ? item.createdAt : new Date().toISOString()
    };
  }
  function makeId() { return `link-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`; }
  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, collections, bookmarks })); }
    catch { toast("Could not save to browser storage. Your browser may be out of space.", true); }
  }
  function load() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (saved && Array.isArray(saved.bookmarks)) {
        bookmarks = saved.bookmarks.map(normalizeBookmark).filter(Boolean);
        collections = Array.isArray(saved.collections) ? saved.collections.filter(x => typeof x === "string" && x.trim()).map(x => x.trim()) : [...DEFAULT_COLLECTIONS];
        DEFAULT_COLLECTIONS.forEach(name => { if (!collections.includes(name)) collections.push(name); });
        bookmarks.forEach(item => { if (!collections.includes(item.collection)) collections.push(item.collection); });
        return;
      }
    } catch { /* Restore the starter library if saved data is invalid. */ }
    bookmarks = sampleData.bookmarks.map(normalizeBookmark).filter(Boolean);
    collections = [...DEFAULT_COLLECTIONS];
    save();
  }
  function toast(message, error = false) {
    const node = document.createElement("div");
    node.className = `toast${error ? " error" : ""}`;
    node.textContent = message;
    $("#toastRegion").append(node);
    setTimeout(() => node.remove(), 3200);
  }
  function collectionColor(name) {
    const index = Math.max(0, collections.indexOf(name));
    return COLLECTION_COLORS[index % COLLECTION_COLORS.length];
  }
  function renderCollections() {
    els.collectionNav.innerHTML = collections.map(name => `
      <button class="nav-item ${currentView === `collection:${name}` ? "active" : ""}" data-view="collection:${escapeHtml(name)}">
        <span class="collection-dot" style="background:${collectionColor(name)}"></span><span>${escapeHtml(name)}</span>
        <span class="nav-count">${bookmarks.filter(item => item.collection === name).length}</span>
      </button>`).join("");
    $("#bookmarkCollection").innerHTML = collections.map(name => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join("");
  }
  function renderStats() {
    $("#allCount").textContent = bookmarks.length;
    $("#statTotal").textContent = bookmarks.length;
    $("#statCollections").textContent = collections.length;
    $("#statFavorites").textContent = bookmarks.filter(item => item.favorite).length;
    $("#statTags").textContent = new Set(bookmarks.flatMap(item => item.tags)).size;
  }
  function filteredBookmarks() {
    const query = els.search.value.trim().toLowerCase();
    const domain = els.domain.value;
    return bookmarks.filter(item => {
      const matchesView = currentView === "all" || (currentView === "favorites" && item.favorite) ||
        (currentView === "pinned" && item.pinned) || (currentView === "backup") ||
        (currentView.startsWith("collection:") && item.collection === currentView.slice(11));
      const matchesTag = !activeTag || item.tags.includes(activeTag);
      const matchesDomain = !domain || domainOf(item.url) === domain;
      const haystack = [item.title, item.url, item.description, item.collection, ...item.tags].join(" ").toLowerCase();
      return matchesView && matchesTag && matchesDomain && (!query || haystack.includes(query));
    }).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }
  function cardMarkup(item) {
    const host = domainOf(item.url);
    return `<article class="bookmark-card" data-id="${escapeHtml(item.id)}">
      <div class="card-top">
        <span class="favicon"><img src="${faviconUrl(item.url)}" alt="" loading="lazy" onerror="this.style.display='none';this.parentElement.innerHTML='<span class=&quot;favicon-fallback&quot;>${escapeHtml(host.charAt(0).toUpperCase())}</span>'"></span>
        <div class="card-title-wrap"><h3 class="card-title" title="${escapeHtml(item.title)}">${escapeHtml(item.title)}</h3><div class="card-domain">${escapeHtml(host)}</div></div>
        <div class="card-menu"><button type="button" class="menu-trigger" aria-label="Bookmark options" title="More options">···</button><div class="menu-popover hidden"><button data-action="edit">✎ &nbsp; Edit bookmark</button><button data-action="pin">${item.pinned ? "⌖ &nbsp; Unpin link" : "⌖ &nbsp; Pin link"}</button><button data-action="delete">⌫ &nbsp; Delete</button></div></div>
      </div>
      <p class="card-description">${escapeHtml(item.description || "No description added yet.")}</p>
      <div class="card-tags">${item.tags.map(tag => `<button class="tag-chip" data-tag="${escapeHtml(tag)}">#${escapeHtml(tag)}</button>`).join("")}</div>
      <div class="card-footer"><span class="collection-label"><i class="collection-dot" style="background:${collectionColor(item.collection)}"></i>${escapeHtml(item.collection)}</span>
        <div class="card-actions"><button class="mini-action favorite ${item.favorite ? "selected" : ""}" data-action="favorite" title="Toggle favorite" aria-label="Toggle favorite">${item.favorite ? "♥" : "♡"}</button><a class="open-link" href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">Open ↗</a></div>
      </div>
    </article>`;
  }
  function renderTags() {
    const counts = new Map();
    bookmarks.forEach(item => item.tags.forEach(tag => counts.set(tag, (counts.get(tag) || 0) + 1)));
    const sorted = [...counts.keys()].sort();
    els.tags.innerHTML = sorted.map(tag => `<button class="tag-filter ${activeTag === tag ? "active" : ""}" data-tag="${escapeHtml(tag)}"># ${escapeHtml(tag)} <span>${counts.get(tag)}</span></button>`).join("");
  }
  function renderPinned() {
    const pinned = bookmarks.filter(item => item.pinned).slice(0, 4);
    $("#pinnedSection").classList.toggle("hidden", currentView === "backup" || currentView === "favorites");
    els.pinned.innerHTML = pinned.map(item => `<a class="pinned-card" href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer"><span class="favicon"><img src="${faviconUrl(item.url)}" alt="" onerror="this.style.display='none';this.parentElement.innerHTML='<span class=&quot;favicon-fallback&quot;>${escapeHtml(domainOf(item.url).charAt(0).toUpperCase())}</span>'"></span><span class="pinned-info"><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(domainOf(item.url))}</small></span></a>`).join("");
    if (!pinned.length) els.pinned.innerHTML = `<p class="page-subtitle">Pin useful links to keep them close.</p>`;
  }
  function renderDomains() {
    const current = els.domain.value;
    const domains = [...new Set(bookmarks.map(item => domainOf(item.url)))].sort();
    els.domain.innerHTML = `<option value="">All domains</option>` + domains.map(domain => `<option value="${escapeHtml(domain)}">${escapeHtml(domain)}</option>`).join("");
    if (domains.includes(current)) els.domain.value = current;
  }
  function renderFilters() {
    const pills = [];
    if (activeTag) pills.push(`<span class="filter-pill">#${escapeHtml(activeTag)} <button data-clear="tag" aria-label="Remove tag filter">×</button></span>`);
    if (els.domain.value) pills.push(`<span class="filter-pill">${escapeHtml(els.domain.value)} <button data-clear="domain" aria-label="Remove domain filter">×</button></span>`);
    if (els.search.value.trim()) pills.push(`<span class="filter-pill">Search: ${escapeHtml(els.search.value.trim())} <button data-clear="search" aria-label="Clear search">×</button></span>`);
    $("#activeFilters").innerHTML = pills.join("");
  }
  function viewTitle() {
    if (currentView === "favorites") return ["Favorites", "Your most-loved resources, all together."];
    if (currentView === "pinned") return ["Pinned links", "Your team's quick-access resources."];
    if (currentView === "backup") return ["Backup & restore", "Keep a portable copy of your knowledge library."];
    if (currentView.startsWith("collection:")) return [currentView.slice(11), "A focused space for related resources."];
    return ["All bookmarks", "A tidy home for the links worth keeping."];
  }
  function render() {
    renderCollections(); renderStats(); renderTags(); renderPinned(); renderDomains(); renderFilters();
    const [title, subtitle] = viewTitle();
    $("#pageTitle").innerHTML = `${escapeHtml(title)}<span class="title-period">.</span>`;
    $("#breadcrumbTitle").textContent = title;
    $("#pageSubtitle").textContent = subtitle;
    $("#libraryHeading").textContent = currentView === "all" ? "Recently saved" : `Explore ${title.toLowerCase()}`;
    const items = filteredBookmarks();
    els.grid.innerHTML = items.map(cardMarkup).join("");
    els.grid.classList.toggle("list-view", listView);
    $("#gridViewBtn").classList.toggle("active", !listView);
    if (currentView === "backup") {
      els.grid.classList.add("hidden");
      els.empty.classList.add("hidden");
      showBackupPanel();
    } else {
      $("#backupPanel")?.remove();
      els.empty.classList.toggle("hidden", items.length > 0);
      els.grid.classList.toggle("hidden", items.length === 0);
    }
  }
  function showBackupPanel() {
    if ($("#backupPanel")) return;
    const panel = document.createElement("div");
    panel.id = "backupPanel";
    panel.className = "backup-panel";
    panel.innerHTML = `<div class="backup-card"><div class="backup-icon">⇧</div><div><h3>Export your library</h3><p>Download every bookmark and collection as a JSON file.</p></div><button class="button button-primary" id="exportBtn">Download JSON ↓</button></div><div class="backup-card"><div class="backup-icon import-icon">⇩</div><div><h3>Restore a backup</h3><p>Import a LinkLocker JSON backup. Existing links are kept; duplicates are skipped.</p></div><button class="button button-secondary" id="importBtn">Choose JSON file</button></div><p class="backup-note">Your library is stored in this browser. Export a backup before clearing browser data.</p>`;
    $("#libraryHeading").parentElement.parentElement.insertAdjacentElement("afterend", panel);
    $("#bookmarkGrid").classList.add("hidden");
    $("#emptyState").classList.add("hidden");
    panel.querySelector("#exportBtn").addEventListener("click", exportJson);
    panel.querySelector("#importBtn").addEventListener("click", () => $("#importFile").click());
  }
  function setView(view) {
    currentView = view; activeTag = ""; els.search.value = ""; els.domain.value = "";
    $$(".nav-item[data-view]").forEach(button => button.classList.toggle("active", button.dataset.view === view));
    render();
    if (window.innerWidth <= 760) $("#sidebar").classList.remove("open");
  }
  function openModal(item = null) {
    els.form.reset();
    $("#bookmarkId").value = item?.id || "";
    $("#modalTitle").textContent = item ? "Edit bookmark" : "Add a bookmark";
    $("#saveBookmarkBtn").innerHTML = item ? "Save changes →" : "Save bookmark →";
    $("#bookmarkUrl").value = item?.url || "";
    $("#bookmarkTitle").value = item?.title || "";
    $("#bookmarkDescription").value = item?.description || "";
    $("#bookmarkTags").value = item?.tags.join(", ") || "";
    $("#bookmarkCollection").value = item?.collection || collections[0];
    $("#bookmarkFavorite").checked = item?.favorite || false;
    $("#bookmarkPinned").checked = item?.pinned || false;
    els.modal.classList.remove("hidden");
    setTimeout(() => $("#bookmarkUrl").focus(), 50);
  }
  function closeModal(id) { $(`#${id}`).classList.add("hidden"); }
  function saveBookmark(event) {
    event.preventDefault();
    const id = $("#bookmarkId").value;
    const url = safeUrl($("#bookmarkUrl").value.trim());
    if (!url) return toast("Please enter a valid http or https URL.", true);
    const title = $("#bookmarkTitle").value.trim();
    if (!title) return toast("Please add a title for this bookmark.", true);
    const tags = [...new Set($("#bookmarkTags").value.split(",").map(tag => tag.trim().toLowerCase().replace(/^#/, "")).filter(Boolean))].slice(0, 20);
    const item = normalizeBookmark({
      id: id || makeId(), title, url, description: $("#bookmarkDescription").value.trim(),
      collection: $("#bookmarkCollection").value || collections[0], tags,
      favorite: $("#bookmarkFavorite").checked, pinned: $("#bookmarkPinned").checked,
      createdAt: id ? bookmarks.find(x => x.id === id)?.createdAt : new Date().toISOString()
    });
    if (!item) return toast("This bookmark could not be saved. Check the details.", true);
    if (id) bookmarks = bookmarks.map(existing => existing.id === id ? item : existing);
    else bookmarks.unshift(item);
    save(); closeModal("bookmarkModal"); render();
    toast(id ? "Bookmark updated." : "Bookmark saved to your library.");
  }
  function exportJson() {
    const payload = { app: "LinkLocker", version: 1, exportedAt: new Date().toISOString(), collections, bookmarks };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url; anchor.download = `linklocker-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.append(anchor); anchor.click(); anchor.remove(); URL.revokeObjectURL(url);
    toast("Your JSON backup is ready.");
  }
  async function importJson(file) {
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) return toast("File is too large. Please choose a backup under 5 MB.", true);
    try {
      const parsed = JSON.parse(await file.text());
      if (!parsed || !Array.isArray(parsed.bookmarks)) throw new Error("The file must contain a bookmarks array.");
      if (parsed.bookmarks.length > 2000) throw new Error("This backup contains too many bookmarks.");
      const incoming = parsed.bookmarks.map(normalizeBookmark).filter(Boolean);
      if (!incoming.length && parsed.bookmarks.length) throw new Error("No valid bookmarks were found in this file.");
      const known = new Set(bookmarks.map(item => item.url.toLowerCase()));
      const additions = incoming.filter(item => !known.has(item.url.toLowerCase()));
      const importedCollections = Array.isArray(parsed.collections) ? parsed.collections.filter(x => typeof x === "string" && x.trim()).map(x => x.trim()) : [];
      collections = [...new Set([...collections, ...importedCollections, ...additions.map(item => item.collection)])];
      bookmarks = [...additions, ...bookmarks];
      save(); render();
      toast(`Imported ${additions.length} bookmark${additions.length === 1 ? "" : "s"}; ${incoming.length - additions.length} duplicate(s) skipped.`);
    } catch (error) { toast(error.message || "Could not read this JSON backup.", true); }
    finally { $("#importFile").value = ""; }
  }
  function addCollection(event) {
    event.preventDefault();
    const name = $("#collectionName").value.trim();
    if (!name) return;
    if (collections.some(item => item.toLowerCase() === name.toLowerCase())) return toast("That collection already exists.", true);
    collections.push(name); save(); closeModal("collectionModal"); $("#collectionForm").reset(); render();
    toast(`Collection "${name}" created.`);
  }

  document.addEventListener("click", event => {
    const viewButton = event.target.closest("[data-view]");
    if (viewButton) return setView(viewButton.dataset.view);
    const closeButton = event.target.closest("[data-close]");
    if (closeButton) return closeModal(closeButton.dataset.close);
    const tagButton = event.target.closest("[data-tag]");
    if (tagButton) { activeTag = activeTag === tagButton.dataset.tag ? "" : tagButton.dataset.tag; render(); return; }
    const clearButton = event.target.closest("[data-clear]");
    if (clearButton) {
      if (clearButton.dataset.clear === "tag") activeTag = "";
      if (clearButton.dataset.clear === "domain") els.domain.value = "";
      if (clearButton.dataset.clear === "search") els.search.value = "";
      render(); return;
    }
    const menuTrigger = event.target.closest(".menu-trigger");
    if (menuTrigger) {
      const menu = menuTrigger.nextElementSibling;
      $$(".menu-popover").forEach(node => { if (node !== menu) node.classList.add("hidden"); });
      menu.classList.toggle("hidden"); return;
    }
    const action = event.target.closest("[data-action]");
    if (action) {
      const card = action.closest(".bookmark-card");
      const item = bookmarks.find(entry => entry.id === card?.dataset.id);
      if (!item) return;
      const type = action.dataset.action;
      if (type === "edit") openModal(item);
      if (type === "favorite") { item.favorite = !item.favorite; save(); render(); toast(item.favorite ? "Added to favorites." : "Removed from favorites."); }
      if (type === "pin") { item.pinned = !item.pinned; save(); render(); toast(item.pinned ? "Link pinned." : "Link unpinned."); }
      if (type === "delete" && confirm(`Delete "${item.title}"?`)) { bookmarks = bookmarks.filter(entry => entry.id !== item.id); save(); render(); toast("Bookmark deleted."); }
      return;
    }
    if (!event.target.closest(".card-menu")) $$(".menu-popover").forEach(node => node.classList.add("hidden"));
  });
  els.form.addEventListener("submit", saveBookmark);
  $("#openAddModal").addEventListener("click", () => openModal());
  $("#addCollectionBtn").addEventListener("click", () => $("#collectionModal").classList.remove("hidden"));
  $("#collectionForm").addEventListener("submit", addCollection);
  $("#searchInput").addEventListener("input", render);
  $("#domainFilter").addEventListener("change", render);
  $("#clearFiltersBtn").addEventListener("click", () => { activeTag = ""; els.search.value = ""; els.domain.value = ""; render(); });
  $("#gridViewBtn").addEventListener("click", () => { listView = !listView; render(); });
  $("#menuToggle").addEventListener("click", () => $("#sidebar").classList.toggle("open"));
  $("#importFile").addEventListener("change", event => importJson(event.target.files[0]));
  document.addEventListener("keydown", event => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); els.search.focus(); }
    if (event.key === "Escape") { closeModal("bookmarkModal"); closeModal("collectionModal"); $("#sidebar").classList.remove("open"); }
  });

  // Make backup hub controls available from every view via the sidebar.
  load();
  render();
})();