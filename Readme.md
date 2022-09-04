## API Find-Connection

API Backend application for connect you with friend have skill according to the field you want. 
You can get mentor and friend for learn the skill you are working on. Beside you get mentor or friend, you can see information about company and training like bootcamp what you want to find

## Entity

- User
- Mentor
- Admin

## Feature Requirement

### User

- Login
- Register
- Show List Mentor [query: all | match skill]
- Show Detail Personal information Mentor and Other User
- Show List Information about Company and Bootcamp/Training [query: all | match skill]
- Create Membership [gold]
- Join Group
- Consultation with Mentor [free | paid]
- Chat Personal Other User 
- Search Mentor or Other User
- Follow Mentor or other User
- Show Profil
- Update Profil
- Change Password

### Mentor

- Login
- Register
- Show List Mentor [query: all | match skill]
- Show Detail Personal information Mentor and Other User
- Create Information about Company and Bootcamp/Training
- Show List Information about Company and Bootcamp/Training [query: all | match skill]
- Create Group
- Search Mentor or Other User
- Follow Mentor or other User
- Show Profil
- Update Profil
- Change Password

## API Spec

### Login

Request :
- Method : POST
- Endpoint : `./api/user/login`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json
{
    "email": "string"
    "password": "string"
}
```

- Response :

```json
{
    "status": "string"
    "message": "string"
    "token": "string"
}
```