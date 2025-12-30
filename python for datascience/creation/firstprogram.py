def resembles(a, b):
    a = a.lower()
    b = b.lower()
    common = set(a) & set(b)
    score = len(common) / max(len(set(a)), len(set(b)))
    return score >= 0.7   # threshold

def admin():
    print("Realm initating its emergence!")
    par1=input("which day is it boss!")
    days=["sunday","monday","tuesday","wednesday","thursday","friday"]
    for day in days:
        if(resembles(par1,day)):
            print(f"so it was:",day)
def guest():
    print("enter ur purpose of visit:")

def main():
    import numpy as np
    print("enter ur name:")
    x=input()
    if(x=="rabin"):
        print("welcome boss!")
        admin()
    else:
        print("welcome sir!")
        guest()

if __name__=="__main__":
    main()