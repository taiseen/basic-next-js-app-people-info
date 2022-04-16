03-Jun-2021 <br/>
16-Apr-2022 ==> package update + code refactor...

## People List - Info

# Basic NextJs App | [ `Live Link` ](https://basic-next-js-app-people-info.vercel.app)

### Create it Just For Learning Purpose.

## Learning Context:

* CSS style object Destructuring
* Head component > title + meta (For SEO)
* use of `jsonplaceholder` api for data fetching
* &#x3C; Link href=&#x22; /&#x22; &#x3E; &#x3C; a&#x3E; Back to home.  &#x3C; /a&#x3E; &#x3C; /Link&#x3E; 
* File Base Routing
* File Base Dynamic Routing
* Programmatically Routing
* using of SSG - `Static Site Generation`
    - `getStaticProps` [ async / await ]
    - `getStaticProps` (context) [ async / await ]
    - `getStaticPaths` [ async / await ]

(Server) server-side renders at runtime ( uses getInitialProps or `getServerSideProps` ) <br/>
(Static) automatically rendered as static HTML ( uses no initial props) <br/>
(SSG) automatically generated as static HTML + JSON ( uses `getStaticProps` ) <br/>
(ISR) incremental static regeneration ( uses `revalidate` in `getStaticProps` ) <br/>

```
(SSR) ==> Server Side Rendering
(SSG) ==> Static Site Generation 
(ISR) ==> Incremental Static Regeneration
```

## Getting Started

First, run the development server:

```
yarn dev
```
