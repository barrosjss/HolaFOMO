# 🎨 FOMO Design System

Sistema de diseño completo para la interfaz de FOMO, incluyendo paleta de colores, variables CSS y guía de uso.

## 📦 Instalación

1. Copia el archivo `fomo-design-system.css` a tu proyecto
2. Impórtalo en tu HTML o CSS principal:

```html
<link rel="stylesheet" href="path/to/fomo-design-system.css">
```

O en tu CSS/SCSS:

```css
@import 'fomo-design-system.css';
```

## 🎨 Colores Principales

| Color | Hex | Uso |
|-------|-----|-----|
| **Naranja Principal** | `#F95F2E` | Acento principal, CTAs, elementos destacados |
| **Púrpura Secundario** | `#736CED` | Secundario, complementos, variantes |
| **Oscuro Complementario** | `#2D2A29` | Textos importantes, elementos oscuros |

## 🖌️ Paleta Completa

### Serie Naranja (Gráficas)
```css
--color-orange-100: #FFB394  /* Naranja pastel */
--color-orange-200: #FF9670  /* Naranja más claro */
--color-orange-300: #FF7A4D  /* Naranja claro */
--color-orange-400: #F95F2E  /* Naranja principal */
--color-orange-500: #E54718  /* Naranja oscuro */
```

### Serie Púrpura (Gráficas)
```css
--color-purple-100: #C5BFFC  /* Púrpura pastel */
--color-purple-200: #ADA5F7  /* Púrpura más claro */
--color-purple-300: #9088F2  /* Púrpura claro */
--color-purple-400: #736CED  /* Púrpura principal */
--color-purple-500: #5B54D9  /* Púrpura oscuro */
```

### Colores Complementarios (Gráficas con múltiples datasets)
```css
--color-chart-turquoise: #00D9C0
--color-chart-gold: #FFD54F
--color-chart-coral: #FF6B9D
--color-chart-cyan: #4ECDC4
--color-chart-mint: #95E1D3
--color-chart-peach: #F3A683
```

## 📊 Uso en Gráficas

### Una Variable
Usa la serie naranja completa:
```javascript
colors: [
  'var(--color-orange-400)',
  'var(--color-orange-300)',
  'var(--color-orange-200)',
]
```

### Dos Variables
Combina naranja y púrpura:
```javascript
colors: [
  'var(--color-primary)',
  'var(--color-secondary)',
]
```

### 3-6 Variables
Mezcla ambas series:
```javascript
colors: [
  'var(--color-orange-400)',
  'var(--color-purple-400)',
  'var(--color-orange-300)',
  'var(--color-purple-300)',
  'var(--color-orange-500)',
  'var(--color-purple-500)',
]
```

### 7+ Variables
Usa la serie complementaria:
```javascript
colors: [
  'var(--color-chart-turquoise)',
  'var(--color-chart-gold)',
  'var(--color-chart-coral)',
  'var(--color-chart-cyan)',
  'var(--color-chart-mint)',
  'var(--color-chart-peach)',
]
```

## 🎯 Colores Funcionales

| Estado | Variable | Hex | Uso |
|--------|----------|-----|-----|
| **Success** | `--color-success` | `#20C997` | Confirmaciones, éxitos |
| **Warning** | `--color-warning` | `#FFC107` | Advertencias, precaución |
| **Error** | `--color-error` | `#FF4757` | Errores, alertas críticas |
| **Info** | `--color-info` | `#736CED` | Información, tips |

### Ejemplo de Uso
```html
<div class="alert alert-success">¡Operación exitosa!</div>
<div class="alert alert-warning">Revisa esta información</div>
<div class="alert alert-error">Ha ocurrido un error</div>
<div class="alert alert-info">Consejo útil</div>
```

## 🔘 Estados de Interacción

### Botones
```html
<!-- Botón Primario -->
<button class="btn btn-primary">Acción Principal</button>

<!-- Botón Secundario -->
<button class="btn btn-secondary">Acción Secundaria</button>

<!-- Botón Desactivado -->
<button class="btn btn-primary disabled">Desactivado</button>
```

### Estados en CSS
```css
/* Hover */
.elemento:hover {
  background-color: var(--color-primary-hover);
}

/* Active/Pressed */
.elemento:active {
  background-color: var(--color-primary-active);
}

/* Disabled */
.elemento:disabled {
  background-color: var(--color-disabled-bg);
  color: var(--color-disabled-text);
}
```

## 🌑 Sombras

### Niveles de Elevación
```css
/* Nivel 1 - Cards, botones */
.card {
  box-shadow: var(--shadow-sm);
}

/* Nivel 2 - Dropdowns, tooltips */
.dropdown {
  box-shadow: var(--shadow-md);
}

/* Nivel 3 - Modals, popovers */
.modal {
  box-shadow: var(--shadow-lg);
}

/* Nivel 4 - Elementos flotantes */
.floating {
  box-shadow: var(--shadow-xl);
}
```

### Sombras de Color
```css
/* Para CTAs importantes */
.btn-hero {
  box-shadow: var(--shadow-primary);
}

/* Para elementos secundarios destacados */
.feature-card {
  box-shadow: var(--shadow-secondary);
}
```

## 🎨 Iconos

### Guía de Colores para Iconos
```html
<!-- Iconos principales -->
<svg class="text-primary">...</svg>

<!-- Iconos secundarios -->
<svg class="text-secondary">...</svg>

<!-- Iconos de texto normal -->
<svg class="text-dark">...</svg>

<!-- Iconos desactivados -->
<svg class="text-light">...</svg>

<!-- Iconos de estado -->
<svg class="text-success">...</svg>
<svg class="text-error">...</svg>
```

## 📐 Espaciado

```css
--spacing-xs: 4px     /* Muy pequeño */
--spacing-sm: 8px     /* Pequeño */
--spacing-md: 16px    /* Medio (base) */
--spacing-lg: 24px    /* Grande */
--spacing-xl: 32px    /* Extra grande */
--spacing-2xl: 48px   /* 2X grande */
--spacing-3xl: 64px   /* 3X grande */
```

### Ejemplo
```css
.container {
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
}
```

## 🔤 Tipografía

### Tamaños
```css
--font-size-xs: 12px
--font-size-sm: 14px
--font-size-base: 16px
--font-size-lg: 18px
--font-size-xl: 20px
--font-size-2xl: 24px
--font-size-3xl: 30px
--font-size-4xl: 36px
```

### Pesos
```css
--font-weight-normal: 400
--font-weight-medium: 500
--font-weight-semibold: 600
--font-weight-bold: 700
```

## 🧩 Componentes Base

### Card
```html
<div class="card">
  <h3>Título del Card</h3>
  <p>Contenido del card...</p>
</div>
```

### Alert
```html
<div class="alert alert-info">
  Mensaje informativo
</div>
```

### Button
```html
<button class="btn btn-primary">Click aquí</button>
```

## 💡 Mejores Prácticas

### ✅ Hacer
- Usar variables CSS en lugar de valores hardcoded
- Mantener consistencia con la paleta definida
- Usar las series de colores apropiadas para gráficas
- Aplicar sombras según el nivel de elevación
- Seguir los estados de interacción definidos

### ❌ Evitar
- Crear colores nuevos fuera de la paleta
- Usar colores arbitrarios en gráficas
- Mezclar estilos de sombra
- Ignorar los estados desactivados
- Usar colores principales para textos largos

## 🔧 Personalización

Si necesitas extender el sistema, añade tus variables manteniendo la nomenclatura:

```css
:root {
  /* Tu extensión personalizada */
  --color-custom-accent: #YOURCOLOR;
  --spacing-custom: 20px;
}
```

## 📱 Responsive Design

Las variables funcionan perfectamente con media queries:

```css
@media (max-width: 768px) {
  :root {
    --spacing-lg: 16px;
    --font-size-3xl: 24px;
  }
}
```

## 🚀 Ejemplos de Implementación

### Dashboard con Gráficas
```javascript
// Chart.js
const chartConfig = {
  data: {
    datasets: [{
      backgroundColor: [
        'var(--color-orange-400)',
        'var(--color-purple-400)',
        'var(--color-orange-300)',
        'var(--color-purple-300)',
      ]
    }]
  }
}
```

### Sistema de Notificaciones
```html
<div class="alert alert-success shadow-md rounded-lg">
  ✓ Cambios guardados correctamente
</div>
```

## 📄 Licencia

Este sistema de diseño es parte del proyecto FOMO.

---

**Versión:** 1.0  
**Última actualización:** Noviembre 2025