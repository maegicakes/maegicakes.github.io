import React from 'react';

export default function ProjectCard({ img, title, desc }) {
  return (
    <article className="card">
      <img src={img} alt={title} className="card__img" />
      <h3 className="card__title">{title}</h3>
      <p className="card__desc">{desc}</p>
    </article>
  );
}
