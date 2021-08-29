# MedFlyt Meetup 2021

This repository demonstrates how in MedFlyt maintain how we catch runtime errors in compilation time, by utilizing the eslint plugin [@medflyt/eslint-plugin-graphql-type-checker](https://www.npmjs.com/package/@medflyt/eslint-plugin-graphql-type-checker).

We start with a plain react component called PatientCard. And we have Additional PatientCard components that represents the steps it takes to catch our runtime errors during compilation time:

1. `PatientCard-1.tsx` is a plain react component that doesn't use the plugin.
2. `PatientCard-2.tsx` is like the previous component, but with our wrapper to trigger our eslint plugin.
3. `PatientCard-3.tsx` shows how TypeScript helps us each catch small typos that can ruin our production environment.
4. `PatientCard-4.tsx` is like the first react component, but with our type annotations and our fixes.
4. `PatientCard-5.tsx` shows how easy it is to get what we want without over-fetcing and under-fetching data.

### How to start
Simply run:

```
npm run dev
```

### How to play with it
Open `PatientCard.tsx` and follow the steps of `PatientCard-[number].tsx` above;


### Mocked data
In this example we use a mock provider of Apollo, but of course we are able to switch it with an actual server.