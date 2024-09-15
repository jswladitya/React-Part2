***Summary 

1. start karte he store banane se ya store conigure karne se , har app kaek hi store hota he jise kehte he single source of truth

2. ab us configured store me saare reducer introduce karna he kyuki store ke ander jab bhi values update hogi wo har tarah se update nahi leta he toh iske lie store ko reducer ki list ka pata hona chahiye

3. yaha ham features ko slice bol rah he toh hamne banaya slice using 3 major things ie.., name, initialState mtlb ki bydefault kaisa hona chaiye, reducers ki list mtlb functionalities

4. state ke ander updated state value in the store milta he aur action ke ander action.payload

4. phir ek todo banaya aur action.payload ke use krke values nikal li jo bhi text tha & phir state ander values push kardia ya update kardia

5. phir individual functionality export bhi karna padta he & reducer ka main source export karna padta he


***components

1. addTodo ke ander values bhejni he store ko state update karne ke lia, addTodo reducer bhejna he use importkia dispatch ke through bhej dia store ko

2. ab values leni kaise he bheji hui values so uske lie use hota he useSelector , ab uske ander bheji hui updated state ka access leke usme se jo bhi pick karna he pick karlo


