# Tutorial followed for this:

https://blog.logrocket.com/build-graphql-react-app-typescript/

# Actual source code is:

https://github.com/treyhuffine/graphql-react-typescript-spacex

# Commands Used

npx create-react-app graphql-typescript-react --template typescript
cd graphql-typescript-react
yarn add @apollo/client graphql
yarn add -D @graphql-codegen/cli
npx graphql-codegen init

```
    c:\react\graphql-typescript-react>npx graphql-codegen init

        Welcome to GraphQL Code Generator!
        Answer few questions and we will setup everything for you.

    ? What type of application are you building? Application built with React
    ? Where is your schema?: (path or url) https://spacexdata.herokuapp.com/graphql
    ? Where are your operations and fragments?: ./src/components/**/*.{ts,tsx}
    ? Pick plugins: TypeScript (required by other typescript plugins), TypeScript Operations (operations and fragments),
    TypeScript React Apollo (typed components and HOCs)
    ? Where to write the output: src/generated/graphql.tsx
    ? Do you want to generate an introspection file? No
    ? How to name the config file? codegen.yml
    ? What script in package.json should run the codegen? codegen
    Fetching latest versions of selected plugins...

    Config file generated at codegen.yml

      $ npm install

    To install the plugins.

      $ npm run codegen

    To run GraphQL Code Generator.
```

yarn
yarn codegen
