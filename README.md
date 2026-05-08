# jachi-saver-api

자취 대학생을 위한 절약 플랫폼 API (가계부 + 공동구매 + 정보 공유)

## 요구사항

- Node.js
- MySQL 8.x 권장

## 설치

```bash
npm install
```

## 환경변수

```bash
copy .env.example .env
```

`.env`를 열어서 아래 값을 본인 환경에 맞게 수정하세요.

- `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`
- `JWT_SECRET`
- `PORT`

## 데이터베이스 스키마/시드 적용

MySQL 접속 가능한 환경에서 아래 중 한 가지 방식으로 실행합니다.

### 방법 A) mysql CLI로 실행

```bash
mysql -u root -p < database/schema.sql
mysql -u root -p < database/seed.sql
```

### 방법 B) MySQL Workbench에서 실행

- `database/schema.sql` 실행
- `database/seed.sql` 실행

## 실행

```bash
npm run dev
```

정상 동작 확인:

- `GET /health` → `{ "ok": true }`

