# Polisi Unsent Bot

## Description

Bot just-for-fun that has anti unsent feature and web admin (in the future).

## Usage

### Preparation

Copy environment variable:

```bash
cp .env.example .env
```

Edit `.env` according to your needs.

### Development

Run these commands:

```bash
npm install
npm run dev
```

### Production

1. Install docker
2. Follow instructions from [nginx-proxy-letsencrypt](https://github.com/zydhanlinnar11/nginx-proxy-letsencrypt) until `docker-compose up -d`
3. Run `docker-compose up -d` in this directory
4. Setup domain according to `docker.env` to access web admin
