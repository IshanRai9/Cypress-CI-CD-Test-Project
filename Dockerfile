FROM cypress/browsers:latest

WORKDIR /app
COPY package*.json ./
RUN npm ci && npx cypress verify
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]