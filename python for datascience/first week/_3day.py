#method 1
# from _2module import sInterest, cInterest

# p=100
# t=2
# r=24
# print(f'simpleInterest is {sInterest(p,t,r):.3f}')

#method 2
# from _3module import *
# p=100
# t=2
# r=24
# print(f'simpleInterest is {sInterest(p,t,r):.3f}')

#method 3
import _3module as m
from _3module import *
p=100
t=2
r=24
print(f'simpleInterest is {m.sInterest(p,t,r):.3f}')