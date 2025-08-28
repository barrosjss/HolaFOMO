import React from 'react';
import { cn } from '@/lib/utils';

// Tipos de props del componente
export interface ComponentTemplateProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Título del componente
   */
  title?: string;
  /**
   * Descripción del componente
   */
  description?: string;
  /**
   * Clase de utilidad para personalización adicional
   */
  className?: string;
  /**
   * Contenido del componente
   */
  children?: React.ReactNode;
}

/**
 * Componente de plantilla que sigue las mejores prácticas de la aplicación.
 * 
 * @example
 * <ComponentTemplate title="Ejemplo" description="Este es un ejemplo de componente">
 *   Contenido del componente
 * </ComponentTemplate>
 */
const ComponentTemplate = React.forwardRef<HTMLDivElement, ComponentTemplateProps>(
  ({ title, description, className, children, ...props }, ref) => {
    return (
      <div 
        ref={ref}
        className={cn(
          'p-6 rounded-lg border border-gray-200 dark:border-gray-800',
          'bg-white dark:bg-gray-900',
          className
        )}
        {...props}
      >
        {title && (
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {description}
          </p>
        )}
        <div className="space-y-4">
          {children}
        </div>
      </div>
    );
  }
);

ComponentTemplate.displayName = 'ComponentTemplate';

export { ComponentTemplate };
