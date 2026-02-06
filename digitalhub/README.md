# DigitalHub Starter

This repo contains the starter structure for a DigitalHub marketplace.

## Structure

- `frontend/` - Next.js + Tailwind UI
- `backend/` - FastAPI service

## Quickstart

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```
