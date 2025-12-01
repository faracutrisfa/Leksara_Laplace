import BlockHeading from "../../components/docs/BlockHeading";
import DocList from "../../components/docs/DocList";
import SectionHeading from "../../components/docs/SectionHeading";
import UseCase from "../../components/docs/UseCase";

const introTextClass =
  "sm:ml-14 mt-3 text-[13px] sm:text-[15px] leading-relaxed text-neutral-4 font-medium";

export default function ReviewCleaner() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
        Leksara Modules
      </h1>

      {/* 02 — ReviewCleaner --------------------------------------------------- */}
      <section className="mt-10">
        <SectionHeading index="02" title="ReviewCleaner" />

        <div className={introTextClass}>
          <p>
            Clean and standardize text, expanding contractions, normalizing
            slang and words, shortening elongations, replacing acronyms, and
            converting ratings—making raw text consistent and ready for NLP or
            analysis. Functions: replace_rating, shorten_elongation,
            replace_acronyms, normalize_slangs, expand_contraction,
            word_normalization
          </p>
        </div>

        {/* 01 — remove_tags --------------------------------------------------- */}
        <div className="mt-6 space-y-6">
          <BlockHeading
            index="01"
            title="remove_tags"
            signature="replace_string(text: str)-> str"
            description="Removes HTML tags and converts encoded HTML entities (like &nbsp;, &amp;, etc.) back to their readable characters. Also replaces non-breaking spaces (\u00A0) with normal spaces for consistency."
          />

          <div className="space-y-6 sm:ml-14">
            <section>
              <h3 className="text-lg font-semibold text-primary-600">
                Parameters
              </h3>
              <DocList
                variant="params"
                items={[
                  {
                    name: "text",
                    type: "str",
                    description: "Raw text that may contain HTML.",
                  },
                ]}
              />
            </section>

            <section>
              <h3 className="text-lg font-semibold text-primary-600">Return</h3>
              <DocList
                variant="params"
                items={[
                  {
                    name: "str",
                    description:
                      "Text without markup and with decoded entities.",
                  },
                ]}
              />
            </section>

            <UseCase title="Use Case">
              {`from leksara.function import remove_tags

text = "<p>Halo &amp; selamat&nbsp;datang</p>"
result = remove_tags(text)
print(result)

>>> "Halo & selamat datang"
`}
            </UseCase>

            <div>
              <h3 className="text-lg font-semibold text-primary-600">Source</h3>
              <a href="#" className="text-primary-600 underline">
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* 02 — case_normal --------------------------------------------------- */}
        <div className="mt-6 space-y-6">
          <BlockHeading
            index="02"
            title="case_normal"
            signature="case_normal (text: str)-> str:"
            description="Normalize text to lowercase using str.casefold() for robust Unicode handling."
          />

          <div className="space-y-6 sm:ml-14">
            <section>
              <h3 className="text-lg font-semibold text-primary-600">
                Parameters
              </h3>
              <DocList
                variant="params"
                items={[
                  {
                    name: "text",
                    type: "str",
                    description: "Raw text",
                  },
                ]}
              />
            </section>

            <section>
              <h3 className="text-lg font-semibold text-primary-600">Return</h3>
              <DocList
                variant="params"
                items={[
                  {
                    name: "str",
                    description: "Lowercased text",
                  },
                ]}
              />
            </section>

            <UseCase title="Use Case">
              {`from leksara.function import case_normal

text = "Produk BAGUS!!!"
result = case_normal(text)

print(result)

>>> "produk bagus!!!"
`}
            </UseCase>

            <div>
              <h3 className="text-lg font-semibold text-primary-600">Source</h3>
              <a href="#" className="text-primary-600 underline">
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* 03 — remove_stopwords --------------------------------------------------- */}
        <div className="mt-6 space-y-6">
          <BlockHeading
            index="03"
            title="remove_stopwords"
            signature="remove_stopwords (text: str) → str"
            description="Remove Indonesian stopwords while preserving original punctuation and spacing layout. Stopwords are loaded from bundled resources and cached."
          />

          <div className="space-y-6 sm:ml-14">
            <section>
              <h3 className="text-lg font-semibold text-primary-600">
                Parameters
              </h3>
              <DocList
                variant="params"
                items={[
                  {
                    name: "text",
                    type: "str",
                    description: "Raw text that may contain stopwords.",
                  },
                ]}
              />
            </section>

            <section>
              <h3 className="text-lg font-semibold text-primary-600">Return</h3>
              <DocList
                variant="params"
                items={[
                  {
                    name: "str",
                    description:
                      "Text with stopwords removed, punctuation/spaces are kept as in the input.",
                  },
                ]}
              />
            </section>

            <UseCase title="Use Case">
              {`from leksara.function import remove_stopwords

text = "produk ini bagus dan cepat"
result = remove_stopwords(text)
print(result)

>>> "produk  bagus  cepat"`}
            </UseCase>

            <div>
              <h3 className="text-lg font-semibold text-primary-600">Source</h3>
              <a href="#" className="text-primary-600 underline">
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* 04 — remove_whitespace --------------------------------------------------- */}
        <div className="mt-6 space-y-6">
          <BlockHeading
            index="04"
            title="remove_whitespace"
            signature="remove_whitespace(text: str) → str"
            description="Trim ends and collapse runs of whitespace to a single space."
          />

          <div className="space-y-6 sm:ml-14">
            <section>
              <h3 className="text-lg font-semibold text-primary-600">
                Parameters
              </h3>
              <DocList
                variant="params"
                items={[
                  {
                    name: "text",
                    type: "str",
                    description: "Raw text that may contain whitespaces.",
                  },
                ]}
              />
            </section>

            <section>
              <h3 className="text-lg font-semibold text-primary-600">Return</h3>
              <DocList
                variant="params"
                items={[
                  {
                    name: "str",
                    description:
                      "Text without markup and with decoded entities.",
                  },
                ]}
              />
            </section>

            <UseCase title="Use Case">
              {`from leksara.function import remove_whitespace
text = "  a   b\n\t c  "
result = remove_whitespace(text)
print(result)

>>> "a b c"
`}
            </UseCase>

            <div>
              <h3 className="text-lg font-semibold text-primary-600">Source</h3>
              <a href="#" className="text-primary-600 underline">
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* 05 — remove_digits --------------------------------------------------- */}
        <div className="mt-6 space-y-6">
          <BlockHeading
            index="05"
            title="remove_digits"
            signature="remove_digits (text: str) → str"
            description="remove all digits from the text"
          />

          <div className="space-y-6 sm:ml-14">
            <section>
              <h3 className="text-lg font-semibold text-primary-600">
                Parameters
              </h3>
              <DocList
                variant="params"
                items={[
                  {
                    name: "text",
                    type: "str",
                    description: " raw text that may contain digits",
                  },
                ]}
              />
            </section>

            <section>
              <h3 className="text-lg font-semibold text-primary-600">Return</h3>
              <DocList
                variant="params"
                items={[
                  {
                    name: "str",
                    description: "Text without digits.",
                  },
                ]}
              />
            </section>

            <section>
              <h3 className="text-lg font-semibold text-primary-600">Raises</h3>
              <DocList
                variant="params"
                items={[
                  {
                    name: "",
                    type: "",
                    description: "TypeError if text is not a string",
                  },
                ]}
              />
            </section>

            <UseCase title="Use Case">
              {`from leksara.function import remove_digits

text = "abc123def45"
result = remove_digits(text)
print(result)

>>> "abcdef"`}
            </UseCase>

            <div>
              <h3 className="text-lg font-semibold text-primary-600">Source</h3>
              <a href="#" className="text-primary-600 underline">
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* 06 — remove_puntuation --------------------------------------------------- */}
        <div className="mt-6 space-y-6">
          <BlockHeading
            index="06"
            title="remove_puntuation"
            signature="remove_punctuation(text: str, exclude: str | None = None) -> str"
            description="Remove ASCII punctuation plus common Unicode punctuation (e.g., “ ” ‘ ’ — …). Use exclude to keep certain characters."
          />

          <div className="space-y-6 sm:ml-14">
            <section>
              <h3 className="text-lg font-semibold text-primary-600">
                Parameters
              </h3>

              <DocList
                variant="params"
                items={[
                  {
                    name: "text",
                    type: "str",
                    description: "The input text.",
                  },
                  {
                    name: "",
                    type: "",
                    description:
                      "exclude (str, optional): Characters to keep (e.g., ()-/).",
                  },
                ]}
              />
            </section>

            <section>
              <h3 className="text-lg font-semibold text-primary-600">Return</h3>
              <DocList
                variant="params"
                items={[
                  {
                    name: "str",
                    description:
                      "Text without punctuation (except excluded ones).",
                  },
                ]}
              />
            </section>

            <UseCase title="Use Case">{`from leksara.function import remove_punctuation

text1 = "halo!!! keren—bagus…"
result1 = remove_punctuation(text1)
print("Result:", result1)

text2 = "halo!?"
result2 = remove_punctuation(text2, exclude="?")
print("Result with exclude:", result2)

>>> “Result: halo kerenbagus”
>>> “Result with exclude: halo?”
`}</UseCase>

            <div>
              <h3 className="text-lg font-semibold text-primary-600">Source</h3>
              <a href="#" className="text-primary-600 underline">
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* 07 — replace_url --------------------------------------------------- */}
        <div className="mt-6 space-y-6">
          <BlockHeading
            index="07"
            title="replace_url"
            signature='remove_emoji(text: str, mode: str = "remove") -> str'
            description="Removes or replaces emojis using the bundled emoji_dictionary.json"
          />

          <div className="space-y-6 sm:ml-14">
            <section>
              <h3 className="text-lg font-semibold text-primary-600">
                Parameters
              </h3>

              <DocList
                variant="params"
                items={[
                  {
                    name: "text",
                    type: "str",
                    description: "The input text text containing URLs..",
                  },
                  {
                    name: "",
                    type: "",
                    description:
                      'mode (str): "remove" to delete URLs, "replace" to substitute them with [URL].',
                  },
                ]}
              />
            </section>

            <section>
              <h3 className="text-lg font-semibold text-primary-600">Return</h3>
              <DocList
                variant="params"
                items={[
                  {
                    name: "str",
                    description: " Text with URLs removed or replaced.",
                  },
                ]}
              />
            </section>

            <UseCase title="Use Case">{`from leksara.function import replace_url

text1 = "Kunjungi https://shop.id/path?x=1 dan juga www.toko.co.id/page"
result1 = replace_url(text1, mode="remove")
print("Result (remove):", result1)

text2 = "Kunjungi https://shop.id/path?x=1 dan juga www.toko.co.id/page"
result2 = replace_url(text2, mode="replace")
print("Result (replace):", result2)

>>> "Result (remove): Kunjungi  dan juga "
>>> "Result (replace): Kunjungi [URL] dan juga [URL]"`}</UseCase>

            <div>
              <h3 className="text-lg font-semibold text-primary-600">Source</h3>
              <a href="#" className="text-primary-600 underline">
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* 08 — remove_emoji --------------------------------------------------- */}
        <div className="mt-6 space-y-6">
          <BlockHeading
            index="08"
            title="remove_emoji"
            signature='remove_emoji(text: str, mode: str = "remove") -> str'
            description="Removes or replaces emojis using the bundled emoji_dictionary.json"
          />

          <div className="space-y-6 sm:ml-14">
            <section>
              <h3 className="text-lg font-semibold text-primary-600">
                Parameters
              </h3>

              <DocList
                variant="params"
                items={[
                  {
                    name: "text",
                    type: "str",
                    description: "The input text containing emojis..",
                  },
                  {
                    name: "",
                    type: "",
                    description:
                      'mode (str): "remove" to delete emojis, "replace" to substitute them with mapped text.',
                  },
                ]}
              />
            </section>

            <section>
              <h3 className="text-lg font-semibold text-primary-600">Return</h3>
              <DocList
                variant="params"
                items={[
                  {
                    name: "str",
                    description: "Text with emojis removed or replaced.",
                  },
                ]}
              />
            </section>

            <UseCase title="Use Case">{`from leksara.function import remove_emoji

text1 = "Mantap 👍😂"
result1 = remove_emoji(text1, mode="remove")
print("Result (remove):", result1)

text2 = "Mantap 👍😂"
result2 = remove_emoji(text2, mode="replace")
print("Result (replace):", result2)

>>> "Result (remove): Mantap"
>>> "Result (replace): Mantap  bagus  ketawa banget / lucu"`}</UseCase>

            <div>
              <h3 className="text-lg font-semibold text-primary-600">Source</h3>
              <a href="#" className="text-primary-600 underline">
                Source Code
              </a>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
