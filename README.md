# Next13-Boilerplate

## stack

---

```
  - yarn v3.5.1 (yarn berry)
  - next v13.4.3
  - react v18.2.0
  - typescript v5.0.4
  - sanitize.css v13.0.0
  - jest v29.5.0
  - next-pwa v5.6.0
```

## record of setting

---

1. git repo 생성 => clone
2. yarn berry 설정 (node.js 16.17.0 버전 이상)

```c
  corepack enable
  corepack prepare yarn@stable --activate

  // ** classic yarn 사용중인 경우 **
  yarn set version berry
```

3. create next app 설치

```c
  yarn create next-app@latest ./

  // check option
  ✔ Would you like to use TypeScript with this project? … Yes
  ✔ Would you like to use ESLint with this project? … Yes
  ✔ Would you like to use Tailwind CSS with this project? … No
  ✔ Would you like to use `src/` directory with this project? … Yes
  ✔ Use App Router (recommended)? … Yes
  ✔ Would you like to customize the default import alias? … No
```

4. 설정파일 추가

- .gitignore에 .yarn추가
- .prettierrc 설정
- .vscode/settings.json 설정

5. VSCode setup (VSCode에서만 적용)

```c
  yarn dlx @yarnpkg/sdks vscode
  yarn plugin import interactive-tools
```

- <b> \*\*\* 파일에서 import 에러발생시 추가 설정 </b>
  - ts파일에서 ctrl+shift+p
  - Select TypeScript Version 선택
  - Use Workspace Version 선택

6. jest 설정

```c
  yarn add --dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom
```

- root에 jest.config.js 파일생성 후 설정 코드 입력.
- test 파일에서 toBeInTheDocument() 함수 에러 발생 -> 아래 라이브러리 설치

```
  yarn add -D @types/testing-library__jest-dom
```

7. sanitize css 설정

```
  yarn add sanitize.css
  yarn add --dev babel-loader
```

8. PWA 설정

```
  yarn add next-pwa
```

- next.config.js 파일 수정

```js
/** @type {import('next').NextConfig} */
const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  customWorkerDir: 'src/worker',
  runtimeCaching,
})

const nextConfig = {}

module.exports = withPWA(nextConfig)
```

- tsconfig.json -> lib값에 webworker 추가
- .yarnrc.yml 파일에 아래 코드 추가

```
  packageExtensions:
    babel-loader@*:
      dependencies:
        '@babel/core': '*'
```

- realfavicongenerator.net 사이트에서 PWA관련 이미지 + menifest파일 다운받아 public 폴더에 넣음.
- app/layout.tsx에 meta data 작성.
- build -> start 하면 다운로드 가능.

9. PWA custom service worker 설정

- 8단계에서 설정한 withPWA > customWorkerDir의 경로에 index.tsx파일 생성하여 이벤트 등록.

10. next.config.js 파일 재 수정.

- 현재 시점에 next13버전의 app 디렉터리를 사용하는 상태에서 pwa 적용시 서비스워커가 정상적으로 연결되지 않는 이슈가 있었음.
- https://github.com/shadowwalker/next-pwa/issues/424#issuecomment-1399683017
- https://github.com/Schular/next-with-pwa/ 의 next.config.js 코드 참고함.

11. react-query 설정

```
  yarn add @tanstack/react-query
  yarn add @tanstack/react-query-devtools
```

- 참고 > https://tanstack.com/query/latest/docs/react/guides/ssr#queryclientprovider-is-required-by-both-the-initialdata-and-hydrate-prefetching-approaches

12. api 통신관련 파일 생성

- fetch함수 같은 패턴으로 사용하도록 래핑
- 각 api별로 파일 생성하여 래핑된 fetch 호출하여 api 요청

13. env파일 설정

- local, development, production 파일 생성
