# 🚀 Instrucciones de Configuración - ADM TEAM

## 📋 Checklist de Configuración

### 1. Instalar Dependencias
```bash
npm install
```

### 2. Archivos Requeridos en `/public`

#### Logo
- **Ubicación**: `/public/logo.png`
- **Formato**: PNG con fondo transparente recomendado
- **Tamaño**: Mínimo 200x200px (se escalará automáticamente)

#### Video de Portada
- **Ubicación**: `/public/video/portada.mp4`
- **Formato**: MP4 (H.264 recomendado)
- **Duración**: 10-30 segundos
- **Resolución**: Mínimo 1920x1080
- **Tamaño**: Optimizar para web (< 10MB recomendado)

#### Imágenes de Galería
- **Ubicación**: `/public/gallery/`
- **Nombres**: `image-1.jpg`, `image-2.jpg`, ..., `image-24.jpg`
- **Cantidad**: Mínimo 20-24 imágenes
- **Formato**: JPG o PNG
- **Tamaño**: Optimizar para web (máx 2MB por imagen)
- **Dimensiones**: Recomendado 1200x1200px o superior

### 3. Configurar Variables de Entorno

Crear archivo `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

### 4. Actualizar Datos del Negocio

Editar `app/layout.tsx` (líneas 10-18):
```typescript
const businessAddress = {
  streetAddress: "Tu dirección completa",
  addressLocality: "Tu ciudad",
  addressRegion: "Tu provincia",
  postalCode: "Tu código postal",
  addressCountry: "AR"
}
```

También actualizar:
- Teléfono (línea 47)
- Coordenadas GPS para Google Maps (líneas 40-43)
- Horarios de atención (líneas 44-55)

### 5. Actualizar Información de Contacto

Editar `components/contact.tsx`:
- Teléfono (línea ~60)
- WhatsApp (línea ~70)
- Email (línea ~80)
- Dirección (línea ~90)
- Horarios (línea ~100)
- URL de Google Maps embed (línea ~120)

### 6. Configurar Formulario de Contacto

El formulario está funcional pero necesita integración con servicio de email.

**Opción 1: Resend (Recomendado)**
```bash
npm install resend
```

Editar `app/api/contact/route.ts`:
```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: 'contacto@tu-dominio.com',
  to: 'info@admteam.com.ar',
  subject: `Nuevo contacto de ${name}`,
  html: `
    <h2>Nuevo mensaje de contacto</h2>
    <p><strong>Nombre:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Teléfono:</strong> ${phone}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${message}</p>
  `
})
```

**Opción 2: SendGrid**
```bash
npm install @sendgrid/mail
```

**Opción 3: Nodemailer**
```bash
npm install nodemailer
```

### 7. Activar Imágenes en Galería

Una vez que tengas las imágenes en `/public/gallery/`, editar `components/gallery.tsx`:

1. Descomentar las líneas con `<Image>` (alrededor de línea 50 y 90)
2. Comentar o eliminar los divs placeholder

### 8. Personalizar Contenido

#### Sobre Nosotros
Editar `components/about.tsx`:
- Historia de la empresa
- Misión
- Valores (puedes agregar más)

#### Testimonios
Editar `components/testimonials.tsx`:
- Agregar testimonios reales de clientes
- Actualizar nombres, vehículos y comentarios

#### Servicios
Editar `components/services.tsx`:
- Ajustar descripciones de servicios
- Agregar o quitar servicios según necesidad

### 9. Redes Sociales

Editar `components/footer.tsx` (líneas ~30-35):
- Actualizar URLs de Facebook, Instagram, YouTube
- Agregar o quitar redes sociales

### 10. SEO y Meta Tags

Ya está configurado en `app/layout.tsx`, pero puedes personalizar:
- Keywords adicionales
- Descripción del negocio
- Imagen de OpenGraph (usar logo o imagen específica)

## 🎨 Personalización de Colores

Los colores están en `tailwind.config.ts`. Para cambiar:
```typescript
adm: {
  primary: "#00AEEF",    // Celeste ADM
  secondary: "#FFFFFF",   // Blanco
  contrast: "#000000",    // Negro
  background: "#0D0D0D", // Fondo oscuro
}
```

## 🚀 Ejecutar el Proyecto

### Desarrollo
```bash
npm run dev
```
Abrir: http://localhost:3000

### Producción
```bash
npm run build
npm start
```

## 📱 Testing

Antes de publicar, verificar:
- [ ] Logo se muestra correctamente
- [ ] Video de portada se reproduce
- [ ] Todas las imágenes de galería cargan
- [ ] Formulario de contacto funciona
- [ ] Google Maps muestra la ubicación correcta
- [ ] Links de redes sociales funcionan
- [ ] Navegación smooth scroll funciona
- [ ] Responsive en mobile, tablet y desktop
- [ ] SEO tags correctos (usar herramienta de validación)

## 🔧 Solución de Problemas

### Video no se reproduce
- Verificar que el archivo esté en `/public/video/portada.mp4`
- Verificar formato MP4 (H.264)
- Agregar `playsInline` si es necesario

### Imágenes no cargan
- Verificar rutas en `/public/gallery/`
- Verificar nombres de archivos (image-1.jpg, image-2.jpg, etc.)
- Descomentar código de Image en `components/gallery.tsx`

### Formulario no envía
- Verificar que la API route esté funcionando
- Configurar servicio de email
- Verificar logs en consola del servidor

## 📞 Soporte

Para dudas o problemas, revisar:
- Documentación de Next.js: https://nextjs.org/docs
- Documentación de TailwindCSS: https://tailwindcss.com/docs
- Documentación de shadcn/ui: https://ui.shadcn.com

