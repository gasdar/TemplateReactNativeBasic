### Create a New React Native Proyect
1. App Mucho más Estructurada:
``npx create-expo-app@latest``

2. App con Estructura Básica:
``npx create-expo-app@latest nombre-app --template blank``

### Ejecutar React Native App (Debes Estar en la Ruta de la App)

1. Ver Opciones habilitadas para Ejecutar App:
``npm start``

2. Ejecutar Opción Específica:
```
npm run web
npm run android
npm run ios
```

### Instalar 'nvm' para Movilizarse Rapidamente entre las Versiones de Node con 'Terminal Bash'
0. Se Debe Tener Instalado 'node':
``node --version``
``npm --version``

1. Instalación:
``curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash``

2. Actualización de Versión más Reciente:
``curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash upgrade_existing``

3. Tip: Puedes personalizar la configuración de nvm creando un archivo .nvmrc en la raíz de tus proyectos para especificar la versión de Node.js que deseas utilizar.

4. Verificar Versiones:
``nvm --version``

5. Instalar y Usar Version:
``nvm install 16``
``nvm use 16``

6. Listar Todas las Versiones de Node:
``nvm list``

7. Conoce la Versión Actual de Node que Estás Utilizando:
``node -v``

8. Establecer una Versión por Defecto (Ejemplo la Versión 16) & Conocer Versión Integrado por Defecto:
``nvm alias default 16``
``nvm current``


9. Otros Comandos de 'nvm':
```
  nvm install 8.0.0                     Install a specific version number
  nvm use 8.0                           Use the latest available 8.0.x release
  nvm run 6.10.3 app.js                 Run app.js using node 6.10.3
  nvm exec 4.8.3 node app.js            Run `node app.js` with the PATH pointing to node 4.8.3
  nvm alias default 8.1.0               Set default node version on a shell
  nvm alias default node                Always default to the latest available node version on a shell

  nvm install node                      Install the latest available version
  nvm use node                          Use the latest version
  nvm install --lts                     Install the latest LTS version
  nvm use --lts                         Use the latest LTS version

  nvm set-colors cgYmW                  Set text colors to cyan, green, bold yellow, magenta, and white
```

### Agregar una Versión Específica de Node a la App
1. Agregar en la Raíz del proyecto el archivo '.nvmrc', y adentro de este el valor de la versión de node a utilizar.

### Instalar Exp con Node
1. Instalar:
``npm install -g expo-cli``
``expo --version``

2. Desinstalar:
``npm uninstall -g expo-cli``

### Habilitar App para la Web
``npx expo install react-dom react-native-web @expo/metro-runtime``


### Refresca la Carpeta '/app' del Proyecto
``npm run reset-project``