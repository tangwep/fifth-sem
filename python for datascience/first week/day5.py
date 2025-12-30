import pdb
x=[1,2,3,4,5]
def fact(n):
    f=1
    for i in range(1,n+1):
        f=f*i
    return f
pdb.set_trace() #progarm pauses here
fact(5)

