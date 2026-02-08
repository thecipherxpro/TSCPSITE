import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav 
      aria-label="Breadcrumb" 
      className="flex items-center justify-center gap-2 text-sm"
      itemScope 
      itemType="https://schema.org/BreadcrumbList"
    >
      <Link 
        to="/" 
        className="text-white/80 hover:text-white transition-colors flex items-center gap-2"
        itemProp="itemListElement"
        itemScope
        itemType="https://schema.org/ListItem"
      >
        <meta itemProp="position" content="1" />
        <span itemProp="name" className="flex items-center gap-1">
          <i className="ri-home-4-line"></i>
          Home
        </span>
        <link itemProp="item" href={window.location.origin + "/"} />
      </Link>
      
      {items.map((item, index) => (
        <div 
          key={index} 
          className="flex items-center gap-2"
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <span className="text-white/60">/</span>
          <meta itemProp="position" content={String(index + 2)} />
          {item.path ? (
            <Link 
              to={item.path}
              className="text-white/80 hover:text-white transition-colors"
            >
              <span itemProp="name">{item.label}</span>
              <link itemProp="item" href={window.location.origin + item.path} />
            </Link>
          ) : (
            <>
              <span className="text-white font-medium" itemProp="name">{item.label}</span>
              <link itemProp="item" href={window.location.href} />
            </>
          )}
        </div>
      ))}
    </nav>
  );
}
