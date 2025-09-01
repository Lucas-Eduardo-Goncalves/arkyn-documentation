import { PageTocContainer, PageTocList } from "./styles";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

type PageTocProps = {
  childNodes?: NodeListOf<ChildNode>;
};

type Heading = {
  id: string;
  text: string;
  level: number;
  tagName: string;
};

function PageToc({ childNodes }: PageTocProps) {
  const location = useLocation().pathname;
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const extractHeadings = () => {
      const headingElements = document.querySelectorAll("h2, h3, h4, h5, h6");
      const headingsList: Heading[] = [];

      headingElements.forEach((heading) => {
        headingsList.push({
          id: heading.id,
          text: heading.textContent || "",
          level: parseInt(heading.tagName.charAt(1)),
          tagName: heading.tagName,
        });
      });

      setHeadings(headingsList);
    };

    extractHeadings();
  }, [location]);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  return (
    <PageTocContainer>
      <strong>On this page</strong>

      <PageTocList>
        {headings.map((heading, index) => (
          <li
            key={index}
            className={`${heading.tagName.toLowerCase()} ${activeId === heading.id ? "active" : ""}`}
          >
            <Link
              spy={true}
              smooth={true}
              offset={-(60 + 24)}
              duration={500}
              to={heading.id}
            >
              {heading.text}
            </Link>
          </li>
        ))}
      </PageTocList>
    </PageTocContainer>
  );
}

export { PageToc };
