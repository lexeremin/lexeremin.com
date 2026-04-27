import { notFound } from "next/navigation"
import { Calendar, Clock, Tag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

const post = {
  id: "how-to-learn-korean-in-2024",
  title: "How to Learn Korean in 2024",
  excerpt:
    "A practical guide to learning Korean with immersion, Anki, grammar resources, and a setup that stays realistic over the long run.",
  category: "Languages",
  readTime: "24 min read",
  date: "2024-02-29",
  author: "Aleksandr Eremin",
  image: "/images/blog-korean-2024.webp",
  tags: ["Korean", "Language Learning", "Anki", "Immersion"],
}

const ankiSetupImages = [
  { name: "Screenshot_2024-02-29_at_21.16.07.webp", maxWidth: "max-w-sm" },
  { name: "Screenshot_2024-02-29_at_21.16.58.webp", maxWidth: "max-w-lg" },
  { name: "Screenshot_2024-02-29_at_21.20.16.webp", maxWidth: "max-w-md" },
  { name: "Screenshot_2024-02-29_at_21.22.24.webp", maxWidth: "max-w-4xl" },
  { name: "Screenshot_2024-02-29_at_21.25.46.webp", maxWidth: "max-w-3xl" },
  { name: "Screenshot_2024-02-29_at_21.29.51.webp", maxWidth: "max-w-3xl" },
  { name: "Screenshot_2024-02-29_at_21.35.07.webp", maxWidth: "max-w-md" },
  { name: "Screenshot_2024-02-29_at_21.51.39.webp", maxWidth: "max-w-4xl" },
]

const typingImages = [
  { name: "Screenshot_2024-03-01_at_01.45.28.webp", maxWidth: "max-w-4xl" },
  { name: "Screenshot_2024-03-01_at_01.51.48.webp", maxWidth: "max-w-3xl" },
  { name: "Screenshot_2024-03-01_at_01.54.00.webp", maxWidth: "max-w-3xl" },
  { name: "Screenshot_2024-03-01_at_01.56.26.webp", maxWidth: "max-w-4xl" },
]

function ArticleImage({ name, maxWidth, alt }: { name: string; maxWidth: string; alt: string }) {
  return (
    <div className={`mx-auto w-full ${maxWidth}`}>
      <div className="rounded-xl overflow-hidden border border-serika-sub-alt shadow-soft bg-serika-sub-alt">
        <Image
          src={`/images/blog-korean-2024-notion/${name}`}
          alt={alt}
          width={1600}
          height={900}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  )
}

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params

  if (resolvedParams.id !== post.id) {
    notFound()
  }

  return (
    <div className="min-h-screen transition-colors duration-300 bg-serika-bg text-serika-text">
      <Navbar />

      <article className="pt-32 md:pt-48 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <header className="mb-8 sm:mb-12">
          <div className="flex flex-wrap items-center gap-3 text-sm sm:text-base text-serika-sub mb-4 sm:mb-6">
            <span className="px-2 py-1 rounded-md bg-serika-sub-alt text-serika-sub">{post.category}</span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString()}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-serika-main mb-4 sm:mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-lg sm:text-xl text-serika-sub leading-relaxed">{post.excerpt}</p>
        </header>

        <div className="mb-8 sm:mb-12">
          <Image
            src={post.image}
            alt={post.title}
            width={1280}
            height={1280}
            className="w-full h-auto object-cover rounded-xl border border-serika-sub-alt shadow-soft"
          />
        </div>

        <div className="space-y-10 sm:space-y-12">
          <section className="space-y-5">
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-serika-text">Approach for language learning (that I use)</h2>
            <p className="text-lg leading-relaxed text-serika-sub">
              Korean is not the easiest language in the world, that is why learning it the normal way usually does not
              work very well. There is simply too much grammar, too many exceptions, and too many ways to burn out if
              you approach it like a checklist.
            </p>
            <p className="text-lg leading-relaxed text-serika-sub">
              The best way to learn a language that is quite different from the one you already know is to use Mass
              Immersion Approach, or at least an immersion-first mindset close to it. I am not going to reinvent the
              wheel here, so before anything else I strongly recommend reading the early Refold roadmap, especially
              Stage 0 and Stage 1.
            </p>
            <div className="rounded-xl bg-serika-sub-alt p-5 shadow-soft space-y-3">
              <p className="text-serika-text font-bold">Before you continue, make sure you:</p>
              <ol className="list-decimal pl-5 space-y-2 text-serika-sub">
                <li>Read the article.</li>
                <li>Install Anki.</li>
                <li>Create a fresh YouTube account that only follows Korean channels.</li>
              </ol>
              <a
                href="https://refold.la/roadmap/"
                target="_blank"
                rel="noreferrer"
                className="inline-block text-serika-main hover:text-serika-main-hover transition-colors"
              >
                Roadmap | Refold
              </a>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-serika-text">Learning the building blocks</h2>
            <p className="text-lg leading-relaxed text-serika-sub">
              First you need to learn the Korean alphabet, 한글. The alphabet itself is not hard, but the language has
              several unfamiliar sounds, especially for native English speakers, and some consonants that can feel
              deceptively similar at first.
            </p>
            <p className="text-lg leading-relaxed text-serika-sub">
              I think the proper way to learn the alphabet and sounds is through video. You need to hear how people
              pronounce things, compare subtle differences, and build that ear early.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg text-serika-sub">
              <li>
                <a href="https://www.youtube.com/watch?v=85qJXvyFrIc&list=PLECz2rpRD3Z0EeOU0z3aoafwgjHyth7MN&index=2" target="_blank" rel="noreferrer" className="text-serika-main hover:text-serika-main-hover transition-colors">
                  Learn Hangul 한글 (Korean Alphabet) in 30 minutes
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=U49SJ-evntU&list=PLbFrQnW0BNMUkAFj4MjYauXBPtO3I9O_k&index=2" target="_blank" rel="noreferrer" className="text-serika-main hover:text-serika-main-hover transition-colors">
                  Billy Go’s Beginner Korean Course | Intro to 한글
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=-XVuVmunHRY&list=PLr4GXI4JFWyu7eQfLTFhh0EvJCFvkTMlD" target="_blank" rel="noreferrer" className="text-serika-main hover:text-serika-main-hover transition-colors">
                  Hanguel (Part 1) | How to read Korean
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=TVqJbiSLw-E&list=PLlmgeS8moU5hBeZG8_apQjWJ-yWq-1DLT" target="_blank" rel="noreferrer" className="text-serika-main hover:text-serika-main-hover transition-colors">
                  Korean Pronunciation, Video 1
                </a>
              </li>
            </ul>
            <p className="text-lg leading-relaxed text-serika-sub">
              These are playlists, but for now you only need the Hangul and pronunciation parts. Check at least two of
              them and keep the channels you like for later grammar study.
            </p>
            <p className="text-lg leading-relaxed text-serika-sub">
              Once you know the alphabet and basic pronunciation, start applying SRS. One of the best things you can do
              early is train your ear on subtle sound differences.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg text-serika-sub">
              <li>
                <a href="https://ankiweb.net/shared/info/1244430213" target="_blank" rel="noreferrer" className="text-serika-main hover:text-serika-main-hover transition-colors">
                  Korean pronunciation deck for subtle sound differences
                </a>
              </li>
            </ul>
            <Card className="rounded-xl bg-serika-sub-alt border border-serika-sub-alt shadow-soft">
              <CardContent className="p-5 space-y-3">
                <h3 className="font-serif text-xl font-black text-serika-text">Optional Anki add-ons I recommend</h3>
                <ul className="list-disc pl-6 space-y-2 text-serika-sub">
                  <li><a href="https://ankiweb.net/shared/info/1336389630" target="_blank" rel="noreferrer" className="text-serika-main hover:text-serika-main-hover transition-colors">Korean Support</a> for automatic field filling, sound, and hanja.</li>
                  <li><a href="https://ankiweb.net/shared/info/111623432" target="_blank" rel="noreferrer" className="text-serika-main hover:text-serika-main-hover transition-colors">Sound Generating</a> for adding audio to decks.</li>
                  <li><a href="https://ankiweb.net/shared/info/2494384865" target="_blank" rel="noreferrer" className="text-serika-main hover:text-serika-main-hover transition-colors">Good and Again Buttons Highlighter</a>.</li>
                  <li><a href="https://ankiweb.net/shared/info/1771074083" target="_blank" rel="noreferrer" className="text-serika-main hover:text-serika-main-hover transition-colors">Heatmap / streak add-on</a> to make consistency easier.</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-5">
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-serika-text">Basic grammar</h2>
            <p className="text-lg leading-relaxed text-serika-sub">
              There are many ways to learn grammar, and it is very easy to get overwhelmed by options. The trick is not
              to gather the perfect stack, but to choose a reasonable one and stay with it.
            </p>
            <div className="grid gap-4 sm:gap-5">
              <Card className="rounded-xl bg-serika-sub-alt border border-serika-sub-alt shadow-soft">
                <CardContent className="p-5 space-y-3">
                  <h3 className="font-serif text-xl font-black text-serika-text">Free resources</h3>
                  <ul className="list-disc pl-6 space-y-2 text-serika-sub">
                    <li>Miss Vicky, my personal favorite.</li>
                    <li>GO! Billy.</li>
                    <li>Talk To Me In Korean.</li>
                    <li>Korean Hailey.</li>
                    <li>Just Learn Korean.</li>
                    <li>Prof. Yoon’s Korean Language Class.</li>
                  </ul>
                  <p className="text-serika-sub">
                    Best overall free website:
                    <a href="https://www.howtostudykorean.com/" target="_blank" rel="noreferrer" className="ml-2 text-serika-main hover:text-serika-main-hover transition-colors">
                      How to Study Korean
                    </a>
                  </p>
                  <p className="text-serika-sub">
                    If you like textbooks, King Sejong University is probably the main free option, but the built-in
                    reader is rough.
                  </p>
                  <p className="text-serika-sub">
                    There is also the Coursera course <a href="https://www.coursera.org/learn/learn-korean" target="_blank" rel="noreferrer" className="text-serika-main hover:text-serika-main-hover transition-colors">First Step Korean</a>, but it only covers basic material.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-xl bg-serika-sub-alt border border-serika-sub-alt shadow-soft">
                <CardContent className="p-5 space-y-3">
                  <h3 className="font-serif text-xl font-black text-serika-text">Paid resources</h3>
                  <ul className="list-disc pl-6 space-y-2 text-serika-sub">
                    <li>
                      <strong className="text-serika-text">Korean Grammar In Use</strong>, my favorite, dense and practical, still one of the best things you can buy.
                    </li>
                    <li>
                      <strong className="text-serika-text">Vitamin Korean</strong>, especially good for beginners and nicely structured.
                    </li>
                    <li>
                      <strong className="text-serika-text">Talk To Me In Korean</strong>, easy to use, but I personally do not recommend the core series after going through several books.
                    </li>
                    <li>
                      <strong className="text-serika-text">Yonsei University books</strong>, often praised, but too hard for true beginners.
                    </li>
                  </ul>
                  <p className="text-serika-sub">
                    Small update from the original article: I still think Korean Grammar In Use is among the best books
                    money can buy, and you can legally access the series through the <a href="https://www.inkah.com/" target="_blank" rel="noreferrer" className="text-serika-main hover:text-serika-main-hover transition-colors">inkah</a> app.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-serika-text">Vocabulary</h2>
            <h3 className="font-serif text-xl sm:text-2xl font-black text-serika-text">Dictionary</h3>
            <p className="text-lg leading-relaxed text-serika-sub">
              For Korean translation and lookup, I mostly rely on Naver tools.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg text-serika-sub">
              <li><a href="https://papago.naver.com/" target="_blank" rel="noreferrer" className="text-serika-main hover:text-serika-main-hover transition-colors">Naver Papago</a>, my most-used daily tool.</li>
              <li><a href="https://korean.dict.naver.com/koendict" target="_blank" rel="noreferrer" className="text-serika-main hover:text-serika-main-hover transition-colors">Naver Korean-English Dictionary</a>, richer and more detailed.</li>
              <li><a href="https://learn.dict.naver.com/wordbook/koendict" target="_blank" rel="noreferrer" className="text-serika-main hover:text-serika-main-hover transition-colors">Naver Korean-English Workbook</a>, useful if you want something closer to built-in flashcards.</li>
            </ul>
            <p className="text-lg leading-relaxed text-serika-sub">
              Naver Dictionary can feel overwhelming at first, so learning how to use it is worth the effort.
            </p>
            <p>
              <a href="https://www.youtube.com/watch?v=gjDczp1Bc_w" target="_blank" rel="noreferrer" className="text-serika-main hover:text-serika-main-hover transition-colors text-lg">
                Learn how to use Naver Dictionary
              </a>
            </p>

            <h3 className="font-serif text-xl sm:text-2xl font-black text-serika-text pt-4">Ready-to-use Anki decks</h3>
            <p className="text-lg leading-relaxed text-serika-sub">
              There are many premade Korean decks on AnkiWeb, but a few stand out.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg text-serika-sub">
              <li><a href="https://ankiweb.net/shared/info/3614346923" target="_blank" rel="noreferrer" className="text-serika-main hover:text-serika-main-hover transition-colors">Korean Grammar Sentences by Evita</a></li>
              <li><a href="https://ankiweb.net/shared/info/186997375" target="_blank" rel="noreferrer" className="text-serika-main hover:text-serika-main-hover transition-colors">Naver’s Today Korean</a></li>
              <li><a href="https://ankiweb.net/shared/info/1551455917" target="_blank" rel="noreferrer" className="text-serika-main hover:text-serika-main-hover transition-colors">TTMIK’s First 500 Korean Words</a></li>
              <li><a href="https://ankiweb.net/shared/info/380675474" target="_blank" rel="noreferrer" className="text-serika-main hover:text-serika-main-hover transition-colors">Korean Sentences (Beginner: 1 to 1000)</a></li>
              <li><a href="https://ankiweb.net/shared/info/374470252" target="_blank" rel="noreferrer" className="text-serika-main hover:text-serika-main-hover transition-colors">Korean Sentences (Intermediate: 1001 to 3000)</a></li>
              <li><a href="https://ankiweb.net/shared/info/893484891" target="_blank" rel="noreferrer" className="text-serika-main hover:text-serika-main-hover transition-colors">Korean Sentences (Advanced: 3001 to 7000)</a></li>
            </ul>
            <p className="text-lg leading-relaxed text-serika-sub">
              I also mentioned in the original article that I found another interesting deck through Reddit, but after
              trying it I would still tell beginners to focus on Evita’s decks first.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-serika-text">Anki decks that require extra work</h2>
            <p className="text-lg leading-relaxed text-serika-sub">
              Some strong decks need manual setup. One example is Korean Vocabulary by Evita, which has around 6500
              cards but only partial audio coverage. I still recommend it, but you will want to add more audio through
              HyperTTS and Naver voices.
            </p>
            <p>
              <a href="https://ankiweb.net/shared/info/4066961604" target="_blank" rel="noreferrer" className="text-serika-main hover:text-serika-main-hover transition-colors text-lg">
                Korean Vocabulary by Evita
              </a>
            </p>
            <p className="text-lg leading-relaxed text-serika-sub">
              The workflow is simple in principle: install the add-on, relaunch Anki, enable free services, import the
              deck, create a preset that targets the audio field, choose NaverPapago under Korean voices, then bulk-add
              audio to the deck. It can take a few hours, but you can interrupt and resume later.
            </p>
            <div className="grid gap-5">
              {ankiSetupImages.map((image) => (
                <ArticleImage
                  key={image.name}
                  name={image.name}
                  maxWidth={image.maxWidth}
                  alt="Korean Anki workflow screenshot"
                />
              ))}
            </div>
            <p className="text-lg leading-relaxed text-serika-sub">
              Another option is <a href="https://ankiweb.net/shared/info/1470974730" target="_blank" rel="noreferrer" className="text-serika-main hover:text-serika-main-hover transition-colors">A Frequency Dictionary of Korean</a>, though I would delete the first few cards because they are dominated by common verb endings.
            </p>
            <p className="text-lg leading-relaxed text-serika-sub">
              You can also create your own decks with <a href="https://ankiweb.net/shared/info/1336389630" target="_blank" rel="noreferrer" className="text-serika-main hover:text-serika-main-hover transition-colors">Korean Support</a>, especially if you study through How to Study Korean or Vitamin Korean.
            </p>
            <p className="text-lg leading-relaxed text-serika-sub">
              One of the most important lines from the original article still stands: start with 10 new cards a day or
              you will probably fail under review load later.
            </p>

            <h3 className="font-serif text-xl sm:text-2xl font-black text-serika-text pt-4">Anki tips</h3>
            <p className="text-lg leading-relaxed text-serika-sub">
              On desktop Anki, it is easy to record your own voice with <code>shift+v</code>, then replay it with
              <code>v</code> and compare it with card audio using <code>r</code>. I found this surprisingly useful for
              pronunciation work, and you can do similar recording on mobile too.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-serika-text">Active immersion</h2>
            <p className="text-lg leading-relaxed text-serika-sub">
              Once you have enough basic structure and some vocabulary, move into active immersion. Read Stage 2A of the
              roadmap and come back with that mindset in place.
            </p>
            <blockquote className="border-l-4 border-serika-main pl-4 text-serika-sub italic">
              When searching for TL content, start with the same places you already consume native-language content.
            </blockquote>
            <p className="text-lg leading-relaxed text-serika-sub">
              This approach worked for me long before Korean, when I was learning English through PC building and tech
              reviews. Once you start following content that matches your real interests, vocabulary becomes more
              coherent and comprehension grows faster.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-serika-text">Intensive immersion</h2>
            <p className="text-lg leading-relaxed text-serika-sub">
              In my case, photography and photo/video gear reviews became a strong domain for Korean. Review content is
              often highly structured, heavily scripted, and full of Konglish, which lowers the domain difficulty.
            </p>
            <p className="text-lg leading-relaxed text-serika-sub">
              This makes gear reviews great for the 10x10 method. Find around ten videos, each around ten minutes long,
              then rewatch them daily until they become highly comprehensible. Build a dedicated Anki deck from those
              videos and mine only the words you genuinely need.
            </p>
            <p className="text-lg leading-relaxed text-serika-sub">
              Another small trick: put stickers on objects around the house in your target language.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-serika-text">Immersion guide</h2>
            <p className="text-lg leading-relaxed text-serika-sub">
              Here are some of the channels and resources I highlighted in the original article.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg text-serika-sub">
              <li><a href="https://www.youtube.com/watch?v=hHV-XzfsEbo" target="_blank" rel="noreferrer" className="text-serika-main hover:text-serika-main-hover transition-colors">20 Best Korean TV Series to Learn Korean</a></li>
              <li><a href="https://www.youtube.com/@user-in2xs8qn1z/videos" target="_blank" rel="noreferrer" className="text-serika-main hover:text-serika-main-hover transition-colors">꿀잼한국어</a></li>
              <li><a href="https://www.youtube.com/@NinanoKorean/videos" target="_blank" rel="noreferrer" className="text-serika-main hover:text-serika-main-hover transition-colors">니나노 한국어 NINANO Korean Shadowing</a></li>
              <li><a href="https://www.youtube.com/watch?v=JJjs1ZPcQeI&list=PLj93wnCky8tfHZ0gGaZ38b4PyMxAFp-pv" target="_blank" rel="noreferrer" className="text-serika-main hover:text-serika-main-hover transition-colors">Korean Podcast with Vlog for Beginners</a></li>
              <li><a href="https://www.youtube.com/@user-qm6yi8qj9f" target="_blank" rel="noreferrer" className="text-serika-main hover:text-serika-main-hover transition-colors">몽이키즈</a></li>
            </ul>
            <p className="text-lg leading-relaxed text-serika-sub">
              Besides that, look for web dramas on YouTube with Korean subtitles. They are free, accessible, and often
              a much easier entry point than long-form television.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-serika-text">Typing practice for reading and writing</h2>
            <p className="text-lg leading-relaxed text-serika-sub">
              I strongly recommend practicing reading and writing at the same time for just five to ten minutes a day.
              Typing simulators are perfect for this. Set up the 2-Set Korean keyboard layout first, then use tools
              like Monkeytype and TypeRacer.
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-lg text-serika-sub">
              <li>
                <a href="https://monkeytype.com/" target="_blank" rel="noreferrer" className="text-serika-main hover:text-serika-main-hover transition-colors">
                  Monkeytype
                </a>
                , good for random words and keyboard familiarity.
              </li>
              <li>
                <a href="https://play.typeracer.com/" target="_blank" rel="noreferrer" className="text-serika-main hover:text-serika-main-hover transition-colors">
                  TypeRacer
                </a>
                , better later because it uses real sentences.
              </li>
            </ol>
            <div className="grid gap-5">
              {typingImages.map((image) => (
                <ArticleImage
                  key={image.name}
                  name={image.name}
                  maxWidth={image.maxWidth}
                  alt="Korean typing practice screenshot"
                />
              ))}
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-serika-text">Passive listening</h2>
            <p className="text-lg leading-relaxed text-serika-sub">
              I do not personally rely much on passive listening because I can usually afford one or two focused hours a
              day. But if passive listening helps you stay close to the language, use it.
            </p>
            <p className="text-lg leading-relaxed text-serika-sub">
              For passive listening, I recommended the Talk To Me In Korean podcast:
            </p>
            <p>
              <a href="https://open.spotify.com/show/7GSPUeJqZ0SvykgC7LdA1F?si=4d2fb4e554ee4914" target="_blank" rel="noreferrer" className="text-serika-main hover:text-serika-main-hover transition-colors text-lg">
                Talk To Me In Korean on Spotify
              </a>
            </p>
            <p className="text-lg leading-relaxed text-serika-sub">
              And if you are not into K-pop, try Jaurim. They are one of my personal favorites.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-serika-text">Conclusion</h2>
            <p className="text-lg leading-relaxed text-serika-sub">
              When I wrote the original article, I was still in the second stage of the journey, so I intentionally kept
              the advice focused on what I had actually tested. That is still the right way to think about this topic.
            </p>
            <p className="text-lg leading-relaxed text-serika-sub">
              If I summarize everything as simply as possible, it goes like this: learn the Korean alphabet, record your
              pronunciation and compare it against native speech, build a manageable basic grammar foundation, set up a
              system to gain your first 1500 words, then move into active immersion once you have enough vocabulary to
              hold onto meaning. Around 800 to 900 words is often where that transition starts becoming realistic.
            </p>
            <p className="text-lg leading-relaxed text-serika-sub">
              One of my favorite mindset tricks from the original article still applies too: try to treat consuming the
              same category of content in your native language as wasted opportunity. If you were going to watch that
              kind of content anyway, make it useful.
            </p>
            <Card className="rounded-xl bg-serika-sub-alt border border-serika-sub-alt shadow-soft">
              <CardContent className="p-5 text-serika-sub">
                If you spot a mistake or have a better resource to add, I’d be happy to revisit this article later and
                keep improving it.
              </CardContent>
            </Card>
          </section>
        </div>

        <div className="mt-12 sm:mt-16 mb-8 sm:mb-12">
          <div className="flex items-center space-x-2 mb-4">
            <Tag className="h-4 w-4 sm:h-5 sm:w-5 text-serika-main" />
            <span className="font-bold text-serika-text">Tags</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 rounded-md bg-serika-sub-alt text-serika-sub text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <Card className="p-6 sm:p-8 rounded-xl bg-serika-sub-alt border border-serika-sub-alt shadow-soft">
          <CardContent className="p-0 text-center">
            <h3 className="font-serif text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-serika-text">Enjoyed this article?</h3>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 text-serika-sub">
              If you want to reach me, use the public links on my contact page.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/contact">
                <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-serika-main hover:bg-serika-main-hover text-black transition-all duration-200 shadow-soft">
                  Contact me
                </button>
              </Link>
              <Link href="/blog">
                <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-serika-bg hover:bg-serika-sub text-serika-text transition-all duration-200 shadow-soft">
                  Back to blog
                </button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </article>

      <Footer />
    </div>
  )
}
