import React from 'react';
import './CategoryCard.css';


interface CategoryCardProps {
  logo: React.ReactNode; 
  title: string;
  subtitle: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ logo, title, subtitle }) => {
  return (
    <div className="card">
      <div className="card-logo">{logo}</div>
      <div className="card-info">
        <h3 className="card-title">{title}</h3>
        <p className="card-subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default CategoryCard;