# 📤 Instrucciones para subir a GitHub

## Pasos para crear el repositorio y subir el código

### 1. Crear el repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre del repositorio: `admteam-nuevo`
3. Descripción: "Sitio web corporativo ADM TEAM - Next.js 14, TailwindCSS, shadcn/ui"
4. Elige si será público o privado
5. **NO** inicialices con README, .gitignore o licencia (ya tenemos todo)
6. Click en "Create repository"

### 2. Conectar y subir el código

Una vez creado el repositorio, ejecuta estos comandos en la terminal:

```bash
cd Z:\xampp\htdocs\adm-team-nextjs
git remote add origin https://github.com/TU_USUARIO/admteam-nuevo.git
git branch -M main
git push -u origin main
```

**Reemplaza `TU_USUARIO` con tu nombre de usuario de GitHub**

### 3. Si necesitas autenticación

Si GitHub te pide autenticación, puedes usar:
- Personal Access Token (recomendado)
- GitHub CLI
- SSH keys

## Comandos rápidos (copia y pega)

```bash
# Agregar remote (reemplaza TU_USUARIO)
git remote add origin https://github.com/TU_USUARIO/admteam-nuevo.git

# Cambiar branch a main
git branch -M main

# Subir código
git push -u origin main
```

## ✅ Estado actual

- ✅ Git inicializado
- ✅ Todos los archivos agregados
- ✅ Commit inicial realizado
- ✅ Branch renombrado a `main`
- ⏳ Pendiente: crear repo en GitHub y agregar remote

