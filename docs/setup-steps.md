
# GUIDE \_\_ SETUP


## Setup

1. start project by Nextjs __ use TypeScript, tailwindcss
2. setup & fine tune
    - layout
    - ESLint
    - Store by Redux Toolkit, Redux Saga, ...
    - add some utils, UI libraries
3. read requirements and start coding

## Structure

```

----------------------        ----------------------
|                    |    →	  |                    |
|        View        |        |       Store        |
|                    |    ←   |                    |
----------------------        ----------------------

```

## Structure Detail

- app
- config
- rtk-slices
- **shared**: contains all stuff that is reusable, and standalone. (can develop it to separate packages)




--- START draf

There are three main parts: store, view and shared.
- **store**: follow its own structure, depends on State Management library.
-
- **view**: Focus Here!
Make it simple for scalable applications. (the best is split into as many various independent of business logic that can reuse as possible)

--- END draf


## Troubleshooting

- **nvm**: allows you to easily use desired version of Node.js that be compatible with Nextjs verison



## References

- [Clean code](https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29)
