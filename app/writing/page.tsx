export default function WritingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Creative Writing
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight">
          Creative Writing
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700">
          This space brings together creative writing, essays, reflections,
          and experimental notes on digital society, identity, memory,
          technology, fashion, and human experience.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border p-6">
            <p className="text-sm text-gray-500">Essay</p>
            <h2 className="mt-2 text-2xl font-semibold">
              Notes on Digital Life
            </h2>
            <p className="mt-3 text-gray-700">
              Reflections on platforms, algorithms, attention, and everyday
              human experience.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}