import PitchCard from "./PitchCard.jsx";

export default function PitchList({ items, onEdit, onDelete }) {
  if (items.length === 0) {
    return <p className="muted">No pitches found.</p>;
  }

  return (
    <div className="grid">
      {items.map((p) => (
        <PitchCard key={p.id} pitch={p} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}
