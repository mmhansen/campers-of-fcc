# API docs

- [x] login  
- [x] register  
- [x] get users  
- [x] delete user  
- [x] switch user role  

- [x] get approved content  
- [x] get pending content  
- [x] save new story  
- [x] delete story  
- [x] approve story  
- [x] update story  

```
/*
 * User
 */  

api/auth/login
.post
{
  email, password
}

api/auth/register
.post
{
  email, password, fistName, lastName
}

api/auth/user/? page=1 & limit=10
.get

api/auth/user/?id=12345
.delete

api/auth/user/?id=12345
.put
```


```
/*
 * Content
 */  

api/content/count
.get

api/content/? page=1 & limit=10 & status=Approved
.get

api/content
.post
{
  title, body, image, postedBy
}

api/admin/? id=12345
.delete

api/admin/? id=12345
.put

api/admin/?id=12345
.post
{
  title, body, image
}
```
