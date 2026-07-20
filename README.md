# Seongrok Lee — Personal Blog

[seongroklee.com](https://www.seongroklee.com)의 소스 코드입니다. AI 시스템과 거버넌스를 중심으로, 소프트웨어 구현과 도시·공공 영역의 적용을 다루는 글과 프로젝트를 따뜻한 에디토리얼 디자인으로 보여줍니다.

## Stack

- Next.js 14 · React 18 · TypeScript
- Tailwind CSS 4
- Contentlayer2 · MDX
- Vercel

## Local development

```bash
yarn
yarn dev
```

`http://localhost:3000`에서 확인할 수 있습니다.

```bash
yarn build
yarn serve
```

## Content

- 글: `data/blog/*.mdx`
- 작성자 소개: `data/authors/default.mdx`
- 프로젝트: `data/projectsData.ts`
- 사이트 메타데이터: `data/siteMetadata.js`
- 디자인 토큰과 전역 스타일: `css/tailwind.css`

글의 frontmatter는 최소한 `title`, `date`, `summary`, `tags`, `draft`를 포함합니다. 태그 인덱스, 검색 문서, 사이트맵과 RSS는 빌드 과정에서 생성됩니다.

## Structure

```text
app/          routes, metadata, home sections
components/   shared interface components
data/         MDX content and site data
layouts/      article, list, and author layouts
public/       images and static assets
scripts/      post-build search, RSS, and sitemap tasks
```

## Deployment

`main` 브랜치가 Vercel 프로덕션 배포에 연결되어 있습니다. 공개 전에는 `yarn build`로 정적 페이지 생성, 내부 링크, Contentlayer 스키마를 확인합니다.
