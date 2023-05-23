# Next13-Boilerplate

## stack

---

```
  - yarn v3.5.1 (yarn berry)
  - next v13.4.3
  - react v18.2.0
  - typescript v5.0.4
  -
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
