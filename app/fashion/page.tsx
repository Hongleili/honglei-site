export default function FashionPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Fashion & Visual Work
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight">
          Fashion & Visual Work
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700">
          This space presents fashion shooting, visual experiments, editorial
          concepts, and image-based creative work exploring identity,
          aesthetics, self-expression, and contemporary digital culture.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border p-6">
            <p className="text-sm text-gray-500">Editorial</p>
            <h2 className="mt-2 text-2xl font-semibold">
              Editorial Shoots
            </h2>
            <p className="mt-3 text-gray-700">
              Fashion-inspired visual narratives combining styling,
              composition, mood, and storytelling.
            </p>
          </article>

          <article className="rounded-2xl border p-6">
            <p className="text-sm text-gray-500">Portrait</p>
            <h2 className="mt-2 text-2xl font-semibold">
              Portrait & Identity
            </h2>
            <p className="mt-3 text-gray-700">
              Portrait-based visual work exploring self-image, presence,
              confidence, and personal identity.
            </p>
          </article>

          <article className="rounded-2xl border p-6">
            <p className="text-sm text-gray-500">Experiment</p>
            <h2 className="mt-2 text-2xl font-semibold">
              AI, Fashion & Aesthetics
            </h2>
            <p className="mt-3 text-gray-700">
              Experimental visual concepts at the intersection of fashion,
              artificial intelligence, and digital culture.
            </p>
          </article>
        </div>

        <div className="mt-16 rounded-2xl border bg-gray-50 p-8">
          <h2 className="text-2xl font-semibold">Gallery Coming Soon</h2>
          <p className="mt-3 text-gray-700">
            Selected fashion images and visual projects will be added here.
          </p>
        </div>
      </section>
    </main>
  );
}