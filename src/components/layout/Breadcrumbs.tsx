import React from 'react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (path: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 text-xs text-slate-500">
      <ol className="flex flex-wrap items-center gap-1.5 list-none p-0 m-0">
        <li>
          <button
            onClick={() => onNavigate('/')}
            className="text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          >
            Home
          </button>
        </li>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <li aria-hidden="true" className="text-slate-300">
              /
            </li>
            <li>
              {item.path ? (
                <button
                  onClick={() => onNavigate(item.path!)}
                  className="text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ) : (
                <span className="text-slate-800 font-medium truncate max-w-[240px] inline-block align-bottom" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};
