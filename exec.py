import os 

cwd = str(os.getcwd()) 
flask = cwd+"\BackEnd\main.py"
node = cwd+"\\frontend"

def startnode():
    os.chdir(node)
    os.system("npm start")
    return('done')

def serveflask():
    os.system(f'python {flask}')
    return('done')

startnode()
serveflask()