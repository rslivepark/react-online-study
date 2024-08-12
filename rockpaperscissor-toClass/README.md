# 1주차 - 가위바위보 게임

- 배포주소: https://aquamarine-empanada-11841f.netlify.app

### 이슈해결

#### - Netlify 배포 이슈

<img width="600" height=auto alt="noBuildDirectory" src="https://github.com/user-attachments/assets/678fab27-8d38-4b4c-bd90-5c7bb7c2b3a2">.

- 에러 발생 이유: 로컬에서 npm run build 명령어 미실행
- 해결: build 생성 후 깃허브에 재푸시

<img width="600" height=auto  alt="noBaseDirectory" src="https://github.com/user-attachments/assets/53544a9a-8d96-4269-89a3-9fc6d3fa3e19">.

- 에러 발생 이유: base directory 잘못설정 (react-online-study/rockpaperscissor)
- 해결방안: 레포지토리 이름은 제외하고 base directory로 하고 싶은 directory 이름만 적어준다 (rockpaperscissor/)
