# ADM TEAM - Sitio Web Corporativo

Sitio web corporativo para ADM TEAM, especialistas en personalización, detailing y performance automotriz.

## 🚀 Tecnologías

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **shadcn/ui**
- **Framer Motion**
- **SEO avanzado** (OpenGraph, JSON-LD, Schema LocalBusiness)

## 🎨 Paleta de Colores ADM TEAM

- **Primario**: `#00AEEF` (Celeste ADM)
- **Secundario**: `#FFFFFF` (Blanco)
- **Contraste**: `#000000` (Negro)
- **Fondo**: `#0D0D0D` (Gris oscuro)

## 📦 Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Configurar variables de entorno (opcional):
```bash
# Crear archivo .env.local
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

3. Ejecutar en desarrollo:
```bash
npm run dev
```

4. Construir para producción:
```bash
npm run build
npm start
```

## 📁 Estructura del Proyecto

```
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # API route para formulario de contacto
│   ├── globals.css               # Estilos globales
│   ├── layout.tsx                # Layout principal con SEO
│   └── page.tsx                  # Página principal
├── components/
│   ├── ui/                       # Componentes shadcn/ui
│   ├── about.tsx                 # Sección Sobre Nosotros
│   ├── contact.tsx               # Sección Contacto
│   ├── footer.tsx                # Footer
│   ├── gallery.tsx               # Galería con lightbox
│   ├── hero.tsx                  # Hero con video
│   ├── navbar.tsx                 # Navbar
│   ├── services.tsx              # Sección Servicios
│   └── testimonials.tsx          # Testimonios
├── lib/
│   └── utils.ts                  # Utilidades
└── public/
    ├── logo.png                  # Logo ADM TEAM
    └── video/
        └── portada.mp4           # Video de portada
```

## 🎯 Características

### SEO Orgánico
- Meta tags optimizados
- OpenGraph completo
- JSON-LD Schema LocalBusiness
- Estructura semántica HTML5
- Headings optimizados (H1, H2, H3)

### Componentes
- **Navbar**: Navegación responsive con menú móvil
- **Hero**: Video fullscreen con overlay y CTA
- **Servicios**: 8 servicios con cards e iconos
- **Galería**: Grid responsive con lightbox
- **Sobre Nosotros**: Historia, misión y valores
- **Testimonios**: 6 testimonios en cards
- **Contacto**: Formulario funcional + Google Maps
- **Footer**: Navegación, redes sociales y CTA

### Animaciones
- Framer Motion en todas las secciones
- Scroll animations con Intersection Observer
- Transiciones suaves

## 📝 Configuración Requerida

### 1. Logo
Coloca tu logo en: `/public/logo.png`

### 2. Video de Portada
Coloca tu video en: `/public/video/portada.mp4`

### 3. Imágenes de Galería
Coloca tus imágenes en: `/public/gallery/image-1.jpg` hasta `image-24.jpg`

### 4. Datos del Negocio
Edita `app/layout.tsx` para actualizar:
- Dirección
- Teléfono
- Email
- Coordenadas GPS (para Google Maps)
- Horarios de atención

### 5. Formulario de Contacto
El formulario está listo pero necesitas integrar un servicio de email:
- **Resend** (recomendado)
- **SendGrid**
- **Nodemailer**

Edita `app/api/contact/route.ts` para agregar la integración.

## 🎨 Personalización

### Colores
Los colores ADM TEAM están definidos en `tailwind.config.ts`:
```typescript
adm: {
  primary: "#00AEEF",
  secondary: "#FFFFFF",
  contrast: "#000000",
  background: "#0D0D0D",
}
```

### Componentes shadcn/ui
Puedes agregar más componentes ejecutando:
```bash
npx shadcn-ui@latest add [component-name]
```

## 📱 Responsive
El sitio está completamente optimizado para:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large Desktop (1440px+)

## 🔧 Próximos Pasos

1. Agregar imágenes reales a la galería
2. Configurar servicio de email para formulario
3. Actualizar datos de contacto y ubicación
4. Optimizar imágenes con Next.js Image
5. Agregar analytics (Google Analytics, etc.)
6. Configurar dominio y hosting

## 📄 Licencia

© 2024 ADM TEAM. Todos los derechos reservados.

