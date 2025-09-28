# Megalum Center S.A.S. - Sitio Web Corporativo

Sitio web corporativo para Vidrios y Aluminios Megalum Center S.A.S., desarrollado con Next.js 14, React, TypeScript y Tailwind CSS.

## 🚀 Características

- **Framework**: Next.js 14 con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS con variables CSS personalizadas
- **Iconos**: Lucide React
- **Animaciones**: Framer Motion para efectos suaves
- **SEO**: Metadata optimizada, sitemap y robots.txt
- **Accesibilidad**: Cumple estándares WCAG AA
- **Responsive**: Diseño mobile-first
- **Performance**: Optimización de imágenes con next/image

## 🎨 Paleta de Colores

```css
--brand: #8E1B2B        /* Rojo corporativo */
--brand-dark: #6F1522   /* Rojo oscuro */
--ink: #151515          /* Negro principal */
--ink-2: #2B2B2B        /* Negro secundario */
--gray-500: #7A7A7A     /* Gris medio */
--gray-200: #E6E6E6     /* Gris claro */
--white: #FFFFFF        /* Blanco */
--aluminum: #BFC6CE     /* Color aluminio */
```

## 📁 Estructura del Proyecto

```
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio
│   ├── servicios/         # Páginas de servicios
│   ├── portafolio/        # Página de portafolio
│   ├── contacto/          # Página de contacto
│   ├── quienes-somos/     # Página sobre nosotros
│   ├── globals.css        # Estilos globales
│   ├── sitemap.ts         # Sitemap XML
│   └── robots.ts          # Robots.txt
├── components/            # Componentes reutilizables
│   ├── header.tsx         # Header con navegación
│   ├── footer.tsx         # Footer
│   ├── hero.tsx           # Sección hero con animaciones
│   ├── button.tsx         # Componente botón
│   ├── card.tsx           # Componente tarjeta
│   ├── service-card.tsx   # Tarjeta de servicio
│   ├── testimonial.tsx    # Testimonio
│   ├── animated-section.tsx # Componentes de animación
│   └── whatsapp-fab.tsx   # Botón flotante WhatsApp
├── lib/                   # Utilidades y configuración
│   ├── constants.ts       # Constantes del proyecto
│   ├── seo.ts            # Configuración SEO
│   └── utils.ts          # Utilidades generales
└── public/               # Archivos estáticos
    └── manifest.json     # PWA manifest
```

## 🛠️ Instalación y Configuración

### Prerrequisitos

- Node.js 18.0 o superior
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd megalum-center
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📜 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Ejecuta el servidor de desarrollo

# Producción
npm run build        # Construye la aplicación para producción
npm run start        # Ejecuta la aplicación en modo producción

# Calidad de código
npm run lint         # Ejecuta ESLint
```

## 🎯 Páginas Incluidas

### Página Principal (/)
- Hero section con CTAs principales
- Sección de diferenciales (4 tarjetas)
- Teaser de servicios (grid 2×3)
- Teaser de portafolio (6 imágenes)
- Testimonios (3 testimonios)
- CTA final

### Servicios (/servicios)
- Índice de todos los servicios
- Enlaces a páginas individuales de servicios

### Servicios Individuales (/servicios/[slug])
- Páginas dinámicas para cada servicio
- Información detallada y características
- Formulario de contacto

### Portafolio (/portafolio)
- Galería de proyectos realizados
- Categorización por tipo de servicio

### Contacto (/contacto)
- Información de contacto completa
- Formulario de cotización
- Enlaces a WhatsApp

### Quiénes Somos (/quienes-somos)
- Historia de la empresa
- Misión y visión
- Valores corporativos
- Ventajas competitivas

## 🔧 Configuración Personalizada

### Variables de Entorno

Crear archivo `.env.local` con:

```env
NEXT_PUBLIC_SITE_URL=https://megalumcenter.com
NEXT_PUBLIC_WHATSAPP_NUMBER=573001234567
NEXT_PUBLIC_EMAIL=info@megalumcenter.com
```

### Personalización de Contenido

Editar archivo `lib/constants.ts` para modificar:
- Información de la empresa
- Servicios ofrecidos
- Diferenciales
- Testimonios
- Navegación

## 📱 Características Técnicas

### SEO y Performance
- ✅ Metadata optimizada para cada página
- ✅ Sitemap XML automático
- ✅ Robots.txt configurado
- ✅ Open Graph y Twitter Cards
- ✅ Imágenes optimizadas con next/image
- ✅ Lazy loading de imágenes

### Accesibilidad
- ✅ Contraste AA en todos los elementos
- ✅ Navegación por teclado
- ✅ Etiquetas alt en imágenes
- ✅ Estructura semántica HTML5
- ✅ Focus visible en elementos interactivos

### Responsive Design
- ✅ Mobile-first approach
- ✅ Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- ✅ Navegación móvil con menú hamburguesa
- ✅ Componentes adaptativos

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conectar repositorio a Vercel
2. Configurar variables de entorno
3. Desplegar automáticamente

### Otras plataformas
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📞 Soporte

Para soporte técnico o consultas sobre el proyecto, contactar al equipo de desarrollo.

## 📄 Licencia

Este proyecto es propiedad de Megalum Center S.A.S. Todos los derechos reservados.

---

**Desarrollado con ❤️ para Megalum Center S.A.S.**
