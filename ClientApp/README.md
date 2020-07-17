This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and uses `npm` for package management

C# Backend

Step 1: Creating a migration for our class (this info was found in sdg handbook fo full stack app in the very beginning)

- create classes in our models folder
- Specifically we will need a user class which will consist of:
  - public int Id { get; set; } (i dont know if we neeed this one)
  - public string ApiKey { get; set; }
  - public int XboxUserId { get; set; }

Step 2: let EF core know about it

- public DbSet<User> Users { get; set; }
- dotnet build
- dotnet ef migrations add AddUser
- dotnet ef database update
- dotnet aspnet-codegenerator controller --model User -name UsersController --useAsyncActions -api --dataContext DatabaseContext --relativeFolderPath Controllers

day 4 video is user log in
time: 30 mins into video

step 3:
