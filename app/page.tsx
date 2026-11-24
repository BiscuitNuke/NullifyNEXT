const idea = [
    { h: "Small networks get hit too", p: "Homes and small offices see the same scans and malware as big companies. They just don't have anyone watching." },
    { h: "Nobody reads the logs", p: "A small business won't hire a SOC. A home network has a router with a log nobody opens." },
    { h: "Learn normal, flag weird", p: "The idea: a box on your own network that learns what normal traffic looks like, and tells you when something isn't. On-premise. Your data stays home." },
];

const status = [
    { item: "The idea", state: "done", note: "Since 2020." },
    { item: "A network to test on", state: "done", note: "My homelab. Real devices, real traffic." },
    { item: "Collecting traffic data", state: "planned", note: "Flow logs from the lab first." },
    { item: "Detection model", state: "not started", note: "" },
    { item: "Product or company", state: "not now", note: "Maybe never. That's fine." },
];

const history = [
    { year: "2020", text: "NullifyOne starts. I pitch it like a startup: AI that stops network attacks." },
    { year: "2022", text: "First real site. Next.js, Bootstrap, and a GPT-3 chatbot named Luna." },
    { year: "2024", text: "NullifyNEXT. A slick rebuild on a template. It never shipped." },
    { year: "2026", text: "Rebooted as what it actually is: a research project I come back to." },
];

export default function Home() {
    return (
        <>
            <header className="top wrap">
                <a href="/" className="brand" aria-label="Nullify.one home">
                    <img src="/brand/wordmark.svg" alt="" width={148} height={30} />
                </a>
                <nav aria-label="Site">
                    <a href="#idea">Idea</a>
                    <a href="#status">Status</a>
                    <a href="#history">History</a>
                    <a href="#notes">Notes</a>
                </nav>
            </header>

            <main>
                <section className="hero wrap">
                    <h1>
                        <span className="struck">
                            Complicated
                        </span>{" "}
                        network security.
                    </h1>
                    <p className="lede">
                        Nullify is my research project on using machine learning to catch bad traffic on small networks. It&apos;s not a company. There&apos;s no product yet. Here&apos;s the idea, where it&apos;s at, and where it came from.
                    </p>
                </section>

                <section id="idea" className="wrap block">
                    <h2>The idea</h2>
                    <div className="cols">
                        {idea.map(i => (
                            <div key={i.h}>
                                <h3>{i.h}</h3>
                                <p>{i.p}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="status" className="wrap block">
                    <h2>Where it&apos;s at</h2>
                    <p className="sub">Honest version. No customers, no funding, no product.</p>
                    <ul className="status">
                        {status.map(s => (
                            <li key={s.item}>
                                <span className="what">{s.item}</span>
                                <span className={`tag t-${s.state.replace(/\s/g, "-")}`}>{s.state}</span>
                                <span className="note">{s.note}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section id="history" className="wrap block">
                    <h2>Where it came from</h2>
                    <p className="sub">It never became a company. It did get me into security for real. I study Computing Security at RIT now.</p>
                    <ol className="history">
                        {history.map(h => (
                            <li key={h.year}>
                                <span className="year">{h.year}</span>
                                <span>{h.text}</span>
                            </li>
                        ))}
                    </ol>
                </section>

                <section id="notes" className="wrap block">
                    <h2>Notes</h2>
                    <p className="empty">Nothing published yet. The first note will be about what normal traffic looks like on my lab network.</p>
                </section>
            </main>

            <footer className="foot wrap">
                <img src="/brand/icon.svg" alt="" width={36} height={36} />
                <p>Nullify.one is a side project by Kieran Wittstruck. <a href="https://ksw.dev/">ksw.dev</a> / <a href="https://github.com/BiscuitNuke">GitHub</a></p>
            </footer>
        </>
    );
}
