# Seguridad de despliegue

La web se genera como sitio estatico. El archivo `public/_headers` aporta cabeceras de seguridad cuando el hosting soporta el formato `_headers` (por ejemplo, Netlify).

## Proteccion DDoS y abuso

La defensa contra un DDoS debe ejecutarse delante del hosting, en un CDN/WAF como Cloudflare, porque el navegador y Astro no pueden absorber un ataque volumetrico. Aplicar estas reglas en el proveedor:

- Activar proxy/CDN y modo de mitigacion DDoS gestionado.
- Limitar peticiones por IP a rutas dinamicas o APIs si se anaden en el futuro; el sitio actual no expone una API propia.
- Crear una regla de rate limiting para `/api/*` y formularios con un limite inicial de 30 peticiones por minuto por IP y revisar falsos positivos.
- Aplicar challenge gestionado a rafagas anormales, user agents vacios y paises que no formen parte del publico objetivo.
- Mantener el origen privado, aceptar trafico solo desde el CDN y activar cache para los recursos estaticos.
- Monitorizar picos de ancho de banda, errores 4xx/5xx y consumo de CPU; configurar alertas antes del limite del plan.

No se debe colocar una clave secreta, un token de WAF ni credenciales en el frontend. Si en el futuro se anade un formulario que envie datos al servidor, debe validarse en backend y aplicar rate limiting tambien en esa ruta.
