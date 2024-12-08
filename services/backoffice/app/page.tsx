import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Integration&nbsp;</span>
        <span className={title({ color: "violet" })}>Stack&nbsp;</span>
        <div className={subtitle({ class: "mt-4" })}>
          PoC to implement Enterprise Integration Patterns with a set of components such as: 
          Apache APISIX, Keycloak, Apache Camel and others.
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href="http://apisix:9080/cms/"
        >
          CMS
        </Link>
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href="http://keycloak:5080/"
        >
          Keycloack
        </Link>
      </div>
    </section>
  );
}
