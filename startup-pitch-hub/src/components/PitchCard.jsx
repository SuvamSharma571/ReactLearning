import React from "react";

export default function PitchCard({ pitch, onEdit, onDelete }) {
  const created = new Date(pitch.createdAt).toLocaleString();
  const updated = new Date(pitch.updatedAt).toLocaleString();

  return (
    <article className="card">
      <header className="card-head">
        <h3 className="card-title">{pitch.title}</h3>
      </header>

      <p className="card-body">{pitch.details}</p>

      <div className="card-meta">
        <span className="muted small">Created: {created}</span>
        <span className="muted small">Updated: {updated}</span>
      </div>

      <div className="row">
        <button className="btn" onClick={() => onEdit(pitch)}>
          Edit
        </button>
        <button className="btn danger" onClick={() => onDelete(pitch.id)}>
          Delete
        </button>
      </div>
    </article>
  );
}
