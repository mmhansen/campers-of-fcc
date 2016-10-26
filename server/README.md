# API docs

/*
 * User
 */
api/auth/login
.post
{
  email,
  password
}

api/auth/register
.post
{
  email,
  password,
  fistName,
  lastName
}

api/auth/user/? page=1 & limit=10
.get

api/auth/user/?id=12345
.delete

api/auth/user/?id=12345
.put


/*
 * Content
 */
