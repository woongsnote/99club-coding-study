# 99Club Coding Study

이 프로젝트는 99Club 코테 스터디를 진행하면서, 학습한 지식을 정리하기 위한 프로젝트로, `Next.js`, `TypeScript`, `Tailwind CSS`, 그리고 `Notion Database`를 사용하여 구현했습니다.

## 주요 기술 스택

- Next.js: React 기반의 강력한 프레임워크로, 서버 사이드 렌더링과 정적 생성 기능을 제공하여 성능을 극대화합니다.
- TypeScript: 정적 타입 시스템을 통해 코드의 안정성을 높이고 개발자 경험을 향상시킵니다.
- Tailwind CSS: 간편하고 확장 가능한 CSS 프레임워크로, 커스터마이징이 용이하고 빠르게 스타일을 적용할 수 있습니다.
- Notion Database: 콘텐츠 관리와 편집을 위한 Notion의 강력한 데이터베이스를 활용하여 콘텐츠를 관리합니다.

## 기능

- 반응형 디자인을 채택하여 모바일 및 데스크톱 환경에서 최상의 사용자 경험을 제공합니다.
- `Notion`에서 게시글을 작성하면 새로 배포하지 않아도, 게시글의 추가 및 업데이트가 가능합니다.

## 설치 및 실행

1. 저장소를 클론합니다

```bash
git clone https://github.com/woongsnote/99club-coding-study.git
```

2. 프로젝트 디렉토리로 이동합니다.

```bash
cd 99club-coding-study
```

3. 종속성을 설치합니다.

```bash
npm install
```

4. `.env` 파일을 생성합니다.

```
NOTION_TOKEN="secret_your_secret_key"
NOTION_DATABASE_ID="your_database_id"
```

5. [Notion API 페이지](https://www.notion.so/my-integrations)에서 새 API를 생성합니다.

   생성한 API의 `secret key`를 복사해서, NOTION_TOKEN에 추가합니다.

6. [Notion](https://www.notion.so)에서 새 Database를 생성합니다.

   생성한 데이터베이스의 주소가 NOTION_DATABASE_ID가 됩니다.

7. 개발 서버를 시작합니다

```bash
npm run dev
```

웹 브라우저에서 http://localhost:3000 로 접속하여 프로젝트를 확인하세요.
