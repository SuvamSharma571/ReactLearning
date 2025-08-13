export default function ThemeSwitcher({ theme, setTheme }) {
  const themes = ["light", "dark", "blue", "green", "pink"];

  return (
    <div className="theme-switcher">
      {themes.map((t) => (
        <button
          key={t}
          className={theme === t ? "active" : ""}
          onClick={() => setTheme(t)}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
