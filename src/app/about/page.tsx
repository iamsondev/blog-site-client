export default async function AboutPage() {
  await new Promise((resolve) => setInterval(resolve, 3000));
  throw new Error("Something went wrong");
  return (
    <div>
      <h1>This is About page component</h1>
    </div>
  );
}
