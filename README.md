# 💰 RomiCrypt - Crypto Tracker App

RomiCrypt es una aplicación web desarrollada con React que permite seguir la evolución de distintas criptomonedas en tiempo real. Utiliza la API pública de CoinGecko para obtener datos actualizados, incluyendo precios, gráficos históricos y detalles clave de cada moneda.

---

## 🚀 Funcionalidades

- 🔍 Búsqueda de criptomonedas por nombre
- 📈 Gráfico de precios de los últimos 10 días (LineChart con Google Charts)
- 💵 Cambio de moneda: USD, EUR, ARS, etc.
- 📊 Información detallada de cada coin: nombre, símbolo, imagen, precio actual
- ⚙️ Interfaz dinámica con React Router para navegación entre monedas

---

## 🧰 Tecnologías utilizadas

- **React** (Vite)
- **React Router Dom**
- **Google Charts**
- **CoinGecko API**
- **CSS puro / responsive design**
- **Context API** para manejo de moneda global

---


## 🔗 API utilizada

- [CoinGecko API](https://www.coingecko.com/en/api)

> Esta API no requiere autenticación obligatoria, pero puede usarse una API Key demo gratuita para evitar límites de uso.

---

## 🛠️ Cómo correr el proyecto localmente

1. Clonar el repositorio:

```bash
git clone https://github.com/tuusuario/romicrypt.git

Instalar dependencias:

bash

npm install
Ejecutar el proyecto:

bash

npm run dev
Asegurate de tener Node.js y npm instalados previamente.

-----

 Estructura del proyecto

src/
│
├── components/
│   └── Navbar/
│   └── LineChart/
│
├── context/
│   └── CoinContext.jsx
│
├── pages/
│   └── Home/
│   └── Coin/
│
├── App.jsx
└── main.jsx

🙋‍♀️ Sobre mí
Este proyecto fue desarrollado por Romina Martínez como parte de mi portfolio Frontend. Me apasiona el desarrollo web, la tecnología blockchain y el diseño de interfaces intuitivas. Me ayudé con una página existente (Cryptoplace de GreatStack pero el desarrollo y el código son 100% hechos por mi)

