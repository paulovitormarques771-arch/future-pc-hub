import { createFileRoute } from "@tanstack/react-router";
import heroTower from "@/assets/hero-tower.jpg";
import towerCore from "@/assets/tower-core.jpg";
import towerForge from "@/assets/tower-forge.jpg";
import towerTitan from "@/assets/tower-titan.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AXIOM — Computadores de Alta Performance" },
      {
        name: "description",
        content:
          "Torres de precisão com vidro temperado e metal escovado. Montagem certificada, teste de 72h e garantia de 3 anos. Configure sua máquina AXIOM.",
      },
      { property: "og:title", content: "AXIOM — Computadores de Alta Performance" },
      {
        property: "og:description",
        content:
          "Torres de precisão com vidro temperado e metal escovado. Especificações sem concessão.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const towers = [
  {
    name: "AXIOM CORE",
    tag: "Uso geral",
    cpu: "R7",
    gpu: "4060",
    ram: "16G",
    price: "R$ 6.499",
    image: towerCore,
    alt: "Gabinete compacto AXIOM Core preto fosco com faixa de LED verde",
  },
  {
    name: "AXIOM FORGE",
    tag: "Gaming",
    cpu: "R9",
    gpu: "4070",
    ram: "32G",
    price: "R$ 11.299",
    image: towerForge,
    alt: "Torre gamer AXIOM Forge com painel de vidro temperado e ventoinhas verdes",
  },
  {
    name: "AXIOM TITAN",
    tag: "Estúdio",
    cpu: "X9",
    gpu: "4090",
    ram: "64G",
    price: "R$ 24.900",
    image: towerTitan,
    alt: "Torre full-tower AXIOM Titan em alumínio escovado com dupla câmara",
  },
];

const differentials = [
  {
    num: "01",
    title: "Vidro temperado",
    text: "Painel lateral de 4mm que revela cada componente sem abrir a torre.",
  },
  {
    num: "02",
    title: "Fluxo silencioso",
    text: "Câmaras de ar isoladas mantêm 32 dB sob carga total.",
  },
  {
    num: "03",
    title: "Upgrade sem ferramentas",
    text: "Travas de encaixe para RAM, GPU e SSD em segundos.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-void font-body text-bone antialiased">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-void/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="font-display text-2xl tracking-tight">
            AXIOM<span className="text-volt">.</span>
          </span>
          <div className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-[0.18em] text-frost md:flex">
            <a href="#torres" className="transition-colors hover:text-bone">
              Torres
            </a>
            <a href="#diferenciais" className="transition-colors hover:text-bone">
              Diferenciais
            </a>
            <a href="#comprar" className="transition-colors hover:text-bone">
              Suporte
            </a>
          </div>
          <a
            href="#comprar"
            className="rounded-full bg-volt px-5 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-void transition hover:bg-volt/80"
          >
            Comprar
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden border-b border-white/5">
        <div className="glow pointer-events-none absolute -top-24 left-1/3 h-[520px] w-[520px] rounded-full bg-volt/20 blur-[120px]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-steel/40 via-void to-void" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2">
          <div>
            <span className="sig inline-block rounded-full border border-volt/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-volt">
              Geração 04 · Pronta entrega
            </span>
            <h1 className="sig mt-6 font-display text-6xl leading-[0.92] tracking-tight md:text-8xl">
              LIGUE
              <br />A BESTA
            </h1>
            <p className="sig mt-6 max-w-[38ch] text-pretty text-frost" style={{ animationDelay: "80ms" }}>
              Torres de precisão com vidro temperado e metal escovado. LEDs
              despertam no primeiro toque. Especificações sem concessão.
            </p>
            <div className="sig mt-8 flex flex-wrap gap-3" style={{ animationDelay: "160ms" }}>
              <a
                href="#torres"
                className="rounded-full bg-volt px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-void transition hover:bg-volt/80"
              >
                Configurar torre
              </a>
              <a
                href="#diferenciais"
                className="rounded-full border border-white/15 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.14em] text-frost transition hover:border-white/40 hover:text-bone"
              >
                Ver specs
              </a>
            </div>
          </div>
          <div className="sig relative" style={{ animationDelay: "120ms" }}>
            <div className="pointer-events-none absolute inset-0 rounded-[min(2vw,20px)] bg-volt/10 blur-2xl" />
            <img
              src={heroTower}
              alt="Torre AXIOM em metal escovado com vidro temperado e LEDs verdes acesos"
              width={1024}
              height={1024}
              className="relative aspect-square w-full rounded-[min(2vw,20px)] object-cover outline outline-1 -outline-offset-1 outline-white/5"
            />
          </div>
        </div>
      </header>

      {/* Torres em destaque */}
      <section id="torres" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-3xl tracking-tight md:text-4xl">
            TORRES EM DESTAQUE
          </h2>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-frost">
            03 modelos
          </span>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {towers.map((tower) => (
            <article
              key={tower.name}
              className="group relative overflow-hidden rounded-[min(2vw,16px)] border border-white/5 bg-carbon transition hover:border-volt/40"
            >
              <div className="absolute -right-10 top-0 h-full w-24 skew-x-[18deg] bg-volt/10 transition group-hover:translate-x-3" />
              <img
                src={tower.image}
                alt={tower.alt}
                width={1024}
                height={1024}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover outline outline-1 -outline-offset-1 outline-white/5"
              />
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <span className="led h-2 w-2 rounded-full bg-volt" />
                  <h3 className="font-display text-xl tracking-tight">{tower.name}</h3>
                </div>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-frost">
                  {tower.tag}
                </p>
                <div className="mt-3 grid grid-cols-3 gap-2 font-mono text-[10px] uppercase tracking-wider text-frost">
                  <div className="rounded bg-glass/60 p-2">
                    <div className="text-bone">{tower.cpu}</div>CPU
                  </div>
                  <div className="rounded bg-glass/60 p-2">
                    <div className="text-bone">{tower.gpu}</div>GPU
                  </div>
                  <div className="rounded bg-glass/60 p-2">
                    <div className="text-bone">{tower.ram}</div>RAM
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-mono text-lg text-bone">{tower.price}</span>
                  <a
                    href="#comprar"
                    className="rounded-full border border-volt/40 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-volt transition hover:bg-volt hover:text-void"
                  >
                    Comprar
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="scroll-mt-20 border-y border-white/5 bg-carbon">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-3">
          {differentials.map((item) => (
            <div key={item.num} className="flex gap-4">
              <span className="font-mono text-sm text-volt">{item.num}</span>
              <div>
                <h3 className="font-display text-lg tracking-tight">{item.title}</h3>
                <p className="mt-1 text-sm text-frost">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section id="comprar" className="relative scroll-mt-20 overflow-hidden">
        <div className="glow pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-volt/15 blur-[110px]" />
        <div className="relative mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="font-display text-4xl tracking-tight md:text-5xl">
            PRONTA PARA LIGAR.
          </h2>
          <p className="mx-auto mt-4 max-w-[40ch] text-frost">
            Frete expresso em 48h e garantia de 3 anos em todas as torres AXIOM.
          </p>
          <a
            href="#torres"
            className="mt-8 inline-block rounded-full bg-volt px-10 py-4 font-mono text-sm font-semibold uppercase tracking-[0.14em] text-void transition hover:bg-volt/80"
          >
            Montar minha torre
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
          <span className="font-display text-xl">
            AXIOM<span className="text-volt">.</span>
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-frost">
            © 2026 Axiom Hardware
          </span>
          <div className="flex gap-5 font-mono text-[11px] uppercase tracking-[0.14em] text-frost">
            <a href="#" className="transition-colors hover:text-bone">
              Instagram
            </a>
            <a href="#" className="transition-colors hover:text-bone">
              YouTube
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
