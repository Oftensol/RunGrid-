import { useState, useEffect, useRef } from "react";

const races = [
  {
    id: 1,
    name: "Banff Marathon",
    city: "Banff",
    country: "Canada",
    flag: "🇨🇦",
    date: "Jun 14, 2026",
    distance: "26.2 mi",
    elevation: "+5,167 ft",
    difficulty: "Hard",
    diffScore: 4,
    qualTime: "Open Entry",
    entry: "Open",
    category: "Marathon",
    rank: 94,
    registered: 3000,
    saved: false,
    notified: false,
    lat: 51.1784,
    lng: -115.5708,
    registrationUrl: "https://www.banffmarathon.com",
    description: "From glacier-fed lakes and towering Rocky Mountain views to fresh alpine air and wildlife-lined roads, this race is one of the most scenic marathon experiences in the world.",
    tags: ["Scenic", "Mountain", "Open Entry", "Bucket List"],
    color: "#185FA5",
  },
  {
    id: 2,
    name: "Mont Blanc Marathon",
    city: "Chamonix",
    country: "France",
    flag: "🇫🇷",
    date: "Jun 25, 2026",
    distance: "26.2 mi",
    elevation: "+9,186 ft",
    difficulty: "Very Hard",
    diffScore: 5,
    qualTime: "Open Entry",
    entry: "Open",
    category: "Trail",
    rank: 97,
    registered: 2500,
    saved: false,
    notified: false,
    lat: 45.9237,
    lng: 6.8694,
    registrationUrl: "https://www.marathondumontblanc.com",
    description: "Experience the magic of alpine trails above the clouds, with unreal views of the Mont Blanc massif every kilometer. One of the most iconic trail running experiences in the world.",
    tags: ["Trail", "Mountain", "Iconic Route", "Bucket List"],
    color: "#0F6E56",
  },
  {
    id: 3,
    name: "Grand Teton Half Marathon",
    city: "Grand Teton",
    country: "USA",
    flag: "🇺🇸",
    date: "Jun 6, 2026",
    distance: "13.1 mi",
    elevation: "+1,200 ft",
    difficulty: "Moderate",
    diffScore: 3,
    qualTime: "Open Entry",
    entry: "Open",
    category: "Half",
    rank: 86,
    registered: 1500,
    saved: false,
    notified: false,
    lat: 43.7904,
    lng: -110.6818,
    registrationUrl: "https://www.vacationraces.com",
    description: "A breathtaking race through Grand Teton National Park on paved roads. Part of the Vacation Races series — not just a race, it's your summer destination.",
    tags: ["National Park", "Scenic", "Half Marathon", "Open Entry"],
    color: "#378ADD",
  },
  {
    id: 4,
    name: "Yellowstone Half Marathon",
    city: "Yellowstone",
    country: "USA",
    flag: "🇺🇸",
    date: "Jun 13, 2026",
    distance: "13.1 mi",
    elevation: "+900 ft",
    difficulty: "Moderate",
    diffScore: 2,
    qualTime: "Open Entry",
    entry: "Open",
    category: "Trail",
    rank: 84,
    registered: 1200,
    saved: false,
    notified: false,
    lat: 44.4280,
    lng: -110.5885,
    registrationUrl: "https://www.vacationraces.com",
    description: "Run through the world's first national park on dirt trails surrounded by geothermal wonders. Part of the Vacation Races series.",
    tags: ["National Park", "Trail", "Half Marathon", "Open Entry"],
    color: "#BA7517",
  },
  {
    id: 5,
    name: "Glacier Half Marathon",
    city: "Glacier",
    country: "USA",
    flag: "🇺🇸",
    date: "Jun 27, 2026",
    distance: "13.1 mi",
    elevation: "+800 ft",
    difficulty: "Moderate",
    diffScore: 2,
    qualTime: "Open Entry",
    entry: "Open",
    category: "Half",
    rank: 83,
    registered: 1000,
    saved: false,
    notified: false,
    lat: 48.7596,
    lng: -113.7870,
    registrationUrl: "https://www.vacationraces.com",
    description: "A stunning paved road half marathon through Glacier National Park. Part of the iconic Vacation Races summer series.",
    tags: ["National Park", "Scenic", "Half Marathon", "Open Entry"],
    color: "#1D9E75",
  },
  {
    id: 6,
    name: "Mt. Rainier Marathon",
    city: "Mount Rainier",
    country: "USA",
    flag: "🇺🇸",
    date: "Jul 18, 2026",
    distance: "13.1 mi",
    elevation: "+2,100 ft",
    difficulty: "Hard",
    diffScore: 4,
    qualTime: "Open Entry",
    entry: "Open",
    category: "Trail",
    rank: 85,
    registered: 900,
    saved: false,
    notified: false,
    lat: 46.8523,
    lng: -121.7603,
    registrationUrl: "https://www.vacationraces.com",
    description: "Mixed dirt trails through Mount Rainier National Park. Includes Half Marathon, 10K, and 5K Hill Climb options.",
    tags: ["National Park", "Trail", "Mixed Distance", "Open Entry"],
    color: "#534AB7",
  },
  {
    id: 7,
    name: "Sydney Marathon",
    city: "Sydney",
    country: "Australia",
    flag: "🇦🇺",
    date: "Aug 30, 2026",
    distance: "26.2 mi",
    elevation: "+590 ft",
    difficulty: "Moderate",
    diffScore: 2,
    qualTime: "Open Entry",
    entry: "Open",
    category: "Marathon",
    rank: 91,
    registered: 15000,
    saved: false,
    notified: false,
    lat: -33.8568,
    lng: 151.2153,
    registrationUrl: "https://www.sydneymarathon.com",
    description: "One of the most iconic races in the world, taking runners through the heart of Sydney with incredible harbour views and an unforgettable finish near the Sydney Opera House.",
    tags: ["Iconic Finish", "Scenic", "Open Entry", "Bucket List"],
    color: "#D4537E",
  },
  {
    id: 8,
    name: "Patagonian Intl Marathon",
    city: "Torres del Paine",
    country: "Chile",
    flag: "🇨🇱",
    date: "Sep 5, 2026",
    distance: "26.2 mi",
    elevation: "+3,900 ft",
    difficulty: "Very Hard",
    diffScore: 5,
    qualTime: "Open Entry",
    entry: "Open",
    category: "Trail",
    rank: 96,
    registered: 800,
    saved: false,
    notified: false,
    lat: -50.9423,
    lng: -73.4068,
    registrationUrl: "https://www.patagoniamarathon.com",
    description: "One of the most breathtaking race experiences on Earth. Runs through the stunning landscapes of Patagonia, surrounded by glaciers, turquoise lakes, and the dramatic peaks of Torres del Paine.",
    tags: ["Trail", "International", "Extreme Scenic", "Bucket List"],
    color: "#A32D2D",
  },
  {
    id: 9,
    name: "Jungfrau Marathon",
    city: "Swiss Alps",
    country: "Switzerland",
    flag: "🇨🇭",
    date: "Sep 5, 2026",
    distance: "26.2 mi",
    elevation: "+6,398 ft",
    difficulty: "Very Hard",
    diffScore: 5,
    qualTime: "Open Entry",
    entry: "Open",
    category: "Trail",
    rank: 98,
    registered: 4000,
    saved: false,
    notified: false,
    lat: 46.5958,
    lng: 7.9747,
    registrationUrl: "https://www.jungfrau-marathon.ch",
    description: "The most beautiful marathon in the world. Runs through stunning alpine villages, green valleys, waterfalls, and trails beneath the famous Eiger, Mönch, and Jungfrau peaks.",
    tags: ["Trail", "Mountain", "World's Most Beautiful", "Bucket List"],
    color: "#E07B2A",
  },
  {
    id: 10,
    name: "St. George Marathon",
    city: "St. George",
    country: "USA",
    flag: "🇺🇸",
    date: "Oct 3, 2027",
    distance: "26.2 mi",
    elevation: "+801 ft",
    difficulty: "Moderate",
    diffScore: 3,
    qualTime: "Lottery",
    entry: "Lottery",
    category: "Marathon",
    rank: 88,
    registered: 7700,
    saved: false,
    notified: false,
    lat: 37.0965,
    lng: -113.5684,
    registrationUrl: "https://www.stgeorgemarathon.com",
    description: "One of the most underrated marathons in the US. Set in Utah's stunning red rock desert, this point-to-point course offers incredible views and a fast net downhill finish.",
    tags: ["Underrated", "Scenic", "Lottery Entry", "Net Downhill"],
    color: "#C0522A",
  },
];

const categories = ["All", "Marathon", "Half", "Trail", "Ultra", "Intl"];
const diffColors = { Easy: "#1D9E75", Moderate: "#BA7517", Hard: "#E24B4A", "Very Hard": "#A32D2D" };
const diffStars = (n) => "★".repeat(n) + "☆".repeat(5 - n);

function LeafletMap({ races, onSelect }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);
  const [selectedPin, setSelectedPin] = useState(null);

  useEffect(() => {
    if (mapInstanceRef.current) return;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js";
    script.onload = () => {
      const L = window.L;
      const map = L.map(mapRef.current, {
        center: [20, 0],
        zoom: 2,
        zoomControl: true,
        attributionControl: false,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
      }).addTo(map);

      races.forEach((race) => {
        const markerHtml = `
          <div style="
            width:28px;height:28px;border-radius:50%;
            background:${race.color};
            border:2.5px solid #fff;
            box-shadow:0 2px 8px rgba(0,0,0,0.3);
            display:flex;align-items:center;justify-content:center;
            font-size:13px;cursor:pointer;
          ">${race.flag}</div>`;

        const icon = L.divIcon({
          html: markerHtml,
          className: "",
          iconSize: [28, 28],
          iconAnchor: [14, 14],
        });

        const marker = L.marker([race.lat, race.lng], { icon }).addTo(map);
        marker.on("click", () => {
          setSelectedPin(race);
          map.setView([race.lat, race.lng], 6, { animate: true });
        });
        markersRef.current.push(marker);
      });

      mapInstanceRef.current = map;
    };
    document.head.appendChild(script);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <div ref={mapRef} style={{ width: "100%", height: 240, borderRadius: 14, overflow: "hidden", marginBottom: 10, border: "0.5px solid #e8eaed" }} />
      {selectedPin && (
        <div
          style={{ background: "#fff", border: `1.5px solid ${selectedPin.color}`, borderRadius: 12, padding: "10px 12px", marginBottom: 10, cursor: "pointer" }}
          onClick={() => onSelect(selectedPin)}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: "600", color: "#111" }}>{selectedPin.flag} {selectedPin.name}</div>
              <div style={{ fontSize: 11, color: "#999", marginTop: 2 }}>{selectedPin.date} · {selectedPin.difficulty} · {selectedPin.distance}</div>
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <span style={{ fontSize: 11, color: selectedPin.color, fontWeight: "600" }}>Details →</span>
              <button onClick={(e) => { e.stopPropagation(); setSelectedPin(null); }} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 16, color: "#aaa" }}>✕</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function RunGrid() {
  const [tab, setTab] = useState("search");
  const [selectedCat, setSelectedCat] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [raceList, setRaceList] = useState(races);
  const [selectedRace, setSelectedRace] = useState(null);
  const [toast, setToast] = useState(null);
  const [profileTab, setProfileTab] = useState("saved");

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  const toggleSave = (id) => {
    setRaceList((prev) => prev.map((r) => {
      if (r.id !== id) return r;
      const next = { ...r, saved: !r.saved };
      showToast(next.saved ? "Race saved!" : "Removed from saved");
      return next;
    }));
  };

  const toggleNotify = (id) => {
    setRaceList((prev) => prev.map((r) => {
      if (r.id !== id) return r;
      const next = { ...r, notified: !r.notified };
      showToast(next.notified ? "You'll be notified when registration opens!" : "Notifications off");
      return next;
    }));
  };

  useEffect(() => {
    if (selectedRace) {
      const current = raceList.find((r) => r.id === selectedRace.id);
      setSelectedRace(current);
    }
  }, [raceList]);

  const filtered = raceList.filter((r) => {
    const matchCat = selectedCat === "All" || r.category === selectedCat;
    const matchQ = r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.country.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchQ;
  });

  const saved = raceList.filter((r) => r.saved);
  const notified = raceList.filter((r) => r.notified);
  const sorted = [...raceList].sort((a, b) => b.rank - a.rank);
  const openRace = (race) => setSelectedRace(raceList.find((r) => r.id === race.id));

  return (
    <div style={styles.shell}>
      <div style={styles.phone}>
        <div style={styles.statusBar}>
          <span style={styles.statusTime}>9:41</span>
          <div style={styles.statusIcons}>
            <span style={{ fontSize: 11, color: "#fff" }}>●●●</span>
            <span style={{ fontSize: 11, color: "#fff", marginLeft: 4 }}>5G</span>
            <span style={{ fontSize: 13, marginLeft: 4 }}>🔋</span>
          </div>
        </div>

        <div style={styles.header}>
          <div style={styles.logo}>
            <span style={styles.logoIcon}>⬡</span>
            <span style={styles.logoText}>RunGrid</span>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <button onClick={() => setTab("notifications")} style={styles.iconBtn}>
              <span style={{ fontSize: 18 }}>🔔</span>
              {notified.length > 0 && <span style={styles.badge}>{notified.length}</span>}
            </button>
            <div style={styles.proBadge}>Pro</div>
          </div>
        </div>

        <div style={styles.content}>
          {selectedRace ? (
            <RaceDetail race={selectedRace} onBack={() => setSelectedRace(null)} onSave={toggleSave} onNotify={toggleNotify} />
          ) : tab === "search" ? (
            <SearchTab filtered={filtered} categories={categories} selectedCat={selectedCat} setSelectedCat={setSelectedCat} searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSelect={openRace} onSave={toggleSave} />
          ) : tab === "rankings" ? (
            <RankingsTab sorted={sorted} onSelect={openRace} />
          ) : tab === "map" ? (
            <MapTab races={raceList} onSelect={openRace} />
          ) : tab === "notifications" ? (
            <NotificationsTab notified={notified} onSelect={openRace} onNotify={toggleNotify} />
          ) : (
            <ProfileTab saved={saved} notified={notified} profileTab={profileTab} setProfileTab={setProfileTab} onSelect={openRace} onSave={toggleSave} />
          )}
        </div>

        {!selectedRace && (
          <div style={styles.nav}>
            {[
              { id: "search", icon: "🔍", label: "Search" },
              { id: "rankings", icon: "🏆", label: "Rankings" },
              { id: "map", icon: "🗺️", label: "Map" },
              { id: "notifications", icon: "🔔", label: "Alerts" },
              { id: "profile", icon: "👤", label: "Profile" },
            ].map((item) => (
              <button key={item.id} onClick={() => setTab(item.id)} style={styles.navBtn}>
                <span style={{ fontSize: 20 }}>{item.icon}</span>
                <span style={{ ...styles.navLabel, color: tab === item.id ? "#185FA5" : "#aaa", fontWeight: tab === item.id ? "600" : "400" }}>
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        )}

        {toast && <div style={styles.toast}>{toast}</div>}
      </div>
    </div>
  );
}

function SearchTab({ filtered, categories, selectedCat, setSelectedCat, searchQuery, setSearchQuery, onSelect, onSave }) {
  return (
    <div>
      <div style={styles.searchBar}>
        <span style={{ fontSize: 16, marginRight: 6 }}>🔍</span>
        <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search marathons, cities..." style={styles.searchInput} />
        {searchQuery && <button onClick={() => setSearchQuery("")} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 16, color: "#aaa" }}>✕</button>}
      </div>
      <div style={styles.chipRow}>
        {categories.map((c) => (
          <button key={c} onClick={() => setSelectedCat(c)} style={{ ...styles.chip, background: selectedCat === c ? "#185FA5" : "#f0f2f5", color: selectedCat === c ? "#fff" : "#555" }}>{c}</button>
        ))}
      </div>
      <div style={styles.sectionLabel}>{filtered.length} race{filtered.length !== 1 ? "s" : ""} found</div>
      <div style={styles.raceList}>
        {filtered.map((race) => <RaceCard key={race.id} race={race} onSelect={onSelect} onSave={onSave} />)}
        {filtered.length === 0 && <div style={{ textAlign: "center", padding: "2rem", color: "#aaa", fontSize: 14 }}>No races found.</div>}
      </div>
    </div>
  );
}

function RaceCard({ race, onSelect, onSave }) {
  return (
    <div style={styles.card} onClick={() => onSelect(race)}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
            <span style={{ fontSize: 14 }}>{race.flag}</span>
            <span style={styles.cardTitle}>{race.name}</span>
          </div>
          <div style={styles.cardSub}>{race.city}, {race.country} · {race.date}</div>
          <div style={{ display: "flex", gap: 6, marginTop: 8, flexWrap: "wrap" }}>
            <span style={styles.pill}>{race.distance}</span>
            <span style={{ ...styles.pill, color: diffColors[race.difficulty], background: diffColors[race.difficulty] + "18" }}>{race.difficulty}</span>
            <span style={styles.pill}>{race.entry}</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <div style={{ ...styles.scoreRing, borderColor: race.color }}>
            <span style={{ fontSize: 13, fontWeight: "700", color: race.color }}>{race.rank}</span>
          </div>
          <button onClick={(e) => { e.stopPropagation(); onSave(race.id); }} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 18, lineHeight: 1 }}>
            {race.saved ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
    </div>
  );
}

function RankingsTab({ sorted, onSelect }) {
  return (
    <div>
      <div style={styles.sectionLabel}>Global race rankings</div>
      {sorted.map((race, i) => (
        <div key={race.id} style={{ ...styles.card, display: "flex", alignItems: "center", gap: 12 }} onClick={() => onSelect(race)}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: i < 3 ? race.color : "#f0f2f5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ fontSize: 11, fontWeight: "700", color: i < 3 ? "#fff" : "#888" }}>#{i + 1}</span>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: "600", color: "#111" }}>{race.flag} {race.name}</div>
            <div style={{ fontSize: 11, color: "#999", marginTop: 2 }}>{race.date} · {race.difficulty} · {race.elevation} gain</div>
          </div>
          <div style={{ ...styles.scoreRing, borderColor: race.color, width: 36, height: 36 }}>
            <span style={{ fontSize: 12, fontWeight: "700", color: race.color }}>{race.rank}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function MapTab({ races, onSelect }) {
  return (
    <div>
      <div style={styles.sectionLabel}>Races worldwide — tap a pin</div>
      <LeafletMap races={races} onSelect={onSelect} />
      <div style={styles.sectionLabel}>All locations</div>
      {races.map((race) => (
        <div key={race.id} style={{ ...styles.card, display: "flex", alignItems: "center", gap: 10 }} onClick={() => onSelect(race)}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: race.color, flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: "600", color: "#111" }}>{race.flag} {race.name}</div>
            <div style={{ fontSize: 11, color: "#999" }}>{race.city}, {race.country}</div>
          </div>
          <span style={{ fontSize: 12, color: "#bbb" }}>→</span>
        </div>
      ))}
    </div>
  );
}

function NotificationsTab({ notified, onSelect, onNotify }) {
  return (
    <div>
      <div style={styles.sectionLabel}>Registration alerts</div>
      {notified.length === 0 ? (
        <div style={{ textAlign: "center", padding: "2rem", color: "#aaa", fontSize: 14 }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>🔔</div>
          No alerts set. Open a race and tap the bell icon.
        </div>
      ) : notified.map((race) => (
        <div key={race.id} style={styles.card} onClick={() => onSelect(race)}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: "600", color: "#111" }}>{race.flag} {race.name}</div>
              <div style={{ fontSize: 11, color: "#999", marginTop: 2 }}>{race.date} · {race.entry}</div>
              <div style={{ fontSize: 11, color: "#185FA5", marginTop: 6, fontWeight: "500" }}>🔔 Notifying when registration opens</div>
            </div>
            <button onClick={(e) => { e.stopPropagation(); onNotify(race.id); }} style={{ background: "#fff3f3", border: "none", borderRadius: 8, padding: "4px 8px", cursor: "pointer", fontSize: 11, color: "#E24B4A", fontWeight: "500" }}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProfileTab({ saved, notified, profileTab, setProfileTab, onSelect, onSave }) {
  return (
    <div>
      <div style={styles.profileHeader}>
        <div style={styles.avatar}>JD</div>
        <div>
          <div style={{ fontSize: 16, fontWeight: "700", color: "#111" }}>Jane Doe</div>
          <div style={{ fontSize: 12, color: "#999" }}>@janedoe · Pro Member</div>
        </div>
      </div>
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        {[{ id: "saved", label: `Saved (${saved.length})` }, { id: "alerts", label: `Alerts (${notified.length})` }].map((t) => (
          <button key={t.id} onClick={() => setProfileTab(t.id)} style={{ ...styles.chip, background: profileTab === t.id ? "#185FA5" : "#f0f2f5", color: profileTab === t.id ? "#fff" : "#555", flex: 1, justifyContent: "center" }}>{t.label}</button>
        ))}
      </div>
      {profileTab === "saved" ? (
        saved.length === 0 ? (
          <div style={{ textAlign: "center", padding: "2rem", color: "#aaa", fontSize: 14 }}><div style={{ fontSize: 32, marginBottom: 8 }}>❤️</div>No saved races yet.</div>
        ) : saved.map((race) => (
          <div key={race.id} style={{ ...styles.card, display: "flex", alignItems: "center", gap: 10 }} onClick={() => onSelect(race)}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: "600", color: "#111" }}>{race.flag} {race.name}</div>
              <div style={{ fontSize: 11, color: "#999", marginTop: 2 }}>{race.date} · {race.difficulty}</div>
            </div>
            <button onClick={(e) => { e.stopPropagation(); onSave(race.id); }} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 18 }}>❤️</button>
          </div>
        ))
      ) : (
        notified.length === 0 ? (
          <div style={{ textAlign: "center", padding: "2rem", color: "#aaa", fontSize: 14 }}><div style={{ fontSize: 32, marginBottom: 8 }}>🔔</div>No alerts set yet.</div>
        ) : notified.map((race) => (
          <div key={race.id} style={styles.card} onClick={() => onSelect(race)}>
            <div style={{ fontSize: 13, fontWeight: "600", color: "#111" }}>{race.flag} {race.name}</div>
            <div style={{ fontSize: 11, color: "#185FA5", marginTop: 4 }}>🔔 Registration alert active</div>
          </div>
        ))
      )}
    </div>
  );
}

function RaceDetail({ race, onBack, onSave, onNotify }) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
        <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 20, color: "#185FA5" }}>←</button>
        <span style={{ fontSize: 15, fontWeight: "600", color: "#111", flex: 1 }}>Race Details</span>
        <button onClick={() => onSave(race.id)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 22 }}>{race.saved ? "❤️" : "🤍"}</button>
      </div>

      <div style={{ background: race.color + "12", borderRadius: 16, padding: "16px", marginBottom: 16, border: `1px solid ${race.color}30` }}>
        <div style={{ fontSize: 28, marginBottom: 4 }}>{race.flag}</div>
        <div style={{ fontSize: 20, fontWeight: "700", color: "#111", marginBottom: 4 }}>{race.name}</div>
        <div style={{ fontSize: 13, color: "#666" }}>{race.city}, {race.country}</div>
        <div style={{ display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" }}>
          {race.tags.map((tag) => (
            <span key={tag} style={{ background: race.color + "22", color: race.color, borderRadius: 8, padding: "3px 8px", fontSize: 10, fontWeight: "600" }}>{tag}</span>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 16 }}>
        {[
          { label: "Date", value: race.date, icon: "📅" },
          { label: "Distance", value: race.distance, icon: "📏" },
          { label: "Elevation", value: race.elevation, icon: "⛰️" },
          { label: "Difficulty", value: race.difficulty, icon: "💪", color: diffColors[race.difficulty] },
          { label: "Entry Type", value: race.entry, icon: "🎟️" },
          { label: "Qual Time", value: race.qualTime, icon: "⏱️" },
        ].map((stat) => (
          <div key={stat.label} style={{ background: "#f7f9fc", borderRadius: 12, padding: "10px 12px" }}>
            <div style={{ fontSize: 10, color: "#aaa", marginBottom: 2 }}>{stat.icon} {stat.label}</div>
            <div style={{ fontSize: 13, fontWeight: "600", color: stat.color || "#111" }}>{stat.value}</div>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: 12 }}>
        <div style={styles.sectionLabel}>Difficulty rating</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 16, color: diffColors[race.difficulty] }}>{diffStars(race.diffScore)}</span>
          <span style={{ fontSize: 12, color: diffColors[race.difficulty], fontWeight: "600" }}>{race.difficulty}</span>
        </div>
      </div>

      <div style={{ background: "#f7f9fc", borderRadius: 12, padding: "12px", marginBottom: 16, fontSize: 13, color: "#555", lineHeight: 1.6 }}>{race.description}</div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <div style={{ fontSize: 13, color: "#555" }}><span style={{ fontWeight: "600", color: "#111" }}>{race.registered.toLocaleString()}</span> registered runners</div>
        <div style={{ ...styles.scoreRing, borderColor: race.color, width: 44, height: 44 }}>
          <span style={{ fontSize: 15, fontWeight: "700", color: race.color }}>{race.rank}</span>
        </div>
      </div>

      <button onClick={() => onNotify(race.id)} style={{ width: "100%", padding: "12px", borderRadius: 12, border: `1.5px solid ${race.notified ? "#E24B4A" : "#185FA5"}`, background: race.notified ? "#fff3f3" : "#EBF3FB", color: race.notified ? "#E24B4A" : "#185FA5", fontWeight: "600", fontSize: 14, cursor: "pointer", marginBottom: 10 }}>
        {race.notified ? "🔔 Remove Alert" : "🔔 Notify When Registration Opens"}
      </button>

      <a href={race.registrationUrl} target="_blank" rel="noopener noreferrer" style={{ display: "block", width: "100%", padding: "12px", borderRadius: 12, background: "#185FA5", color: "#fff", fontWeight: "600", fontSize: 14, textAlign: "center", textDecoration: "none", boxSizing: "border-box" }}>
        View Registration →
      </a>
    </div>
  );
}

const styles = {
  shell: { display: "flex", justifyContent: "center", alignItems: "center", padding: "2rem 1rem", background: "#fff", minHeight: 700 },
  phone: { width: 375, height: 720, background: "#fff", borderRadius: 40, border: "8px solid #1a1a1a", boxShadow: "0 0 0 2px #333, 0 24px 60px rgba(0,0,0,0.18)", display: "flex", flexDirection: "column", overflow: "hidden", position: "relative" },
  statusBar: { background: "#185FA5", padding: "8px 20px 4px", display: "flex", justifyContent: "space-between", alignItems: "center" },
  statusTime: { fontSize: 12, fontWeight: "700", color: "#fff" },
  statusIcons: { display: "flex", alignItems: "center" },
  header: { background: "#185FA5", padding: "6px 16px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" },
  logo: { display: "flex", alignItems: "center", gap: 6 },
  logoIcon: { fontSize: 18, color: "#B5D4F4" },
  logoText: { fontSize: 17, fontWeight: "700", color: "#fff", letterSpacing: "-0.3px" },
  iconBtn: { background: "none", border: "none", cursor: "pointer", position: "relative", display: "flex", alignItems: "center" },
  badge: { position: "absolute", top: -4, right: -4, background: "#E24B4A", color: "#fff", borderRadius: "50%", width: 14, height: 14, fontSize: 9, fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" },
  proBadge: { background: "#378ADD", borderRadius: 10, padding: "2px 10px", fontSize: 11, color: "#fff", fontWeight: "600" },
  content: { flex: 1, overflowY: "auto", padding: "12px 14px 0", background: "#fff" },
  searchBar: { background: "#f0f2f5", borderRadius: 20, padding: "8px 14px", display: "flex", alignItems: "center", marginBottom: 10 },
  searchInput: { background: "none", border: "none", outline: "none", fontSize: 13, flex: 1, color: "#333" },
  chipRow: { display: "flex", gap: 6, flexWrap: "nowrap", overflowX: "auto", marginBottom: 10, paddingBottom: 4 },
  chip: { border: "none", borderRadius: 20, padding: "5px 12px", fontSize: 11, fontWeight: "500", cursor: "pointer", whiteSpace: "nowrap", display: "flex", alignItems: "center" },
  sectionLabel: { fontSize: 11, fontWeight: "600", color: "#aaa", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 },
  raceList: { display: "flex", flexDirection: "column", gap: 8, paddingBottom: 12 },
  card: { background: "#fff", borderRadius: 14, padding: "12px 14px", border: "0.5px solid #e8eaed", cursor: "pointer" },
  cardTitle: { fontSize: 13, fontWeight: "600", color: "#111" },
  cardSub: { fontSize: 11, color: "#999", marginTop: 2 },
  pill: { background: "#f0f2f5", color: "#555", borderRadius: 8, padding: "2px 8px", fontSize: 10, fontWeight: "500" },
  scoreRing: { width: 40, height: 40, borderRadius: "50%", border: "2px solid", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  profileHeader: { display: "flex", alignItems: "center", gap: 12, marginBottom: 16, padding: "12px 0", borderBottom: "0.5px solid #f0f0f0" },
  avatar: { width: 48, height: 48, borderRadius: "50%", background: "#185FA5", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: "700" },
  nav: { background: "#fff", borderTop: "0.5px solid #e8eaed", display: "flex", justifyContent: "space-around", padding: "8px 0 10px" },
  navBtn: { background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 2, flex: 1 },
  navLabel: { fontSize: 9, letterSpacing: 0.2 },
  toast: { position: "absolute", bottom: 72, left: "50%", transform: "translateX(-50%)", background: "#111", color: "#fff", borderRadius: 20, padding: "8px 18px", fontSize: 12, fontWeight: "500", whiteSpace: "nowrap", zIndex: 100 },
};
