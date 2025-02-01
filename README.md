# 🍽️ Pop-Up Kitchen Menu

This project is a **Next.js + Sanity CMS** web app for a **pop-up kitchen menu**.  
It allows the owner to easily update the menu weekly using a **Sanity CMS dashboard**, and customers can scan a **QR code** to view the latest menu while waiting in line.

Based on the [Next Sanity Toolkit](https://github.com/sanity-io/next-sanity/).

## 📂 Project Structure

```
/
├── web/    # Next.js frontend (displays the menu)
└── cms/    # Sanity CMS backend (menu management)
```

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/ajosephjohnson/bao-chicka-bao-bao.git
cd bao-chicka-bao-bao
```

### 2️⃣ Install Dependencies
```sh
cd web && npm install
cd ../cms && npm install
```

### 3️⃣ Set Up Environment Variables  

Create a `.env.local` file in both `web` and `cms` directories.

#### `web/.env.local`
```sh
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=your-dataset
```

#### `cms/.env.local`
```sh
SANITY_STUDIO_PROJECT_ID=your-project-id
SANITY_STUDIO_DATASET=your-dataset
```

### 4️⃣ Run the Development Servers

#### Start the **Next.js** app:
```sh
cd web
npm run dev
```

#### Start the **Sanity Studio**:
```sh
cd cms
npm run dev
```

## 🎯 Features

✅ **Easy Menu Updates** – Owner can add/remove menu items weekly.  
✅ **Live Previews** – Instantly preview menu updates in real-time.  
✅ **QR Code Integration** – Customers scan a QR code to view the latest menu.  
✅ **Fast & Responsive** – Optimized for mobile viewing.  
✅ **Sanity Embedded Studio** – Manage the menu directly from the website.  

## 📜 License

This project is **MIT-licensed**. See the [LICENSE](LICENSE.txt) file for details.