import { useEffect, useMemo, useState } from "react";
import Login from "./components/Login.jsx";
import PitchForm from "./components/PitchForm.jsx";
import PitchList from "./components/PitchList.jsx";

const THEME_KEY = "sph_theme";
const USER_KEY = "sph_user";
const PITCHES_KEY = "sph_pitches";

export default function App() {
  // theme
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(THEME_KEY) || "light";
  });

  // auth
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem(USER_KEY);
    return saved ? JSON.parse(saved) : null;
  });

  // data
  const [pitches, setPitches] = useState(() => {
    const saved = localStorage.getItem(PITCHES_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  // ui state
  const [editing, setEditing] = useState(null); // pitch object to edit
  const [searchTerm, setSearchTerm] = useState("");

  // persist theme
  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  // persist user
  useEffect(() => {
    if (user) localStorage.setItem(USER_KEY, JSON.stringify(user));
    else localStorage.removeItem(USER_KEY);
  }, [user]);

  // persist pitches
  useEffect(() => {
    localStorage.setItem(PITCHES_KEY, JSON.stringify(pitches));
  }, [pitches]);

  // theme toggle
  const toggleTheme = () => {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  };

  // auth handlers
  const handleLogin = (username) => {
    setUser({ username });
  };
  const handleLogout = () => {
    setUser(null);
  };

  // pitch handlers
  const addPitch = (p) => {
    setPitches((prev) => [{ ...p, id: Date.now() }, ...prev]);
  };

  const updatePitch = (updated) => {
    setPitches((prev) => prev.map((x) => (x.id === updated.id ? updated : x)));
  };

  const deletePitch = (id) => {
    setPitches((prev) => prev.filter((x) => x.id !== id));
  };

  // filter
  const filteredPitches = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return pitches;
    return pitches.filter(
      (p) =>
        p.title.toLowerCase().includes(term) ||
        p.details.toLowerCase().includes(term)
    );
  }, [pitches, searchTerm]);

  return (
    <div className={`app ${theme}`}>
      <header className="header">
        <div className="brand">
          <h1>Startup Pitch Hub</h1>
          <small className="muted">
            Simple pitch cards with search and local save
          </small>
        </div>

        <div className="header-actions">
          <button onClick={toggleTheme} className="btn">
            {theme === "light" ? "Dark" : "Light"}
          </button>
          {user ? (
            <div className="user">
              <span className="muted">Signed in as {user.username}</span>
              <button onClick={handleLogout} className="btn danger">
                Logout
              </button>
            </div>
          ) : null}
        </div>
      </header>

      {!user ? (
        <main className="container">
          <Login onLogin={handleLogin} />
        </main>
      ) : (
        <main className="container">
          <section className="panel">
            <h2 className="panel-title">Add or Edit Pitch</h2>
            <PitchForm
              onAdd={addPitch}
              onUpdate={updatePitch}
              editing={editing}
              clearEditing={() => setEditing(null)}
            />
          </section>

          <section className="panel">
            <div className="list-header">
              <h2 className="panel-title">Pitches</h2>
              <div className="search">
                <input
                  type="text"
                  placeholder="Search by title or details"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  className="btn"
                  onClick={() => setSearchTerm(searchTerm)}
                >
                  Search
                </button>
                <button className="btn ghost" onClick={() => setSearchTerm("")}>
                  Clear
                </button>
              </div>
            </div>

            <PitchList
              items={filteredPitches}
              onEdit={(p) => setEditing(p)}
              onDelete={deletePitch}
            />
          </section>
        </main>
      )}

      <footer className="footer">
        <span className="muted">
          Built with React and Vite. Data is stored in your browser.
        </span>
      </footer>
    </div>
  );
}
