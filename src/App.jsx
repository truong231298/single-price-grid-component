export default function App() {
  return (
    <main className="min-h-screen flex justify-center items-center bg-LightGray">
      <section className="max-w-xl flex flex-col gap-4 rounded-lg bg-white mx-4 my-8">
        <div className="p-8">
          <h1 className="text-Cyan text-xl font-semibold mb-4">Join our community</h1>
          <h2 className="text-BrightYellow font-semibold mb-2">30-day, hassle-free money back guarantee</h2>
          <p className="text-GrayishBlue">Gain access to our full library of tutorials along with expert code reviews. 
  Perfect for any developers who are serious about honing their skills.</p>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="bg-Cyan sm:w-1/2 p-8 text-white">
            <h1 className="text-xl font-medium mb-2"> Monthly Subscription</h1>
            <span className="inline-flex gap-2 items-center"><p className="text-2xl text-white font-semibold">$29</p><p className="text-GrayishBlue">per month</p></span>
            <p className="text-sm">Full access for less than $1 a day</p>
            <button className="py-2 text-center bg-BrightYellow w-full mt-8 rounded-lg">Sign Up</button>
          </div>
          <div className="bg-blue-300 sm:w-1/2 p-8">
            <h1 className="text-xl text-white font-medium mb-2">Why Us</h1>
            <ul className="text-white">
              <li>Tutorials by industry experts</li>
              <li>Peer &amp; expert code review</li>
              <li>Coding exercises</li>
              <li>Access to our GitHub repos</li>
              <li>Community forum</li>
              <li>Flashcard decks</li>
              <li>New videos every week</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}