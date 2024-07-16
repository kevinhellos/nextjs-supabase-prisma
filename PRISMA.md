# Prisma command

## Setup Prisma
Install from npm.
```sh
npm install @prisma/client
```

## Initialise Prisma
```sh
npx prisma init
```
This will create a <code>prisma/schema.prisma</code> and add <br>
<code>DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"</code> into our .env file

## Paste connection string
Go to your database provider admin console and get the connection string. "postgresql..." and paste it into the <b>DATABASE_URL</b> env
``` js
// Example
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?"
```
## Write your data model in schema.prisma
Example:
```prisma
model User {
  id      Int      @id @default(autoincrement())
  email   String   @unique
  name    String?
}
```

## Applying migration
init can be anything - it's just a name (or call it v1)
```sh
npx prisma migrate dev --name init
```

### Migration completed
Once the console appears "Your database is now in sync with your schema". Your database noe has been synced with Prisma.

## Check for unexpected error
Run npx prisma generate and check console for error logs. If no errors, good. Else, redo from start.
```sh
npx prisma generate
```