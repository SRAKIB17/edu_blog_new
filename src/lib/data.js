export async function getData() {
    let res = await fetch('https://prog-learn.vercel.app/9b836a9c57a91ce7805cc6a0/cdn/e6df72-9b836a9c57a91ce7805cc6a0');
    return res.json();
}