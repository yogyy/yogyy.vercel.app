import React from 'react';
import Image from 'next/image';
import { m } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import { notFound } from 'next/navigation';
import { HiLink, HiUser } from 'react-icons/hi';
import { GetStaticPaths, NextPage } from 'next';
import { RootLayout } from '@/components/layouts';
import { easeIn } from '@/constants/framer-easing';
import { Mdx } from '@/components/mdx/mdx-component';
import CustomLink from '@/components/links/custom-link';
import { allProjects, Project } from 'contentlayer/generated';
import { getTableOfContents, TableOfContents } from '@/lib/toc';
import { DashboardTableOfContents } from '@/components/mdx/toc';

export const getStaticPaths: GetStaticPaths = () => {
  const paths = allProjects.map(proj => `/${proj._raw.flattenedPath}`);
  return { paths, fallback: false };
};

export const getStaticProps = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const proj = allProjects.find(proj => proj._raw.flattenedPath === `projects/${slug}`);

  if (!proj) notFound();

  return {
    props: {
      proj,
    },
  };
};

const ProjectsPage: NextPage<{ proj: Project }> = ({ proj }) => {
  const [toc, setToc] = React.useState<TableOfContents>();

  React.useEffect(() => {
    const fetchToc = async () => {
      try {
        const tocData = await getTableOfContents(proj.body.raw);
        setToc(tocData);
      } catch (error) {
        console.error('Error fetching table of contents:', error);
      }
    };

    fetchToc();
  }, [proj.body.raw]);

  return (
    <RootLayout title={`${proj.title} · Yogyy`} desc={proj.description}>
      <m.section
        className="layout"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ easings: easeIn, duration: 0.6, delay: 0.1 }}
      >
        <Image
          src={proj.banner!}
          alt={`Project ${proj.description}`}
          width={1445}
          height={792}
          priority
        />
        <h1 className="mt-4 text-accent/90">{proj.title}</h1>
        <p className="mt-2 text-sm text-text">{proj.description}</p>
        <div className="mt-2 flex flex-wrap items-center justify-start gap-3 text-sm font-medium text-text">
          <div className="flex items-center gap-1.5">
            <HiUser className="text-lg" />
            <p className="flex items-center justify-start gap-2 text-sm transition-colors duration-300">
              {proj.category}
            </p>
          </div>
          <span>-</span>
          <div className="inline-flex items-center gap-1.5">
            <SiGithub className="text-lg" />
            <CustomLink href={proj.github!} className="">
              Repository
            </CustomLink>
          </div>
          <span>-</span>
          <div className="inline-flex items-center gap-1.5">
            <HiLink className="text-lg" />
            <CustomLink href={proj.url!} className="">
              Open Live Site
            </CustomLink>
          </div>
          <div className="ml-auto flex flex-wrap gap-1">
            {proj.techs!.split(', ').map(tech => (
              <code
                className="pointer-events-none relative rounded bg-secondary/30 p-0.5 px-[0.3rem] py-[0.2rem] font-mono text-xs sm:text-sm"
                key={tech}
              >
                {tech.toLowerCase()}
              </code>
            ))}
          </div>
        </div>
        <hr className="mt-1 border" />
        <div className="py-6 lg:grid lg:grid-cols-[auto,250px] lg:gap-8">
          <article className="h-full w-full min-w-0 max-w-5xl marker:text-primary prose-headings:text-accent/90 prose-h2:text-2xl">
            <Mdx code={proj.body.code} />
            <div className="hidden h-60 bg-transparent lg:block" />
          </article>
          <aside className="hidden h-full text-sm lg:block">
            <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
              {toc && <DashboardTableOfContents toc={toc} />}
            </div>
          </aside>
        </div>
      </m.section>
    </RootLayout>
  );
};

export default ProjectsPage;
