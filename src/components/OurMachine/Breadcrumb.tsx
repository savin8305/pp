import React from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {item.href ? (
              <a
                href={item.href}
                className={`inline-flex items-center text-xs sm:text-lg font-medium ${
                  item.current
                    ? "text-gray-500"
                    : "text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                }`}
              >
                {index === 0 ? (
                  <>
                    <svg
                      className="w-8 h-8 sm:w-4 sm:h-4 me-1 sm:me-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    {item.label}
                  </>
                ) : (
                  <>
                    {" > "}
                    {item.label}
                  </>
                )}
              </a>
            ) : (
              <span
                className={`inline-flex items-center text-xs sm:text-lg font-medium ${
                  item.current ? "text-gray-500" : "text-gray-700"
                }`}
              >
                {index !== 0 && " > "}
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
