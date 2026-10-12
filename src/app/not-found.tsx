import Link from 'next/link';
export default function NotFound() { return <main id="main-content" className="container-shell py-32"><p className="eyebrow text-accent">404 / PAGE NOT FOUND</p><h1 className="section-title mt-6">A little off the path.</h1><p className="my-7 text-muted">The page you’re looking for isn’t here.</p><Link href="/" className="button-primary">Back to home</Link></main>; }
