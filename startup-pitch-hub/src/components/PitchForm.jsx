import { useEffect, useState } from "react";

export default function PitchForm({ onAdd, onUpdate, editing, clearEditing }) {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  useEffect(() => {
    if (editing) {
      setTitle(editing.title);
      setDetails(editing.details);
    } else {
      setTitle("");
      setDetails("");
    }
  }, [editing]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !details.trim()) return;

    const base = {
      title: title.trim(),
      details: details.trim(),
      createdAt: editing?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    if (editing) {
      onUpdate({ ...editing, ...base });
      clearEditing();
    } else {
      onAdd(base);
    }

    setTitle("");
    setDetails("");
  };

  const cancelEdit = () => {
    clearEditing();
    setTitle("");
    setDetails("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>
        Title
        <input
          type="text"
          placeholder="short and clear"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={60}
        />
      </label>

      <label>
        Details
        <textarea
          placeholder="describe the idea in 2-4 lines"
          rows={4}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          maxLength={300}
        />
      </label>

      <div className="row">
        <button type="submit" className="btn primary">
          {editing ? "Update" : "Add"}
        </button>
        {editing ? (
          <button type="button" className="btn ghost" onClick={cancelEdit}>
            Cancel
          </button>
        ) : null}
      </div>
    </form>
  );
}
