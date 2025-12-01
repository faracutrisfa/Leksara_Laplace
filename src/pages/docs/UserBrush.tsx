import SectionHeading from "../../components/docs/SectionHeading";
import BlockHeading from "../../components/docs/BlockHeading";
import DocList from "../../components/docs/DocList";
import UseCase from "../../components/docs/UseCase";

const introTextClass =
  "sm:ml-14 mt-3 text-[13px] sm:text-[15px] leading-relaxed text-neutral-4 font-medium";

export default function UserBrush() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
        Leksara Modules
      </h1>

      {/* 04 — UserBrush --------------------------------------------------- */}
      <section className="mt-10">
        <SectionHeading index="04" title="UserBrush" />

        <div className={introTextClass}>
          <p>
            Utilities for PII-aware cleaning: mask or remove phone numbers,
            emails, addresses, and national IDs (NIK). All functions support
            ‘mode="remove" (delete)’ or ‘mode="replace"’ (mask with a token).
            Patterns and dictionaries are loaded from bundled resources.
            Functions: replace_phone, replace_email, replace_address,
            replace_id.
          </p>
        </div>

        {/* 01 — remove_tags --------------------------------------------------- */}
        <div className="mt-6 space-y-6">
          <BlockHeading
            index="01"
            title="remove_tags"
            signature=""
            description=""
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
            signature=""
            description=""
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
            signature=""
            description=""
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
            signature=""
            description=""
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
      </section>
    </article>
  );
}
