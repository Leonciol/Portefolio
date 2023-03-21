import random

def afficher(T,c,l):
    for j in range(l):
        straff=""
        for i in range(c):
            if T[i][j] == " ":
                straff = straff + "\x1B[32m-\x1B[0m" + " "
            else:
                straff = straff + "\x1B[32m-\x1B[0m" + "\x1B[34m"+str(T[i][j])+"\x1B[0m"
        print(straff)


def init(T,c,l):
    a=1
    for j in range(l):
        for i in range(c):
            if j+1 == l and i+1 == c:
                T[i][j] = " "
            else:
                T[i][j] = T[i][j] + a
                a = a+1


def permute(T, a1, b1, a2, b2):
    T[a1][b1], T[a2][b2] = T[a2][b2], T[a1][b1]
    return T


def melanger(T, c, l, nbrDePermut):
    n=0
    while n != nbrDePermut:
        a = random.randint(0, l-1)
        b = random.randint(0, l-1)
        e = random.randint(0, c-1)
        d = random.randint(0, c-1)
        permute(T, a, e, b, d)
        n=n+1

def trouverVide (T, c, l):
    for j in range(l):
        for i in range(c):
            if T[i][j] == " ":
                return i, j

def EstEnOrdre (T, c, l):
    Ref=[[0]*c for i in range(l)]
    init(Ref,c,l)
    if Ref == T:
        return True
    else:
        return False

colonne = int(input("insérer le nombre pour le pousse pousse: "))
ligne = colonne
Tab = [[0]*colonne for i in range(ligne)]

print("Tableau avant:")
afficher(Tab, colonne, ligne)
init(Tab,colonne,ligne)
print("Tableau après l'appel de la fonction\x1b[1;31m init\x1b[0;0m :")
afficher(Tab,colonne,ligne)
melanger(Tab,colonne,ligne,50)
print("Et un fois mélangé grâce a la fonction\x1b[1;31m mélanger\x1b[0;0m :")
afficher(Tab, colonne, ligne)




Play = True
print("A vous de jouer")
while Play == True:
    x, y = trouverVide(Tab, colonne, ligne)
    px, py = x, y
    choix = input("direction: ")
    if choix == "8":
        if y != 0:
            px = x
            py = y-1
        else:
            print("vous ne pouvez pas aller par là")
    if choix == "2":
        if y != ligne-1:
            px = x
            py = y+1
        else:
            print("vous ne pouvez pas aller par là")
    if choix == "4":
        if x != 0:
            px = x-1
            py = y
        else:
            print("vous ne pouvez pas aller par là")
    if choix == "6":
        if x != colonne-1:
            px = x+1
            py = y
        else:
            print("vous ne pouvez pas aller par là")
    if choix == "x":
        Play = False
    permute(Tab, x, y, px, py)
    afficher(Tab, colonne, ligne)
    if EstEnOrdre(Tab, colonne, ligne) == True:
        print("Félicitation vous avez gagné !!!")
        Play = False


