### Gradient Investor 

Project for analysing and building custom stock trading robots.  
Read more about tech stack in each folder. 

## Innhold 
- [Set Up Locally](#setup-locally)
- [Docker](#docker)

## Setup Locally

Frontend is initialized as a react and typescript project with "npm create vite@latest". 

**2. Clone project**
```bash
C:\Users\user\folder>git clone <link>
```

**3. Splt terminal and navigate to folders**
 
```bash
C:\Users\user\folder>project>stock-typescript>
```
 
```bash
C:\Users\user\folder>project>flask-server>
```

**4. Create enviorment and install packages**
 
```bash
C:\Users\user\folder>project>stock-typescript>npm install
``` 

```bash
C:\Users\user\folder>project>flask-server>python -m venv <virtual-environment-name>
C:\Users\user\folder>project>flask-server>source env/bin/activate

Windows:
 env/Scripts/activate.bat //In CMD
 env/Scripts/Activate.ps1 //In Powershel

C:\Users\user\folder>project>flask-server>pip install -r requirements.txt
```

**5. Run project**

```bash
C:\Users\user\folder>project>stock-typescript>npm run dev
``` 

```bash
(env) C:\Users\user\folder>project>flask-server>python server.py
```

## Setup Docker

