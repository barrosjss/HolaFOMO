# Estructura de Componentes

Este directorio sigue el patrón de diseño atómico para organizar los componentes de la aplicación, lo que facilita el mantenimiento, la escalabilidad y la reutilización de código.

## Estructura de Carpetas

```
components/
├── atoms/           # Componentes atómicos (botones, inputs, íconos, etc.)
│   ├── buttons/     # Botones reutilizables
│   ├── displays/    # Componentes de visualización (tarjetas, avatares, etc.)
│   ├── feedback/    # Componentes de retroalimentación (alertas, loaders, etc.)
│   ├── forms/       # Componentes de formulario (inputs, checkboxes, etc.)
│   ├── navigation/  # Componentes de navegación (menús, tabs, etc.)
│   └── overlay/     # Componentes de superposición (modales, tooltips, etc.)
│
├── molecules/       # Componentes que combinan átomos
│   ├── event-card/          # Tarjetas de eventos
│   ├── organizer-card/      # Tarjetas de organizadores
│   └── mobile-organizer/    # Componentes específicos para móvil
│
├── organisms/       # Componentes complejos que combinan moléculas/átomos
│   ├── creator/     # Componentes para creadores de contenido
│   ├── event/       # Componentes específicos de eventos
│   ├── home/        # Componentes específicos de la página de inicio
│   ├── footer/      # Pie de página
│   └── navbar/      # Barra de navegación
│
├── providers/       # Proveedores de contexto
│
├── templates/       # Plantillas y componentes base
│
├── types/           # Tipos e interfaces compartidos
│
└── ui/             # Componentes de UI de shadcn/ui

## Convenciones de Nombrado

- **Archivos de componentes**: Usar `PascalCase` (ej: `EventCard.tsx`)
- **Carpetas de componentes**: Usar `kebab-case` (ej: `event-card/`)
- **Tipos e interfaces**: Usar `PascalCase` con sufijo `.types.ts` (ej: `event.types.ts`)
- **Índices de barril**: Usar `index.ts` para exportaciones agrupadas

## Uso de Tipos

Los tipos compartidos están en la carpeta `types/` y se importan de la siguiente manera:

```typescript
import { Event } from "@/components/types/event.types";
```

## Documentación de Componentes

Cada componente debe incluir:

1. **Documentación JSDoc** explicando su propósito, props y ejemplos de uso
2. **Tipos TypeScript** para todas las props
3. **Valores por defecto** cuando sea apropiado
4. **PropTypes** si es necesario para validación en tiempo de ejecución

## Pruebas

Los tests de los componentes deben ubicarse junto al componente con el sufijo `.test.tsx` o `.spec.tsx`.

## Estilos

- Utilizar clases de Tailwind CSS para estilos
- Usar el prefijo `dark:` para modos oscuros
- Mantener los estilos lo más cercanos posible al componente

## Componentes Compartidos

Los componentes que se utilizan en múltiples lugares de la aplicación deben colocarse en el nivel más alto posible de la jerarquía de carpetas.

## Actualizaciones

Al agregar nuevos componentes, asegúrate de actualizar los archivos de barril correspondientes y la documentación.

