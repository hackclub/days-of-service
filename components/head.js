import Head from 'next/head'

export default function HeadObject({children}) {
    const title = "Day of Service - Hack Club";
    const description = "All the info about Hack Club's Day of Service initiative";
    const searchBarColor = "#ffffff"; // This is your Safari 15 Search Bar Color in Light Mode
    //const darkSearchBarColor = "#000000"; // This is your Safari 15 Search Bar Color in Dark Mode (optional)
    const keywords = "hackclub";
    const author = "Hack Club";
    const twitter = "@starthackclub";
    const url = "http://localhost:3000"; // This is your og:url or domain (optional but recommended)
    //const image = "/ogimage.png"; // This is your OpenGraph image
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta name="theme-color" content={searchBarColor} media="(prefers-color-scheme: light)" />
            {/* <meta name="theme-color" content={darkSearchBarColor} media="(prefers-color-scheme: dark)" /> */}
            {url ? <meta property="og:url" content={url} /> : ''}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {/* <meta property="og:image" content={image} /> */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={twitter} />
            <meta name="twitter:creator" content={twitter} />
            {/* Add analytics here */}
            {children}
        </Head>
    )
}
