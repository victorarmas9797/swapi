# SWAPI Integration

Integracion de la API pública SWAPI, con Serverless + NodeJS + AWS (DynamoDB, API Gateway, Lambda) .


### Pre-requisitos 📋

Contar con un usuario en AWS con los permisos mínimos necesarios:

```
AWSLambdaFullAccess

IAMFullAccess

AmazonS3FullAccess

AmazonAPIGatewayInvokeFullAccess

AmazonAPIGatewayPushToCloudWatchLogs

CloudWatchLogsFullAccess

AmazonAPIGatewayAdministrator

AWSCloudFormationFullAccess
```

Contar con NPM instalado en la PC. De no ser así, seguir las instrucciones de la web oficial: https://www.npmjs.com/get-npm

Contar con aws-cli instalado. De no ser así, seguir las instrucciones de la web oficial: https://aws.amazon.com/es/cli/

Configurar el usuario de AWS en la PC donde se deployará el proyecto. Para ello, abrir una consola y ejecutar: 

```
aws configure
```

E indicar las credenciales del usuario.

### Instalación 🔧

Clonar el presente repositorio.

Desde una consola, ejecutar

```
git clone https://github.com/victorarmas9797/swapi.git
```

Para obtener las dependencias de NodeJS, desde la consola dirigirse a la ruta del proyecto clonado: src/app, y ejecutar

```
npm install --production
```

Una vez finalizado, de requerirse se puede cambiar la configuración del archivo serverless.yml, en el cual se puede indicar la información del deploy, por ejemplo la región de AWS donde deployará, así como la información del Lambda.


## Despliegue 📦

Desde una consola, en la ruta del proyecto src/app, ejecutar el comando:  

```
serverless deploy
```

Una vez finalizado, se habrá creado el servicio Lambda, y se estará ejecutando en los endpoints indicados al finalizar el deploy.
