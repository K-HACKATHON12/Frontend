# Node.js 16 이미지를 베이스로 사용 (필요에 따라 다른 버전을 선택할 수 있습니다)
FROM node:16

# 작업 디렉토리를 설정
WORKDIR /app

# package.json 및 package-lock.json 파일을 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# Next.js 애플리케이션 파일들을 복사
COPY . .

# 빌드 수행
RUN npm run build

# Next.js 애플리케이션 포트 설정 (기본 3000 포트)
EXPOSE 3000

# Next.js 애플리케이션 실행
CMD ["npm", "start"]
