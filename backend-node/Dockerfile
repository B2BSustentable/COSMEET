# Use a imagem do Node.js 18 no Alpine Linux como base
FROM node:18-alpine

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie os arquivos package.json e package-lock.json (ou yarn.lock) para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todos os arquivos do diretório atual para o diretório de trabalho no contêiner
COPY . .

# Execute o comando para construir o aplicativo React usando Vite
RUN npx vite build

# Exponha a porta 5000 do contêiner
EXPOSE 5000

# Comando para iniciar o aplicativo React
CMD ["npm", "run", "dev"]
