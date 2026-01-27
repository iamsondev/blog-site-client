export default async function AboutPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div>
      <h1>This is About page component</h1>
    </div>
  );
}
